import { Link } from "react-router-dom";
import styles from "../Styling/footer.module.css";

export default function Footer(){
    return (
        <div className={styles.footer}>
            <div>
                <div>
                    <h1>Help & Support</h1>
                    <a href="/">Faq</a>
                    <a href="/">Contact</a>
                    <a href="/">Disclosure</a>
                    <a href="/">Terms & Condition</a>
                    <a href="/">Privacy</a>
                </div>
                <div>
                    <h1>Other Links</h1>
                    <a href="/">Annual Reports</a>
                    <a href="/">Blog</a>
                    <a href="/">Careers</a>
                    <a href="/">FCRA</a>
                    <a href="/">Posh</a>
                    <a href="/">Lungs Toolkit</a>
                    <a href="/">DM Engagements</a>
                </div>
                <div>
                    <h1>Follow us</h1>
                    <div className={styles.logoDiv}>
                        <a href="/">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyEIbO969AFYuv4KPFhH_74lDZu8aYQtKLjg&usqp=CAU" alt="facebook" />
                        </a>
                        <a href="/">
                            <img src="data:image/png;base64,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" alt="twitter" />
                        </a>
                        <a href="/">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTppW9sHR6L4QY5Y5K4hxX8QLmKQQ7Ai8gkMA&usqp=CAU" alt="instagram" />
                        </a>
                        <a href="/">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1dhum0RtwWhiUSYaUsw8v8LMrGupYhUWQQ&usqp=CAU" alt="whatsapp" />
                        </a>
                    </div>
                    <Link to="/">Subscribe to our Newsletter</Link>
                </div>
            </div>
            <p>Copyright © 2023 | Jhatkaa.org. All Rights Reserved.</p>
        </div>
    )
}


