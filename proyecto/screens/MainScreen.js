import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import { Provider } from 'react-redux';
import store from '../state/store';
import Dimensions from 'Dimensions';

const WIDTH_SCREEN = Dimensions.get('window').width;

class MainScreen extends Component {
  render() {
    return (
			<Provider store={store}>
				<View style={styles.container}>
					<Text style={ styles.title }>Registros</Text>
					
					<ScrollView style={styles.scrollViewContainer}></ScrollView>

            <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('counterS')}>
            <Text style={{fontSize: 20, color: 'red'}}>Agregar Registro</Text>
            </TouchableOpacity>

				</View>
			</Provider>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },

  title: {
    color: '#808080',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
  },

  scrollViewContainer: {
    flex: 1,
  },

  btn: {
    width: WIDTH_SCREEN - 20,
    height: 40,
    margin: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  }
});

export default MainScreen;