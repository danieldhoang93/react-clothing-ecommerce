import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.jsx';
import ShopPage from './pages/shop/shop.jsx';
import LoginPage from './pages/login/login.jsx';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      createUserProfileDocument(userAuth);
      console.log(userAuth);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          },
          () => {
            console.log('current user: ', this.state)
          })
        })
      }
      this.setState({currentUser: userAuth});
    })
    console.log(this.state);
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/login' component={LoginPage}/>
        </Switch>
      </div>
    );
  }
} 

export default App;
