import React, { Component } from 'react';
import { View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import api from '../Utils/api';
import Dashboard from './Dashboard';

export let styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

class Main extends Component {

  state = {
    username: '',
    isLoading: false,
    error: false
  };

  handleChange = (event) => {
    this.setState({
      username: event.nativeEvent.text
    })
  };

  handleSubmit = () => {
    //update our indicator spinner
    this.setState({
      isLoading: true
    });
    console.log('SUBMIT', this.state.username);
    //fetch data from github
    api.getBio(this.state.username).then(data => {
      if(data.message ===  "Not Found"){
        this.setState({
          error: 'User not found',
          isLoading: false
        })
      } else {
        this.props.navigator.push({
          title: data.name || "Select an Option",
          component: Dashboard,
          passProps: {userData: data}
        });
        this.setState({
          isLoading: false,
          error: false,
          username: ''
        });
      }
    });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>
          Search for a Github User
        </Text>
        <TextInput
          value={this.state.username}
          onChange={this.handleChange}
          style={styles.searchInput}
        />
        <TouchableHighlight
          onPress={this.handleSubmit}
          style={styles.button}
          underlayColor="white"
        >
          <Text style={styles.buttonText}>
            SEARCH
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Main;

