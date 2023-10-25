import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import { MyContextProvider } from "./contextApi/MyContextProvider";
import Favourites from "./components/Favourites";

function App() {
  return (
    <MyContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Favourites" element={<Favourites />}></Route>
        </Routes>
      </BrowserRouter>
    </MyContextProvider>
  );
}

export default App;
