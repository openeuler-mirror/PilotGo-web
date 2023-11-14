import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface Menu {
  path: string
  title: string
  hidden: boolean
  panel : string
  icon: string
  subMenus: Menu[] | null
}

export const routerStore = defineStore('router', () => {
    const menus = ref<Menu[]>()

    return { menus }
})

