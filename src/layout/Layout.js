//? import styles
import styles from "@/styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className="wrapper">
          <h1>Car Dealership</h1>
          <p>Choose and buy your car ...</p>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <div className="wrapper">
          <p>
            Developer by{" "}
            <a target="_BLANK" href="https://github.com/mahdl-karami">
              mahdl-karami
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
