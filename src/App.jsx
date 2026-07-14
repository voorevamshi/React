import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CricketScore from "./CricketScore";
import IntrestCalculator from "./IntrestCalculator";
import ListOfObjects from "./ListOfObjects"
import ListOfStrings from "./ListOfStrings"
import Object from "./Object"
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import { useSelector } from "react-redux";



function App() {

  const isAdmin =false;

  const cartItems = useSelector(globalState=>globalState.cart);

 const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <>    
<BrowserRouter>
{ isAdmin && <><Link to="/object">Object</Link>
<Link to="/listOfObjects">ListOfObject</Link>
<Link to="/listOfStrings">ListOfString</Link>
<Link to="/cricketScore">CricketScore</Link>
<Link to="/intrestCalculator">IntrestCalculator</Link></>
}
<span style={{padding:"50px"}}>
<Link to="/vegtables" ><span style={{padding:"5px"}}>Veg</span></Link>
<Link to="/nonVegtables"><span style={{padding:"5px"}}>Non Veg</span></Link>
<Link to="/cart"><span style={{padding:"5px"}}>Cart {totalCartCount}</span></Link>
</span>
{<br></br>}
<Routes>
 <Route path="/object" element={<Object/> }></Route>
<Route path="/listOfObjects" element={<ListOfObjects/> }></Route>
<Route path="/listOfStrings" element={<ListOfStrings/>}></Route>
<Route path="/cricketScore" element={<CricketScore/> }></Route>
<Route path="/intrestCalculator" element={<IntrestCalculator/> }></Route>


<Route path="/vegtables" element={<Veg/> }></Route>|
<Route path="/nonVegtables" element={<NonVeg/> }></Route>
<Route path="/cart" element={<Cart/> }></Route>
</Routes>
</BrowserRouter>

    
    
    </>
  )
}

export default App











