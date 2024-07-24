import React,{useState} from 'react'


export default function Textform(props) {

  const [text , setText] = useState('text');

    const handleupclick = ()=>{
        console.log("uppercase was clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("converted to uppercase" , "success")
    }
    const handleonchange = (event)=>{
        console.log("on chnage");
        setText(event.target.value)
    }
    const handlelowclick = ()=>{
        const newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("converted to lowercase" ,"success")

    }
    const handleclearclick = ()=>{
        console.log("cleartext")
        let clrtext = " ";
        setText(clrtext);
        props.showalert("Clear the text " + "success")

    }
      

  return (
    <>
    <div>
<div className="mb-3">
    <h1  style = {{color: props.darkmode === 'dark'?'white':'black'}}>{props.heading}</h1>

  {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
  <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleonchange}  style = {{backgroundColor: props.darkmode === 'dark'?'grey':'white'}} rows="10" value={text}></textarea>
</div>
  <button className="btn btn-primary mx-2" onClick={handleupclick}> Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handlelowclick} >Convert to Lowercase</button>
    <button className="btn btn-primary" onClick={handleclearclick} >Clear the text</button>
    </div>
    <div className="container">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} chracters</p>
        <p>{0.008 * text.split(" ").length} mintues</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
