<h1 align="center">Welcome to react-native-menu-viewer 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/Goel-Rishabh/react-native-menu-viewer.git" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> This package provides an efficient and customizable grid view to show your application's screens with a default navigation bar at top.

### 🏠 [Homepage](https://github.com/Goel-Rishabh/react-native-menu-viewer.git)

## Install

```sh
npm install react-native-menu-viewer
```
##
## Usage

```sh
npm run start
```
##
## Run tests

```sh
npm run test
```
##
## Screenshots
##
##
![1](https://i.ibb.co/cthwVMR/2-row.jpg)
##
## 
![](https://i.ibb.co/znF69PM/3-row.jpg[/img)
##
## 
![](https://i.ibb.co/qFmDhMJ/book-screen.jpg)
##

## Example
##

```javascript
import {View,StatusBar,Text} from 'react-native'
import * as React from 'react';

//import your screens you want show

import BankDetails from './app/screen/BankDetails'
import TimeTable from './app/screen/TimeTable'
import Theme from './app/screen/Theme'
import EditDetails from './app/screen/EditDetails'
import ChatBox from './app/screen/ChatBox'
import Logout from './app/screen/Logout'
import Exit from './app/screen/Exit'
import Books from './app/screen/Books'
import Menu from './app/screen/Menu'
import Feedback from './app/screen/Feedback'
import Password from './app/screen/Password'


import ReactNativeMenuViewer from 'react-native-menu-viewer'

export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "transparent" translucent = {true}/>
      
      <ReactNativeMenuViewer
        tilesPerRow={2} 
        navigationOptions={navigationOptions} 
        menuContainerStyle={{paddingTop:StatusBar.currentHeight,backgroundColor:'#f2f2f2'}}
        tileStyle={{borderColor:'#f2f2f2',borderWidth:2}}
        imageStyle={{tintColor:'#ff9966',padding:25}}
        screenContainerStyle={{paddingTop:StatusBar.currentHeight,backgroundColor:'#f2f2f2'}}
        tileTitleStyle={{fontSize:15}}
      />
      
    </View>

  );
}

const navigationOptions = [
  {
    image:"https://i.ibb.co/3WLp3HD/bank-menua.png",
    name:"Bank Details",
    screen:BankDetails,
  },{
    image:"https://i.ibb.co/xY4smHp/clocka.png",
    name:"TimeTable",
    screen:TimeTable
  },
  {
    image:"https://i.ibb.co/qnLSc2Z/dark-Mode-Menu.png",
    name:"Theme",
    screen:Theme
  },{
    image:"https://i.ibb.co/TLhwwpd/edit.png",
    name:"Edit Details",
    screen:EditDetails
  },
  {
    image:"https://i.ibb.co/p26fSw2/feedback-menu.png",
    name:"Chat Box",
    screen:ChatBox
  },{
    image:"https://i.ibb.co/r5zqP2N/logout.png",
    name:"Logout",
    screen:Logout
  },{
    image:"https://i.ibb.co/FHqnPL3/logout-menu.png",
    name:"Exit",
    screen:Exit
  },
  {
    image:"https://i.ibb.co/bFQxWQt/marks-menu.png",
    name:"Books",
    screen:Books
  },{
    image:"https://i.ibb.co/kSqDz09/menu.png",
    name:"Menu",
    screen:Menu
  },
  {
    image:"https://i.ibb.co/pd67zv6/no-Preview.png",
    name:"Feedback",
    screen:Feedback
  },
  {
    image:"https://i.ibb.co/3YHz3HJ/password-menu.png",
    name:"Password",
    screen:Password
  }
]
```

##
## API Usage
##
| Property  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| tilesPerRow          |  number           | NO (default is 1) | Number of tiles to show in each row |
| **navigationOptions**     |  **Array of Objects** | **YES**   |   Details like your screen name, image to show on the tile and navigation screen    |
| menuContainerStyle    |  Style            | NO    | Styles for Menu screen |
| tileStyle             |  Style            | NO    | Styles for Tiles |
| tileTitleStyle        |  Style            | NO    | Style for title of tiles |
| imageStyle            |  Style            | NO    | Style for image on tiles (provide padding to increase or decrease the size of image) |
| screenContainerStyle  |  Style            | NO    | Style for screen which appear on Tiles click event |
| headerStyle           |  Style            | NO    | Screen header style |
| headerTextStyle       |  Style            | NO    | Style for header text |


## Author

👤 **Rishabh Goel**

* Github: [@Goel-Rishabh](https://github.com/Goel-Rishabh)
* LinkedIn: [@https:\/\/www.linkedin.com\/in\/rishabh-goel-55a25b135\/](https:\/\/www.linkedin.com\/in\/rishabh-goel-55a25b135\/)
* Instagram: [@_rishabh__goel _](https://www.instagram.com/_rishabh__goel_/)]

## Show your support

Give a ⭐️ if this project helped you!


***
