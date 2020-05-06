import {combineReducers} from 'redux';
import {artPieceScreenReducer} from '../components/art-piece-screen/artPieceScreenReducer';

const allReducers = combineReducers({
    artPieceData: artPieceScreenReducer
});

export default allReducers;