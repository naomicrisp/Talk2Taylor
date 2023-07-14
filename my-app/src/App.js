import './App.css';
import { useState } from 'react';
import speaknow from './images/speaknow.png';

let taylorQuote = "I'm sorry, Taylor can't come to the phone right now.";
function App() {
  const [quote, setQuote] = useState(taylorQuote);
  const [isClicked, setIsClicked] = useState(false);

  //function to fetch random Taylor Swift quote
  async function fetchQuote() {
    const response = await fetch('https://taylorswiftapi.onrender.com/get');
    const data = await response.json();
    console.log(data)
    setQuote(data.quote);
    setIsClicked(true);
    return data;
  }
  
  if (!isClicked) {
  return (
    <div className="App">
    <div className = "left-bar"> 
      <div className ="main-text">
        <h1> Feeling down? </h1> 
        <h1> Hopeless? </h1> 
        <h1> Uninspired? </h1> 
        <p> Taylor understands. </p> 
        <p> Click the button below to talk to Taylor </p>
      </div>
      <button className="button" onClick={fetchQuote}> Speak now </button>
      </div>
      <img className="speaknow" alt="speaknow" src={speaknow}/>
    </div>
  );
}

else if (isClicked) {
  
  return (
    <div className="App">
    <div className = "left-bar"> 
      <div className ="main-text">
        <h1> Feeling down? </h1> 
        <h1> Hopeless? </h1> 
        <h1> Uninspired? </h1> 
        <p> Taylor understands. </p> 
        <p> Click the button below to talk to Taylor </p>
      </div>
      <button className="button" onClick={fetchQuote}> Speak now </button>
      </div>
      <h1 className="quote"> "{quote}"</h1> 
      <img className="speaknow" alt="speaknow" src={speaknow}/>
    </div>
  );
}

// else if ((window.innerWidth < 700) && (!isClicked) ) {
//   <div className ="main-text">
//   <div>
//       <img classname = "leaning-tay" src={taylorleaning} alt="leaning"/>
//       <button className="button" onClick={fetchQuote}> Speak now </button>
//     </div>
//   <h1> Feeling down? </h1> 
//   <h1> Hopeless? </h1> 
//   <h1> Uninspired? </h1> 
//   <p> Taylor understands. </p> 
//   <p> Click the button below to talk to Taylor </p>
// </div>
// }

// else if ((window.innerWidth < 700) && (isClicked) ) {
//   return (
//     <div className="App">
//     <h1 className="quote"> {quote} </h1> 
//     <div className = "taylor-button">
//       <img classname = "leaning-tay" src={taylorleaning} alt="leaning"/>
//       <button className="button" onClick={fetchQuote}> Speak now </button>
//     </div>
   
//     </div>
//   ) 
// }

// else {
//   return (
//     <div className="App">
//     <h1>error</h1> 
//     </div>
//   )
// }
}

export default App;
