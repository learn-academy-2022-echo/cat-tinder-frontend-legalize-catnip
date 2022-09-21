import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './App.css';
import './index.css';
import CatEdit from "./pages/CatEdit";
import CatIndex from "./pages/CatIndex";
import CatNew from "./pages/CatNew";
import CatShow from "./pages/CatShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import cats from "./mockCats";


  
  


const App = () => {

  const [cats, setCats] = useState(mockCats)
  console.log(cats)

  return (

    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats}/>} />
        <Route path="/catshow/:id" element={<CatShow cats={cats}/>} />
        <Route path="/catnew" element={<CatNew />} />
        <Route path="/catedit" element={<CatEdit />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>


      <Footer />
    </div>

  );
}


export default App;
