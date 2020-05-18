import React, { CSSProperties } from 'react';
import Header from './Header';

interface Article {
  name: string;
  price: number;
  img: string;
}

const pants: Article[] = [
  {
    name: 'Norrøna Svalbard Heavy Duty Pants (W) Slate Grey',
    price: 1999,
    img:
      'https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/2/4/x2442198875.jpg.pagespeed.ic.krOBGqLruW.webp',
  },
  {
    name: 'Fjällräven Keb Gaiter Trousers Regular Women\'s Dark Garnet-Plum',
    price: 2699,
    img:
      'https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/7/3/x7323450496951-SS19-C-KEB-GAITER-TROUSERS-W-FJAELLRAEVEN-21.jpg.pagespeed.ic.XFKQqWmSEt.webp',
  },
  {
    name: 'Norrøna Falketind Flex1 Heavy Duty Pants W\'s Olive Drab',
    price: 1999,
    img:
      'https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/1/8/x1864203897.jpg.pagespeed.ic.Nw7b0zhbXJ.webp',
  },
  {
    name: 'Norrøna Bitihorn Lightweight Pants (W) Drizzle/Elmwood',
    price: 1499,
    img:
      'https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/2/6/x2634182323.jpg.pagespeed.ic.0dccSMe32_.webp',
  },
];

function App() {
  return (
    <div style={styles.content}>
      <Header/>
      <div style={styles.articles}>
        {pants.map(renderArticleView)}
      </div>
    </div>
  );
}

function renderArticleView(article: Article) {
  return (
      <div style={styles.renderArticleView}>
        <div style={styles.imgWrapper}>
          <img width="210" height="210" src={article.img} />
        </div>
        <div style={styles.productInfo}>
          <span style={styles.sex}>Dame</span>
          <span style={styles.size}>Størrelse</span>
          <div style={styles.ratingBoxWrapper}>
            <div style={styles.ratingBox}>
              <i style={styles.icon}>star</i>
              <i style={styles.icon}>star</i>
              <i style={styles.icon}>star</i>
              <i style={styles.icon}>star</i>
              <i style={styles.icon}>star</i>
            </div>
          </div>
          <h2 style={styles.productName}>{article.name}</h2>
          <span style={styles.price}>{article.price},-</span>
        </div>
      </div>
  );
}

const styles: { [name: string]: CSSProperties } = {
  content: {
     display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  articles: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '900px'
  },
  renderArticleView: {
    boxShadow: '0 5px 6px rgba(68,67,66,0.1)',
    marginBottom: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    minWidth: '340px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imgWrapper: {
    marginBottom: '20px'
  },
  productInfo: {
    borderTop: '1px solid #E2E2E2',
    position: 'relative',
    paddingTop: '20px',
    paddingBottom: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  sex: {
    border: '1px solid #F0F0F0',
    borderRadius: '3px',
    padding: '0rem 0.5rem',
    position: 'absolute',
    left: 0,
    top: -10,
    backgroundColor: '#FFF'
  },
  ratingBoxWrapper: {
    position: 'absolute',
    left: 0,
    top: -12,
    right: 0,
    display: 'flex',
    justifyContent: 'center'
  },
  ratingBox: {
    border: '1px solid #F0F0F0',
    borderRadius: '3px',
    padding: '0rem 0.5rem',
    display: 'inline-flex',
    backgroundColor: '#FAFAFA',
  },
  size: {
    borderRadius: '3px',
    padding: '0.35rem 0.5rem',
    color: '#FFF',
    backgroundColor: '#ed8026',
    boxShadow: '0 2px #B15E0A',
    fontWeight: 500,
    position: 'absolute',
    right: 0,
    top: -15,
  },
  icon: {
    fontFamily: 'Material Icons',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: '1.5rem',
    color: '#fed227',
    display:  'inline-block'
  },
  productName: {
    fontWeight: 200,
    fontSize: '1.1rem'
  },
  price: {
    color: '#757575',
    fontWeight: 200,
    fontSize: '1.5rem'
  }
};

export default App;

