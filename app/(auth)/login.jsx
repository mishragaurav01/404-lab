import { Keyboard, KeyboardAvoidingView, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import { useUser } from '@/hooks/useUser'

const login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useUser()

  const handleLogin =  () => {
    // try {
    //   await login(email, password)
    // } catch (error) {
      
    // }
    router.replace('/(tabs)/home');
    console.warn('Login function not implemented yet') // Placeholder for login functionality
    
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView style={styles.container}>

    <Text style={{fontSize: 36}}>Login Here</Text>

    <View style={styles.emailView}>
      <TextInput
          label="Email"
          mode="outlined"
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={setEmail}
          value={email}
          style={styles.input}
          theme={{ roundness: 20 }}
        />
    </View>
    <View style={styles.emailView}>
      <TextInput
          label="Password"
          mode="outlined"
          onChangeText={setPassword}
          secureTextEntry
          value={password}
          style={styles.input}
          theme={{ roundness: 20 }}
        />
    </View>
    <Button mode="contained" onPress={handleLogin}>
        Login
    </Button>
    <Link
     href={'/register'} style={{color: 'blue', padding: 10}}>
      Don’t have an account? Sign Up
    </Link>

    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emailView: {
      width: '80%',
      alignSelf: 'center'
    },
    input: {
      marginBottom: 20,
      borderRadius: 50
    }
})