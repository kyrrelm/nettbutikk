import React, { CSSProperties } from "react";

export interface Article {
  name: string;
  price: number;
  img: string;
}

export default function ArticleView({ article }: { article: Article }) {
  return (
    <div style={styles.articleView}>
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
  articleView: {
    boxShadow: "3px 3px 15px 2px rgba(68,67,66,0.1)",
    marginBottom: "20px",
    marginLeft: "20px",
    marginRight: "20px",
    padding: '20px',
    minWidth: "300px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  imgWrapper: {
    marginBottom: "20px"
  },
  productInfo: {
    borderTop: "1px solid #E2E2E2",
    position: "relative",
    paddingTop: "20px",
    paddingBottom: "20px",
    marginLeft: "20px",
    marginRight: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  },
  sex: {
    border: "1px solid #F0F0F0",
    borderRadius: "3px",
    padding: "0rem 0.5rem",
    position: "absolute",
    left: 0,
    top: -10,
    backgroundColor: "#FFF"
  },
  ratingBoxWrapper: {
    position: "absolute",
    left: 0,
    top: -12,
    right: 0,
    display: "flex",
    justifyContent: "center"
  },
  ratingBox: {
    border: "1px solid #F0F0F0",
    borderRadius: "3px",
    padding: "0rem 0.5rem",
    display: "inline-flex",
    backgroundColor: "#FAFAFA"
  },
  size: {
    borderRadius: "3px",
    padding: "0.35rem 0.5rem",
    color: "#FFF",
    backgroundColor: "#ed8026",
    boxShadow: "0 2px #B15E0A",
    fontWeight: 500,
    position: "absolute",
    right: 0,
    top: -15
  },
  icon: {
    fontFamily: "Material Icons",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: "1.5rem",
    color: "#fed227",
    display: "inline-block"
  },
  productName: {
    fontWeight: 200,
    fontSize: "1.1rem"
  },
  price: {
    color: "#757575",
    fontWeight: 200,
    fontSize: "1.5rem"
  }
};
