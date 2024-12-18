# KZE Network Map Guideline

KZEのマップのガイドラインのドキュメント

## セットアップ方法

1. `rsut`をインストールする。<br>
    https://www.rust-lang.org/ja/tools/install

2. `mdbook`と関連するパッケージをインストールする。<br>
    ```sh
    cargo install mdbook
    cargo install mdbook-admonish
    ```
3. このリポジトリを`clone`する。<br>
    ```sh
    git clone https://github.com/KZENetwork/kze-map-guidelines
    ```

## 編集方法

`src`ディレクトリの`markdown`ファイルを任意のテキストエディタで編集する。<br>

以下のコマンドを実行して、webページで表示することもできる。
```sh
mdbook serve --open
```

## 参考
- [mdbook](https://rust-lang.github.io/mdBook/index.html)
- [mdbook-admonish](https://github.com/tommilligan/mdbook-admonish)
