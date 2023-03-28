import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.container}>
      <div>
        <span>Home</span>
      </div>
      <div>
        <span>Rates</span>
      </div>
      <div>
        <span>Genres</span>
      </div>
      <div>
        <span>Years</span>
      </div>
    </div>
  );
}
export default Header;
