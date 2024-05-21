import { useRef, useState } from "react"
import {arr} from "./components/Bank/Database";
import "./SignUp.css"
import { useNavigate } from "react-router-dom";


export default function SignUp(){
    let [accountNumber,setAccountNumber] =useState(100000)
    let name= useRef("")
    let userid= useRef("")
    let pass= useRef("")
    let nav= useNavigate()
    let warn = useRef()
    let warnName =useRef()
    let warnUserId =useRef()
    let warnpass = useRef();
    let nameBool= false;

    let boxwhite= "0px 2px 4px rgb(34, 76, 138), 0px 3px 6px rgb(180, 180, 217)";
    let boxred = "0px 2px 4px red, 0px 3px 7px red";
    let borderred= "2px solid red";

    let flag= true;

   
    function warned(obj1,obj2){
        obj1.current.style.boxShadow = "0px 2px 4px red, 0px 3px 7px red";
        obj1.current.style.border="1px solid red";
        obj2.current.innerHTML="This filed is required"
    }


function check(){
    console.log(name.current.value);

    if(name.current.value.trim()===""){
        warned(name,warnName);
    }
    if(userid.current.value.trim()===""){
        warned(userid,warnUserId)
    }

    if(pass.current.value.trim()===""){
        warned(pass,warnpass);
    }



    if(name.current.value.trim()===""||userid.current.value.trim()===""|| pass.current.value.trim()===""){
        warn.current.style.display="block";
        warn.current.innerHTML="Please enter Name ,userid  and password";
        
        setTimeout(()=>{
            warn.current.style.display="none";
        },1000)
        return ;
    }

    let arrList = localStorage.getItem("List")|| []
    let obj = {
        name:name.current.value.trim(),
        userid : userid.current.value.trim(),
        password:pass.current.value.trim(),
        accountNumber:accountNumber+1,
        Balance: Math.floor((Math.random()*1000))
       
    };
    setAccountNumber(accountNumber+1);

    if(arrList.length === 0){
        arrList.push(obj)

        let obb= JSON.stringify(arrList);
        
        localStorage.setItem("List",obb);

    }else{
        let arr = localStorage.getItem("List");
        arr= JSON.parse(arr)
        arr.push(obj);
        localStorage.setItem("List",JSON.stringify(arr))

    }
    setTimeout(()=>{
        warn.current.style.display="block";
    },1000)

        nav("/login")
    

}


function uid({target:{value,name}}){

    warn.current.display="none";
    let obj = name===userid.current.name?userid.current:pass.current;


    let arr=value.split("");

    if(!(value.length>6 && value.length<15)){
        warn.current.style.display="block";
        console.log( warn.current.style.display);
        warn.current.innerHTML="Userid and password must be in between 6 to 15 letters ";
        obj.border="2px solid red";
        return;


    }

   if(! arr.some(a=>{
        return ((a>='a' && a<'z')||(a>='A' && a<='Z'))
    })){
        warn.current.style.display="block";
        console.log( warn.current.style.display);
        warn.current.innerHTML="Userid and password must be one albhabet";
        obj.border="2px solid red";
        return;
    }

    if(! arr.some(a=>{
        return ((a>='A' && a<='Z'))
    })){
        warn.current.style.display="block";
        console.log( warn.current.style.display);
        warn.current.innerHTML="Userid and password must be one UpperCase albhabet";
        obj.border="2px solid red";
        return;
    }

    if(! arr.some(a=>{
        return ((a>=0 && a<=9))
    })){
        warn.current.style.display="block";
        console.log( warn.current.style.display);
        warn.current.innerHTML="Userid and password must have atlest  Number";
        obj.border="2px solid red";
        return;
    }
    

}

function checkName(){
    warnName.current.innerHTML=""
    name.current.style.boxShadow= boxwhite;
    name.current.style.border="none";

    let value = name.current.value.trim();

    if(value===""){
        name.current.style.border= borderred;
        name.current.style.boxShadow=boxred;
        warnName.current.innerHTML="Name is empty"
        return false;
    }
    warn.current.style.display="none";
    

    if( value.split("").some(a=>{
        return !((a>='a' && a<='z')||(a>='A' && a<='Z')||a===" ")
    })){
       
        name.current.style.border=borderred;
        name.current.style.boxShadow=boxred;
        warnName.current.innerHTML="Invalid name"
        warn.current.style.display="block";
        warn.current.innerHTML="Please don't enter special character and number in Name field";
        return false ;
        
    }
    nameBool= true;
}



    return (
        <div className="fullSignUp">
        <div className="signup">
            <p className="head">SignUp</p>
          <div className="fname sec1">
            <p>Name</p>
            <input type="text" ref={name} placeholder=" Name..." onKeyUp={checkName} />
            <div className="warnname warn" style={{color:"red"}} ref={warnName}></div>
          </div>

          <div className="userid sec1">
            <p>UserId</p>
            <input type="text" placeholder=" Userid..." name="id" ref={userid} onKeyUp={uid} />
            <div className="warnuserid warn" style={{color:"red"}} ref={warnUserId}></div>
          </div>

          <div className="pass sec1">
            <p>Password</p>
          <input type="Password" placeholder=" Password..." name="password" ref={pass} onKeyUp={uid}/>
          <div className="warnpass warn" style={{color:"red"}} ref={warnpass}></div>
          </div>

          <div>
            <input type="submit" onClick={check} className="button" />
          </div>
            <nav className="warning"  ref={warn}></nav>
        </div>
        </div>
    )
   
    
}











