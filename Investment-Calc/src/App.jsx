import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {

  const [userInput, setUserInput] = 
  useState({
      initialInvestment: 10000,
       annualInvestment: 1200,
        expectedReturn: 6,
         duration: 10
      });

      const isInputValid = userInput.duration>=1;

    const handleChange = (inputIdentifier,newValue) => {
      setUserInput(
          (prevUserInput) => {
              return {
                  ...prevUserInput,
                  [inputIdentifier]: +newValue
              };
          }
      );
  };

  return (<>
    <Header />
    <UserInput onChange={handleChange} userInput={userInput} />
    {!isInputValid && <p className='error'>Please enter a valid duration (1 year or more)</p>}
   {isInputValid && <Results input={userInput}/>}
    </>
  )
}

export default App
