import axios from "axios";

export const getPokemon = (url) => {
    return (dispatch) => {
        dispatch({ type: 'LOAD_START' });
        axios
            .get(url)
            .then((resp) => {
                dispatch({ type: "LOAD_SUCC", payload: resp.data });
            })
            .catch((error) => {
                dispatch({ type: "LOAD_ERR", payload: error });
            });
    };
};
export const getIndPokemon = (name) => {
    return (dispatch) => {
        dispatch({ type: "FETCH_IND_START" });
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((resp) => {
                console.log(resp.data);

                dispatch({ type: "FETCH_IND_SUCC", payload: resp.data });
            })
            .catch((error) => {
                dispatch({ type: "FETCH_IND_ERR", payload: error });
            })
    };
};
/*actionはアプリケーションの情報をstoreにおくるためのオブジェクト
タスクを追加した、APIコールした、などの情報
actionがstoreに送られることでstoreは新しいstateを作りそのstateをもとにviewが変更される
actionで何かが起きたことを示すが、どのようにstateを変更するかはReducerで指示する
actionをstoreに送るためstore.dispacth()をつかう
store.dispatch({
    type: FETCH_IND_SUCC,
    payload: {
        resp.data
    }
});
actionを生成する関数を定義し置き換えをすると
上記の書き方になる */