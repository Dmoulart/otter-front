<template>
  <div>{{ error ?? data?.albums }}</div>
</template>

<script setup lang="ts">
const {data, error, status} = await useAsyncData("landing", async () => {
  const albums = useAPI("/albums");
  return {albums: await albums.GET()};
});
</script>
