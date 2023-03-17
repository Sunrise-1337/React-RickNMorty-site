import ky from 'ky'
import { CharacterInterface } from '../interfaces/character-interface';
import { ServerResponseInterface } from '../interfaces/serverResponse-interface';


const kyReady = ky.extend({
  prefixUrl: 'https://rickandmortyapi.com/api/character',
});

export const getCharacters = (): Promise<CharacterInterface[]> => {
  return kyReady
          .get('')
          .json<ServerResponseInterface>()
          .then((res: ServerResponseInterface) => {
            return  res.results
                      .sort((a, b) => a.name > b.name ? 1 : -1)
          })
}


export const getSingleCharacter = (id: string): Promise<CharacterInterface> => {
  return kyReady
          .get(`${id}`)
          .json<CharacterInterface>()
}


export const getCharacterByRequest = (request: string): Promise<CharacterInterface[]> => {
  return kyReady
          .get(`?name=${request}`)
          .json<ServerResponseInterface>()          
          .then((res: ServerResponseInterface) => {
            return  res.results
                      .sort((a, b) => a.name > b.name ? 1 : -1)
          })
}