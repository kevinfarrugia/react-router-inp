import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Banner({ title }: { title: string }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>
      </div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Banner;
