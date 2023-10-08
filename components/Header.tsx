import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Header({ navigation }) {
  return (
    // Two Main view components, left for the Instagram Text Font, right one for the icons 
    <View style={styles.container}>
      
      <View style={styles.containerLeft}>
        <Text style={styles.instaText}>Instagram</Text>
      </View>

      <View style={styles.containerRight}>
        
        <Icon style = {styles.icon} name = "add-circle-outline" size = {30} color = "#000" ></Icon>
        <Icon style={styles.icon} name='heart-outline' size={30} color="#000"></Icon>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Messages Tab')}>
          <Icon style={styles.icon} name='chatbubble-ellipses-outline' size={30} color="#000"></Icon>

        </TouchableWithoutFeedback>

      </View>

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
  }
})