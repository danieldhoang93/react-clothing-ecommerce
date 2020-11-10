import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.jsx';
import ShopPage from './pages/shop/shop.jsx';
import LoginPage from './pages/login/login.jsx';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/header/header.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user-action';

class App extends React.Component {  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      createUserProfileDocument(userAuth);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        })
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/login' component={LoginPage}/>
        </Switch>
      </div>
    );
  }
} 

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
