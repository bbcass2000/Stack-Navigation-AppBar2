import { createStackNavigator } from "@react-navigation/stack";
import {Image} from 'react-native'
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
import DetailsScreen from "../screens/DetailScreen";
import CustomNavigationBar from "../screens/CustomNavigationBar";

const Stack = createStackNavigator();

const NewTitle = () =>{
    return(
        <Image source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} 
        style={{}}/>
    )
}
const MyStack = () =>{
    return(
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={{
                title:"Home Screen",
                headerStyle:{
                backgroundColor:"aqua"
                },
                headerTitleAlign:'center',
                header: (props) => <CustomNavigationBar {...props}/>
            }}
        >
            <Stack.Screen name="home" component={HomeScreen}/>
            <Stack.Screen name="profile" component={Profile}/>
            <Stack.Screen name="detail" component={DetailsScreen}/>
        </Stack.Navigator>
    )
}

export default MyStack;