import React, { useRef } from "react";
import { Dispatch, SetStateAction } from "react";
import useQuery from "../../../../hooks/useQuery";

import "./searchInputStyle.scss"

interface SearchInputProps{
    update: Dispatch<SetStateAction<string>>
}

function SearchInput(props: SearchInputProps) {
    const searchRequest: React.RefObject<HTMLInputElement> = useRef(null),
        { update } = props,
        initialInputValue = useQuery().get("request");

    const handleUpdate = (): void => {
        update(searchRequest?.current?.value as string)
    }

    return (
        <div className="searchInput">
            <input placeholder="Filter by name..." 
                defaultValue={initialInputValue as string} 
                className="searchInput__input" 
                type="text" ref={searchRequest} />
            <button className="searchInput__button" onClick={handleUpdate} />
        </div>
    )
}

export default SearchInput