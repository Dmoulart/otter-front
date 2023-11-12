<template>
  <div>
    <figure class="otter">
      <h1 class="otter__title"><span class="otter__o">O</span>tter</h1>
      <img class="otter__gif h-16 w-auto" src="/images/otter.gif" />
    </figure>
  </div>
</template>
<style lang="scss">
.otter {
  position: relative;

  &__gif {
    position: absolute;
    bottom: 34px;
    left: 8px;
  }

  &__o {
    font-size: 150px;
  }
}
</style>
