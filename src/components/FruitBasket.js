import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ currentFilter, handleFilterChange }) =>
      <div className="fruit-basket">
        <Filter handleChange={handleFilterChange} />
        <FilteredFruitList
          filter={currentFilter} />
      </div>

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
}

export default FruitBasket;
