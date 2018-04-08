import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showMap: () => dispatch(NavigationActions.navigate({ routeName: "Map" }))
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    common: state.common
  };
};

class App extends Component {
  onShowMapPress = () => {
    this.props.showMap();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Redux Starter Kit!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit components/App.js
        </Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button title="View Map" onPress={this.onShowMapPress} />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
