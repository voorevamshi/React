import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CricketScore from "./CricketScore";
import IntrestCalculator from "./IntrestCalculator";
import ListOfObjects from "./ListOfObjects"
import ListOfStrings from "./ListOfStrings"
import Object from "./Object"
import Veg from "./Veg";
import NonVeg from "./NonVeg";



function App() {

  const isAdmin =false;

  return (
    <>    
<BrowserRouter>
 <Link to="/object">Object</Link>
<Link to="/listOfObjects">ListOfObject</Link>
<Link to="/listOfStrings">ListOfString</Link>
<Link to="/cricketScore">CricketScore</Link>
<Link to="/intrestCalculator">IntrestCalculator</Link>
<Link to="/vegtables">Veg</Link>
<Link to="/nonVegtables">Non Veg</Link>
{<br></br>}
{<br></br>}
{<br></br>}
<Routes>
 <Route path="/object" element={<Object/> }></Route>
<Route path="/listOfObjects" element={<ListOfObjects/> }></Route>
<Route path="/listOfStrings" element={<ListOfStrings/>}></Route>
<Route path="/cricketScore" element={<CricketScore/> }></Route>
<Route path="/intrestCalculator" element={<IntrestCalculator/> }></Route>
<Route path="/vegtables" element={<Veg/> }></Route>|
<Route path="/nonVegtables" element={<NonVeg/> }></Route>

</Routes>
</BrowserRouter>

    
    
    </>
  )
}

export default App
