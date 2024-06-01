import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import WrapperContainer from '@components/atoms/WrapperContainer'
import ButtonContainer from '@components/atoms/ButtonContainer'
import { height, moderateScale, scale, verticalScale, width } from '@utils/scaling'
import imagePath from '@constants/imagePath'
import { UnistylesRuntime, createStyleSheet, useStyles } from 'react-native-unistyles'
import fontFamily from '@constants/fontFamily'

const stylesheet = createStyleSheet((theme) => ({
  outerContainer:{ flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.3)', 
    justifyContent: 'flex-end' 
  },
  container: {
    flex: 0.6,
    paddingHorizontal: moderateScale(16),
    alignItems: 'center',
    padding: scale(16),
  },
  headerStyle: {
    alignItems: "center",
    fontSize: scale(36),
    color: theme.colors.white,
    fontFamily: fontFamily.medium,
    lineHeight: scale(45),
    fontWeight:'700'
  },

  headerdec: {
    alignItems: "center",
    fontSize: scale(14),
    color: theme.colors.white,
    fontFamily: fontFamily.regular,
    lineHeight: scale(21),
    marginTop:moderateScale(4),
  },
  btnStyle: {
    width: '100%',
    height: verticalScale(47),
    borderRadius: moderateScale(8),
  },
  alrdyacnt: {
    alignItems: "center",
    fontSize: scale(14),
    color: theme.colors.white,
    fontFamily: fontFamily.regular,
    lineHeight: scale(21),
    marginTop:verticalScale(10),
  },
}));




export default function OuterScreen() {
  const { styles, theme } = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === "dark";
  return (
    <WrapperContainer>
      <FastImage resizeMode='cover'
        style={{ height: height, width: width, }}
        source={imagePath.group_ppl} >
        <View style={styles.outerContainer} >
          <View style={styles.container} >
            <Image source={imagePath.logo_white} />
            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical:moderateScale(height/18) }} >
              <Text style={styles.headerStyle} >Welcome to Tap</Text>
              <Text style={styles.headerdec} >Connect with people near you.</Text>
            </View>
            <ButtonContainer style={styles.btnStyle} label={'Join Now'} />
            <Text style={styles.alrdyacnt} >Already a member? <Text onPress={() => { }} style={{ color: theme.colors.primary }} >Sign In</Text> </Text>
          </View>
        </View>
      </FastImage>
    </WrapperContainer>
  )
}

