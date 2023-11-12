<template>
  <div>{{ error ?? data?.albums }}</div>
  <AlbumCard v-if="data?.albums" v-for="album in data.albums" v-bind="album" />
</template>

<script setup lang="ts">
const {data, error, status} = await useAsyncData("landing", async () => {
  const albums = useAPI("/albums");
  return {albums: await albums.GET()};
});
</script>
