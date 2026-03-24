# サイト更新ガイド

## この資料の目的

この資料は、IT に詳しくない管理者の方でも、

- このサイトがどんな作りになっているか
- 何を変えたい時に、どのファイルを見ればよいか
- 画像や文章の修正を依頼する時に、どこを伝えればよいか

が分かるようにまとめたものです。

難しい技術用語はできるだけ避けて、実務でよくある更新作業を中心に整理しています。

## まず最初に知っておきたいこと

このサイトは、主に次の 3 つでできています。

1. ページの内容
2. 見た目のデザイン
3. 会社情報や電話番号などの共通情報

更新作業の時は、ほとんどの場合このどれかを直せば対応できます。

## このサイトの見方

ざっくり言うと、次のように分かれています。

- トップページの内容
  - [Home.tsx](../src/react-app/pages/Home.tsx)
- 各サービスページの内容
  - [Glass.tsx](../src/react-app/pages/Glass.tsx)
  - [Amido.tsx](../src/react-app/pages/Amido.tsx)
  - [Sash.tsx](../src/react-app/pages/Sash.tsx)
  - [Yushitsu.tsx](../src/react-app/pages/Yushitsu.tsx)
  - [Kagi.tsx](../src/react-app/pages/Kagi.tsx)
  - [Shoji.tsx](../src/react-app/pages/Shoji.tsx)
  - [Bohan.tsx](../src/react-app/pages/Bohan.tsx)
- 電話番号や会社名などの共通情報
  - [constants.ts](../src/react-app/constants.ts)
- フッターや電話ボタンなど、全ページ共通の部品
  - [Footer.tsx](../src/react-app/components/Footer.tsx)
  - [TelButton.tsx](../src/react-app/components/TelButton.tsx)
  - [PhoneFixBar.tsx](../src/react-app/components/PhoneFixBar.tsx)
  - [EmergencyBar.tsx](../src/react-app/components/EmergencyBar.tsx)
- 見た目のデザイン
  - [global.css](../src/react-app/styles/global.css)
  - [layout.css](../src/react-app/styles/layout.css)
  - [components.css](../src/react-app/styles/components.css)
  - [home.css](../src/react-app/styles/home.css)

## 更新したい内容別の早見表

| 変更したい内容 | まず見るファイル | 補足 |
| --- | --- | --- |
| 電話番号を変えたい | [constants.ts](../src/react-app/constants.ts) | ただし一部は別ファイルにも直接書かれています |
| 会社名・住所・営業時間を変えたい | [constants.ts](../src/react-app/constants.ts) | SEO 用の情報も合わせて確認が必要です |
| トップページの文章を変えたい | [Home.tsx](../src/react-app/pages/Home.tsx) | 見出し、サービス紹介、口コミなどが入っています |
| 各サービスの料金を変えたい | 各 `pages` ファイル | 例: [Glass.tsx](../src/react-app/pages/Glass.tsx) |
| 共通の電話ボタン文言を変えたい | [TelButton.tsx](../src/react-app/components/TelButton.tsx) | 下部固定の電話バーは別ファイルです |
| フッターを変えたい | [Footer.tsx](../src/react-app/components/Footer.tsx) | 全ページに影響します |
| 画像を入れたい | [public](../public) または [assets](../src/react-app/assets) | 画像の置き場所です |
| 見た目の色や余白を変えたい | CSS ファイル | ページ全体か一部かでファイルが変わります |
| Google 検索に出る説明を変えたい | [MetaTags.tsx](../src/react-app/components/MetaTags.tsx) と各ページ | ページごとに設定しています |

## よくある更新を、順番に説明します

### 1. 電話番号を変えたい時

最初に見る場所:

- [constants.ts](../src/react-app/constants.ts)

ここには、電話番号や会社情報などの共通データがあります。

ただし、今のサイトでは情報が完全に 1 か所にまとまっていません。  
そのため、電話番号や会社情報を変更する時は、次のファイルも一緒に確認する必要があります。

- [Footer.tsx](../src/react-app/components/Footer.tsx)
- [LocalBusinessSchema.tsx](../src/react-app/components/LocalBusinessSchema.tsx)
- [MetaTags.tsx](../src/react-app/components/MetaTags.tsx)
- [index.html](../index.html)

管理者目線では、

- 画面に出る電話番号
- 検索対策用の電話番号
- フッター内の電話番号

が同じになっているか確認するのが大事です。

### 2. トップページの文章を変えたい時

見る場所:

- [Home.tsx](../src/react-app/pages/Home.tsx)

ここに入っている内容:

- 画面上部のキャッチコピー
- サービス紹介
- 強みの説明
- お客様の声

つまり、トップページの文章修正は、まずこのファイルを見れば大きく外しません。

見た目まで変えたい場合は、次も確認します。

- [home.css](../src/react-app/styles/home.css)
- [layout.css](../src/react-app/styles/layout.css)

### 3. 各サービスページの料金や説明を変えたい時

サービスごとにファイルが分かれています。

- ガラス関連: [Glass.tsx](../src/react-app/pages/Glass.tsx)
- 網戸関連: [Amido.tsx](../src/react-app/pages/Amido.tsx)
- サッシ関連: [Sash.tsx](../src/react-app/pages/Sash.tsx)
- 浴室関連: [Yushitsu.tsx](../src/react-app/pages/Yushitsu.tsx)
- 鍵関連: [Kagi.tsx](../src/react-app/pages/Kagi.tsx)
- 障子関連: [Shoji.tsx](../src/react-app/pages/Shoji.tsx)
- 防犯関連: [Bohan.tsx](../src/react-app/pages/Bohan.tsx)

