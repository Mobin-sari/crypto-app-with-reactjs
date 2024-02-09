import styles from "./layout.module.css";

import { FaHeart } from "react-icons/fa6";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="./">CryptoCurrency</a> | React.js
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by MOBiN <span><FaHeart /></span></p>
      </footer>
    </>
  );
}

export default Layout;
