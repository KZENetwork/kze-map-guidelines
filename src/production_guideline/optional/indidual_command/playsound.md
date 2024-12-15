○/playsound コマンドを使う場合、特に演出上の理由がない限り、以下のように execute コマンドと併用して下さい（volume の取り扱いが難しいため）。引数 <pos> <volume> <minVolume>などを適切に使うのであれば対象外です。

`/execute as @a[team=e] at @s run playsound minecraft:block.anvil.place block @s`

・音を聞かせる対象は@a 内で調整して下さい。
・ピッチを変える場合、上の構文に「~ ~ ~ 1 <pitch>」を加えます。
/execute as @a[team=e] at @s run playsound minecraft:block.anvil.place block @s ~ ~ ~ 1 0.5

・２番目の@s を@a と間違えると多人数環境下で爆音が鳴るため、絶対に間違えないで下さい
（間違い）
/execute as @a[team=e] at @s run playsound minecraft:block.anvil.place block @a
(編集済)
2023 年 9 月 15 日

— 2023/09/15 18:09
○ 音源を適切に選択して下さい（上の例では block）。master を使うことは禁止とします。以下は音源選択の目安です。
・ブロック破壊音　 → 　 block
・音符、レコード関連、bgm 　 → 　 record
・エンティティ関連　 → 　 hostile or neutral
・その他　 → 　 ambient
[8/23/20:43 改定]

— 2023/09/15 18:21
○bgm を流す場合、通常の/playsound を使って下さい。（execute 方式はうまくいきません）<sound>が music_disc の場合、<volume>は大きくとっても良いですが、音量調節が効かなくなります。その場合、プレーヤーが bgm の on/off を切り替えられるような回路を作って下さい。

bgm をチャットクリックで off にする方法
bgm が鳴り始めたらクリックしても off にできないため、/tellraw と/playsound の間は時間を開ける必要がある

あらかじめ実行
/scoreboard objectives add bgm trigger
/scoreboard players enable @a[distance=..1000] bgm

クリックできるチャットを表示
/tellraw @a[distance=..1000] ["",{"text":"BGM を off にするには","color":"gold"},{"text":"ここ","underlined":true,"color":"yellow","clickEvent":{"action":"run_command","value":"trigger bgm"}},{"text":"をクリック","color":"gold"}]

bgm を鳴らす
/playsound minecraft:music_disc.cat record @a[scores={bgm=0}] ~ ~ ~ 20

![2023-09-15_21.01.31.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/18ab8687-a8b1-4a3c-8a4b-b43beaa470a1/977ac1e7-9aee-4806-bcf5-e5d073649b43/2023-09-15_21.01.31.png)
