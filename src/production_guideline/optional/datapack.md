# datapacks の使用

datapacks(function)は使うことができます。

```admonish failure title= "非推奨例"
- datapackに使用される文字コードがUTF-8で統一されていない
- function の load.json と tick.json の使用
  - マップ開始時の処理と干渉し不具合を起こす可能性があります。
- function を利用した カスタムbgm の作成
- function を利用した カスタムバイオーム/ディメンション の作成
```

```admonish warning title= "注意事項"
- ファイル名や内容は可読性の高いものを考慮して作成してください。
  - コマンドの内容が複雑になる場合は、コメントを入れるなどして可読性を高めてください。
  - 運営が今後のメンテナンスで、datapack の内容を変更する可能性があるため、その点を考慮して作成してください。
```

## function 内の schedule コマンド使用

function で schedule コマンドを使う際は、execute コマンドを利用し、マップ内のエンティティ(防具立てなど)の位置でコマンドを実行して下さい。

```admonish info title= "TIPS"
Mlutiverse 環境であれば world に datapack を置いて動くか確かめると分かりやすいです。
```
