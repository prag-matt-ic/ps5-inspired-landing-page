import { create } from 'zustand'

type Store = {
  isMuted: boolean
  setIsMuted: (isMuted: boolean) => void
}

const useAudioStore = create<Store>((set) => ({
  isMuted: true,
  setIsMuted: (isMuted) => set({ isMuted }),
}))

export default useAudioStore
