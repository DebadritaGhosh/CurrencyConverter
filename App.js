import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';

const currencyRate = {
  DOLLAR: 0.014,
  POUND: 0.011,
  EURO: 0.012,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041,
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      updatedValue: '0.0',
    };
  }

  currencyConversion = (currency) => {
    if (this.state.inputValue === '') {
      Alert.alert('Please Enter Something');
    } else {
      let result = parseFloat(this.state.inputValue) * currencyRate[currency];
      this.setState({updatedValue: result.toFixed(2)});
    }
  };
  currencyClear = () => {
    this.setState({updatedValue: undefined});
    this.setState({inputValue: undefined});
  };
  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <Text style={Styles.appName}>Currency Converter</Text>
        <View style={Styles.updateContainer}>
          <Text style={Styles.text}>{this.state.updatedValue}</Text>
        </View>
        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            selectionColor="#FFFFFF"
            keyboardType="numeric"
            placeholder="Enter The Value"
            value={this.state.inputValue}
            onChangeText={(inputValue) => this.setState({inputValue})}
          />
        </View>
        <View style={Styles.buttContainer}>
          <TouchableOpacity
            onPress={() => this.currencyConversion('DOLLAR')}
            style={Styles.butt}>
            <Text style={Styles.buttText}>DOLLAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.currencyConversion('POUND')}
            style={Styles.butt}>
            <Text style={Styles.buttText}>POUND</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.currencyConversion('EURO')}
            style={Styles.butt}>
            <Text style={Styles.buttText}>EURO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.currencyConversion('RUBEL')}
            style={Styles.butt}>
            <Text style={Styles.buttText}>RUBEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.currencyConversion('AUSDOLLAR')}
            style={Styles.butt}>
            <Text style={Styles.buttText}>AUS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.currencyConversion('CANDOLLAR')}
            style={Styles.butt}>
            <Text style={Styles.buttText}>CAN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.currencyConversion('YEN')}
            style={Styles.butt}>
            <Text style={Styles.buttText}>YEN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.currencyConversion('DINAR')}
            style={Styles.butt}>
            <Text style={Styles.buttText}>DINAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.currencyConversion('BITCOIN')}
            style={Styles.butt}>
            <Text style={Styles.buttText}>BITCOIN</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => this.currencyClear()}
          style={Styles.buttClear}>
          <Text style={Styles.buttText}>Clear</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A3CB37',
    //alignItems: 'center',
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    color: '#FFFFFF',
    marginTop: 20,
    marginBottom: 40,
  },
  updateContainer: {
    marginTop: 20,
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#badc57',
  },
  text: {
    fontSize: 50,
  },
  inputContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#badc57',
  },
  input: {
    color: '#FFFFFF',
    fontSize: 30,
  },
  buttContainer: {
    //backgroundColor: '#000000',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  butt: {
    backgroundColor: '#badc57',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '30%',
    marginHorizontal: 6,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttText: {
    fontSize: 30,
  },
  buttClear: {
    fontSize: 30,
    backgroundColor: '#badc57',
    padding: 10,
    alignItems: 'center',
  },
});
