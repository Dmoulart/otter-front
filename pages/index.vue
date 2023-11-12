<template>
  <div>{{ data ?? error }}</div>
</template>

<script setup lang="ts">
const {data, error, status} = useAsyncData("landing", async () => {
  const {GET} = useAPI("/albums");

  return {albums: await GET()};
});
</script>
