import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { getChampsData } from '../actions/index';

class ChampsList extends Component {  
  constructor(props) {
    super(props);
    this.renderChamps = this.renderChamps.bind(this);
  }

  componentWillMount() {
    this.props.getChampsData();
  }

  renderChamps() {
    return this.props.champsList.map(champ =>
      <a key={champ.id} href={champ.details}>
        <img
          alt=""
          className="champ-img-grid"
          key={champ.id} src={champ.image} 
        />
      </a>
    );
  }

  render() {
    const transitionOptions = {
      transitionName: 'fade',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500,
    };

    return (
      <div>
        <ReactCSSTransitionGroup {...transitionOptions}>
        {this.renderChamps()}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { champsList: state.champs.champsList };
}

export default connect(
  mapStateToProps, 
  { getChampsData },
)(ChampsList);
