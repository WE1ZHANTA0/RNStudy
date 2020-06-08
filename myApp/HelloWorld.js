/*
 * @description: d
 * @Author: WE1ZHANTA0
 * @Creat: 2020-06-04 16:06:20
 * @lastTime: 2020-06-04 17:05:12
 * @LastAuthor: WE1ZHANTA0
 */
import React, {Component, useState} from 'react';
import {Text, TextInput, View} from 'react-native';

class TextCom extends Component {
  render() {
    return (
      <View style={{alignItems:'center',marginTop:50}}>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

function PizzaTranslator() {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        style={{ height: 40 }}
        placeholder='testestetstetserstrsetest'
        onChangeText={text => setText(text)}
        defaultValue={text}
      >
      </TextInput>
    </View>
  )
}
export default class HelloWorldApp extends Component {
  state = {
    text1: 'hehehe',
    text2: 'gagagag',
    text3: '111'
  };
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <TextCom text={this.state.text1}></TextCom>
        <TextCom text={this.state.text2}></TextCom>
        <TextCom text={this.state.text3}></TextCom>
        <PizzaTranslator></PizzaTranslator>
      </View>
    );
  }
}
