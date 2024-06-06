import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export type AuthorType = {
  id: string
  name: string
}

export type DeckType = {
  isFavorite: boolean
  author: AuthorType,
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

export type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type GetDecksType = {
  items: DeckType[],
  pagination: PaginationType
}

export type AddDeckType = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

export type AddDeckParams = {
  name: string
}

export const decksAPI = {
  getDecks() {
    return instance.get<GetDecksType>(`/v2/decks`)
  },
  createDeck(params: AddDeckParams) {
    return instance.post<AddDeckType>('/v1/decks', params)
  }
}