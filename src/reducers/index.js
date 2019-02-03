import { MOVE_OBJECTS } from '../actions';
import MoveObjects from './MoveObjects';

const initialState = {
  angle: 45,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return MoveObjects(state, action);
    default:
      return state;
  }
}

export default reducer;