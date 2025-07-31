import React, {useState} from 'react'

export default function Textform(props) {
    const handleupClick = ()  =>{
        let newText = text.toUpperCase()
        setText(newText);
        props.showalert("Coverted Into Uppercase", "success");

    }

     const handleLoClick = ()  =>{
        let newText = text.toLowerCase()
        setText(newText);
        props.showalert("Coverted Into LowerCase", "success");

    }

    const handleclearClick = ()  =>{
        let newText = " "
        setText(newText);
        props.showalert("Cleared The Text", "success");
        

    } 

    const handlecapitalizedClick = ()  =>{
       let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showalert("First Letter Converted Into Capitized.", "success");
    }

      
    const handleVovelClick = () => {
    const vowels = text.match(/[aeiouAEIOU]/g);
    const count = vowels ? vowels.length : 0;
    alert(`Number of vowels: ${count}`);
  };

    const handleonChange = (event) => {
        setText(event.target.value)
    }

    const [ text, setText ] = useState('');


  return (
    <>
    <div className='container' style={{color: props.mode=== 'dark'?'white': 'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">   
        <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode=== 'dark'?'#1b1d3f': 'white', border: '1px solid blue', color: props.mode=== 'dark'?'white': 'black'}}id="myBox" rows="8"></textarea>       
    </div>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleupClick}>  Convert To UpperCase </button>
         <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>  Convert To LowerCase </button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>  Clear Text </button>
         <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handlecapitalizedClick}>  Capitalized Text </button>
         <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleVovelClick}>  Vovel In Text </button>
    </div>
     <div className='container my-3 ' style={{color: props.mode=== 'dark'?'white': 'black'}}>
       <h1> Your Text Summery </h1>
       <p> {text.split( /\s+/).filter((Element)=>{return Element.length!==0}).length} words and {text.length} characters </p>
       <p> { 0.008 * text.split(" ").filter((Element)=>{return Element.length!==0}).length} Minutes Reading Time  </p>
       <h2> Preview </h2>
       <p> {text.length>0? text:"Nothing To Preview.. "} </p>
       

    </div>
   
    </>
    
  )
}
