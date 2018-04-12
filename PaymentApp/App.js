import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import CardInput from './components/CardInput';
import StripeClient from './StripeClient';

const testApiKey = 'sk_test_7Jifm8AU6se8vBgdWcb5un6t';

export default class App extends React.Component {
  constructor(){
    super();
    this.stripe = new StripeClient(testApiKey);
  }

handlePayPressed = async card => {
    const token = await this.stripe.tokenizeCard({
      number: card.number,
      expMonth: card.mm,
      expYear: card.yy,
      cvc: card.cvc,
    });
    
    const cardTokenId = token.id;

    const customer = await this.stripe.createCustomer({
      email: 'foo-customer@example.com',
      source: cardTokenId
    })

    const charge = await this.stripe.chargeCustomer({
      customer: customer.id,
      amount: 1000,
      currency: 'usd'
    })
    Alert.alert(charge.id);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texts}>Open up App.js to start working on your app!</Text>
        <Text style={styles.texts}>Changes you make will automatically reload.</Text>
        <Text style={styles.texts}>Shake your phone to open the developer menu.</Text>
        <Text style={{color: '#6b8af8', fontSize: 25}}>Haho Ferik and Bajuszok!</Text>
        <CardInput 
          onCardChanged={this.handlePayPressed}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDCDCD',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  texts: {
    color: '#f96b30',
  },
});
