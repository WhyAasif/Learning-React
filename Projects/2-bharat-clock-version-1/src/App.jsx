import "./App.css";
import ClockHeading from "./componenets/ClockHeading";
import ClockSlogan from "./componenets/ClockSlogan";
import CurrentTime from "./componenets/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./componenets/Fooditems";


function App() {
 

  return (
    <>
      <center className="Container">
        <ClockHeading />
        <ClockSlogan />
        <CurrentTime />
      </center>
      <h2 className="Food-heading">Food Item List</h2>
      <ul className="list-group">
        <FoodItems />
      </ul>
    </>
  );
}

export default App;
