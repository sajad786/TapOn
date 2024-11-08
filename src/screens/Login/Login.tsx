import { scale } from '@utils/scaling';
import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import Sound from 'react-native-sound';
// import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [sound, setSound] = useState(null);
    // const navigation = useNavigation();

    useEffect(() => {
        // Load sound file
        const newSound = new Sound('notification.wav', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            console.log('sound loaded successfully');
        });

        setSound(newSound);

        // Clean up sound
        return () => {
            if (sound) {
                sound.release();
            }
        };
    }, []);

    // useEffect(() => {
    //     // Stop sound when navigating away
    //     const unsubscribe = navigation.addListener('blur', () => {
    //         stopSound();
    //     });

    //     return unsubscribe;
    // }, [navigation, sound]);

    const playSound = () => {
        if (sound) {
            sound.play((success) => {
                if (success) {
                    console.log('successfully finished playing');
                } else {
                    console.log('playback failed due to audio decoding errors');
                }
            });
        }
    };

    const stopSound = () => {
        if (sound) {
            sound.stop(() => {
                console.log('Sound stopped');
            });
        }
    };

    return (
        <View>
            <Text>Home</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: scale(50), justifyContent: 'space-around' }}>
                <Button title="Start Sound" onPress={playSound} />
                <Button title="Stop Sound" onPress={stopSound} />
            </View>
        </View>
    );
};

export default Login;
