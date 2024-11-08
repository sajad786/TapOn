import "./styles/unistyles";
import { Text, View } from 'react-native'
import React from 'react'
import OuterScreen from '@screens/OuterScreen/OuterScreen'
import { Provider } from "react-redux";
import store from "@redux/store";
import Home from "@screens/Home/Home";
import Login from "@screens/Login/Login";
import Posts from "@screens/Posts/Posts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();
  return (
    // <Provider store={store} >
    //   <QueryClientProvider client={queryClient}>

    //   {/* <OuterScreen/> */}
    //   {/* <Home/> */}
    //   {/* <Login/> */}
    //   <Posts/>
    
    //  </QueryClientProvider>
   
    // </Provider>

<Provider store={store}>
<QueryClientProvider client={queryClient}>
  {/* <Login/> */}
  {/* <Home/>  */}
  <Posts/>
</QueryClientProvider>
</Provider>
  )
}
