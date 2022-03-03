import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Great Quote</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/quotes">All Quotes</Link>
          </li>
          <li>
            <Link to="/new-quote">Add a Quote</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
