import React, {CSSProperties, useEffect, useState} from "react";
import Header from "./Header";
import ArticleView, { Article } from "./ArticleView";

const pants: Article[] = [
  {
    name: "Norrøna Bitihorn Lightweight Pants Women's Caviar",
    price: 1499,
    img:
      "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/2/6/x2634187718.jpg.pagespeed.ic.xdbfPeBv5N.webp"
  },
  {
    name: "Lundhags Makke Women's Pant Forest Green",
    price: 2300,
    img:
        "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/1/1/1124003_604_front.jpg"
  },
  {
    name: "Norrøna Svalbard Heavy Duty Pants (W) Slate Grey",
    price: 1999,
    img:
        "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/2/4/x2442198875.jpg.pagespeed.ic.krOBGqLruW.webp"
  },
  {
    name: "Houdini Women's Skiffer Pants Reed Beige",
    price: 1999,
    img:
        "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/W/s/xWsSkifferPants_ReedBeige_F.jpg.pagespeed.ic.4x1xWxvxsg.webp"
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
    name: "Lundhags Makke Women's Pant Black",
    price: 1375,
    img:
      "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/L/u/Lundhags-Makke-Ws-Pant-Black.jpg"
  },
  {
    name: "Norrøna Bitihorn Lightweight Pants (W) Drizzle/Elmwood",
    price: 1499,
    img:
      "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/2/6/x2634182323.jpg.pagespeed.ic.0dccSMe32_.webp"
  }
];

function App() {
  const [hasDiscount, setHasDiscount] = useState<boolean>(false);
  const [showSamtykke, setShowSamtykke] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setShowSamtykke(true);
    }, 2000);
  }, []);
  return (
    <div style={styles.content}>
      <Header hasDiscount={hasDiscount} setHasDiscount={setHasDiscount} />
      <div style={styles.articles}>
        {pants.map(article => (
          <ArticleView article={article} hasDiscount={hasDiscount} />
        ))}
      </div>
      {showSamtykke && renderSamtykke(setShowSamtykke)}
    </div>
  );
}

function renderSamtykke(setShowSamtykke: Function) {
  return (
    <div style={styles.samtykkeContainer}>
      <div style={styles.samtykke}>
        <h2
          style={{ marginBottom: "1rem", fontWeight: 500, fontSize: "1.4rem" }}
        >
          Samtykke om kjærlighet
        </h2>
        <div style={{ marginBottom: "2rem" }}>
          <p>
            For å handle i denne nettbutikken må du samtykkke til at du elsker
            Kyrre Laugerud Moe av hele ditt hjerte. Brudd på nettstedets
            rettningslinjer vil ikke føre til rettslig forfølgelse, men vil
            trolig såre innehaverens følelser.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <button style={styles.button} onClick={() => {setShowSamtykke(false)}}>❤️</button>
          <button style={styles.button} onClick={() => alert('Håper ikke du mener det 💔')}>💔</button>
        </div>
      </div>
    </div>
  );
}

const styles: { [name: string]: CSSProperties } = {
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  articles: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "900px"
  },
  samtykkeContainer: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(0,0,0,0.2)"
  },
  samtykke: {
    position: "absolute",
    top: "15%",
    left: "5%",
    right: "5%",
    backgroundColor: "rgba(255,255,255)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2.5rem",
    color: "#444342",
    boxShadow: "3px 3px 15px 6px rgba(68,67,66,0.1)"
  },
  button: {
    borderRadius: "3px",
    padding: "0.35rem 0.5rem",
    color: "#FFF",
    boxShadow: "0 2px #2F2E2D",
    fontWeight: 500,
    borderStyle: "none",
    fontSize: "3rem",
    backgroundColor: "#444342",
    minWidth: "6rem"
  }
};

export default App;
