import AddToCart from "../AddToCart";
import styles from "./styles.module.css";
import image from "./img/300.jpg"

function DataListItem({
  n,
  loading,
}: {
  n: number;
  loading?: "lazy" | "eager";
}) {
  return (
    <li className={styles.item}>
      <h3 className={styles.itemTitle}>{n}. Lorem ipsum dolor sit amet</h3>
      <img
        src={image}
        alt="Image of a kitten"
        width="200"
        height="300"
        className={styles.thumbnail}
        loading={loading}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
        nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nosl
        eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam no.
      </p>
      <AddToCart />
    </li>
  );
}

export default DataListItem;
