import { Account, Client, Avatars } from 'react-native-appwrite'

export const client = new Client()
    .setProject('689100d3001c3977093c')
    .setPlatform('dev.gaurav.hello')
    .setEndpoint('https://fra.cloud.appwrite.io/v1')

export const account = new Account(client)
export const avatars = new Avatars(client)