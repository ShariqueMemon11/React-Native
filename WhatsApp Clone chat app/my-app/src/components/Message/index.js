import { View, Text , StyleSheet} from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Message = ({message}) => {

  const ismyMessage= () => {
    return message.user.id ==='u1'
  }
    

  return (
    <View style={[Styles.container,
    {
      backgroundColor:ismyMessage() ? '#baf4ba' : 'white',
      alignSelf:ismyMessage() ? "flex-end" : 'flex-start'
      }]}>
      <Text>{message.text}</Text>
      <Text style={Styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};

export default Message;


const Styles = StyleSheet.create({
  container:{
    
    margin:5,
    padding:10,
    borderRadius:10,
    maxwidth:'80%',
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  time:{
  color:'gray',
  alignSelf:'flex-end'
  },

  
})