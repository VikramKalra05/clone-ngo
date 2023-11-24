import styles from "../Styling/campaign.module.css";


export default function CampaignCard({props}){
    return (
        <div className={styles.campaignCard}>
            <img src={props.imageUrl} alt="news" />
            <div>
                <h1>{props.heading}</h1>
                <p>{props.signatures}</p>
            </div>
        </div>
    );
} 