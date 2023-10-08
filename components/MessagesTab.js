import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const BASE_URL = 'https://picsum.photos/100'; // Change the size (100) if you need a different size for the profile pictures

const users = [
  { id: 1, username: 'user1' },
  { id: 2, username: 'user2' },
  { id: 3, username: 'user3' },
  { id: 4, username: 'user4' },
  { id: 5, username: 'user5' },
  { id: 6, username: 'user6' },
  { id: 7, username: 'user7' },
  { id: 8, username: 'user8' },
  { id: 9, username: 'user9' },
  { id: 10, username: 'user10' },
];

const MessagesTab = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
    style={styles.userItem}
        onPress={() => navigation.navigate('Messages', { userId: item.id, username: item.username })}
        >
    <View >
        
        <Image
            style={styles.profilePicture}
            source={{ uri: `${BASE_URL}/${item.id}` }}
        />
        <Text style={styles.username}>{item.username}</Text>
        
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        // contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  listContainer: {
    alignItems: 'flex-start', // Align items to the left
    width: '100%', // Take full width of the screen
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  userItem: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25, // To make it circular
    marginRight: 15,
  },
  username: {
    fontSize: 18,
    color: 'black'
  },
});

export default MessagesTab;
