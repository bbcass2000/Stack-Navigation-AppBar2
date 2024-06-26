import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";
import MyStack from "./routers/MyStack";
import MyDrawer from "./routers/MyDrawer";
import MyBottomTabNavigator from "./routers/MyBottomNavigator";

const App = () =>{
  return(
    <NavigationContainer>
      <PaperProvider>
        <MyBottomTabNavigator/>
      </PaperProvider>
    </NavigationContainer>
  )
}
export default App;