
// export { default } from './libs/Layout'

import React,{ useState, useEffect } from 'react'
import {View,Text,Dimensions,TouchableOpacity,Image,StyleSheet,StatusBar,ViewPropTypes,TextProps,Animated,FlatList,BackHandler} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { blue } from 'color-name';

export default class ReactNativeMenuViewer extends React.Component {


    constructor(props){
        super(props)
        // Screeen = props.navigationScreens
        this.state={
            tilesPerRow:0,
            navigationOptions:[],
            menuContainerStyle:'',
            tileStyle:'',
            menu:true,
            selectedScreen:'',
            screenContainerStyle:'',
            headerStyle:'',
            headerTextStyle:'',
            tileTitleStyle:'',
            imageStyle:''
        }
    }

    

    componentWillUnmount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }


    handleBackButtonClick=()=>{
        this.setState({menu:true})
        return true;
    }

    componentDidMount(){
        if(this.props.navigationOptions==null){
            throw new Error("prop type navigationOptions is required")
        }
        console.log(STATUSBAR_HEIGHT,"STATUSBAR_HEIGHT")
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
        this.setState(this.props)

    }


    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState(this.props)
        }
    }


    render(){
        return(

            <View style={{flex:1,}}>
                {   this.state.menu && 
                    <View style={{...styles.MainContainer,...this.state.menuContainerStyle,}}>
                        <FlatList
                            data={ this.state.navigationOptions }
                            keyExtractor={item => item.name}
                            key={this.state.tilesPerRow}

                            renderItem={({item}) =>
                                <TouchableOpacity style={{...styles.GridViewBlockStyle,...this.state.tileStyle,}} onPress={()=>this.setState({menu:false,selectedScreen:item})} >
                                    <View style={{flex:1,justifyContent:'center'}}>
                                        <Image style={{width:50,height:50,alignSelf:'center',margin:10,...this.state.imageStyle}} source={{uri:item.image}}/>
                                        
                                        <Text style={{padding:10,textAlign:'center',color:'black',paddingTop:10,...this.state.tileTitleStyle}}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            }

                            numColumns={this.state.tilesPerRow}

                        />
                    </View>


                }
                {
                    !this.state.menu && 
                    
                    <FadeInView style={{flex:1,...this.state.screenContainerStyle}}>
                        <View style={{...styles.navigationBar,...this.state.headerStyle}}>
                            <TouchableOpacity style={{alignSelf:'center',position:'relative',paddingLeft:10,paddingRight:20}} onPress={()=>this.setState({menu:true})}>
                                <Icon size={40} name="ios-arrow-round-back"/>
                            </TouchableOpacity> 
                            <Text style={{flex:1,textAlign:'center',color:'black',...this.state.headerTextStyle,alignSelf:'center',marginRight:55,fontWeight:'400',fontSize:20}}>{this.state.selectedScreen.name}</Text>
                        </View>
                        <this.state.selectedScreen.screen/>
                    </FadeInView>


                }
            </View>

        )
    }
}

ReactNativeMenuViewer.propTypes = {
    tilesPerRow : PropTypes.number,
    navigationOptions : PropTypes.arrayOf(
        PropTypes.shape({
            image:PropTypes.string,
            name:PropTypes.string.isRequired,
            screen:PropTypes.func
        })
    ).isRequired,
    menuContainerStyle : ViewPropTypes.style,
    tileStyle : ViewPropTypes.style,
    tileTitleStyle : Text.propTypes.style,
    imageStyle : Image.propTypes.style,
    screenContainerStyle : ViewPropTypes.style,
    headerStyle : ViewPropTypes.style,
    headerTextStyle : Text.propTypes.style,
}


ReactNativeMenuViewer.defaultProps = {
    tilesPerRow : 1,
    navigationOptions : null,
    menuContainerStyle : {backgroundColor:'#f2f2f2'},
    tileStyle : {},
    tileTitleStyle : {},
    screenContainerStyle : {},
    headerStyle : {},
    headerTextStyle : {},
    imageStyle : {tintColor:'#ff9966'}
}

const styles = StyleSheet.create({
    MainContainer :{
        flex:1,
    },
    GridViewBlockStyle: {
        justifyContent: 'center',
        flex:.5,
        alignItems: 'stretch',
        height: 150,
        margin: 5,
        backgroundColor: '#fff',
        borderRadius:10
    },
    GridViewInsideTextItemStyle: {
       color: '#fff',
       padding: 10,
       fontSize: 18,
       justifyContent: 'center',
    },
    navigationBar: {
        backgroundColor: 'white',
        height: 60,
        width:'100%',
        // position: 'absolute', 
        flexDirection: 'row',
        // top: 0,
        justifyContent: 'space-between'
    },
});

const STATUSBAR_HEIGHT = StatusBar.currentHeight

const DeviceHeight = Dimensions.get('window').height

const FadeInView = (props) => {
    
    const [springAnim] = useState(new Animated.Value(DeviceHeight))
    
    React.useEffect(()=>{
        Animated.spring(
            springAnim,
            {
                toValue: 0,
                tension: 25,
                friction: 40,
            }
        ).start(()=>{
            Animated.spring(
                springAnim,{
                    toValue: 0,
                    tension: 25,
                    friction: 40, 
                }
            ).start()
        });
    },[])
    
    return(
        <Animated.View
        style={[props.style,
            {transform: [{translateY: springAnim}]}]}
        >
            {props.children}
        </Animated.View>
    )
}

module.exports = ReactNativeMenuViewer
