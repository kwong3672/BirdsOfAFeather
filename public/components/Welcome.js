import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
const style = require('./../style/styles');

export default class Welcome extends Component {
  render() {
    return (
      <View>
        <Text>{"\n"}</Text>
        <Text style={style.styles.welcome}>Welcome {this.props.username}</Text>
        <Text style={style.styles.concernQuestion}>What are your concerns?</Text>
        <View style={{flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableHighlight style={style.styles.health} onPress={this.props.onSelectConcern.bind(this, 'Health')}>
            <Text style={style.styles.text}>Health</Text>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.environment} onPress={this.props.onSelectConcern.bind(this, 'Environment')}>
            <Text style={style.styles.text}>Environment</Text>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.society} onPress={this.props.onSelectConcern.bind(this, 'Society')}>
            <Text style={style.styles.text}>Society</Text>
          </TouchableHighlight>
        </View>
        <View style={style.styles.container}>
        <TouchableHighlight style={style.styles.next} onPress={this.props.onForward}>
          <Text style={style.styles.text}>Finish selecting concerns</Text>
        </TouchableHighlight>
        <TouchableHighlight style={style.styles.back} onPress={this.props.onBack}>
          <Text style={style.styles.text}>Go Back</Text>
        </TouchableHighlight>
        <TouchableHighlight style={style.styles.next} onPress={this.props.goToProfile}>
          <Text style={style.styles.text}>Go To Profile</Text>
        </TouchableHighlight>
        </View>
      </View>
    );
  }
}