import DataListItem from "../DataListItem";
import LazyChildren from "../LazyChildren";
import styles from "./styles.module.css";

const BATCH_SIZE = 20;

function DataList({ title = "" }) {
  return (
    <div className={styles.section}>
      <h1 className={styles.heading}>{title}</h1>
      <ul className={styles.list}>
        {Array.from({ length: BATCH_SIZE }, () =>
          Math.floor(Math.random() * 1000)
        ).map((n) => (
          <DataListItem key={n} n={n} />
        ))}
      </ul>
      <LazyChildren
        minIntrinsicHeight="800px"
        threshold={0.1}
        rootMargin="200px 0px"
        autoDisconnect={true}
      >
        <ul className={styles.list}>
          {Array.from({ length: BATCH_SIZE }, () =>
            Math.floor(Math.random() * 1000)
          ).map((n) => (
            <DataListItem key={n} n={n} />
          ))}
        </ul>
      </LazyChildren>
      <LazyChildren
        minIntrinsicHeight="800px"
        threshold={0.1}
        rootMargin="200px 0px"
        autoDisconnect={true}
      >
        <ul className={styles.list}>
          {Array.from({ length: BATCH_SIZE }, () =>
            Math.floor(Math.random() * 1000)
          ).map((n) => (
            <DataListItem key={n} n={n} />
          ))}
        </ul>
      </LazyChildren>
    </div>
  );
}

export default DataList;
