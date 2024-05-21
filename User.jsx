import { useParams } from "react-router-dom"
import "./User.css"

export default function User(){
    let {pid}= useParams()

    let obj = localStorage.getItem("List");

    obj = JSON.parse(obj);
    obj = obj.find((a)=>{
        
        return a.userid === pid;
    })
    console.log(obj);




    return <>
    <div className="fullDetails">
    <div className="details">


        <div className="detailsbox">
        <h1>Details</h1>
    <p>userid : {obj.userid}</p>
    <p>Name : {obj.name}</p>
    <p>Account Number : {obj.accountNumber}</p>
    <p>Balance : {obj.Balance}</p>

    </div>

    </div>
    </div>
    
    </>
}