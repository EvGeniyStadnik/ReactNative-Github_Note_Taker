import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Badge from './Badge';
import Separator from './Helpers/Separator';
import RepoView from './Helpers/RepoView';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

class Repositories extends Component{

  openPage = url => {
    this.props.navigator.push({
      title: 'Web View',
      component: RepoView,
      passProps: { url }
    })
  };

  renderListRepos = () => {
    const { repos } = this.props;
    return repos.map(repo => {
      const description = repo.description || '';
      return (
        <View key={repo.id}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={() => this.openPage(repo.html_url)}
              underlayColor='transparent'
            >
              <Text style={styles.name}>{repo.name}</Text>
            </TouchableHighlight>
            <Text style={styles.stars}>Stars: {repo.stargazers_count}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <Separator />
        </View>
      )
    });
  };

  render(){
    const { userData } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Badge userData={userData} />
        { this.renderListRepos() }
      </ScrollView>
    )
  }
}

Repositories.propTypes = {
  userData: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired
};

export default Repositories;