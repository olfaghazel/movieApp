import Home from './components/Home';
import WatchTrailer from './components/WatchTrailer';
import {Switch,Route,Link} from 'react-router-dom';
import {useState} from 'react';
import { ReactComponent as ReactLogo } from "./home-solid.svg";

const App =()=>{
  const[filmSelection,setFilmSelection]=useState({})
return(
  <>
  <Link to='/'><ReactLogo style={{width:"50px"}}/></Link>
  <Switch>
    <Route exact path="/" render={()=><Home setFilmSelection={setFilmSelection} />}/>
    <Route path="/watchtrailer" render={()=><WatchTrailer title={filmSelection.title} description={filmSelection.description} trailer={filmSelection.trailer}/>}/>
  </Switch>
  </>
);
}
export default App