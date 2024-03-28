import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import {BrowserRouter , Route , Switch}  from 'react-router-dom'
import TeamMatches from './components/TeamMatches/index.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/ipl/:id' component={TeamMatches}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
