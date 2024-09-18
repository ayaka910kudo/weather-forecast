# 作成メモ
## 必要なパッケージ
 - **axios** 天気予報データをAPIから取得するため
 - **Material-UI** UIを整えるため
 

## パッケージのインストール方法
1. ターミナルを開く
2. プロジェクトフォルダに移動する
3. 以下のコマンドを実行する
```
npm install axios
npm install @mui/material @emotion/react @emotion/styled

```

 ## 必要なAPI
 - **OpenWeatherMap** 天気予報データを取得するため

## APIの使い方
- アカウント作成、API keyのダウンロード
1. [Pricingページ](https://openweathermap.org/price)のGet API keyをクリックし、アカウント作成(今回はFreeを選択)
2. API keyをダウンロードする

- ダウンロードしたAPI keyを.envファイル(環境変数を管理する)に記載する
1. .envファイル(ファイル名任意)をプロジェクトのルートディレクトリに作成する
2. ダウンロードしたAPI keyなどを.envファイルに記載する
```
react_app_api_url = 'https://api.openweathermap.org/data/2.5'
REACT_APP_API_KEY = APIキーをここに貼り付け
REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'
```


### 参考
 - [Reactでアプリを作成しました](https://qiita.com/kanfutrooper/items/d2e309174931362b1f8a)
 - [React + Tailwind CSS+APIで天気アプリケーション作成](https://reffect.co.jp/react/react-tailwind)
 - [OpenWeather使ってみた](https://zenn.dev/daifukuninja/articles/5e696cd0a75ba8)
