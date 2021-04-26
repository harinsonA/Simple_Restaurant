import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from "./Organisms/NavBar";
import Home from "./Page/Home";
import About from "./Page/About";

const App = () => (
    <Router>
        <NavBar />
        <Switch>   
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />

        </Switch>
    </Router>    
)


export default App;
