import{
  BrowserRouter,
  Routes,
  Route
}from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/lists/List";
import Hotel from "./pages/Hotel/Hotel";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotel" element={<Hotel/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
