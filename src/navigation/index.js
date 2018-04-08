import React, { Component } from "react";
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { BackHandler } from "react-native";

import { addListener } from "../utils/redux";
import Nav from "./Navigator";

class Navigator extends Component {
  componentDidMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.onBackPress.bind(this)
    );
  }
  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.onBackPress.bind(this)
    );
  }
  onBackPress() {
    const { dispatch, nav } = this.props;
    const activeRoute = nav;
    if (activeRoute.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  }
  render() {
    return (
      <Nav
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(Navigator);
