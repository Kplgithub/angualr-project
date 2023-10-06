import "./desgin.css";
import ApiData from "./ApiData";
import Health from "./Health"
import Science from "./Science"
import Entertainment from "./Entertainment";
import SportsApi from "./SportsApi";
import { NavLink } from "react-router-dom";
import {Route,Routes } from "react-router-dom";
const App=()=> {
    return (
      <>
      <div className="App">
      <div className="newsImage">
        <img src="background.png" alt="BackgroundImage" />
      </div>
      <nav className="navbardesgin">
        <div className="btn-group">
          <NavLink  to="/">Top Bussiness News</NavLink>
          <NavLink  to="/entertainment">Top Entertainment News</NavLink>
          <NavLink to="/sports">Top Sports News</NavLink> 
          <NavLink to="/health">Top Health News</NavLink> 
          <NavLink to="/science">Top Science News</NavLink> 

        
          {/* <button className="btn-group__item"onClick="#">Top Headlines</button>*/}
         </div>
      </nav>
      {/* <SportsApi/> */}
      <Routes>
        <Route path='/' element={<ApiData/>}/>
        <Route path='/entertainment' element={<Entertainment/>} />
        <Route path='/sports' element={<SportsApi/>} />
        <Route path='/health' element={<Health/>} />
        <Route path='/science' element={<Science/>} />
      </Routes>
      </div>
      </>
    );
  }
export default App;
