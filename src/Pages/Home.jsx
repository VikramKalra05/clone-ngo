import { Feedback } from "../Components/feedback";
import { EmailIcon, CheckCircleIcon } from '@chakra-ui/icons';
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
            <div className={styles.campaignDiv}>
                <h1>Together we campaign for</h1>
                <div>
                    <div>
                        <CheckCircleIcon boxSize={24} color="#ed462f"/>
                        <h2>Equality</h2>
                    </div>
                    <div>
                        <CheckCircleIcon boxSize={24} color="#ed462f"/>
                        <h2>Equality</h2>
                    </div>
                    <div>
                        <CheckCircleIcon boxSize={24} color="#ed462f"/>
                        <h2>Equality</h2>
                    </div>
                    <div>
                        <CheckCircleIcon boxSize={24} color="#ed462f"/>
                        <h2>Equality</h2>
                    </div>
                </div>
            </div>
            <div className={styles.redLine}></div>
            <div className={styles.campaignDiv} id={styles.focusDiv}>
                <h1>How we work</h1>
                <h2>The unique value that Jhatkaa.org brings is the effective use of digital communication to engage and mobilise citizens at scale.</h2>
                <h1>Our focus is on</h1>
                <div>
                    <div>
                        <CheckCircleIcon boxSize={24} color="#ed462f"/>
                        <h2>Movement building </h2>
                    </div>
                    <div>
                        <CheckCircleIcon boxSize={24} color="#ed462f"/>
                        <h2>Movement building </h2>
                    </div>
                    <div>
                        <CheckCircleIcon boxSize={24} color="#ed462f"/>
                        <h2>Movement building </h2>
                    </div>
                </div>
            </div>
            <div className={styles.redLine}></div>
            <div className={styles.campaignDiv} id={styles.communityDiv}>
                <h1>The jhatkaa.org community have contributed:</h1>
                <div>
                    <div>
                        <CheckCircleIcon boxSize={24} color="#ed462f"/>
                        <h3>2,907,589 +</h3>
                        <h4>Petition Signatures</h4>
                    </div>
                    <div>
                        <CheckCircleIcon boxSize={24} color="#ed462f"/>
                        <h3>2,907,589 +</h3>
                        <h4>Petition Signatures</h4>
                    </div>
                    <div>
                        <CheckCircleIcon boxSize={24} color="#ed462f"/>
                        <h3>2,907,589 +</h3>
                        <h4>Petition Signatures</h4>
                    </div>
                </div>
                <div className={styles.redLine}></div>
                <h3>And together we have been able to create real change...</h3>
                <h4>The unique value that Jhatkaa.org brings is the effective use of digital communication to engage and mobilise citizens at scale.</h4>
            </div>



            <div className={styles.statusQuo}></div>

            <div className={styles.blog}>
                <h1>Blog</h1>
                <div className={styles.blogCont}>
                    <div>
                        <img src="https://jhatkaa.org/wp-content/uploads/2023/02/decarbonising-food-miles-1024x819.jpg.webp" alt="news" />
                        <h1>Is the city of Mumbai truly supporting its dabbawalas? </h1>
                    </div>
                    <div>
                        <img src="https://jhatkaa.org/wp-content/uploads/2023/02/decarbonising-food-miles-1024x819.jpg.webp" alt="news" />
                        <h1>Is the city of Mumbai truly supporting its dabbawalas? </h1>
                    </div>
                    <div>
                        <img src="https://jhatkaa.org/wp-content/uploads/2023/02/decarbonising-food-miles-1024x819.jpg.webp" alt="news" />
                        <h1>Is the city of Mumbai truly supporting its dabbawalas? </h1>
                    </div>
                </div>
                <div className={styles.btn}>
                    <Link to="/campaigns">Read more</Link>
                </div>
            </div>
        </div>
    )
} 

