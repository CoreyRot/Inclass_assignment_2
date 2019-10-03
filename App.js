import React, { Component } from 'react';
import { StyleSheet, Text, View, Easing, Animated, // Button,
ScrollView } from 'react-native';
import Button from 'react-native-button';

export default class App extends Component {
  
  constructor () {
  	super()
    this.animatedValue = new Animated.Value(0)
  }
  
  animate = easing => {
    this.animatedValue.setValue(0)
      Animated.timing(
        this.animatedValue,
        {
          toValue: 1,
          duration: 1000,
          easing
        }
    ).start()
  }
  
  render () {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 260]
    })
    
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 30}}>Plaaaaaayyyyyyy Time!!</Text>
        <Animated.View style={[styles.block, {marginLeft} ]} />
        <ScrollView>
      		<MyButton style={styles.button} title='Bounce' onPress={this.animate.bind(this, Easing.bounce)} />
    		  <MyButton style={styles.button} title='Cubic' onPress={this.animate.bind(this, Easing.cubic)} />
          <MyButton style={styles.button} title='Back' onPress={this.animate.bind(this, Easing.back(2))} />
          <MyButton style={styles.button} title='Elastic' onPress={this.animate.bind(this, Easing.elastic(2))} />
      	  <MyButton style={styles.button} title='Ease' onPress={this.animate.bind(this, Easing.ease)} />
				  <MyButton style={styles.button} title='Linear' onPress={this.animate.bind(this, Easing.linear)} /> 
      	</ScrollView>
      </View>
    );
  }
}

const MyButton = ({onPress, title, style}) => (
	<Button style={style} onPress={onPress}>
    {title}
  </Button>
)

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80
  },
  button: {
    color: '#f8f8ff',
  	height: 80,
    backgroundColor: '#696969',
    borderRadius: 4,
    marginTop: 20,
    paddingTop: 20,
    fontSize: 30
  },
  block: {
    marginTop: 30,
    alignSelf: "center",
  	width: 100,
    height: 80,
    backgroundColor: 'black'
  }
});
