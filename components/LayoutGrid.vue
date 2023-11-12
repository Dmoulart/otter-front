<template>
  <main
    class="layout-grid grid grid-rows-[auto_1fr_auto] grid-cols-[minmax(24px,auto)_minmax(auto,1024px)_minmax(24px,auto)] gap-y-3 min-h-screen"
  >
    <slot />
  </main>
</template>

<style lang="scss">
.layout-grid {
  > * {
    grid-column: 2;
  }
}
</style>
