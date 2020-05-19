import React, { CSSProperties, useState } from "react";

export default function Header({
  setHasDiscount
}: {
  setHasDiscount: Function;
}) {
  const [discountCode, setDiscountCode] = useState<string>("");

  function checkDiscount() {
    if (discountCode.toLowerCase() === 'love of my life') {
      setHasDiscount(true);
    } else {
      setHasDiscount(false);
    }
  }

  return (
    <div style={styles.header}>
      <div style={styles.titleContainer}>
        <img style={styles.logo} src="/running.svg" alt="Jubileumsport" />
        <h1 style={styles.siteTitle}>Jubileumsport</h1>
      </div>
      {renderSearch()}
      {renderDiscountCode(discountCode, setDiscountCode, checkDiscount)}
    </div>
  );
}

function renderSearch() {
  return (
    <div style={styles.searchBox}>
      <input style={styles.input} className={"no-on-focus"} />
      <button title="Søk" style={styles.button}>
        <i style={styles.icon}>search</i>
      </button>
    </div>
  );
}

function renderDiscountCode(discountCode: string, setDiscountCode: Function, checkDiscount: Function) {
  return (
    <div style={styles.discountBox}>
      <input
        style={styles.inputDiscount}
        className={"no-on-focus"}
        placeholder={"Rabatkode"}
        value={discountCode}
        onChange={event => setDiscountCode(event.target.value)}
      />
      <button title="Søk" style={styles.buttonDiscount} onClick={() => checkDiscount()}>
        Aktiver
      </button>
    </div>
  );
}

const styles: { [name: string]: CSSProperties } = {
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginBottom: "40px"
  },
  searchBox: {
    display: "flex",
    height: "2rem",
    width: "100%",
    maxWidth: "300px",
    marginBottom: "1rem"
  },
  input: {
    borderLeft: "1px solid #ed8026",
    borderTop: "1px solid #ed8026",
    borderBottom: "1px solid #ed8026",
    borderRight: "none",
    width: "100%",
    paddingLeft: "10px",
    paddingRight: "10px"
  },
  discountBox: {
    display: "flex",
    height: "2rem",
    width: "100%",
    maxWidth: "300px",
    marginBottom: "1rem",
    justifyContent: "flex-end"
  },
  inputDiscount: {
    borderLeft: "none",
    borderTop: "none",
    borderBottom: "1px solid #ed8026",
    borderRight: "none",
    width: "40%",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    marginRight: "1rem"
  },
  buttonDiscount: {
    borderRadius: "3px",
    padding: "0.35rem 0.5rem",
    color: "#FFF",
    backgroundColor: "#ed8026",
    boxShadow: "0 2px #B15E0A",
    fontWeight: 500,
    fontSize: "0.8rem",
    borderStyle: "none"
  },

  titleContainer: {
    display: "flex",
    alignItems: "center"
  },
  button: {
    backgroundColor: "#ed8026",
    borderStyle: "none",
    width: "3rem"
  },
  icon: {
    fontFamily: "Material Icons",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: "1.5rem",
    color: "#fed227",
    display: "inline-block"
  },
  logo: {
    height: "35px",
    display: "inline",
    marginRight: "5px"
  },
  siteTitle: {
    display: "inline",
    fontWeight: 400,
    fontSize: "2.2rem"
  }
};
