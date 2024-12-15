### ワールドデータ+α

ワールドデータ+α はゾンビエスケープ用に制作された minecraft のワールドデータにいくつかの txt ファイルを追加したものです。これは以下のような構成のフォルダとなります。(文頭に/がついているものはフォルダです。)**ファイル名及び格納場所は一致させる必要があります。**

```admonish example title = "world(マップID)"
world(マップID)</br>
├ /datapacks</br>
├ /entities</br>
├ /region</br>
├ level.dat</br>
├ マップ設定.txt</br>
├ ルート・ギミック説明.txt</br>
└ 変更履歴.txt</br>
```

### フォルダ名

フォルダ名(world 名)はそのままマップ ID となります。この ID はマップの管理およびスタッフによるマップの強制投票時に使用されます。以下はフォルダの命名に関する注意事項です。

```admonish warning title = "注意事項"
- **小文字の英字”a”~”z”、アンダーバー”_”、または数字”0”~”9”のみ**で命名して下さい。（マルチバイト文字/特殊文字は使えません）</br>
- **マップ名が容易に想定でき、かつ簡潔な命名を行って下さい。**（例: 「海底くらげ駅（:]ミ」⇒ kaiteikurage）</br>
```

### ワールドデータ

マップのワールドデータ(下に述べる追加 txt ファイルは含めない)の内、/datapacks、/entities、/region、level.dat 以外のデータは削除して下さい。（注: /datapacks と/entities は必須データではありません。）例えば、以下のフォルダ・ファイルは含まないで下さい。

```admonish warning title = "禁止フォルダ・ファイル"
- /advancements
- /data
- /poi
- /playerdata
- /stats
- level.dat_old
- session
- uid.dat
```

## 追加 txt ファイル

次に示す 3 つの txt ファイルをワールドフォルダ内に追加してください。

- [マップ設定.txt](https://www.notion.so/txt-0aa460f9cb7245b28d6e5ead86a7d91b?pvs=21)
- [ルート・ギミック説明.txt](https://www.notion.so/txt-93158e7528624b7589bc724078f3b05c?pvs=21)
- [変更履歴.txt](https://www.notion.so/txt-ebb4af86373c4c5ebeedf9cbbd535477?pvs=21)

```admonish warning title = "注意事項"
- txtファイルは**文字コードはUTF-8**で保存してください。
- **その他のファイル・フォルダをワールドデータに追加しないで下さい。**
```
