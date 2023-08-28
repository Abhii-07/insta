import React from 'react';
import { TextInput, View } from 'react-native';


const CreatePost = () => {
    const[username,setUsername] = useState('')
    const[caption,setCaption] = useState('')


    const handleCreatePost = () => {
        const newPost = {
            id : Math.floor(Math.random() * 100),
            username:username,
            caption:caption,
            likes : 0,
            comments : [],
        };

        setUsername('');
        setCaption('');
        
    };

    return (
        <View>
            <TextInput placeholder = "Username" value = {username} onChangeText={setUsername}/>
            <TextInput placeholder = "Caption" value = {caption} onChangeText={setCaption}/>
            <Button title = "Create Post" onPress = {handleCreatePost}/>
        </View>
    );
};



export default CreatePost;