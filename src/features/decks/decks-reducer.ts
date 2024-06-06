import { DeckType } from './decks-api.ts'

const initialState = {
  decks: [] as DeckType[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS':
      return {...state, decks: action.decks}
    case 'CREATE-DECKS': {
      return {...state, decks: [action.deck, ...state.decks]}
    }
    default:
      return state
  }
}

type DecksActions = SetDecksActionType | CreateDeckActionType

type SetDecksActionType = ReturnType<typeof setDecksAC>
type CreateDeckActionType = ReturnType<typeof createDeckAC>
export const setDecksAC = (decks: DeckType[]) => ({type: "SET-DECKS", decks} as const)
export const createDeckAC = (deck: DeckType) => ({type: "CREATE-DECKS", deck} as const)