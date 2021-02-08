import React from 'react';
import { useReducer } from 'react';
import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer';


const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost' :
            return [...state , {id: Math.floor(Math.random()*9999) , title: action.payload.title, content: action.payload.content}];
        case 'add_two_blogpost':
            return [...state , {title:`Blog #${state.length + 1}`},{title:`Blog #${state.length + 2}`} ];

        case 'delete_post' :
            return state.filter((blogPost)=> blogPost.id !== action.payload)

        case 'edit_blogpost' :
            return state.map(blogPost => {
                if (blogPost.id === action.payload.id) {
                    return {title: action.payload.title, content: action.payload.content, id: action.payload.id}
                }
                else {
                    return blogPost
                }
            })

        case 'get_blogposts' : 
            return action.payload;

        default :
        return state ;
    }
}

const addBlogPost = (dispatch) => {
    // return (title, content, callback) => {
    //     dispatch({type:'add_blogpost', payload:{title, content}})
    //     callback();
    // }
    return async (title, content,callback) => {
        await jsonServer.post("/blogposts", {title, content});
        if(callback) {
            callback()
        }

    }
}

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        // dispatch({type:'delete_post', payload: id })
        const responce = await jsonServer.get("/blogposts");
        dispatch({type:"get_blogposts", payload: responce.data})
    }

}

const editBlogPost = (dispatch) => {
    return async (title, content, id, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {title, content});
        dispatch({type:'edit_blogpost', payload : {title, content, id} })
        callback();
    }

}

const getBlogPosts = (dispatch) => {
    return async () => {
        const responce = await jsonServer.get("/blogposts");
        dispatch({type:"get_blogposts", payload: responce.data})
    }
    // return () => {
    //     jsonServer.get("/blogposts").then(
    //         (response) => {
    //             dispatch({type:"get_blogposts", payload: response.data})
    //             console.log("done but this way")
    //         }
    //     )
    // }

}



export const {Context, Provider} = createDataContext (blogReducer, {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts}, [] )

