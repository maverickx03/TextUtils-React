import React, { useState } from "react";




export default function TextForm(props) {
  let [text, setText] = useState(" ");
  const handleUpClick = () => {
    console.log("Uppercase was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    if(text.length === 0){
      props.showalert("Enter Text to be Converted to UpperCase","danger");
    }
    else{
      props.showalert("Converted to UpperCase","success");
    }
    
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const handleLoClick = ()=>{
    console.log("Lowercase was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    if(text.length === 0){
      props.showalert("Enter Text to be Converted to LowerCase","danger");
    }
    else{
      props.showalert("Converted to LowerCase","success");
    }
  };
    
    const handleClearclick = ()=> {
        console.log("Clear Text was Clicked")
        let newText = "";
        setText(newText);
        props.showalert("Text Cleared","success");
      };
   
    const handleCapClick = ()=> {
        console.log("Capitalize was Clicked");
        const arr= text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        
        }
        let newText = arr.join(" ");
        setText(newText);
        if(text.length === 0){
          props.showalert("Enter Text to be Capitalized","danger");
        }
        else{
          props.showalert("Text Capitalized","success");
        }
      };
      
               
 
 
  return (
    <>
      <div className="container my-3" style={{color : props.Mode === 'dark' ? 'white' : 'black'}}>
        <h2>{props.heading} </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8" style={{backgroundColor : props.Mode === 'dark' ? 'grey' : 'white', color : props.Mode === 'dark' ? 'white' : '#042743' }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >
          Convert to UpperCase{""}
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCapClick}>Capitalize</button>
        <button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear Text</button>
      </div>
      <div className="container my-3" style={{color : props.Mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your text summary</h2>
        <p>
       {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
            {0.008 * (text.split(" ").length)} minutes read
        </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>
      </div>
    </>
  );
}