たとえば、

- 料金表を直したい
- よくある質問を変えたい
- 見出しを変えたい

という場合は、そのサービスページのファイルを見れば対応しやすいです。

### 4. フッターや共通ボタンを変えたい時

見る場所:

- [Footer.tsx](../src/react-app/components/Footer.tsx)
- [TelButton.tsx](../src/react-app/components/TelButton.tsx)
- [PhoneFixBar.tsx](../src/react-app/components/PhoneFixBar.tsx)
- [EmergencyBar.tsx](../src/react-app/components/EmergencyBar.tsx)

これらは「共通部品」です。  
ここを変えると、複数ページにまとめて反映されます。

管理者としては、部分修正ではなく「全体に反映したい修正かどうか」を先に決めると依頼しやすくなります。

### 5. Google 検索に出るタイトルや説明を変えたい時

見る場所:

- [MetaTags.tsx](../src/react-app/components/MetaTags.tsx)
- 各ページの `MetaTags` 設定
- [LocalBusinessSchema.tsx](../src/react-app/components/LocalBusinessSchema.tsx)
- [index.html](../index.html)

これは画面の見た目というより、「検索結果にどう見えるか」に関わる部分です。

もし次のような依頼をする場合は、このあたりの修正が必要です。

- 検索結果に出る会社説明を変えたい
- サービスページごとの説明文を変えたい
- 会社情報を検索向けにも正しくしたい

## 画像を入れたい時の考え方

今のサイトは、画像をたくさん使う作りにはまだなっていません。  
そのため、画像追加の時は「画像の置き場所」と「表示する場所」をセットで考えると分かりやすいです。

### 画像の置き場所

主な候補は 2 つです。

- [public](../public)
  - そのまま使う画像を置く場所
- [assets](../src/react-app/assets)
  - サイトの部品として使う画像を置く場所

管理者向けに言うと、

- 単純に画像を置いて表示したいなら `public`
- 開発側で部品として管理したいなら `assets`

と考えると分かりやすいです。

### 画像を入れる場所

おすすめの候補:

- トップページの最初の案内の近く
  - [Home.tsx](../src/react-app/pages/Home.tsx)
- 各サービスページの上部
  - 例: [Glass.tsx](../src/react-app/pages/Glass.tsx)
- 料金表の前
- よくある質問の前

### 依頼時に伝えるとよい内容

画像追加を依頼する時は、次の 4 点があるとスムーズです。

1. どのページに入れたいか
2. どの位置に入れたいか
3. 画像ファイルはどれか
4. 画像の説明文は何にするか

画像の説明文とは、見えない場所も含めた「画像の意味」のことです。  
検索や読み上げ対応にも関係するため、あると親切です。

## 仕様変更を依頼する時の伝え方

細かい修正ほど、「どうなっていれば完成か」を先に決めるのが大切です。

例えば、次のように伝えると分かりやすいです。

- トップページの一番上の見出しを、より安心感のある表現に変更したい
- ガラス交換ページの料金表の 1 行目だけ金額を変更したい
- 電話番号は全ページで同じものに統一したい
- フッターの住所表記を正式名称に直したい
- 網戸ページに施工写真を 1 枚追加したい

このように伝えると、作業者側も対象ファイルを特定しやすくなります。

## 今のサイトで、先に気をつけたいこと

### 1. 日本語が文字化けしている箇所がある

複数ファイルで、日本語が正しく読めない状態になっています。

例:

- [constants.ts](../src/react-app/constants.ts)
- [Home.tsx](../src/react-app/pages/Home.tsx)
- [Glass.tsx](../src/react-app/pages/Glass.tsx)
- [Footer.tsx](../src/react-app/components/Footer.tsx)
- [LocalBusinessSchema.tsx](../src/react-app/components/LocalBusinessSchema.tsx)
- [index.html](../index.html)

この状態だと、

- 文言修正がしにくい
- 検索対策に悪影響が出る可能性がある
- 今後の更新担当者が内容を読み取りにくい

という問題が起きやすくなります。

### 2. 同じ情報が複数の場所にある

電話番号や会社情報などが、複数ファイルに分かれている箇所があります。

そのため、1 か所だけ直すと、

- 画面表示は新しい
- 検索用設定は古い

というズレが起きる可能性があります。

## 管理者向けのおすすめ運用

今後、更新を続けやすくするには、次の順番がおすすめです。

1. 文字化けを直す
2. 電話番号、会社名、住所などの共通情報を整理する
3. よく変える文章を整理する
4. 必要に応じて画像を追加する

## まとめ

このサイトは、仕組みそのものは比較的シンプルです。  
そのため、「どのページの、どの部分を、どう変えたいか」が分かれば、更新自体は進めやすい構成です。

管理者の方が最初に押さえるなら、次の 3 点で十分です。

1. トップページは [Home.tsx](../src/react-app/pages/Home.tsx)
2. サービス内容は [pages フォルダ](../src/react-app/pages)
3. 会社情報は [constants.ts](../src/react-app/constants.ts) と共通部品

必要なら次の段階で、

- 「画像追加専用の手順書」
- 「文章修正依頼のテンプレート」
- 「どのページに何が書いてあるか一覧表」

のような、さらに運用向けの資料も作れます。
