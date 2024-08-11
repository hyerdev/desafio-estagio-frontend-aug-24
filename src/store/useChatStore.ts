import { ChatStore } from '@/interfaces'
import { create } from 'zustand'

export const useChatStore = create<ChatStore>((set) => ({
  items: [],
  fetchItems: async () => {
    try {
      const response = await fetch('/mockData.json')
      const data = await response.json()
      set({ items: data })
    } catch (error) {
      console.error(`Error loading data: ${error}`)
    }
  },
}))
