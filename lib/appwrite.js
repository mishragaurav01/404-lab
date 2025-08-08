import { Account, Client, Avatars } from 'react-native-appwrite'

export const client = new Client()
    .setProject('6890f37b002af1579d14')
    .setPlatform('dev.gaurav.learning')

export const account = new Account(client)
export const avatars = new Avatars(client)