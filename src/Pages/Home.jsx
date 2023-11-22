import { Feedback } from "../Components/feedback";
import { EmailIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react'
import mainStyle from "../Styling/common.module.css";
import styles from "../Styling/home.module.css";
import { Link } from "react-router-dom";

export default function Home(){
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <div className={mainStyle.feedbackBtn}>
                <button onClick={onOpen}>
                    <EmailIcon />
                    Feedback
                </button>
            </div>
            <Feedback value={{isOpen, onOpen, onClose}}></Feedback>
            <div className={styles.topBar}>
                <div>
                    <h1>Who we are</h1>
                    <p>We are a campaigning organisation committed to building grassroots citizen power across India in effective and innovative ways.</p>
                    <div>
                        <Link to="/about-us">Know more</Link>
                    </div>
                </div>
                <div>
                    <img src="https://jhatkaa.org/wp-content/uploads/2022/08/hwitwrks_2-1.png" alt="Victory" />
                </div>
            </div>
        </div>
    )
} 

