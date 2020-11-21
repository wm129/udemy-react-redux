import React, { useEffect } from 'react';
import './styles.css';
import { Link, Route } from 'react-router-dom';
import PokeList from "./components/PokeList";
import Pokemon from "./components/Pokemon";
import { connect } from "react-redux";
import { getPokemon } from "./store/actions";
function App(props) {
    useEffect(() => {
        props.getPokemon("https://pokeapi.co/api/v2/pokemon/");
    }, []);
    return (
        <div className='App'>
            <h1>Pokemon with Redux </h1>
            <Link to="/">Home</Link>
            <Route exact path="/">
                <PokeList />
            </Route>
            <Route exact path={`/${props.pokemon.name}`}>
                <Pokemon />
            </Route>
        </div>
    );
}
//connect()をここでも呼び出したいためmapStateTopropsを再度指定
const mstp = (state) => {
    return {
        isLoading: state.pkr.isLoading,
        isError: state.pkr.isError,
        errorMsg: state.pkr.error,
        pokemon: state.pkr.pokemon
    };
};

//action dispatch => reducer newstate => discribe!
export default connect(mstp, { getPokemon })(App);