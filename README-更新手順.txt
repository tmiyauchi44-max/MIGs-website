MIGs Pages CMS 反映修正版（2026-11-08）

ZIPに含むファイルは assets/app.js と7つのHTMLのみです。
GitHubの data/ 以下のJSONファイルと .pages.yml は一切上書きしないでください。Pages CMSで更新済みの内容を保持するためです。

変更点:
1. GitHub Pages上では常に最新のJSONを読みに行く（キャッシュ回避）
2. 読み込み失敗時にZIP作成当時の古いデータに切り替えない
3. ファイル名とHTTPエラーを画面に表示する
4. HTMLのJS読み込みURLを更新し、古いJavaScriptキャッシュを避ける
5. ローカルのfile://でHTMLを開く時だけ埋め込みのサンプルデータを表示（Pages CMSの最新内容とは異なります）

アップロード: ZIPを解凍して、ZIP内の assets/app.js と *.html を、GitHubの公開ブランチの同じ位置に上書きしてコミット。
Settings > Pages で公開ソースと公開ブランチが一致するかを確認。Actionsのデプロイ完了後、公開URLをCtrl+Shift+Rで更新。

注意: 新しく国を追加した際は data/short-term/index.json または data/working-holiday/index.json に新しいslugが追加されている必要があります。
