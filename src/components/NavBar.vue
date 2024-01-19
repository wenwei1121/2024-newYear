<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const route = useRoute();
const router = useRouter();
console.log(router);

const routerLinkClass = (routeName: string) => {
  const variabilityClass = route.name === routeName ? 'bg-violet-500 text-white' : 'text-gray-900 hover:bg-violet-700 hover:text-white'
  return `${variabilityClass} group flex w-full items-center rounded-md px-2 py-2 text-sm`
}
</script>

<template>
  <div class="w-full p-2">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md bg-violet-500 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          NavList
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem>
              <router-link
                :to="'/GameHome'"
                :class="[routerLinkClass('GameHome')]"
              >
                GameHome
              </router-link>
            </MenuItem>
          </div>
          <div class="px-1 py-1">
            <MenuItem>
              <router-link
                :to="'/GameResult'"
                :class="[routerLinkClass('GameResult')]"
              >
                GameResult
              </router-link>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<style>
</style>