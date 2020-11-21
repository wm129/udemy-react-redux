const initialState = {
    isLoading: false,
    isError: false,
    error: "",
    pokeNames: [],
    prev: "",
    next: "",
    pokemon: []
}

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_START':
            return {
                ...state,
                isLoading: true
            };
        case 'LOAD_SUCC':
            return {
                ...state,
                isLoading: false,
                isError: false,
                error: "",
                pokeNames: action.payload.results,
                prev: action.payload.prev,
                next: action.payload.next,
            };
        case "LOAD_ERR":
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.payload.message
            };
        case "FETCH_IND_START":
            return {
                ...state,
                isLoading: true
            };
        case "FETCH_IND_SUCC":
            return {
                ...state,
                isLoading: false,
                pokemon: action.payload
            };
        case "FETCH_IND_ERR":
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.payload.message
            };
        case "UPDATE_LOADING":
            return {
                ...state,
                isError: true,
                error: "THERES AN ERROR HERE"
            };
        default:
            return state;
    }
};
/*Reducerではどのようにアプリケーションのstateを変化させるか示す
送られてきたactionと元のstateをもとに新しいstateを返す
純粋関数を使う（ひとつの値に対して同じ数値を返すものを使う）
(previousState, action) => newState
引数に手を加えたり副作用を起こすものや純粋でない関数を呼ぶことは禁忌

禁忌を回避するためにも
・スプレッド演算子を使いStateのコピーを作成してから
新しいstateを作成
→　→　オブジェクトや配列の操作を参照渡しで行うと元の値に影響を与える
・defaultのケースでは前のstateを返す　すべての不明なactionには前のstateを返す
*/
/*　処理の振り分け
const reducers = {
    START_X : (state, action) => (
        return{
            ...state,
            status : 1,
        };
    ),
FINISH_X : (state, action) => (
    return{
        ...state,
        status : 2,
    };
),
}
function Xs(state = null, action) {
    if (!reducers[action.type]) {
        return state;
    }
    return reducers[action.type](state, action);
}
オブジェクトのKeyを用いた判定でリターンを返すことも可能
 */