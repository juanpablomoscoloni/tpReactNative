import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Dimensions from 'Dimensions';
import { connect } from 'react-redux';
import { counterActions } from '../state/actions';

const WIDTH_SCREEN = Dimensions.get('window').width;

class Total extends Component {
	render() {
		const { counter } = this.props;

		return(
			<View style={styles.contendor}>
        <Text style={styles.total}> 
          Total 
        </Text>
        <Text style={styles.contadorFinal}> 
        {counter.total}
        </Text>
        </View>
		)
	}
}

const styles = StyleSheet.create({
	contenedor: {
    flex: 1,
    marginTop: 20,
  },

  total: {
    textAlign: 'center',
    fontSize: 32,
  },

   contadorFinal: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 85,
    width:200,
    height:60,
    backgroundColor: 'red',
  },
})

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Total);