import React, {useState, useContext} from 'react';
import {Text, StyleSheet, View, Button, FlatList, TouchableOpacity, TextInput} from 'react-native';
import {Context} from '../context/blogContext'



const CreateScreen = ( {navigation} ) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {addBlogPost} = useContext(Context);



    return (
        <View>
            <Text  style={styles.label} >Enter Title</Text>
            <TextInput placeholder="First day of school" style={styles.input} onChangeText={(text) => setTitle(text)} value={title}></TextInput>
            <Text style={styles.label} >Enter Content</Text>
            <TextInput placeholder="Hello.." style={styles.input} onChangeText={(text) => setContent(text)} value={content}></TextInput>
            <Button onPress={() => {addBlogPost(title, content, () => {navigation.navigate("Indexx")})}} title="Add Post"></Button>
        </View>

    );

}

const styles = StyleSheet.create({
    input : {
        fontSize : 20,
        borderWidth : 1,
        borderColor : 'black',
        marginBottom: 15,
        marginHorizontal : 5,
    },

    label : {
        fontSize : 20,
        marginBottom: 115,
        marginHorizontal : 5

    }
})

export default CreateScreen;