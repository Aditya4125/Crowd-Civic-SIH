import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native';

export default function FirstPage() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.jpg")} style={styles.image}></Image>
      <Text style={styles.voiceunlockedtext}>Voice Unlocked</Text>
      <Text style={styles.description}>Crowdsourced Civic Issue Reporting</Text>
      <Text style={styles.description2}>Modern,scalable civic engagement platform with voice reporting and real-time tracking for efficient issue resolution.</Text>
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity style={[styles.loginButton,styles.loginButtoncitizen]} onPress={()=>{console.log("onaku yethuku daa login")}}>
            <Text style={styles.loginButtonText}>Citizen Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginButton,styles.adminButton]} onPress={()=>{console.log("onaku yethuku daa login")}}>
            <Text style={styles.loginButtonText}>Admin Dashboard</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor: '#fff',
    alignItems:"center",
    paddingTop: StatusBar.currentHeight,
  },
  image:{
    width: 150,
    height: 150,
    marginTop:25,
  },

  voiceunlockedtext:{
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 20,
  },

  description:{
    fontSize: 21,
    marginBottom:20,
  },

  description2:{
    fontSize: 18,
    marginBottom:20,
    textAlign: "center",
    color: "grey",
  },

  loginButtoncitizen:{
    backgroundColor:"orange",
  },

  loginButton:{
    paddingVertical:12,
    paddingHorizontal:20,
    flex:1,
    marginHorizontal:5,
    borderRadius:16,
    alignItems:"center",
  },
  loginButtonText:{
    fontSize:15,
    fontWeight: "bold",
  },

  loginButtonContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:"80%",
  },

  adminButton:{
    borderWidth:1,
    borderColor:"lightgreen",

  }

});