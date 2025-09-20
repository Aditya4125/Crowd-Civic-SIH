import {View,Text, KeyboardAvoidingView, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import { useState } from 'react';

export default function AdminDashboard(){
    const [adminId, setAdminId] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        if (!adminId.trim()) {
            Alert.alert("Validation Error", "Please enter your Admin ID");
            return;
        }
        if (!password.trim()) {
            Alert.alert("Validation Error", "Please enter your Password");
            return;
        }
        Alert.alert("Success", "Login successfull!");
    };

    return(
        <KeyboardAvoidingView style={styles.mainContainer} behavior="height" keyboardVerticalOffset={100}>
            <ScrollView>
                <View style={styles.formContainer}>
                    <Image style={styles.image} source={require("../assets/logo.jpg")}></Image>
                    <Text style={styles.textBelowImg}>Admin Dashboard</Text>
                    <Text style={styles.description}>Secure access for administrative staff</Text>

                    <Text style={styles.label}>Admin ID</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Enter your admin ID' 
                        value={adminId}
                        onChangeText={setAdminId}
                    />

                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Enter Your Password' 
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles= StyleSheet.create({
    image:{
        width:150,
        height:150
    },

    mainContainer:{
        flex:1,
        backgroundColor:"plum",
    },

    formContainer:{
        alignItems: "center",
        backgroundColor: "#fff",
        elevation: 5, 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.25, 
        shadowRadius: 3.84, 
        borderRadius: 16,
        padding: 20,
        margin:20,
        marginTop:50,
    },

    textBelowImg:{
        fontSize:25,
        fontWeight:"bold",
        marginBottom:5,
    },

    description:{
        color:"grey",
        fontSize:16,
        marginBottom:20,
    },

    label:{
        alignSelf:"flex-start",
        fontSize:16,
        marginBottom:6,
    },

    input:{
        borderWidth:1,
        width:'100%',
        borderRadius:16,
        marginBottom:20,
    },

    button:{
        paddingVertical:12,
        paddingHorizontal:20,
        flex:1,
        marginHorizontal:5,
        borderRadius:16,
        alignItems:"center",
        backgroundColor:"lightblue",
        width:"50%",
    },

    buttonText:{
        fontWeight:"bold",
    }
})
