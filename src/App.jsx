import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import {UC,LC,SC,Num} from './PassChar'



function App() {
  const [upperCase, setUpperCase] = useState(!true)
  const [lowerCase, setLowerCase] = useState(!true)
  const [specialchar, setSpecialchar] = useState(!true)
  const [Digit, setDigit] = useState(!true)
  const [passwordLength,setPsswordLength]=useState(10);
  const [fpass,setFpass]=useState('');
//   let SC=" ! @ # $ % ^ & * ( ) - _ = + \ | [ ] { } ; : / ? . >"
//  let UC='A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'
//  let LC='a b c d e f g h i j k l m n o p q r s t u v w x y z'
//  let Num='0123456789'

  let createpassword=()=>{
    // alert("hi")
    let charset='';
    let finalpassword='';
  if (upperCase || lowerCase || specialchar || Digit ) {
   
  // 
  if( passwordLength >= 10 && passwordLength<=20){
  
    if (upperCase) {charset+=UC;}
  if (lowerCase) {charset+=LC;}
  if (specialchar) {
    charset+=SC
  };
  if (Digit) {charset+=Num;}
  
  for(let i=0;i<passwordLength;i++)
  {
    finalpassword=finalpassword+charset.charAt(Math.floor(Math.random()*charset.length));
  }

  toast.success("password generated"); 
  
setFpass(finalpassword);
  }
else{
  toast.error
}

}
  else{
toast.error("kindly click on any of the checkbox");
  }
  

  }
  let coptext=()=>{
    navigator.clipboard.writeText(fpass);
    toast.success('Copied');
  }
  return <>
  <ToastContainer />
    <div className="passwordBox"><h4>PassWord Generator</h4>
    <div className='passwordBoxIn'>
      <input type='text' readOnly value={fpass}></input><button className='copy' onClick={coptext}>COPY</button>
    </div>
    <div className='passlength'>
      <label>Password length  -</label><input type='number' value={passwordLength} onChange={(e)=>setPsswordLength(e.target.value)} min={10} max={20}></input>
    </div>
   
    
    <div className='passLen'>
      <label>Includes Uper Case</label>
      <input type='checkBox' checked={upperCase} onChange={()=>setUpperCase(!upperCase)}></input>
    </div>
    <div className='passLen'>
      <label>Includes Lower Case</label>
      <input type='checkBox' checked={lowerCase} onChange={()=>setLowerCase(!lowerCase)}></input>
    </div>
    <div className='passLen'>
      <label>Includes Special character</label>
      <input type='checkBox' checked={specialchar} onChange={()=>setSpecialchar(!specialchar)}></input>
    </div>
    <div className='passLen'>
      <label>Includes Digits</label>
      <input type='checkBox' checked={Digit} onChange={()=>setDigit(!Digit)} ></input>
    </div>
    <button className='btn' onClick={()=>createpassword()}>
      Generate
    </button>
    </div>

  </>
}

export default App
