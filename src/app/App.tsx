import React, { CSSProperties } from "react";
import Header from "./Header";
import ArticleView, { Article } from "./ArticleView";

const pants: Article[] = [
  {
    name: "Norrøna Svalbard Heavy Duty Pants (W) Slate Grey",
    price: 1999,
    img:
      "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/2/4/x2442198875.jpg.pagespeed.ic.krOBGqLruW.webp"
  },
  {
    name: "Fjällräven Keb Gaiter Trousers Regular Women's Dark Garnet-Plum",
    price: 2699,
    img:
      "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/7/3/x7323450496951-SS19-C-KEB-GAITER-TROUSERS-W-FJAELLRAEVEN-21.jpg.pagespeed.ic.XFKQqWmSEt.webp"
  },
  {
    name: "Norrøna Falketind Flex1 Heavy Duty Pants W's Olive Drab",
    price: 1999,
    img:
      "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/1/8/x1864203897.jpg.pagespeed.ic.Nw7b0zhbXJ.webp"
  },
  {
    name: "Norrøna Bitihorn Lightweight Pants (W) Drizzle/Elmwood",
    price: 1499,
    img:
      "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/2/6/x2634182323.jpg.pagespeed.ic.0dccSMe32_.webp"
  }
];

function App() {
  return (
    <div style={styles.content}>
      <Header />
      <div style={styles.articles}>
        {pants.map(article => (
          <ArticleView article={article} />
        ))}
      </div>
    </div>
  );
}

const styles: { [name: string]: CSSProperties } = {
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: "#fff"
  },
  articles: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "900px"
  }
};

export default App;
