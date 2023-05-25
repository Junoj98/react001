import React,{useState} from "react";
import './App.css';

function App(){
  const [weight,setweight] = useState(0);
  const [height,setheight] = useState(0);
  const [bmi,setbmi] = useState('');
  const [message,setmessage] = useState('');

  let imgsrc;

  let calculatebmi = (event)=>{
    event.preventDefault();
    if(weight===0 || height===0)
    {
      alert("Invalid Input");
    }
    else{
      let bmi=(weight / (height/100) **2);
      setbmi(bmi.toFixed(2))

      if(bmi<18.5)
      {
        setmessage("You are Under Weight")
      }

      else if(bmi>=18.5 && bmi<24.5)
      {
        setmessage("You are Ideal weight")
      }

      else if(bmi>=24.5 && bmi<=29.5)
      {
        setmessage("You are Over Weight")
      }

      else{
        setmessage("You are Obese")
      }

    }
  }
// image section according to the weight
  if(bmi<1)
  {
    imgsrc=null;
  }

  else if(bmi<18.5)
  {
    imgsrc=require('./image/under.jpg');
  }

  else if(bmi>=18.5 && bmi<24.5)
  {
    imgsrc=require('./image/healthy.jpg');
  }

  else if(bmi>=24.5 && bmi<29.5)
  {
    imgsrc=require('./image/overweight.jpg');
  }

  else 
  {
    imgsrc=require('./image/obese.jpg');
  }

  // function for reload
  let reload = ()=>{
    window.location.reload();
  }

  return(
    <div className="app">
      <div className="container">
        <h2 className="center">Calculate Your BMI</h2>
        <form onSubmit={calculatebmi}>
          <div>
          <label>weight (Kg)</label>
          <input value={weight} onChange={(e)=>setweight(e.target.value)}/>
          </div>

          <div>
          <label>Height (cm)</label>
          <input value={height} onChange={(e)=>setheight(e.target.value)}/>
          </div>

          <button className="btn" type="submit">
              Submit
          </button>

          <button className="btn btn-outline" type="submit" onClick={reload}>
              Reload
          </button>

        </form>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          <img src={imgsrc} alt=""></img>
        </div>

      </div>
    </div>
  )
}
export default App;