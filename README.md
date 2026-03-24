# miyaitahp / vite-react-template

このリポジトリは、React + Vite + Cloudflare Workers で構成された、サービス紹介型のシングルページアプリ寄りな Web サイトです。  
実際の画面は React Router でページを切り替え、Cloudflare Workers 側は `/api/` の最小エンドポイントを持つ構成になっています。

このプロジェクトを今後運用しやすくするため、日本語の分析ドキュメントを追加しました。

## まず読むファイル

- [docs/project-analysis-ja.md](docs/project-analysis-ja.md)

このドキュメントは、IT に詳しくない管理者の方向けの更新ガイドです。以下をまとめています。

- プロジェクト全体の流れ
- 主要ファイルの役割
- 文言変更時の編集箇所
- 画像を追加する時の進め方
- 細かな仕様変更に対応する時の見方
- 現状の注意点

## 開発コマンド

```bash
npm install
npm run dev
```

ビルド確認:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## 現状の補足

複数のファイルで文字化けした日本語が含まれているため、文言修正や SEO 調整を進める前に、文字列の整理を一度行うのがおすすめです。詳細は [docs/project-analysis-ja.md](docs/project-analysis-ja.md) に記載しています。
