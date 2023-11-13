import styles from "./styles.module.css";

function DataList() {
  return (
    <div className={styles.section}>
      <h1 className={styles.heading}>Lorem Ipsum</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.itemTitle}>Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis
            aliquam nosl eget ultricies aliquam, nunc nisl aliquet nunc, quis
            aliquam no.
          </p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.itemTitle}>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit sl eget ultricies aliquam, nunc nisl aliquet
            nunc, quis amet, consectetur adipiscing elit. Nullam euismod, nisl
            eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam no.
          </p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.itemTitle}>Lorem ipsum amet</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis
            aliquam no.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default DataList;
