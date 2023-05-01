import ListGroup from "./components/ListGroup";
//import './App.css'
import { BsFillCalendarFill } from 'react-icons/bs'

import { useState } from "react";
import { Alert } from "./components/Alert";
import  Button from "./components/Button";
import { AiFillHeart } from "react-icons/ai";
import Like from "./components/Like";

function App() {
  
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [drink, setDrink] = useState({ 
    title: "Americano",
    price: 5,
  })

  const handleClick = () => {
       setDrink({
        ...drink,
        price: 6
       });
  };

  /*
  return (
    <div>
      <BsFillCalendarFill color="red" size={40}></BsFillCalendarFill>
    </div>
  );
  */

  /*
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={(item: string) => console.log(item) } />
    </div>
  );
  */
  

  /*
  return (
    <div>
      <Alert>Hello <span>World!</span></Alert>
    </div>
  );
*/
/*
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Hello <span>World!</span>
      </Button>
    </div>
  );
*/

/*
return (
  <div>
    <Like onClick={() => console.log('Clicked') }></Like>
  </div>
);
*/

return (
  <div>
    {drink.price}
    <button onClick={handleClick}>Click Me</button>
  </div>
);

}

export default App;
