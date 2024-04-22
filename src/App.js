
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ViewRestaurant from "./Components/ViewRestaurant";
import AddRestaurant from "./Components/AddRestaurant";
import EditRestaurant from "./Components/EditRestaurant";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewRestaurant />} />
          <Route path="/addrestaurant" element={<AddRestaurant/>}/>
          <Route path="/editrestaurant/:id" element={<EditRestaurant/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
