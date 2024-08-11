import { ChatStore } from '@/interfaces'
import { create } from 'zustand'

export const useChatStore = create<ChatStore>((set, get) => ({
  items: [],
  searchContent: '',
  filter: 'all',
  fetchItems: async () => {
    try {
      const response = await fetch('/mockData.json')
      const data = await response.json()
      set({ items: data })
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
