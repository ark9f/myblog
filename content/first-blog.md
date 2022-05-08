---
title: "Next.jsでブログを作成しました"
id: "1"
date: "2022-05-08"
image: ""
excerpt: "Next.jsのSSG機能を利用したブログを作成した際感じたNext.jsのメリットなどについて"
---

# 使用した技術
- Next.js

# デザイン
シンプルかつ見やすくて垢抜けたデザインを目指しました。
主に他の技術ブログ様を参考にさせていただきつつAdobeXDでざっくりワイヤーフレームを作った後、1からCSSを書きながら微調整していき、最終的にはだいぶ違ったデザインに着陸しました。
勉強も兼ねてTailwindCSSを利用しようかとも考えましたが、自分でCSSを打ってしまう方が慣れているので、今後の機会に譲ることとしました。

# Next.jsを触ってみて
Reactが分かっていればほとんど学習コストは掛からない

github[https://github.com/sindresorhus/github-markdown-css]

```javascript
export async function getStaticPaths() {

  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      return slug
    })

    return data

  })(require.context('../../../content', true, /\.md$/))

  const paths = blogSlugs.map((blogSlug) => `/blog/${blogSlug}`)

  return {
    paths: paths,
    fallback: false,
  }
}
```