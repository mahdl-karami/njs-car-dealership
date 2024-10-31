//? import styles
import styles from "@/styles/layout.module.css";
//? import components
import Filtering from "@/components/Filtering";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
    {/* //! header */}
      <header className={styles.header}>
        <div className="wrapper">
          <h1>
            <Link href="/">Car Dealership</Link>
          </h1>
          <p>Choose and buy your car ...</p>
        </div>
      </header>
      {/* //! body */}
      <Filtering />
      {children}
      {/* //! footer */}
      <footer className={styles.footer}>
        <div className="wrapper">
          <p>
            Developed by{" "}
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
