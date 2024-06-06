import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useGetDecks } from './useGetDecks.tsx'

export const DecksList = () => {
  const decks = useGetDecks()

  return <ul className={s.list}>
    {
      decks.map(el => <DeckItem key={el.id} deck={el} />)
    }
  </ul>
}