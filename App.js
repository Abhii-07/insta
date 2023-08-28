import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import CreatePost from './components/createPost';
import { useState } from 'react';
import DisplayPosts from './components/DisplayPost';
import Post from './components/DisplayPost';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('')
  const [caption, setCaption] = useState('')


  const handleCreatePost = () => {
    if (username && caption) {
      const newPost = {
        id: Math.floor(Math.random() * 100),
        username,
        caption,
        likes: 0,
        comments: [],
      };
      setPosts([...posts, newPost]);
      console.log(posts)
      
      setUsername('');
      setCaption('');
    }
  };


  const deletePost = (postId) => {
    setPosts((prevPosts) => {
      const updatedPosts = prevPosts.filter((post) => post.id !== postId);
      return updatedPosts;
    });
    ;
  }

  return (
    // <View>
    //     <TextInput placeholder = "Username" value = {username} onChangeText={setUsername}/>
    //     <TextInput placeholder = "Caption" value = {caption} onChangeText={setCaption}/>
    //     <Button title = "Create Post" onPress = {handleCreatePost}/>
    // </View>

    <ScrollView styles={styles.container}>
      <TextInput placeholder="Username" value={username} onChangeText={(text) => setUsername(text)} />
      <TextInput placeholder="Caption" value={caption} onChangeText={(text) => setCaption(text)} />
      <Button title="Create Post" onPress={handleCreatePost} />
      {/* <DisplayPosts posts={posts} onDelete={deletePost} /> */}
      <View>
        {posts.map((post) => (
          <Post key={post.id} post={post} onDelete={deletePost} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
