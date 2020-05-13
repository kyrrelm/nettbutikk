import React, { CSSProperties } from 'react';
import './Button.css';


export default function Header() {
    return (
      <div style={styles.titleContainer}>
        <img style={styles.logo} src='/running.svg' alt='Jubileumsport'/>
          <h1 style={styles.siteTitle}>Jubileumsport</h1>
      </div>
    );
}


const styles: { [name: string]: CSSProperties } = {
  titleContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    height: '35px',
    display: 'inline',
    marginRight: '5px'
  },
  siteTitle: {
    display: 'inline',
    fontWeight: 400,
    fontSize: '2.2rem'
  }
}
