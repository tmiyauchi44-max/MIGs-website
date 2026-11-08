# MIGs Webサイト（GitHub Pages ＋ Pages CMS）

松江の Matsue International Gateways 向け静的サイトです。HTML/CSS/JavaScriptのみで動作し、ビルドは不要です。

## 1. GitHub に公開する
1. 新規の **Public** リポジトリを作り、ZIPを解凍した**中身すべて**をリポジトリのルートにアップロードします（ZIP自体や親フォルダだけを置かない）。**`.pages.yml`、`.github`、`.nojekyll`** も必ず含めてください。Windowsで隠しファイルに注意。
2. ブランチを `main` にします。
3. GitHub → **Settings → Pages → Build and deployment → Deploy from a branch** → `main` / `(root)` → Save。
4. 数分後、`https://ユーザー名.github.io/リポジトリ名/` で開きます。通常のHTMLサイトとして動くため、追加のサーバー設定やAPIキーは不要です。

## 2. Pages CMS で編集する
1. https://app.pagescms.org/ に GitHub アカウントでログインします。
2. GitHub App が対象リポジトリにアクセスできることを確認して、そのリポジトリの **main** ブランチを選びます。
3. サイドメニューに「トップページ」「MIGsについて」「短期留学・一覧ページ」「ワーキングホリデー・一覧ページ」「お問い合わせ」「短期留学：国別プログラム」「ワーキングホリデー：国別プログラム」が表示されます。
4. 文章や写真を変更し **Save** します。GitHubへ変更が保存され、公開サイトに反映されます（反映まで多少時間がかかることがあります）。

## 3. 国別プログラムの追加
各「国別プログラム」で **New** を押し、国名、URL用ID、紹介、料金などを入力します。**URL用ID（slug）は半角小文字とハイフン**を用い、例 `ireland` としてください。ファイル名も `ireland.json` になるよう作成してください。**公開する**をONにします。

**重要：新しい国を一覧へ自動追加するために** `.github/workflows/update-program-index.yml` を同梱しています。GitHubの Actions が有効で、ワークフローが `contents: write` 権限を持っている必要があります（Settings → Actions → General → Workflow permissions → Read and write permissions）。初めて使う際にこの設定を確認してください。編集・追加した `data/short-term/` または `data/working-holiday/` 内のファイルを検知すると、GitHub Actions が各 `index.json` を更新します。既存の国の内容変更だけならインデックスの変更は不要です。国を削除した場合も再生成されます。

Actionsを使用できない場合は `data/short-term/index.json` と `data/working-holiday/index.json` にファイル名（拡張子を除く）を手動で追加・削除しても運用できます。

## 4. 写真と連絡先について
- 各写真は初期状態では**仮画像（SVG）**です。Pages CMSの「写真」で実際の画像に差し替えてください。アップロード先は `media/` です。
- `お問い合わせ` の `example@example.com` はダミーです。本物のメールアドレスに差し替えるまで、公開ページでは「準備中」と表示します。
- LINEリンクに `https://...` の正式なURLを入力すると、ページ上のボタンが有効になります。空欄では「準備中」です。
- 料金・参加条件・期間は**仮の説明**です。募集内容や法的条件の最新情報を確認後に掲載してください。

## 5. 構成
- `.pages.yml` — Pages CMS の設定（**リポジトリの最上位に置く**）
- `data/pages/*.json` — 5つの固定ページの編集項目
- `data/short-term/*.json` — 短期留学の国別データ
- `data/working-holiday/*.json` — ワーキングホリデーの国別データ
- `data/**/index.json` — 国別プログラム一覧のためのファイル一覧
- `media/` — 写真・画像
- `assets/` — デザインとページ表示のコード
- `.github/workflows/` — 国の追加・削除時に一覧を自動更新するワークフロー

## 6. 注意
- JavaScriptの `fetch()` でJSONを読み込むため、`index.html` をPC上でダブルクリック（file://）すると正常に表示されません。GitHub PagesのURLで確認するか、ローカルでは `python -m http.server 8000` を実行して `http://localhost:8000` で見てください。
- `data/**/index.json` はCMSの編集対象ではありません（自動生成対象）。
- `slug` を変える場合はファイル名も同じ文字列にしてください。既存の国を編集する際は通常 `slug` を変えないでください。
- 一覧ページの説明と各国の詳細は編集場所が異なります。


## 発音講座ページの修正（2026-11-08）
- 発音講座の大きな画像を削除し、2コースをページ先頭に表示。
- ローカルで `pronunciation.html` を直接開いても、ページ内容が表示されます。
- 公開サイトでは `data/pages/*.json` 等を優先して読み込み、Pages CMSの変更を反映します。
- JSONが読み込めない場合のみ同梱データに切り替えます。同梱データはZIP作成時点の内容です。
- GitHubにZIPそのものを置かず、解凍後のファイル一式をリポジトリ直下に配置してください。


## 2026-11-08 オレンジカラーテーマ
- `assets/style.css` のサイト全体の配色を青緑系からオレンジ／クリーム／茶色系へ変更。
- ヘッダー、ナビゲーション、ボタン、背景、カード、フッターなどへ反映。
- 短期留学・ワーキングホリデー・発音講座で以前削除した上部画像は復活しません。
- Pages CMS の設定および各プログラムのデータは変更しません。


## 明るいオレンジへの変更
- メインアクセントを鮮やかなオレンジ（#e96808）に変更。ロゴは #f47712。
- 背景は明るいクリーム色、フッターは読みやすい濃いオレンジ。
- 以前削除した短期留学・ワーキングホリデー・発音講座上部の画像は復活しません。
- 既存の情報・Pages CMS の設定は維持します。
