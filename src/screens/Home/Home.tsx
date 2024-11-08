import { View, Text, Button, TouchableOpacity, Platform, PermissionsAndroid } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '@redux/reducers/counter'
import { PERMISSIONS, RESULTS, check } from 'react-native-permissions'

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

    const getContactPremission = () => {
        check( Platform.OS == 'ios' ? PERMISSIONS.IOS.CONTACTS : PERMISSIONS.ANDROID.READ_CONTACTS )
            .then((result) => {
                switch (result) {
                    case RESULTS.UNAVAILABLE:
                        console.log('This feature is not available (on this device / in this context)');
                        break;
                    case RESULTS.DENIED:
                        console.log('The permission has not been requested / is denied but requestable');
                        break;
                    case RESULTS.LIMITED:
                        console.log('The permission is limited: some actions are possible');
                        break;
                    case RESULTS.GRANTED:
                        console.log('The permission is granted');
                        break;
                    case RESULTS.BLOCKED:
                        console.log('The permission is denied and not requestable anymore');
                        break;
                }
            })
            .catch((error) => {
                console.log(error);
                
                // …
            });
    }

    const requestContactsPermission = async () => {
        if (Platform.OS === 'android') {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
              {
                title: 'Contacts Permission',
                message: 'We need access to your contacts to provide a better experience',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
              }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log('You can access the contacts');
            } else {
              console.log('Contacts permission denied');
            }
          } catch (err) {
            console.warn(err);
          }
        } else {
          const result = await request(PERMISSIONS.IOS.CONTACTS);
          if (result === RESULTS.GRANTED) {
            console.log('You can access the contacts');
          } else {
            console.log('Contacts permission denied');
          }
        }
      };
    return (
        <View>
            <Text>Home</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                <Button title='plus' onPress={() => onUpdateCount('plus')} />
                <Text style={{ marginHorizontal: 20, fontSize: 24 }} >{count}</Text>
                <Button title='minus' onPress={() => onUpdateCount('minus')} />
                <TouchableOpacity onPress={getContactPremission} >
                    <Text>contact permission</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home