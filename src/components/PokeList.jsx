import React from 'react';
import { connect } from 'react-redux';
/*PokeListとPokemon両方は
コンテナコンポーネント(stateの更新などどう動くのかを示すための場所)にあたる。
データの読み込みをReduxのstateを読むことで行っている
storeとの連携はコンテナコンポーネントにいれ、そこからプレゼンテーショナルコンポーネントへpropsでデータを渡す。

！！！コンテナコンポーネントはconnect()を使い作成することがよい！！！！

*/
import { Link } from "react-router-dom";
import { getIndPokemon } from "../store/actions";


function PokeList(props) {
    return (
        <div className="names">PokeList
            {props.isError ? <h1>{props.errorMsg}</h1> : <></>}
            {props.pokeNames &&
                props.pokeNames.map((poke) => {
                    return (
                        <>
                            <Link to={`/${poke.name}`} key={poke.name}>
                                <p onClick={() => props.getIndPokemon(poke.name)}>
                                    {poke.name}
                                </p>
                            </Link>
                        </>
                    );
                })}
        </div>
    );
}
//connect()を使うためにはmapStateToPropsという関数を定義し引数に渡すことが必要
//mapStateToPropsの関数でStoreのstateをどのようにPropsに変換するか指定
const mstp = state => {
    console.log("MSTP", state)
    return {
        isLoading: state.pkr.isLoading,
        isError: state.pkr.isError,
        errorMsg: state.pkr.error,
        pokeNames: state.pkr.pokeNames
    };
};



//connect(mapStateToProps,)()
export default connect(mstp, { getIndPokemon })(PokeList);