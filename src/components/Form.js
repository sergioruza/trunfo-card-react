import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="cardName">
          seila
          <input id="cardName" type="text" data-testid="name-input" />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea id="description" data-testid="description-input" />
        </label>

        <label htmlFor="attack">
          CP
          <input type="number" id="attack" data-testid="attr1-input" />
        </label>

        <label htmlFor="defense">
          Defesa
          <input type="number" id="defense" data-testid="attr2-input" />
        </label>

        <label htmlFor="Weight">
          Peso
          <input type="number" id="Weight" data-testid="attr3-input" />
        </label>

        <label htmlFor="img">
          URL do seu bicho
          <input data-testid="image-input" id="img" type="text" />
        </label>

        <select data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>

        <label htmlFor="trunfo">
          Super Trunfo
          <input id="trunfo" type="checkbox" data-testid="trunfo-input" />
        </label>

        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
