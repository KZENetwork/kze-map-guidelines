# ワールドデータ+α

ワールドデータ+α はゾンビエスケープ用に制作された minecraft のワールドデータにいくつかのテキストファイルを追加したものです。<br>
これは以下のような構成のフォルダとなります。<br>
**ファイル名及び格納場所は一致させる必要があります。**<br>

以下のようなファイル構成にして下さい。

```admonish example title = "ワールドフォルダの構成例"
world(マップID)</br>
├ datapacks/</br>
├ entities/</br>
├ region/</br>
├ level.dat</br>
├ マップ設定.txt</br>
├ ルート・ギミック説明.txt</br>
└ 変更履歴.txt</br>

※ 文末が`/`で終わっているものがフォルダです。
```

## フォルダ名

フォルダ名(world 名)はそのままマップ ID となります。<br>
この ID はマップの管理およびスタッフによるマップの強制投票時に使用されます。<br>
以下はフォルダの命名に関する注意事項です。

```admonish warning title = "注意事項"
- **小文字の英字”a”\~”z”、アンダーバー”_”、または数字”0”\~”9”のみ**で命名して下さい。<br>
  （マルチバイト文字/特殊文字は使えません）</br>
- **マップ名が容易に想定でき、かつ簡潔な命名を行って下さい。**<br>
  （例: 「海底くらげ駅（:]ミ」⇒ kaiteikurage）</br>
```

## 不要なデータ

ワールドデータの内、以下のフォルダ、ファイル以外は削除して下さい。<br>
- datapacks
- entities
- region
- level.dat

datapacksとentitiesディレクトリは必須データではないので、不要であれば削除して下さい。<br>

例えば、以下のフォルダやファイルは含まないで下さい。

```admonish info title = "禁止フォルダ・ファイル 一覧"
- /advancements
- /data
- /poi
- /playerdata
- /stats
- level.dat_old
- session
- uid.dat
```

## 追加テキストファイル

以下のテキストファイルをワールドフォルダ内に追加して下さい。<br>
詳細はそれぞれのリンク先から確認して下さい<br>

- [マップ設定.txt](map_setting.md)
- [ルート・ギミック説明.txt](map_description.md)
- [変更履歴.txt](change_history.md)

```admonish warning title = "注意事項"
- テキストファイルの**文字コードはUTF-8**で保存して下さい。
- **その他のファイル・フォルダをワールドデータに追加しないで下さい。**
```
