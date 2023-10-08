// import { Image, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Icons from 'react-native-vector-icons/Ionicons'

// const Post = ({profile, userId, post}) => (
    
//     <View style={StyleSheet.postContainer}>

//         {/* Top bar of instagram posts, a profile pic, user id and on the right 3 dots */}
//         <View style={StyleSheet.postTopBar}>
//             <Image uri={profile} style={StyleSheet.profilePicture}></Image>
//             <Text style={StyleSheet.userIdText}>{userId}</Text>
//             <Icons name='ellipsis-vertical-outline' size={20} style={StyleSheet.optionsIcon}></Icons>
//         </View>

//         {/* This will be the post published by the user */}
//         <Image uri={post} style={styles.postPicture}></Image>

//         {/* bottom options bar */}
//         <View>
//             <View>
//                 <Icons name='heart-outline' size={20}></Icons>
//                 <Icons name='chatbubble-outline' size={20}></Icons>
//                 <Icons name='send-sharp' size={20}></Icons>
//             </View>
//             <View>
//                 <Icons name='share-social-outline' size={20}></Icons>
//             </View>
//         </View>

//     </View>

// );

// export default function Posts() {
//   return (
//     <View style={StyleSheet.postContainer}>
//         {/* Top bar of instagram posts, a profile pic, user id and on the right 3 dots */}
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     postContainer: {
//         flexDirection: 'column',
//         justifyContent: 'stretch'
//     },
//     postTopBar: {
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     },
//     profilePicture: {
//         height: 75,
//         width: 75,
//         borderRadius: 37,
//         backgroundColor: 'black',
//         marginLeft: 10
//     },
//     userIdText: {
//         marginLeft: 10,
//         fontWeight: 'bold',
//     },
//     postPicture: {
//         height: 300,
//         width: 300
//     }
// })

import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Modal, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';



const Post = ({ profile, userId, post }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isLiked, setLiked] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleLike = () => {
        setLiked(!isLiked);
    };

    return (
        <View style={styles.postContainer}>

            {/* Top bar of Instagram posts: profile pic, user id, and on the right 3 dots */}
            <View style={styles.postTopBar}>
                <Image source={{ uri: profile }} style={styles.profilePicture} />
                <Text style={styles.userIdText}>{userId}</Text>
                <Icons name='ellipsis-vertical-outline' size={20} style={styles.optionsIcon} />
            </View>

            {/* Post published by the user */}
            <Image source={{ uri: post }} style={styles.postPicture} />

            {/* Bottom options bar */}
            <View style={styles.bottomBar}>
                <View style={styles.iconContainer}>
                    <TouchableWithoutFeedback onPress={handleLike}>
                        {isLiked ? (<Icons name='heart' size={30} color='red' style={{marginLeft:5}}/>) : (<Icons name='heart-outline' size={30} color='black' style={{marginLeft:5}}/>)}
                    </TouchableWithoutFeedback>
                    
                    <Icons name='chatbubble-outline' size={30} color='black' style={{marginLeft:5}}/>
                    
                    <TouchableWithoutFeedback onPress={toggleModal}>
                        <Icons name='send-sharp' size={30} color='black' style={{marginLeft:5}}/>
                    </TouchableWithoutFeedback>
                </View>
                <Icons name='share-social-outline' size={30} color='black'/>
            </View>

            <View style={{alignItems:'stretch'}}>
                <Text style={{fontSize:20, fontWeight:'bold', alignSelf:'flex-start', color: 'black', marginLeft: 5}}>389 Likes </Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:20, fontWeight:'bold', color: 'black', marginLeft: 5}}>user1</Text>
                    <Text style={{fontSize:20, marginLeft:5, color: 'black', marginLeft: 5}}>What a cool photo!</Text>
                </View>
                <Text></Text>
            </View>

            <Modal
                style={{backgroundColor: 'white', marginTop: '200'}}
                animationType='slide'
                transparent={false}
                visible={isModalVisible}
                onRequestClose={toggleModal}>
                <View style={styles.modalContainer}>
                    {/* Your sharing panel content */}
                    <View style={styles.postTopBar}>
                        <Image source={{ uri: profile }} style={styles.profilePicture} />
                        <Text style={styles.userIdText}>{userId}</Text>
                        
                    </View>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

