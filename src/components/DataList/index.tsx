import AddToCart from "../AddToCart";
import styles from "./styles.module.css";

function DataList({ title = "" }) {
  return (
    <div className={styles.section}>
      <h1 className={styles.heading}>{title}</h1>
      <ul className={styles.list}>
        {Array.from({ length: 500 }, () =>
          Math.floor(Math.random() * 1000)
        ).map((n, index) => (
          <li key={index} className={styles.item}>
            <h3 className={styles.itemTitle}>
              {n}. Lorem ipsum dolor sit amet
            </h3>
            <img
              src="http://placekitten.com/200/300"
              alt="Image of a kitten"
              width="200"
              height="300"
              className={styles.thumbnail}
              loading={index > 1 ? "lazy" : undefined}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis
              aliquam nosl eget ultricies aliquam, nunc nisl aliquet nunc, quis
              aliquam no.
            </p>
            <AddToCart />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataList;
