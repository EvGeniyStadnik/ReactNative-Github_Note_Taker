import React, { Component } from 'react';

import  {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

let styles = StyleSheet.create({
  container: {
    backgroundColor: '#48BBEC',
    paddingBottom: 10
  },
  name: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
    color: 'white'
  },
  handle: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'white'
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center'
  }
});

const Badge = ({ userData }) => {
  console.log(userData);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: userData.avatar_url}}/>
      <Text style={styles.name}>{userData.name}</Text>
      <Text style={styles.handle}>{userData.login}</Text>
    </View>
  )
};

export default Badge;