import React from 'react'
import { ViewStyle, TextStyle,ImageStyle, StyleProp, Animated } from 'react-native'

export interface ReactNativeMenuViewerProps{
    tilesPerRow : number
    navigationOptions : [{
        image : string,
        name : string,
        screen : Function
    }],
    menuContainerStyle : StyleProp<ViewStyle>,
    tileStyle : StyleProp<ViewStyle>,
    tileTitleStyle : StyleProp<TextStyle>,
    screenContainerStyle : StyleProp<ViewStyle>,
    headerStyle : StyleProp<ViewStyle>,
    headerTextStyle : StyleProp<TextStyle>
    imageStyle : StyleProp<ImageStyle>
}
export default class ReactNativeMenuViewer extends React.Component<ReactNativeMenuViewerProps>{}

