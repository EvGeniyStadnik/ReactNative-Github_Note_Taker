import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image
} from 'react-native';

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
    console.log('go to profile')
  };

  goToRepo = () => {
    console.log('go to repo')
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