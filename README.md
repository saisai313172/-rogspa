# ロクパ rogspa 公式ホームページ

兵庫県尼崎市・武庫之荘駅周辺のスパイスカレー店「ロクパ rogspa」のシングルページサイトです。

## 構成

- `index.html`: ページ構造とSEO設定
- `styles.css`: レイアウト、色、レスポンシブデザイン
- `script.js`: スマホ用ハンバーガーメニューの開閉
- `public/images/`: 差し替え用画像

## 開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

ビルド成果物は `dist/` に出力されます。

## GitHub Pages 公開手順

1. `package.json` の `homepage` を公開先に合わせて変更します。
   - 例: `https://YOUR_NAME.github.io/YOUR_REPOSITORY/`
2. GitHub Pages のプロジェクトページで公開する場合は、必要に応じて `vite.config.js` の `base` を設定します。
   - 現在は `GITHUB_PAGES_BASE` があればそれを使い、未指定時は相対パス `./` でビルドします。
   - 例: `GITHUB_PAGES_BASE=/YOUR_REPOSITORY/ npm run build`
3. `gh-pages` を使って公開します。

```bash
npm run deploy
```

4. GitHub リポジトリの `Settings` → `Pages` で、公開元が `gh-pages` ブランチになっていることを確認します。

## 画像差し替え

画像は `public/images/` に配置しています。実店舗写真に差し替える場合は、同じファイル名で置き換えるか、`index.html` 内の `img` の `src` を変更してください。
