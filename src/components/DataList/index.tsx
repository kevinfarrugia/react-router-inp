import AddToCart from "../AddToCart";
import styles from "./styles.module.css";

function DataList() {
  return (
    <div className={styles.section}>
      <h1 className={styles.heading}>Lorem Ipsum</h1>
      <ul className={styles.list}>
        {[...new Array(500)].map((_, index) => (
          <li key={index} className={styles.item}>
            <h3 className={styles.itemTitle}>Lorem ipsum dolor sit amet</h3>
            <img
              src="http://placekitten.com/200/300"
              alt="Image of a kitten"
              width="200"
              height="300"
              className={styles.thumbnail}
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
