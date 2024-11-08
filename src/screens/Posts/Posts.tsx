import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { FC, useEffect, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useCustomQuery } from '@hooks/useMutationQuery'
import { HomeData, ProductsData } from '@models/HomeData'

const Posts = (): React.JSX.Element => {
    interface Post {
        title: string;
        body: string;
    }
    
    interface PostsData {
        posts: Post[];
    }
    const { data: posts, isLoading, isError } = useCustomQuery<HomeData>("/posts", "?limit=10");
    const memoizedPosts = useMemo(() => posts , [posts]);

    // console.log(JSON.stringify(memoizedPosts, null, 2));  // terminal formated data
    console.log(memoizedPosts,"memoizedPosts");
    
    interface HomeListItemsProps {
        item: ProductsData;
      }

      interface postItem {
        title: string;
        body:string
      }

      const renderPosts = ({item}: {item: postItem}) =>{
        return (
            <View style={{padding:20, marginVertical:10}} >
                <Text style={{color:'black'}} >{item?.title}</Text>
                <Text>{item?.body}</Text>
            </View>
        )
      }

      
    return (
        <View>
            {isLoading ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <ActivityIndicator size='large' />
            </View> : <View>
                <FlatList
                  keyExtractor={(item, index) => index.toString()}
                    data={memoizedPosts?.posts}
                    renderItem={renderPosts}
                />
            </View>}

        </View>
    )
}

export default Posts