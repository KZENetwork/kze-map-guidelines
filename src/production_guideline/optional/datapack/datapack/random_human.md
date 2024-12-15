以下は 4 人に 1 人の例です。

<aside>
<img src="/icons/command-line_gray.svg" alt="/icons/command-line_gray.svg" width="40px" />

scoreboad objectives add test dummy
scoreboard players set @a test 0
scoreboard players set #4 test 4
execute store result score #player test if entity @a[team=e]
scoreboard players operation #player test /= #4 test

#repeat
execute if score #player test matches 1.. run scoreboard players set @a[limit=1,sort=random,team=e,scores={test=0}] test 1
scoreboard players remove #player test 1
execute if score #player test matches 0 run tp @a[scores={test=1},team=e]
execute if score #player test matches 0 run setblock // stop

</aside>
