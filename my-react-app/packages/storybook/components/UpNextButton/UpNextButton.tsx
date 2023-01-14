import {  Text,StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {UpOutlined } from "@ant-design/icons"

type UpNextButtonProps = {
    backgroundColor: string
    textColor: string
    borderRadius: string
    text: string
    type: 'link' | 'button'
}

const UpNextButton: React.FC<UpNextButtonProps> = (props) => {
    const { backgroundColor, textColor, text, type } = props

    const styleComponent = {
       container : type =='link' ? {} : { backgroundColor : backgroundColor,borderRadius:30 , padding: 10 , gap:5 ,width: 101, height: 44, left: 0, top: 14, paddingLeft:25},
       text: type =='link' ? {  borderBottomColor : backgroundColor , borderBottomWidth : 5} :{}

    }
    return (
        <View style={styles.buttonStyle}>
            <UpOutlined />
            <TouchableOpacity style={styleComponent.container}>
                <Text style={[styleComponent.text , { color : textColor } ]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UpNextButton

const styles = StyleSheet.create({
    buttonStyle:{
        display:"flex",
        flexWrap:"wrap",
        alignContent:"center",
        
        
    }
})