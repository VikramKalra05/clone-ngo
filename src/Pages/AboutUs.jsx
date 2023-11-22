import React from "react"
import styles from "../Styling/aboutus.module.css";
import mainStyle from "../Styling/common.module.css";
import { EmailIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react'
import { Feedback } from "../Components/feedback";

export default function AboutUs(){
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <div className={styles.topBar}>
                <h1>Let's create a better tomorrow</h1>
            </div>
            <div className={mainStyle.feedbackBtn}>
                <button onClick={onOpen}>
                    <EmailIcon />
                    Feedback
                </button>
            </div>
            <Feedback value={{isOpen, onOpen, onClose}}></Feedback>
            <div className={styles.info}>
                <div className={styles.topInfo}>
                    <h1>WHAT WE DO</h1>
                    <p>
                        Jhatkaa.org is a digital campaigning organization that empowers citizens to take action on issues that matter to them. Our aim is to make democracy more accessible and participatory for all citizens.
                        Our approach is focused on building movements through digital tools that enable citizens to voice their concerns, opinions, and ideas. We believe that citizen engagement is key to creating positive change in society.
                        Our platform provides citizens with the necessary resources and tools to make a difference. We work towards educating citizens about issues that affect their communities, and encourage them to take part in decision-making at all levels.
                        We employ a range of strategies to achieve our goals, including petitions, public engagement, building volunteer movements, media engagement, and member-generated research.
                        Our long-term objective is to create a more equitable, inclusive, and sustainable society. We want to empower citizens to take an active role in shaping their communities and the nation. By working towards this goal, we believe that we can create a better future for all, across the country.
                    </p>
                </div>
                <div>
                    <h1>OUR VISION</h1>
                    <p>
                        We aim to create a progressive India – one that’s equitable, inclusive, and sustainable – built and maintained through the democratic power of an engaged citizenry.
                    </p>
                </div>
                <div>
                    <h1>OUR MISSION</h1>
                    <p>
                    To use innovative technology and public mobilisation to build an active movement of progressive Indians who take action to affect change that would not be possible if they acted alone – holding government, corporate, and cultural leaders accountable to our vision.
                    </p>
                </div>
            </div>
            <div className={styles.workDiv}>
                <h1>HOW WE WORK</h1>     
                <div className={styles.workCont}>
                    <div>
                        <img src="https://jhatkaa.org/wp-content/uploads/2022/10/hwitwrks_1.png" alt="stop pollution" />
                        <h2>Identify demand and decision maker</h2>
                        <h3>What is the specific change and who has the power to make it</h3>
                    </div>
                    <div>
                        <img src="https://jhatkaa.org/wp-content/uploads/2022/08/hwitwrks_2-1.png" alt="petition signed" />
                        <h2>Mobilize citizens to take actions</h2>
                        <h3>From signing petitions, to calling decision-makers, joining events etc</h3>
                    </div>
                    <div>
                        <img src="https://jhatkaa.org/wp-content/uploads/2022/08/hwitwrks_3.png" alt="signs" />
                        <h2>Engage with decision-makers</h2>
                        <h3>Get them to understand the benefits of implementing the change</h3>
                    </div>
                </div>          
            </div>
            <div className={styles.workDiv}>
                <h1>OUR TEAM</h1>
                <div className={styles.workCont} id={styles.team}>
                    <div>
                        <img src="https://jhatkaa.org/wp-content/uploads/2023/09/pfp-avijit.png" alt="Person" />
                        <h2>Avijit Michael (Executive Director) </h2>
                        <h3>Avijit has been at the forefront of campaigning and digital technology for over a decade. He worked with Greenpeace to pioneer online petitions and digital mobilization in India, and later as Global Development Director at Change.org, he built a strategy for user engagement worldwide. As the leader of Jhatkaa.org, Avijit is committed to creating tools that empower citizen engagement in democracy and promote government accountability.</h3>
                    </div>
                    <div>
                        <img src="https://jhatkaa.org/wp-content/uploads/2023/09/pfp-avijit.png" alt="Person" />
                        <h2>Avijit Michael (Executive Director) </h2>
                        <h3>Avijit has been at the forefront of campaigning and digital technology for over a decade. He worked with Greenpeace to pioneer online petitions and digital mobilization in India, and later as Global Development Director at Change.org, he built a strategy for user engagement worldwide. As the leader of Jhatkaa.org, Avijit is committed to creating tools that empower citizen engagement in democracy and promote government accountability.</h3>
                    </div>
                    <div>
                        <img src="https://jhatkaa.org/wp-content/uploads/2023/09/pfp-avijit.png" alt="Person" />
                        <h2>Avijit Michael (Executive Director) </h2>
                        <h3>Avijit has been at the forefront of campaigning and digital technology for over a decade. He worked with Greenpeace to pioneer online petitions and digital mobilization in India, and later as Global Development Director at Change.org, he built a strategy for user engagement worldwide. As the leader of Jhatkaa.org, Avijit is committed to creating tools that empower citizen engagement in democracy and promote government accountability.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
