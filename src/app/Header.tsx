import React, { CSSProperties } from "react";

export default function Header() {
  return (
      <div style={styles.header}>
        <div style={styles.titleContainer}>
          <img style={styles.logo} src="/running.svg" alt="Jubileumsport" />
          <h1 style={styles.siteTitle}>Jubileumsport</h1>
        </div>
        {renderSearch()}
      </div>
  );
}

function renderSearch() {
  return (
    <div style={styles.searchBox}>
      <input style={styles.input} className={'no-on-focus'}/>
      <button  title="Søk" style={styles.button}>
        <i style={styles.icon}>search</i>
      </button>
    </div>
  );
}

const styles: { [name: string]: CSSProperties } = {
  header: {
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    width: '100%',
    marginBottom: '40px'
  },
  searchBox: {
    display: 'flex',
    height: '2rem',
    width: '100%',
    maxWidth: '300px',
  },
  input: {
    borderLeft: '1px solid #ed8026',
    borderTop: '1px solid #ed8026',
    borderBottom: '1px solid #ed8026',
    borderRight: 'none',
    width: '100%',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  titleContainer: {
    display: "flex",
    alignItems: "center"
  },
  button: {
    backgroundColor: '#ed8026',
    borderStyle: 'none',
    width: '3rem'
  },
  icon: {
    fontFamily: 'Material Icons',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: '1.5rem',
    color: '#fed227',
    display:  'inline-block'
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
