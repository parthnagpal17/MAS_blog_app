import React, {useContext, useState} from 'react';
import {Text, StyleSheet, View, Button, FlatList, TouchableOpacity, TextInput} from 'react-native';
import {Context} from '../context/blogContext'




const EditScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const {state, editBlogPost} = useContext(Context);
    const blogPost = state.find((blogPost)=> { return(id === blogPost.id)})
    const [title, setTitle] = useState(blogPost.title)
    const [content, setContent] = useState(blogPost.content)

    return(
        <View>
            <Text style={styles.label}>Edit Title </Text>
            <TextInput  style={styles.input} onChangeText={(text)=> {setTitle(text)} } value={title}></TextInput>
            <Text style={styles.label}>Edit Content</Text>
            <TextInput  style={styles.input} onChangeText={(text)=> {setContent(text)} } value={content}></TextInput>
            <Button onPress={()=>{editBlogPost(title, content, id, ()=> {navigation.pop()})}} title="Submit Changes"></Button>
        </View>

    );
}

const styles = StyleSheet.create({
    input : {
        fontSize : 18,
        borderWidth : 1,
        borderColor : 'black',
        marginBottom: 10,
        marginHorizontal : 10,
    },

    label : {
        fontSize : 20,
        marginBottom: 10,
        marginHorizontal : 10

    }
})

export default EditScreen;

