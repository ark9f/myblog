---
title: "Next.jsでブログを作成しました"
id: "1"
date: "2022-05-08"
image: ""
excerpt: "Next.jsのSSG機能を利用したブログを作成した際感じたNext.jsのメリットなどについて"
---

# 使用した技術
- Next.js  
react-markdownを利用し、マークダウンファイルから記事を作成する方法を採用しました。

# デザイン
シンプルかつ見やすくて垢抜けたデザインを目指しました。  
主に他の技術ブログ様を参考にさせていただきつつAdobeXDでざっくりワイヤーフレームを作った後、1からCSSを書きながら微調整していき、最終的にはだいぶ違ったデザインに着陸しました。  
マークダウンファイルから作成した記事には
[github-markdown-css](https://github.com/sindresorhus/github-markdown-css)
を少しカスタマイズして適用しました。  

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