# mitecolle
mitecolle（みてこれ）は、Twitterでシェアされている今話題のスライドを展覧しているウェブアプリです。
Docswell（ドクセル）、SlideShare、Speaker Deckで公開されているスライドを紹介しています。
注目度の高いスライドでインプットの質が高まります！勉強になる！学びになる！

https://mitecolle.vercel.app

公式Twitter https://twitter.com/mitecolle

## Getting Started

### 起動

```bash
$ docker compose build
$ docker compose up
```

### テスト

```bash
$ docker compose run testcafe bash
# ./run.sh
```

### コード整形

```bash
$ docker compose run app yarn format:fix
```