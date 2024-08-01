import { View, TextInput , StyleSheet} from 'react-native'
import { AntDesign , MaterialIcons} from '@expo/vector-icons';
const InputBox = () => {
  return (
    <View style={styles.container}>
    <AntDesign name='plus' size={26} color={'black'} />
    <InputBox placeholder='eeeeeeee' style={styles.input}/>
    <MaterialIcons name='send' size={26} color={'#59CE72'} style={styles.send}/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
   flexDirection:'row',
   backgroundColor:'whitesmoke',
   padding:5,
  },

  input:{
  flex:1,
  backgroundColor:'white',
  padding:5,
  borderRadius:5,
  paddingHorizontal:10,
  },

  send:{

  },

})
export default InputBox