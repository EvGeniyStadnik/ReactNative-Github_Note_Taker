import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import Badge from './Badge';

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});

class Profile extends Component {

  showTitle = title => {
    if (title === 'public_repos') title = title.replace('_', ' ');
    return title[0] && title[0].toUpperCase() + title.slice(1)
  };

  render() {
    const { userData } = this.props;
    const topicArr = ['company', 'location', 'followers', 'following', 'email',
      'bio', 'public_repos'];
    const list = topicArr.map((item, index) => {
      if (!userData[item]){
        return <View key={index} />
      } else {
        return (
          <View key={index} style={styles.rowContainer}>
            <Text style={styles.rowTitle}>{this.showTitle(item)}</Text>
            <Text style={styles.rowContent}>{userData[item]}</Text>
          </View>
        )
      }
    });
    return (
      <ScrollView style={styles.container}>
        <Badge userData={userData} />
        {list}
      </ScrollView>
    );
  }
}

Profile.propTypes = {
  userInfo: PropTypes.object.isRequired
};

export default Profile;