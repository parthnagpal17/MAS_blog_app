import {Text, StyleSheet, View, Button, FlatList, TouchableOpacity} from 'react-native'
import React, { useContext, useEffect } from 'react';
import {Context} from '../context/blogContext'
import {EvilIcons} from '@expo/vector-icons'

const ShowScreen = ({navigation}) => {

     const id = navigation.getParam('id'); // the id of the blogPost we want to show

     const {state} = useContext(Context);

     const blogPost = state.find((blogPost) => id === blogPost.id)


    return (
    <View>
        <Text style={styles.title}>
            {blogPost.title}
        </Text>
        <Text style={styles.content}>
            {blogPost.content}
        </Text>
    </View>
    )


}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        textDecorationStyle : "solid",
        textAlign: 'center',
        textDecorationColor: "black",
        marginBottom: 15,
        marginTop: 10,
        fontWeight: 'bold'
    },
    content : {
        fontSize : 18,
        marginHorizontal: 15
    }

})

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight : () => (
        <TouchableOpacity onPress={()=>{navigation.navigate('EditScreen', {id: navigation.getParam('id')})}}>
            <EvilIcons name="pencil" size={35}></EvilIcons>
        </TouchableOpacity>
        )
    }
}

export default ShowScreen;