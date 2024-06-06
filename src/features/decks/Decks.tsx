import { AddNewDeckForm } from './AddNewDeckForm/AddNewDeckForm.tsx'
import { DecksList } from './DecksList/DecksList.tsx'

export const Decks = () => {
  return (
    <div>
      <h1>Decks 🦝</h1>
      <AddNewDeckForm />
      <DecksList />
    </div>
  )
}
