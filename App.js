import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity,  Text,Image, View,SafeAreaView } from 'react-native';

export default function App() {
  //console.log("App executed");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1 }>danruk the lengend the myth </Text>
      <StatusBar style="auto" />

      <TouchableOpacity onPress={()=> console.log("Image tapped")}>
      <Image 
       blurRadius={10}
      source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/id/1/200/300"}}/> 
      </TouchableOpacity>
    </SafeAreaView>
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
