import { useEffect, useState } from "react";
import { CharacterInterface } from "../../../interfaces/character-interface";
import { getCharacterByRequest, getCharacters } from "../../../helpers/Api";

import "./homeStyle.scss"
import logo from '../../../assets/images/logo.svg'
import SearchInput from "../../SearchInput/SearchInput";
import CharacterCard from "../../CharacterCard/CharacterCard";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import useQuery from "../../../hooks/useQuery";
import LoginWGoogle from "../../LoginWGoogle/LoginWGoogle";



function Home() {
    const [charactersList, setCharactersList] = useState<CharacterInterface[]>([]),
        [request, setRequest] = useState<string>(''),
        [searchParams, setSearchParams] = useSearchParams(),
        query = useQuery(),
        queryParams = query.get("request"),
        location = useLocation();
    
    useEffect(() => {
        if (queryParams){
            getCharacterByRequest(
                queryParams
            ).then(res => setCharactersList(res))
        } else {
            getCharacters()
                .then(res => setCharactersList(res))
        }
        
    }, [location])

        
    useEffect(() => {
        if (request.length > 0) {
            setSearchParams({request})
            getCharacterByRequest(
                request
            ).then(res => setCharactersList(res))
        }
    }, [request])

    return (
        <div className="home container">
            <div className="home__auth">
                <LoginWGoogle />
            </div>
            <nav className="home__nav">
                <NavLink className="home__nav-link" to="">
                    <img className="home__nav-image" src={logo} alt="Logo" />
                </NavLink>
            </nav>
            <SearchInput update={setRequest} />
            <div className="home__characters-panel">
                {charactersList 
                    ? charactersList.map(el => <CharacterCard key={el.id} character={el} />) 
                    : <h2>Loading... </h2>
                }
            </div>
        </div>
    )
}

export default Home