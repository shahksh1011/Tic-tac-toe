/**
 * @format
 */
/** @format */
import React, { Component } from "react";
import { AppRegistry, View, StatusBar, BackHandler, Platform } from "react-native";
import { Provider } from "react-redux";
import { persistor, pStore } from "./src/redux/store";
//import { PersistGate } from "redux-persist/lib/integration/react";
import { name as appName } from "./app.json";
import AppContainer from './App';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (Platform.OS == "android") {
      BackHandler.addEventListener("hardwareBackPress", () => {
        return true;
      });
    }
  }

  componentWillUnmount() {
    if (Platform.OS == "android") {
      BackHandler.removeEventListener("hardwareBackPress", () => {
        return true;
      });
    }
  }

  render() {
    return (
      <Provider store={pStore}>
          <StatusBar //doubt for ios
            hidden={true}
            backgroundColor={"#4d9900"}
            barStyle="light-content"
          />
          <AppContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);
