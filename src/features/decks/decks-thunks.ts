import { AddDeckParams, decksAPI, DeckType } from './decks-api.ts'
import { createDeckAC, setDecksAC } from './decks-reducer.ts'
import { AppDispatch } from '../../app/store.ts'

export const setDecksTC = () => (dispatch: AppDispatch) => {
  decksAPI.getDecks()
    .then(res => {
      dispatch(setDecksAC(res.data.items))
    })
}

export const createDeckTC = (params:AddDeckParams) => (dispatch: AppDispatch) => {
  return decksAPI.createDeck(params)
    .then(res => {
      const newDeck:DeckType = {
        created: res.data.created,
        cardsCount: res.data.cardsCount,
        author: {
          name: "Sweety",
          id: res.data.userId
        },
        cover: res.data.cover,
        id: res.data.id,
        isPrivate: res.data.isPrivate,
        updated: res.data.updated,
        isFavorite: true,
        name: res.data.name,
        userId: res.data.userId
      }
      dispatch(createDeckAC(newDeck))
    })
}

