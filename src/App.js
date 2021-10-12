import './assets/css/main.css'
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Rooms from './components/Rooms';
import Collage from './components/Collage';
import RoomsDetails from './components/RoomsDetails';
import Countries from './components/Countries';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/rooms' component={Rooms}/>
                <Route exact path='/rooms/:id' component={RoomsDetails}/>
                <Route exact path='/collage' component={Collage}/>
                <Route exact path='/countries' component={Countries}/>
                <Route>404 not found</Route>
            </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
