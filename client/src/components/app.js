import React, { Component } from 'react';

import ChampsTypeFilter from '../containers/champs_type_filter';
import ChampsList from '../containers/champs_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <ChampsTypeFilter />
        <ChampsList />
      </div>
    );
  }
}

