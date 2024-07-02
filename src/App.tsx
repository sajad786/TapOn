import "./styles/unistyles";
import { Text, View } from 'react-native'
import React from 'react'
import OuterScreen from '@screens/OuterScreen/OuterScreen'
import { Provider } from "react-redux";
import store from "@redux/store";
import Home from "@screens/Home/Home";

export default function App() {
  return (
    <Provider store={store} >
    <View>
      {/* <OuterScreen/> */}
      <Home/>
    </View>
    </Provider>
  )
}
