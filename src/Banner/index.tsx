import styles from "./styles.module.css";

function Banner() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Lorem</h1>
        </div>
      </div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Banner;
