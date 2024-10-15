# 作成メモ

## 必要なパッケージ

- **axios** 天気予報データを API から取得するため
- **Material-UI** UI を整えるため

## パッケージのインストール方法

1. ターミナルを開く
2. プロジェクトフォルダに移動する
3. 以下のコマンドを実行する

```
npm install axios
npm install @mui/material @emotion/react @emotion/styled

```

## 必要な API

- **OpenWeatherMap** 天気予報データを取得するため

## API の使い方

- アカウント作成、API key のダウンロード

1. [Pricing ページ](https://openweathermap.org/price)の Get API key をクリックし、アカウント作成(今回は Free を選択)
2. API key をダウンロードする

- ダウンロードした API key を.env ファイル(環境変数を管理する)に記載する
- _[注意]絶対に github に上げないこと ->コミットからの除外(後述)_

1. .env ファイル(ファイル名任意)をプロジェクトのルートディレクトリに作成する
2. ダウンロードした API key などを.env ファイルに記載する(ローカル環境でのみ使用する場合は.env.local というファイル名にする)

```
react_app_api_url = 'https://api.openweathermap.org/data/2.5'
REACT_APP_API_KEY = APIキーをここに貼り付け
REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'
```

- アクセス URL やパラメータは[ドキュメント](https://openweathermap.org/api)より確認する(今回は Current weather data を使用)

```
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
```

## .env ファイルについて

- API の URL やキーなど、環境変数を保存する。コードを分けて保存することで安全性を高める。
- Next.js では`NEXT_PUBLIC_`プレフィックスを変数名の冒頭につけるとクライアントサイドで利用できるようになる
- 他ファイルから環境変数を参照する場合、`process.env`を使用する(import 文は不要)

## .env ファイルのコミット除外

- .gitignore ファイルに記載のあるファイルは、git による追跡から除外されコミットやプッシュの対象外になる。
- 基本的に、どの人も共通なローカル環境での設定ファイルや、共有してはいけない環境変数(API key など)は.gitignore に記載する。
- _例 .env とファイルの最後に追加すると.env ファイルがコミットから除外される。_

## API データ

- **useEffect**を使用して、関数のマウント時にデータを取得する

### 取得の流れ

1. `fetch`メソッドを使い API からデータ取得
2. 正常なレスポンスが返った時の処理を`then()`に書く。受け取ったレスポンスを利用するために、response オブジェクトとなったレスポンスをまずは json 形式にする。
3. `then()`を続けて書くと、前の処理を行ったものを受け取り、それをさらに処理できる

4. レスポンスにエラーがあった場合の処理を`.catch()`に書く。一つ目の引数は表示メッセージ、二つ目の引数`error`はエラーの詳細。開発環境や console では表示推奨

_オブジェクトを直接小要素としてレンダリング(表示)しようとするとエラーが出るため、プロパティを個別に取り出して表示する。_

```
fetch('https://api.example.com/data')
  .then((response) => response.json()) // responseをJSONに変換
  .then((data) => {
    console.log(data); // ここでdataとしてJSONデータを扱う
  })
  .catch((error) => {
    console.error('Error:', error); // エラーハンドリング
  });
```

### データの処理-日本語への変換

- 以下のように辞書型の対応表を作成し、それを参照して表示する。

```
const translation = {
  "apple": "りんご",
  "orange":"みかん",
}

return (
   <p>くだもの: {translation[apple]}</p>
  );
```

### データの組み込み方

見た目を作ったコンポーネントに API から取得したデータを組み込むには、以下のように機能を分割してデータを呼び出す。

1. **サービス関数**

- API からデータを取得し、それを返すところまで。

```
export const fetchData = async () => {
  try {
    const response = await axios.get(sampleUrl);
    return response.data; // 取得したデータを返す
  } catch (error: any) {
    throw new Error("Error fetching weather data: " + error.message);
  }
};
```

2. **カスタムフック**

- サービス関数が返すデータやエラーなどの状況を state で管理して、それを返す関数を作る。複数の API からデータを取得する場合、一つの関数で全てのデータを取得できるようにまとめると良い。

```
export const useApiData = (city: string) => {
  const [sampleData, setSampleData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getSampleData = async () => {
      try {
        const data = await fetchData(city);
        setSampleData(data);
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {　
        setLoading(false);
      }
    };

    getSampleData();
  }, [city]);

  return { sampleData, loading, error };
};
```

3. **コンポーネント**
   コンポーネント内でカスタムフックを呼び出し、返り値を変数に入れ、コンポーネント内で使用する。

```
const DisplayCard = () => {
  const { data } = useApiData("Tokyo");
```

### 参考

- [React でアプリを作成しました](https://qiita.com/kanfutrooper/items/d2e309174931362b1f8a)
- [React + Tailwind CSS+API で天気アプリケーション作成](https://reffect.co.jp/react/react-tailwind)
- [OpenWeather 使ってみた](https://zenn.dev/daifukuninja/articles/5e696cd0a75ba8)
