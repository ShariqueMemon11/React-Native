import { Text , View , Image, StyleSheet} from 'react-native';
import { StatusBar } from "expo-status-bar";
const ChatListItem = ({chat}) => {
 return(
      <View style={styles.container}>
      <StatusBar style="dark" />
        <Image source={{uri:chat.user.image }}style={styles.img}/>
       <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>{chat.user.name}</Text>
          <Text style={styles.subtitle}>{chat.lastMessage.createdAt}</Text>
        </View>
           <Text numberOfLines={2} style={styles.subtitle}>{chat.lastMessage.text}</Text>
       </View>
      </View>
 )
};

const styles = StyleSheet.create({
  
  container:{
   flexDirection:'row',
   marginHorizontal:  10,
   marginVertical:4 ,
   height:70
  },
  
  img:{
    width:49,
    height:49,
    borderRadius:30,
    marginRight:13
  },

  content:{
  flex: 1,
  borderBottomWidth:StyleSheet.hairlineWidth,
  borderBottomColor:'Lightgray',
  
  },

  row:{
  flexDirection:'row',
  marginBottom:4
  },

  name:{
  flex:1,
  fontWeight:'bold',
  fontSize:16
  },

  subtitle:{
  color:'gray',
  fontSize:14
  },

})

export default ChatListItem; 