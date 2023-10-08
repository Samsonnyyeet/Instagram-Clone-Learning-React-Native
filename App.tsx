import React from "react"
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet

} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stories from "./components/Stories"
import Header from "./components/Header"
import Posts from "./components/Posts"
import MessagingScreen from "./components/MessagingScreen";
import MessagesTab from "./components/MessagesTab";
import BottomNavigation from "./components/bottomNavigation";
import Search from "./components/Search";
import Reels from "./components/Reels";

function HomeScreen({ navigation }){
  return (
    
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation}/>
        
        <View style={styles.content}>
          <Posts/>
        </View>

        <View style={styles.bottom}>
          <BottomNavigation navigation={navigation}/>
        </View>
      </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  home: {
    alignContent: 'flex-start'
  },
  container: {
    flex:1
  },
  content: {
    flex:1
  },
})

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Messages' component={MessagingScreen}/>
        <Stack.Screen name='Messages Tab' component={MessagesTab}/>
        <Stack.Screen name='Search' component={Search}/>
        <Stack.Screen name='Reels Tab' component={Reels}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
} 

export default App 