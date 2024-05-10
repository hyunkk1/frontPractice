import "./App.css";
import NewsList from "./NewsList";
import NewsItem from "./NewsItem";
import axios from "axios";
import News from "./News";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserStore from "./context/UserStore";
import ImageUploader from "./ImageUploader";
import WithdrawButton from "./infocut";

function App() {
  return (
    <></>

    // <UserStore>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<ImageUploader />} />
    //       <Route path="/Signup" element={<Signup />} />
    //       <Route path="/Home" element={<Home />} />
    //     </Routes>
    //   </Router>
    // </UserStore>
  );
}

export default App;
