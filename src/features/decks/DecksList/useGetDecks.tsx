import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { desksSelector } from '../decks-selectors.ts'
import { useEffect } from 'react'
import { setDecksTC } from '../decks-thunks.ts'

export const useGetDecks = () => {
  const decks = useAppSelector(desksSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setDecksTC())
  }, [])

  return decks
}