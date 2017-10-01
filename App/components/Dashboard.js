import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { styles } from './Main';

class Dashboard extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>
          {this.props.userData.name}
        </Text>
      </View>
    );
  }
}

export default Dashboard;