import React from 'react';
import { Provider } from 'react-redux';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Controls from '../components/Controls';
import CounterContainer from '../components/CounterContainer';
import Total from '../components/Total';
import store from '../state/store';
import Dimensions from 'Dimensions';

const WIDTH_SCREEN = Dimensions.get('window').width;

class CounterScreen extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
					<Text style={ styles.title }>Agregar Registro</Text>

          <Controls />

          <ScrollView style={styles.scrollViewContainer}>
            <CounterContainer />
          </ScrollView>
          <Total/>
          <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.goBack()}>
            <Text style={{fontSize: 20, color: 'red'}}>Guardar Registro</Text>
          </TouchableOpacity>
        </View>
      </Provider>
    );
  }
}

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
    marginTop: 20
  },

  scrollViewContainer: {
    flex: 1,
    marginTop: 20
  },

  btn: {
  width: WIDTH_SCREEN - 20,
  height: 40,
  margin: 10,
  backgroundColor: '#000',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8
}
});

export default CounterScreen;