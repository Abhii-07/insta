import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

const Post= ({post,onDelete}) => {
  <View>
    <Text>Username : {post.username}</Text>
    <Text>Caption : {post.caption}</Text>
    <Text>Likes : {post.likes}</Text>
    <Text>Comments : {post.comments}</Text>
    <TouchableOpacity onPress = {() => onDelete(post.id)}>
        <Text>Delete</Text>
    </TouchableOpacity>
    
  </View>
};

const DisplayPosts = ({posts,onDelete}) => {
  <View>
    {posts.map((post) => (
        <Post key = {post.id}  post={post} onDelete = {onDelete}/>
    ))}
  </View>
};

export default Post;