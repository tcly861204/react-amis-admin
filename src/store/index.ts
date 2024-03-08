import { create } from 'zustand'
import { Schema } from 'amis'
import ajax from '@/utils/ajax'

interface Store {
  schema: Schema
  loading: boolean
  initPage: (path: string) => void
}

const useStore = create<Store>((set) => ({
  schema: {
    type: 'page'
  },
  loading: false,
  initPage(path) {
    set({loading: true})
    let api = path.slice(1);
    api = api.replace(/\//gi, '_') + '.json';
    ajax.get(`/public/api/${api}`).then(res => {
      set({
        schema: res.data
      })
    }).finally(() => {
      set({loading: false})
    })
  }
}))

export default useStore