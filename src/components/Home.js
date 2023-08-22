import React, { Component } from 'react';
import "./style.css";
const exchangeRates = {
  USD: 295,
  EUR: 0.85,
  GBP: 0.73,
  JPY: 110.16,
  PKR:1
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromCurrency: 'USD',
      toCurrency: 'EUR',
      amount: '',
      convertedAmount: 0,
    };
  }

  handleCurrencyChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, this.convertCurrency);
  };

  handleAmountChange = (event) => {
    this.setState({ amount: event.target.value }, this.convertCurrency);
  };

  convertCurrency = () => {
    const { fromCurrency, toCurrency, amount } = this.state;
    const convertedAmount = (amount * exchangeRates[toCurrency]) / exchangeRates[fromCurrency];
    this.setState({ convertedAmount });
  };

  render() {
    const { fromCurrency, toCurrency, amount, convertedAmount } = this.state;

    return (
        <>
      <div className='Home'>
        <h2 className='heading'>Currency Converter</h2>
        <div>
          <label>From Currency:</label>
          <select name="fromCurrency" value={fromCurrency} onChange={this.handleCurrencyChange}>
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>To Currency:</label>
          <select name="toCurrency" value={toCurrency} onChange={this.handleCurrencyChange}>
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={this.handleAmountChange} />
        </div>
        <div>
          <h3>Converted Amount:</h3>
          <p>{convertedAmount.toFixed(2)}</p>
        </div>
      </div>
      </>
    );
    
  }
}

export default Home;