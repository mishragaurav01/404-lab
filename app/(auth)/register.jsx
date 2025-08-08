import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { useUser } from '@/hooks/useUser'

const register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {register} = useUser()

  const handleLogin = async () => {
    try {
      await register(email, password)
    } catch (error) {
      
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView style={styles.container}>

    <Text style={{fontSize: 36}}>Register Here</Text>

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
        Register
    </Button>
    <Link
         href={'/login'} style={{color: 'blue', padding: 10}}>
          Already have an account? Sign In
    </Link>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default register

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