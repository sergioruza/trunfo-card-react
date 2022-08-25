import React, { Component } from 'react';
import PropType from 'prop-types';

export default class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, teste, removeCard, index } = this.props;
    return (
      <div>
        <h1 data-testid="name-card">{ cardName }</h1>
        <h2 data-testid="description-card">{ cardDescription }</h2>
        <h3 data-testid="attr1-card">{ cardAttr1 }</h3>
        <h3 data-testid="attr2-card">{ cardAttr2 }</h3>
        <h3 data-testid="attr3-card">{ cardAttr3 }</h3>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <h4 data-testid="rare-card">{ cardRare }</h4>
        {cardTrunfo ? <h4 data-testid="trunfo-card">Super Trunfo</h4> : ''}
        { teste === cardName
          ? <button onClick={ () => removeCard(index) } type="button" data-testid="delete-button">Excluir</button> : ''}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  teste: PropType.string.isRequired,
  removeCard: PropType.func.isRequired,
  index: PropType.number.isRequired,
};
