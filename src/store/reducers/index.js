import { combineReducers } from 'redux';

/* ReduxはcombineReducersというReducerを作成する関数をもっている */
import { pokemonReducer as pkr } from './pokemonReducer';

export default combineReducers({
    pkr
})

/*　const Reducer名　=　combineReducers();

*/