export default function Posts() {
    // const data = [
    //     // You can generate your fake data here
    //     { id: 'user1', profile: 'https://media.istockphoto.com/id/1007763808/photo/portrait-of-handsome-latino-african-man.jpg?s=612x612&w=0&k=20&c=XPL1ukeC99OY8HBfNa_njDujOPf9Xz4yCEOo7O3evU0=', userId: 'user1', post: 'https://plus.unsplash.com/premium_photo-1673240367215-bc1c824e22a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvYWR3YXlzfGVufDB8fDB8fHww&w=1000&q=80' },
    //     { id: 'user2', profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CldTqNpzN9ENCGC79zNXg6EfcqEHXTLjQg&usqp=CAU', userId: 'user2', post: 'https://images.unsplash.com/photo-1594568284297-7c64464062b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bm8lMjBjb3B5cmlnaHR8ZW58MHx8MHx8fDA%3D&w=1000&q=80' },
    //     { id: 'user3', profile:}
    //     // Add more fake data as needed
    // ];
    const data = [
        { id: 'user0', profile: 'https://media.istockphoto.com/id/1007763808/photo/portrait-of-handsome-latino-african-man.jpg?s=612x612&w=0&k=20&c=XPL1ukeC99OY8HBfNa_njDujOPf9Xz4yCEOo7O3evU0=', userId: 'user0', post: 'https://plus.unsplash.com/premium_photo-1673240367215-bc1c824e22a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvYWR3YXlzfGVufDB8fDB8fHww&w=1000&q=80' },
        { id: 'user00', profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CldTqNpzN9ENCGC79zNXg6EfcqEHXTLjQg&usqp=CAU', userId: 'user00', post: 'https://images.unsplash.com/photo-1594568284297-7c64464062b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bm8lMjBjb3B5cmlnaHR8ZW58MHx8MHx8fDA%3D&w=1000&q=80' },    
        {
          id: 'user1',
          profile: 'https://picsum.photos/200',
          userId: 'user1',
          post: 'https://picsum.photos/400'
        },
        {
          id: 'user2',
          profile: 'https://picsum.photos/201',
          userId: 'user2',
          post: 'https://picsum.photos/401'
        },
        {
          id: 'user3',
          profile: 'https://picsum.photos/202',
          userId: 'user3',
          post: 'https://picsum.photos/402'
        },
        {
          id: 'user4',
          profile: 'https://picsum.photos/203',
          userId: 'user4',
          post: 'https://picsum.photos/403'
        },
        {
          id: 'user5',
          profile: 'https://picsum.photos/204',
          userId: 'user5',
          post: 'https://picsum.photos/404'
        },
        {
          id: 'user6',
          profile: 'https://picsum.photos/205',
          userId: 'user6',
          post: 'https://picsum.photos/405'
        },
        {
          id: 'user7',
          profile: 'https://picsum.photos/206',
          userId: 'user7',
          post: 'https://picsum.photos/406'
        },
        {
          id: 'user8',
          profile: 'https://picsum.photos/207',
          userId: 'user8',
          post: 'https://picsum.photos/407'
        },
        {
          id: 'user9',
          profile: 'https://picsum.photos/208',
          userId: 'user9',
          post: 'https://picsum.photos/408'
        },
        {
          id: 'user10',
          profile: 'https://picsum.photos/209',
          userId: 'user10',
          post: 'https://picsum.photos/409'
        },
        {
          id: 'user11',
          profile: 'https://picsum.photos/210',
          userId: 'user11',
          post: 'https://picsum.photos/410'
        },
        {
          id: 'user12',
          profile: 'https://picsum.photos/211',
          userId: 'user12',
          post: 'https://picsum.photos/411'
        }
      ];
      

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Post profile={item.profile} userId={item.userId} post={item.post} />}
        />
    );
}

const styles = StyleSheet.create({
    postContainer: {
        flexDirection: 'column',
        justifyContent: 'stretch',
        marginVertical: 10,
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    postTopBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
    },
    profilePicture: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'black',
    },
    userIdText: {
        marginLeft: 10,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20
    },
    postPicture: {
        height: 300,
        width: '100%',
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 80,
    },
    optionsIcon: {
        marginRight: 10,
        color: 'black'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', 
        borderRadius: 30,
        fontSize: 25
    },
    modalStyle: {
        backgroundColor: 'white',
        marginTop: '200',
    }
});
