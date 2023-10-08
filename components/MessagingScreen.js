// MessagingScreen.js

import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, Text, TouchableOpacity, Image } from 'react-native';

const MessagingScreen = ({userID, username}) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() === '') return;
    const updatedMessages = [...messages, { id: messages.length, text: newMessage }];
    setMessages(updatedMessages);
    setNewMessage('');
  };

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Image
          source={{ uri: 'https://picsum.photos/50' }} // Profile picture URL
          style={styles.profilePicture}
        />
        <Text style={styles.username}>User 1</Text>
      </View>

      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={item.id % 2 === 0 ? styles.senderBubble : styles.receiverBubble}>
            <Text>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  senderBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    padding: 8,
    borderRadius: 12,
    marginVertical: 4,
  },
  receiverBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#EAEAEA',
    padding: 8,
    borderRadius: 12,
    marginVertical: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  sendButton: {
    marginLeft: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#007BFF',
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    color: '#827D7C',
    backgroundColor: '#827D7C',
    borderRadius: 20
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    marginBottom: 12,
    marginTop: 12,
    marginLeft: 12
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
});

export default MessagingScreen;
