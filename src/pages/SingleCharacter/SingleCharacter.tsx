import React, { useEffect, useState } from "react";

import "./singleCharacterStyle.scss"
import arrow from "../../assets/images/arrow-back.svg";

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import { CharacterInterface } from "../../interfaces/character-interface";
import { getSingleCharacter } from "../../helpers/Api";
import CharacterField from "./components/CharacterField/CharacterField";

function SingleCharacter() {
    const [thisCharacter, setThisCharacter] = useState<CharacterInterface | null>(null),
        { id } = useParams(),
        { image, name, gender, status, species, type, origin } = thisCharacter || {},
        location = useLocation(),
        navigate = useNavigate()

    useEffect(() => {
        if (id) getSingleCharacter(id).then(res => setThisCharacter(res))

        return () => {
            setThisCharacter(null)
        }
    }, [location])

    return (
    thisCharacter 
        ? 
            (
                <div className="character">
                    <div onClick={() => navigate(-1)} className="character__back">
                        <img className="character__back-arrow" src={arrow} alt="arrow" />
                        <h2 className="character__back-text">
                            Go back
                        </h2>
                    </div>
                    <div className="container">
                        <div className="character__top">
                            <img className="character__top-image" src={image} alt={name} />
                            <h2 className="character__top-name">{name}</h2>
                        </div>
                        <h2 className="character__info">Informations:</h2>
                        <CharacterField name="Gender" data={gender as string} />
                        <CharacterField name="Status" data={status as string} />
                        <CharacterField name="Specie" data={species as string} />
                        <CharacterField name="Origin" data={origin?.name as string} />
                        <CharacterField name="Type" data={type?.length ? type : 'Unknown'} />
                    </div>
                </div>
            )
        : 
            (
                <h2 className="character__not-found">
                    There is no such character
                </h2>
            )
    )
}

export default SingleCharacter