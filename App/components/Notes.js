import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../Utils/api';
import Separator from './Helpers/Separator';
import Badge from './Badge';

import {
  View,
  Text,
  ListView,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  button: {
    height: 60,
    backgroundColor: '#48BBEC',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchInput: {
    height: 60,
    padding: 10,
    fontSize: 18,
    color: '#111',
    flex: 10
  },
  rowContainer: {
    padding: 10
  },
  footerContainer: {
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

class Notes extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.notes),
      notes: '',
      error: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      note: e.nativeEvent.text
    })
  };

  handleSubmit = () => {
    let note = this.state.note;
    this.setState({
      note: ''
    });

    api.addNote(this.props.userData.login, note)
      .then(data => {
        api.getNotes(this.props.userData.login)
          .then(data => {
            this.setState({
              dataSource: this.ds.cloneWithRows(data)
            })
          })
      }).catch(error => {
        console.log('Request failed', error);
        this.setState({error})
    })
  };

  renderRow = rowData => {
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text>{ rowData }</Text>
        </View>
        <Separator />
      </View>
    )
  };

  footer(){
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          value={this.state.note}
          onChange={this.handleChange}
          placeholder="New Note"
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit}
          underlayColor='#88D4F5'
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderHeader={() => <Badge userData={this.props.userData} />}
        />
        {this.footer()}
      </View>
    );
  }
}

Notes.propTypes = {
  userData: PropTypes.shape().isRequired,
  notes: PropTypes.shape().isRequired,
};

export default Notes;