import React, { Component } from 'react';
import PropType from 'prop-types';

export default class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, // hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="cardName">
          seila
          <input
            onChange={ onInputChange }
            value={ cardName }
            id="cardName"
            type="text"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            id="description"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attack">
          CP
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            id="attack"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="defense">
          Defesa
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            id="defense"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="Weight">
          Peso
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            id="Weight"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="img">
          URL do seu bicho
          <input
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
            id="img"
            type="text"
          />
        </label>

        <select value={ cardRare } onChange={ onInputChange } data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>

        <label htmlFor="trunfo">
          Super Trunfo
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            id="trunfo"
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>

        <button
          disabled={ isSaveButtonDisabled }
          type="submit"
          data-testid="save-button"
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  // hasTrunfo: PropType.bool.isRequired,
  isSaveButtonDisabled: PropType.bool.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
};
