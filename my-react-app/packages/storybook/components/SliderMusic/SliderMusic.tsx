import { Button, StyleSheet, Text, View } from 'react-native'
import { LeftOutlined } from "@ant-design/icons";
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
//import Slider from '@react-native-community/slider';


type SlideMusicProps = {
    title : string
    author : string
    durationMax : number
}
export const SliderMusic : React.FC<SlideMusicProps> = (props) => {
  const { durationMax, title, author } = props;
  const [ currentDuration , setCurrentDuration ] = useState(0)

  const onPressButton = () => {
    setCurrentDuration(oldValue => oldValue + 1)

    // cette condition est incorrecte , puisque la fonction setCurrentDuration est asynchrone 
    // donc on doit utiliser useEffect
    if (currentDuration === durationMax){
        console.log("end stream",currentDuration )
    }
  }

  useEffect(() => {
    console.log(" useEffect currentDuration", currentDuration)

    if (currentDuration === 10){
        console.log("end stream currentDuration")
    }
  },[currentDuration])

  useEffect(() => {
    console.log("on mounted component")
  },[])

  useEffect(() => {
    console.log("on mounted component var undefined")
    //setCurrentDuration(oldValue => oldValue + 1)
  })

  
  function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h : "";
    var mDisplay = m > 0 ? m +":" : "";
    var sDisplay = s >= 0 ? +s : "";
    return hDisplay.toString() + mDisplay.toString() + sDisplay.toString(); 
}
    return (
    <View>
      <Text>{title}</Text>
      <Text style={styles.authorName}>{author}</Text>
      {/* <Slider
      style={{width: "100%", height: 40}}
      minimumValue={0}
      maximumValue={durationMax}
      minimumTrackTintColor="#725AC1"
      maximumTrackTintColor="#FFFFFF66"
      thumbTintColor="#725AC1"
      onValueChange={(v)=>{setCurrentDuration(v)}}
      value = {currentDuration}
/> */}
<View style={styles.times}>
          <Text>{secondsToHms(currentDuration)}</Text>
          <Text>{secondsToHms(durationMax)}</Text>
      </View>
      <Button title='increment currentDuration' onPress={onPressButton}/>
    </View>
  )
}


const styles = StyleSheet.create({
  authorName:{
    fontSize: 8,
  },
  times:{
    display: 'flex',
    flexDirection:"row",
    justifyContent:"space-between",
  }
})