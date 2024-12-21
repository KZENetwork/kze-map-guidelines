# /playsound

/playsound コマンドを使う場合、特に演出上の理由がない限り、 execute コマンドと併用して下さい。

```admonish example title= "例"
/execute as @a[team=e] at @s run playsound minecraft:block.anvil.place block @s
```

音を聞かせる対象は execute の対象で調整を行います。

## サウンドカテゴリ

再生する音源には、以下のカテゴリを指定して下さい。

| 音源                    | カテゴリ         |
| :---------------------- | :--------------- |
| ブロック破壊音          | block            |
| 音符、レコード関連、bgm | record           |
| エンティティ関連        | hostile, neutral |
| その他                  | ambient          |

```admonish failure title= "非推奨事項"
- カテゴリーに master を指定している
```
