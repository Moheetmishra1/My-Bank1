import { useEffect, useRef, useState } from 'react'
import './Login.css'
import {arr} from "./components/Bank/Database"
import { useNavigate } from 'react-router-dom'

export default function Login(){
    let user= useRef("")
    let pass= useRef("")
    let nav = useNavigate()
    let warn1= useRef();

    function find(){
        if(user.current.value==="" || pass.current.value===""){
            warn1.current.style.display="block"
            warn1.current.innerHTML="Enter valid input";
            setTimeout(()=>{
            warn1.current.style.display="none"

            },800)

            return;

        }

        let arr  = localStorage.getItem("List")
        console.log(arr);
        arr = JSON.parse(arr);
       
        let yes= arr.find((a)=>{
        
            return a.userid===user.current.value && a.password === pass.current.value;
        })  
        

        if(yes){
            console.log("successfully");
            nav(`/user/${yes.userid}`)
        }else{
            alert("User not found");
        }

        

    }



    return (
       
        <div className='Login'>
            <div><p>Userid</p>
            <input type="text" placeholder='userid' ref={user} /></div>

            <div>
                <p>Password</p>
                <input type="password"  placeholder='password' ref={pass}/>
            </div>

            <div><input type="submit" onClick={find} /></div>
            <div className='warning1' ref={warn1}></div>


        </div>
    )
}