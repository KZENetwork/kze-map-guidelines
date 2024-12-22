# コマンドの使用

コマンドを使ったギミックの作成が利用可能です。

ステージ中のギミック、演出などに利用されます。

```admonish info title= "TIPS"
- 防具立ては銃弾でノックバックされます。動かしたくない場合は NBT で Marker をつけて下さい。(例: /summon armor_stand ~ ~ ~ {Marker:1b})
```

```admonish failure title= "非推奨例"
- パーティクル等で過剰に演出を行い、サーバー、クライアントに負荷をかけること
- セレクターを指定するときに distance=..1000 のように範囲を指定しない
  - 待機ワールドに影響が及びます
- プレイヤーが対象のセレクターに gamemode!=spectator,gamemode!=creative を付けない
  - 運営や観戦しているプレイヤーを対象から外す必要があります
- HP が多いだけのボス戦
  - Biolab 2 のボス戦のクオリティが目安です
- プレーヤーによる繰り返しの動作が必要となるギミック(壁への攻撃・連続右クリック等)で、人数による HP 変動やダメージ上限の設定がされていない
- リピートコマンドブロックで常時実行しない
  - コマンドが実行されなくなります
- 以下のコマンドが利用されている
```

※表記されている禁止コマンド名はエイリアスを含めます。

| **コマンド**     | **補足**                |
| ---------------- | ----------------------- |
| /help            |                         |
| /ban             |                         |
| /ban-ip          |                         |
| /banlist         |                         |
| /bossbar         | plugin 表示と競合する為 |
| /gamemode        |                         |
| /defaultgamemode |                         |
| /deop            |                         |
| /jfr             |                         |
| /kick            |                         |
| /op              |                         |
| /pardon          |                         |
| /pardon-ip       |                         |
| /publish         |                         |
| /reload          |                         |
| /save-all        |                         |
| /save-off        |                         |
| /seed            |                         |
| /setidletimeout  |                         |
| /stop            |                         |
| /transfer        |                         |
| /whitelist       |                         |
| /worldboarder    |                         |

```admonish info title= "推奨例"
- 専用プラグインのコマンドを使用する (TODO: プラグインの案内を記載)
```

## コマンド別のガイドライン

[/scoreboard の使用](indidual_command/scoreboard.md)

[/playsound の使用](indidual_command/playsound.md)
