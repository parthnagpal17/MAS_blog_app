import {Text, StyleSheet, View, Button, FlatList, TouchableOpacity} from 'react-native'
import React, { useContext, useEffect } from 'react';
import {Context as BlogContext} from '../context/blogContext'
import {Feather} from '@expo/vector-icons'

const IndexScreen = ({navigation}) => {
    const {state, deleteBlogPost, getBlogPosts} = useContext(BlogContext);

    useEffect(() => {
        getBlogPosts();

        navigation.addListener("didFocus", () => {
            console.log(`${state.length}`)
            getBlogPosts();
        })
    }, [])

    
    return(
        <View>
            
            <FlatList 
                keyExtractor = {(element)=> element.title}
                data = {state}
                renderItem = {({item})=> {
                    return (
                <View style={styles.row}> 

                    <TouchableOpacity onPress={() => {navigation.navigate('ShowScreen', {id:item.id})}}>
                        <Text style={styles.title}>{item.title}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {deleteBlogPost(item.id)}}>
                        <Feather style={styles.icon} name='trash'></Feather>
                    </TouchableOpacity>

                </View>
                    )
                }}
            />
        </View>
    );
}


IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight : () => (
        <TouchableOpacity onPress={()=>{navigation.navigate("CreateScreen")}}>
            <Feather name="plus" size={30}></Feather>
        </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    row : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingVertical : 15,
        borderTopWidth : 1,
        borderColor : 'gray',
        paddingHorizontal : 15
    },
    title: {
        fontSize: 18
    },

    icon : {
        fontSize : 24
    }
})


export default IndexScreen;