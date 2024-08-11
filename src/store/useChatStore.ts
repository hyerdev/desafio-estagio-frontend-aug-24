import { ChatStore } from '@/interfaces'
import { sortItemsByDate } from '@/utils/sortItemsByDate'
import { create } from 'zustand'

export const useChatStore = create<ChatStore>((set, get) => ({
  items: [],
  searchContent: '',
  filter: 'all',
  fetchItems: async () => {
    try {
      const response = await fetch('/mockData.json')
      const data = await response.json()

      const sortedItems = sortItemsByDate(data)

      set({ items: sortedItems })
    } catch (error) {
      console.error(`Error loading data: ${error}`)
    }
  },
  setSearchTxt: (searchTxt: string) => set({ searchContent: searchTxt }),
  setFilter: (filter: string) => {
    const currentFilter = get().filter
    set({ filter: currentFilter === filter ? 'all' : filter })
  },
}))
