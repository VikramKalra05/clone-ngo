import CampaignCard from "../Components/CampaignCard"
import styles from "../Styling/campaign.module.css"

const campaignDetails = {
    imageUrl: "https://i.imgur.com/wRCGgUM.png",
    heading: "Thanthi TV & Polimer, Apologize For Misogynistic Reporting",
    signatures: "318 / 500 Signatures",
}

export default function Campaigns(){
    return (
        <div>
            <div className={styles.campaignDiv}>
                <h1>Our latest campaigns</h1>
                <div className={styles.campaignCont}>
                    <CampaignCard props={campaignDetails}/>
                    <CampaignCard props={campaignDetails}/>
                    <CampaignCard props={campaignDetails}/>
                    <CampaignCard props={campaignDetails}/>
                    <CampaignCard props={campaignDetails}/>
                    <CampaignCard props={campaignDetails}/>
                </div>
            </div>
        </div>
    )
}