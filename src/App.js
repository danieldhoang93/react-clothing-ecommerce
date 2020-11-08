import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.jsx';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
