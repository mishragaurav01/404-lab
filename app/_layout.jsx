import { UserProvider } from '@/contexts/userContext'
import { Stack, useRouter } from 'expo-router'
import React, { useEffect } from 'react'

// function RouteGuard({ children }: { children: React.ReactNode }) {
//   const router = useRouter()
//   const isAuth = false
//   const [isReady, setIsReady] = React.useState(false)

//   useEffect(() => {
//     setIsReady(true)
//   }, [])

//   useEffect(() => {
//     if (!isAuth && isReady) {
//       router.replace("/auth")
//     }
//   }, [isAuth, router, isReady])

//   if (!isReady) {
//     return null;
//   }

//   return <>{children}</>;
// }


const RootLayout = () => {
  return (
    // <RouteGuard>
    <UserProvider>
      <Stack>
        <Stack.Screen name='home' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      </Stack>
      </UserProvider>
    // {/* </RouteGuard> */}
  )
}

export default RootLayout