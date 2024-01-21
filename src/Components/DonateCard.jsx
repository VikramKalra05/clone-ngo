import { useState } from "react"
import styles from "../Styling/donate.module.css"

export default function DonateCard(){
    const [amount, setAmount] = useState();
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhNumber] = useState();
    const [Pan, setPanCard] = useState("");
    const [Address, setAddress] = useState("");
    const [City, setCity] = useState("");
    const [Pincode, setPinCode] = useState();

    const userDetails = {
        Name,
        Email,
        Phone,
        Pan,
        Address,
        City,
        Pincode,
    }

    const handleSubmit = async () => {
        for (let key in userDetails){
            if(userDetails[key] === ""){
                return alert("Fill all the details")
            }
        }

        console.log(userDetails);
        fetch('https://sheetdb.io/api/v1/3i68exkhj2eid', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [ 
                    userDetails
                ]
            })
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
            console.log(error);
        });


    }

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
            <input type="text" placeholder="Enter Full className" className={styles.inpText} value={Name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder="Enter Email" className={styles.inpText} value={Email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="number" placeholder="Enter Phone Number" className={styles.inpText} value={Phone} onChange={(e)=>setPhNumber(e.target.value)}/>
            <input type="text" placeholder="Enter Pan Card" className={styles.inpText} id={styles.address} value={Pan} onChange={(e)=>setPanCard(e.target.value)}/>
            <input type="text" placeholder="Enter Address" className={styles.inpText} value={Address} onChange={(e)=>setAddress(e.target.value)}/>
            <input type="text" placeholder="Enter City" className={styles.inpText} value={City} onChange={(e)=>setCity(e.target.value)}/>
            <input type="number" placeholder="Enter Pin Code" className={styles.inpText} value={Pincode} onChange={(e)=>setPinCode(e.target.value)}/>
            <button className={styles.payBtn} onClick={handleSubmit}>PAY</button>
        </div>
    )
}

