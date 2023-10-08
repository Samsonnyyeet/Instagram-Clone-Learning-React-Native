import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Header({ navigation }) {
  return (

    <View style={styles.container}>
        
        <Icon style = {styles.icon} name = "home-outline" size = {30} color = "#000" ></Icon>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Icon style={styles.icon} name='search' size={30} color="#000"></Icon>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Reels Tab')}>
          
          <Icon style={styles.icon} name='play-outline' size={30} color="#000"></Icon>

        </TouchableWithoutFeedback>

    </View>
  )
}

const styles = StyleSheet.create({
  containerLeft: {
    flexDirection: 'row',
    color: 'white',
  },
  containerRight: {
    flexDirection: 'row',
    color: 'white',
    justifyContent: 'flex-end'
  },
  instaText: {
    fontSize: 30,
    color: "#000"
  },
  icon: {
    height: 30,
    width: 30,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  }
})
