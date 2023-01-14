import { StyleSheet, View, Pressable, Text, Image } from 'react-native'
import React, { Component } from 'react'
import { LeftOutlined } from "@ant-design/icons";
import  {SliderMusic}  from "@mohamedhachichagit/my-ui"

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={{position:"absolute"}}>
                        <Pressable onPress={()=>{}}>
                            <LeftOutlined />
                        </Pressable>
                    </View>
                    <View style={{alignSelf:"center"}}>
                    <Text>Now Playing</Text>
                    </View>
                </View>
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',}}
                />
            </View>
            <View>
                <SliderMusic 
                    durationMax = {100}
                    title = "test"
                    author = "hi"
                />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    mainContainer:{
       
    },
    container:{
        display:'flex',
        flexDirection:'column',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    image: {
        width: '95%',
        height: 300,
      },
})