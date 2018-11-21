import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = {
    loggedIn: null
  };

  componentWillMount(){
    firebase.initializeApp({
    apiKey: "AIzaSyD_xSFOuxO7oMmaMXuwB3BCMIHnRb6YzxQ",
    authDomain: "authorizationapp-60494.firebaseapp.com",
    databaseURL: "https://authorizationapp-60494.firebaseio.com",
    projectId: "authorizationapp-60494",
    storageBucket: "authorizationapp-60494.appspot.com",
    messagingSenderId: "449926992457"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch(this.state.loggedIn){
      case true: return (
                  <Card>
                    <CardSection>
                      <Button
                        onPress={() => {firebase.auth().signOut()}}
                      >
                        Log Out
                      </Button>
                    </CardSection>
                  </Card>
                );
      case false: return (<LoginForm />);
      default: return (<Spinner size='large' />);
    }
  }

  render() {
    return (
      <View>
        <Header headerText = 'Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
