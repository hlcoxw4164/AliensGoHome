import {connect} from 'react-redux';
import {MoveObjects} from '../actions/index';

import App from '../App';


const mapStateToProps = state => ({
  angle: state.angle
});

const mapDispatchToProps = dispatch => ({
  MoveObjects: (mousePosition) => {
    dispatch(MoveObjects(mousePosition));
  }
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default Game;