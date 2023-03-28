import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div>
        <a href="/movieWeb">Home</a>
      </div>
      <div>
        <a>Category</a>
      </div>
      <div>
        <a>Year</a>
      </div>
    </div>
  );
}
export default Header;
