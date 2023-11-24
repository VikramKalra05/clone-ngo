import { useState } from "react"
import styles from "../Styling/donate.module.css"

export default function DonateCard(){
    const [amount, setAmount] = useState();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phNumber, setPhNumber] = useState();
    const [panCard, setPanCard] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [pinCode, setPinCode] = useState();

    // const userDetails = {
    //     name,
    //     email,
    //     phNumber,
    //     panCard,
    //     address,
    //     city,
    //     pinCode,
    //     amount
    // }

    return (
        <div className={styles.donateDiv}>
            <div className={styles.headingDiv}>Support Jhatkaa.org</div>
            <div className={styles.buttonCont}>
                <button onClick={()=>setAmount(500)}>₹ 500</button>
                <button onClick={()=>setAmount(1000)}>₹ 1,000</button>
                <button onClick={()=>setAmount(2000)}>₹ 2,000</button>
                <button onClick={()=>setAmount(3000)}>₹ 3,000</button>
                <button onClick={()=>setAmount(5000)}>₹ 5,000</button>
                <button onClick={()=>setAmount(1000)}>₹ 10,000</button>
            </div>
            <input type="number" placeholder="Enter Other Amount" className={styles.inpText} value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            <div className={styles.buttonCont}>
                <button>Monthly</button>
                <button>Once</button>
                <button>Yearly</button>
            </div>
            <input type="text" placeholder="Enter Full Name" className={styles.inpText} value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder="Enter Email" className={styles.inpText} value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="number" placeholder="Enter Phone Number" className={styles.inpText} value={phNumber} onChange={(e)=>setPhNumber(e.target.value)}/>
            <input type="text" placeholder="Enter Pan Card" className={styles.inpText} id={styles.address} value={panCard} onChange={(e)=>setPanCard(e.target.value)}/>
            <input type="text" placeholder="Enter Address" className={styles.inpText} value={address} onChange={(e)=>setAddress(e.target.value)}/>
            <input type="text" placeholder="Enter City" className={styles.inpText} value={city} onChange={(e)=>setCity(e.target.value)}/>
            <input type="number" placeholder="Enter Pin Code" className={styles.inpText} value={pinCode} onChange={(e)=>setPinCode(e.target.value)}/>
            <button className={styles.payBtn}>PAY</button>
        </div>
    )
}

