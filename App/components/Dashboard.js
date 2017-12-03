import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image
} from 'react-native';
import Profile from './Profile';
import Repositories from "./Repositories";

import api from '../Utils/api';

let styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

class Dashboard extends Component {

  makeBackground(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    };

    if (btn === 0) {
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1) {
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }

    return obj;
  }

  goToProfile = () => {
    console.log('go to profile');
    this.props.navigator.push({
      title: 'Badge Component',
      component: Profile,
      passProps: { userData: this.props.userData }
    })
  };

  goToRepo = () => {
    const data =  api.getRepos(this.props.userData.login);
    data.then(repos =>  {
      this.props.navigator.push({
        title: 'Repositories',
        component: Repositories,
        passProps: { userData: this.props.userData, repos }
      })
    });

  };

  goToNotes = () => {
    console.log('go to notes')
  };

  render() {
    const { avatar_url } = this.props.userData;
    return (
      <View style={styles.container}>
        <Image source={{uri: avatar_url}} style={styles.image}/>
        <TouchableHighlight
          onPress={this.goToProfile}
          underlayColor='#48BBEC'
          style={this.makeBackground(0)}
        >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.goToRepo}
          underlayColor='#E77AAE'
          style={this.makeBackground(1)}
        >
          <Text style={styles.buttonText}>View Repos</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.goToNotes}
          underlayColor='#758BF4'
          style={this.makeBackground(2)}
        >
          <Text style={styles.buttonText}>View Notes</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Dashboard;