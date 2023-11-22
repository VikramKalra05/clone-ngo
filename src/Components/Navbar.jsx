import { Link } from "react-router-dom";
import styles from "../Styling/navbar.module.css";

export default function Navbar() {
    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.navLogo}>
                    <Link to="/">
                        <img src="https://jhatkaa.org/wp-content/uploads/2023/01/jhatkaa-logo-trim-new-color.png" alt="NGO" />
                    </Link>
                </div>
                <div className={styles.navPages}>
                    <Link to="/">Home</Link>
                    <Link to="/campaigns">Campaigns</Link>
                    <Link to="/">Victories</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/">Blog</Link>
                    <Link to="/">Media</Link>
                    <Link to="/donate">Donate</Link>
                </div>
            </div>
        </div>
    )
}