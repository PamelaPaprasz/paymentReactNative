// import React, { Component } from 'react';
// import { View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';

// export default class CardInput extends Component {
// 	constructor(){
// 		super();
// 		this.state = {
// 			number: '',
// 			mm: '',
// 			yy: '',
// 			cvc: '',
// 		}
// 	}

	 
// 	handleNumberChange = newNumber => {
// 	  	this.setState({
// 	      	number: newNumber,
// 	    });
// 	  }

// 	handleMmChange = newMm => {
// 		this.setState({
// 			mm: newMm,
// 		});
// 	}

// 	handleYyChange = newYy => {
// 		this.setState({
// 			yy: newYy,
// 		});
// 	}

// 	handleCvcChange = newCvc => {
// 		this.setState({
// 			cvc: newCvc,
// 		});
// 	}

// 	render() {
// 		return (
// 			<View>
// 				<View style={styles.container}>
// 					<TextInput placeholder="Card Number"
// 								placeholderTextColor="rgba(0,0,0,.7)" 
// 								style={styles.input}
// 								onChangeText=(this.handleNumberChange)/>
// 					<TextInput placeholder="MM"
// 								placeholderTextColor="rgba(0,0,0,.7)"
// 								style={styles.input, styles.mm}
// 								onChangeText=(this.handleMmChange)/>
// 					<TextInput placeholder="YY"
// 								placeholderTextColor="rgba(0,0,0,.7)"
// 								style={styles.input, styles.yy}
// 								onChangeText=(this.handleYyChange)/>
// 					<TextInput placeholder="CVC"
// 								placeholderTextColor="rgba(0,0,0,.7)"
// 								style={styles.input, styles.cvc}
// 								onChangeText=(this.handleCvcChange)/>
// 				</View>
// 				<TouchableOpacity>
//           			<Text>Pay!</Text>
//         		</TouchableOpacity>
//         	</View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flexDirection: 'row',
// 	},
// 	input: {
// 		fontSize: 18,
//     	borderWidth: 1,
// 	},
// 	number: {
// 		flex: 1,
// 	},
// 	mm: {
// 		width: 50,
// 	},
// 	yy: {
// 		width: 50
// 	},
// 	cvc: {
// 		width: 70
// 	}
// })


import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class CardInput extends Component {
  constructor() {
    super();
    this.state = {
      number: '',
      mm: '',
      yy: '',
      cvc: '',
    };
  }

  handleNumberChange = newNumber => {
    this.setState({
      number: newNumber,
    });
  }

  handleMmChange = newMm => {
    this.setState({
      mm: newMm,
    });
  }

  handleYyChange = newYy => {
    this.setState({
      yy: newYy,
    });
  }

  handleCvcChange = newCvc => {
    this.setState({
      cvc: newCvc,
    });
  }

  handlePayPress = () => {
    const { onCardChanged } = this.props;
    const card = this.state;
    onCardChanged && onCardChanged(card)
  }

  render() {
    return (
      <View style={styles.outermost}>
        <View style={styles.container}>
          <TextInput
            placeholderTextColor="rgba(0,0,0,.7)"
            placeholder="Card number"
            style={[styles.input, styles.number]}
            onChangeText={this.handleNumberChange}
          />
          <TextInput
            placeholderTextColor="rgba(0,0,0,.7)"
            placeholder="MM"
            style={[styles.input, styles.mm]}
            onChangeText={this.handleMmChange}
          />
          <TextInput
            placeholderTextColor="rgba(0,0,0,.7)"
            placeholder="YY"
            style={[styles.input, styles.yy]}
            onChangeText={this.handleYyChange}
          />
          <TextInput
            placeholderTextColor="rgba(0,0,0,.7)"
            placeholder="CVC"
            style={[styles.input, styles.cvc]}          
            onChangeText={this.handleCvcChange}
          />
        </View>
        <TouchableOpacity style={styles.button}
                          onPress={this.handlePayPress}>
          <Text>Pay!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	outermost: {
    flexDirection: 'column',
  },
  container: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 5,
  },
  input: {
    fontSize: 20,
  },
  number: {
    flex: 1,    
  },
  mm: {
    width: 40,
  },
  yy: {
    width: 40,    
  },
  cvc: {
    width: 60,    
  },
  button: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 10,
  }
});