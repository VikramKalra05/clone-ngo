import DonateCard from "../Components/DonateCard"
import styles from "../Styling/donate.module.css"



export default function Donate(){
    return (
        <div>
            <div className={styles.topBar}></div>
            <DonateCard />
        </div>
    )
}