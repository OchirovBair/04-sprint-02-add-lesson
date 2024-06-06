import { AppRootState } from '../../app/store.ts'

export const desksSelector = (state: AppRootState) => {
  return state.decksReducer.decks
}