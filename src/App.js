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
    isSaveButtonDisabled: true,
    data: [],
    hasTrunfo: false,
  };

  onInputChange = ({ target }) => {
    const { value, name, type } = target;
    this.setState(
      { [name]: type === 'checkbox' ? target.checked : value },
      () => this.isSaveButtonDisabled(),
    );
  };

  isSaveButtonDisabled = () => {
    const { state } = this;
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare } = state;

    const numMax = 90;
    const numMin = 0;
    const validaInput = (cardName.length > 0
    && cardDescription.length > 0 && cardImage.length > 0 && cardRare.length > 0);
    const maxPontuacao = 210;
    const validaValor = (Number(cardAttr1)
    + Number(cardAttr2) + Number(cardAttr3)) <= maxPontuacao;

    const pontosMax = (Number(cardAttr1) <= numMax)
     && (Number(cardAttr2) <= numMax) && (Number(cardAttr3) <= numMax);

    const validaNegativo = (Number(cardAttr1) >= numMin)
     && (Number(cardAttr2) >= numMin) && (Number(cardAttr3) >= numMin);

    // suporte da mentoria para resolver bug de onde chamar a função isSaveButtonDisabled
    if (validaInput && validaValor && pontosMax && validaNegativo) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onSaveButtonClick = (info) => { // ==============> referenciando ajuda de Arthur Debiasi requisito sete
    this.setState((prev) => ({
      data: [...prev.data, info],
    }), () => {
      const { data } = this.state;
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: '',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
        hasTrunfo: data.some((element) => element.cardTrunfo),
      });
    });
  };

  removeCard = (indice) => {
    console.log(indice);
    const { data, cardTrunfo } = this.state;
    const card = data.slice();
    card.splice(indice, 1);
    this.setState({
      data: card,
      hasTrunfo: cardTrunfo === true,
    });
  };

  render() {
    const { state } = this;
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled, data, hasTrunfo } = state;

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
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
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
        {
          data.map((e, index) => (<Card
            key={ e.cardName }
            cardName={ e.cardName }
            cardDescription={ e.cardDescription }
            cardImage={ e.cardImage }
            teste={ e.cardName }
            removeCard={ this.removeCard }
            index={ index }
          />))
        }
      </>
    );
  }
}

export default App;
