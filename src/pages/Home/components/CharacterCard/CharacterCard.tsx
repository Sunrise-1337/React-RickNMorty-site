import { Link } from "react-router-dom";
import { CharacterInterface } from "../../../../interfaces/character-interface";

import "./characterCardStyle.scss"

interface CharacterCardProps{
    character: CharacterInterface
}

function CharacterCard(props: CharacterCardProps) {
    const { character } = props;

    return (
        <Link to={`/`+character.id}>
            <div className="card">
                <div className="card__picture">
                    <img src={character.image} alt={character.name} className="card__picture-img" />
                </div>
                <div className="card__text">
                    <h2 className="card__header">
                        {character.name}
                    </h2>
                    <p className="card__para">
                        {character.species}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default CharacterCard