# ロクパ rogspa 公式ホームページ 実装計画

## 目的
初めて訪れるお客様に、ロクパ rogspa が「一皿で3種の味を楽しめるスパイスカレー店」であること、夜は特製ビリヤニを提供していること、ビリヤニ予約は当日17:00までに電話が必要であることを、スマホファーストで分かりやすく伝える。

## 技術構成
- Vite + React
- Tailwind CSS
- Lucide React（アイコン）
- Framer Motion（控えめなアニメーション）
- GitHub Pages 対応の `base` 設定と `deploy` スクリプト

## 実装ファイル
- `package.json`
- `vite.config.js`
- `index.html`
- `src/main.jsx`
- `src/App.jsx`
- `src/index.css`
- `src/components/Header.jsx`
- `src/components/HeroSection.jsx`
- `src/components/ConceptSection.jsx`
- `src/components/MenuSection.jsx`
- `src/components/AccessSection.jsx`
- `src/components/FixedCallButton.jsx`
- `src/components/Footer.jsx`
- `public/images/hero-curry.svg`
- `public/images/curry-plate.svg`
- `public/images/biryani.svg`
- `README.md`

## デザイン方針
- 白・生成りをベースに、ターメリックイエローとスパイスレッドをアクセントとして使用する。
- 暗く高級感に寄せすぎず、温かく親しみやすい店舗サイトにする。
- 写真差し替えを想定し、`public/images/` にシズル感のあるプレースホルダー画像を配置する。
- 余白は広めに取り、Instagram写真が映える落ち着いた画面密度にする。
- モバイルでは画面下部に「電話する」固定CTAを常時表示し、「ビリヤニ予約は17:00まで」を明記する。

## ページ構成
1. Header
   - ロゴ表記、ナビゲーション、電話CTA
   - スマホ時はハンバーガーメニュー
2. HeroSection
   - 店舗名、キャッチコピー、サブコピー、電話予約CTA、メニュー導線
3. ConceptSection
   - 厳選スパイスと3種カレーの体験価値を自然な文章で表現
4. MenuSection
   - 昼メニュー、夜メニュー
   - ビリヤニ17:00締切の注意を赤字・太字・カードで強調
5. AccessSection
   - 店舗情報、電話リンク、営業日、SNSリンク、Google Mapプレースホルダー
6. FixedCallButton
   - モバイル中心の固定電話CTA
7. Footer
   - 店舗名、SNSリンク、コピーライト

## 検証
- `npm install` で依存関係を導入する。
- `npm run build` を実行し、ビルドエラーがないことを確認する。
- 必要に応じてローカルで画面表示を確認し、スマホ幅でCTAやメニュー表示が崩れないよう調整する。
