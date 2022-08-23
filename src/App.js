import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
  };

  onInputChange = ({ target }) => {
    const { value, name, type } = target;
    this.setState({ [name]: type === 'checkbox' ? target.checked : value });
  };

  isSaveButtonDisabled = () => {
    const { state } = this;
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare } = state;

    const numMax = 90;
    const numMin = 0;
    const validaInput = cardName && cardDescription && cardImage && cardRare !== '';
    const maxPontuacao = 210;
    const validaValor = cardAttr1
    + cardAttr2 + cardAttr3 < maxPontuacao;
    const pontosMax = (cardAttr1 < numMax)
     && (cardAttr2 < numMax) && (cardAttr3 < numMax);
    const validaNegativo = (cardAttr1 > numMin)
     && (cardAttr2 > numMin) && (cardAttr3 > numMin);

    if (validaInput && validaValor && pontosMax && validaNegativo) {
      this.setState = {
        button: true,
      };
    }
    this.state = {
      button: false,
    };
  };

  render() {
    const { state } = this;
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = state;

    return (
      <>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </>
    );
  }
}

export default App;
