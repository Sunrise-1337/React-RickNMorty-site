import "./characterFieldStyle.scss"


interface CharacterFieldProps{
    name: string,
    data: string,
}

function CharacterField(props: CharacterFieldProps) {
    const { name, data } = props;

    return (
        <div className="field">
            <h2 className="field__header">{name}</h2>
            <p className="field__para">{data}</p>
        </div>
    )
}

export default CharacterField