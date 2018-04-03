import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilterTypes } from '../actions/index';

class ChampsTypeFilter extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.setFilterTypes(event.target.value);
  }

  renderOptions() {
    return this.props.champsTypes.map(type =>
      <option key={type} value={type}>{type}</option>
    );
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="tagSelector">Champ Type Filter:</label>
        <select
          onChange={this.onChange}
          className="form-control"
          id="tagSelector"
        >
        {this.renderOptions()}
        </select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { champsTypes: state.champs.champsTypes };
}

export default connect(
  mapStateToProps,
  { setFilterTypes },
)(ChampsTypeFilter);
