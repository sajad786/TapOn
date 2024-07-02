import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '@redux/reducers/counter'

const Home = () => {
    let dispatch = useDispatch()
    const count = useSelector(state => state?.count)
    console.log(count, "state>>");
    const onUpdateCount = (type: string) => {
        if (type == "plus") {
            let counter = count + 1
            dispatch(increment(counter));
        } else {
            let counter = count - 1
            dispatch(decrement(counter));
        }
    }
    return (
        <View>
            <Text>Home</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center',  justifyContent:'center' }} >
                <Button title='plus' onPress={() => onUpdateCount('plus')} />
                <Text style={{marginHorizontal:20, fontSize:24}} >{count}</Text>
                <Button title='minus' onPress={() => onUpdateCount('minus')} />
            </View>
        </View>
    )
}

export default Home