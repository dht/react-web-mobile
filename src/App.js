import React, { Component } from "react";
import "./App.scss";
import { hot } from "react-hot-loader";
import { View, Text } from "react-native";

class App extends Component {
    render() {
        return (
            <View className="App">
                <h1> Hello, World! </h1>
                <Text>a2</Text>
            </View>
        );
    }
}

export default hot(module)(App);
