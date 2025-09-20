import {View,Text, Image, StyleSheet, TextInput, Platform, ScrollView, TouchableOpacity, Alert} from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function CitizenLogin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [aadhar, setAadhar] = useState("");

    const navigation= useNavigation();

    const validateForm = () => {
        // check empty fields
        if (!email.trim() || !password.trim() || !aadhar.trim()) {
            Alert.alert("Validation Error", "All fields are required!");
            return;
        }

        // Gmail validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!emailRegex.test(email)) {
            Alert.alert("Validation Error", "Please enter a valid Gmail address!");
            return;
        }

        // Password validation
        if (password.length < 6) {
            Alert.alert("Validation Error", "Password must be at least 6 characters long!");
            return;
        }

        // Aadhar validation (12 digits only)
        const aadharRegex = /^\d{12}$/;
        if (!aadharRegex.test(aadhar)) {
            Alert.alert("Validation Error", "Aadhar number must be exactly 12 digits!");
            return;
        }

        navigation.navigate("CivicReport")
    };

    return(
        <KeyboardAvoidingView style={styles.mainContainer} behavior="height" keyboardVerticalOffset={100}>
            <ScrollView>
                <View style={styles.formContainer}>
                    <Image style={styles.image} source={require("../assets/logo.jpg")}></Image>
                    <Text style={styles.textBelowImg}>Citizen Login</Text>
                    <Text style={styles.description}>Access your civic reporting dashboard</Text>

                    <Text style={styles.label}>Gmail Address</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='yourMail@gmail.com' 
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Your Password' 
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    
                    <Text style={styles.label}>Aadhar Number</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='XXXX XXXX XXXX'
                        value={aadhar}
                        onChangeText={setAadhar}
                        keyboardType="numeric"
                        maxLength={12}
                    />

                    <TouchableOpacity style={styles.button} onPress={validateForm}>
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
