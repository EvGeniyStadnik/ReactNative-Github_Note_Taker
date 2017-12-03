import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  WebView,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F6F6EF',
  }
});

class Web extends Component {
  render() {
    const { url } = this.props;
    return (
      <View style={styles.container}>
        <WebView url={url}/>
      </View>
    );
  }
}

Web.propTypes = {
  url: PropTypes.string.isRequired
};

export default Web;