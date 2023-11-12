<template>
  <Card>
    <template #header>
      <strong>{{ title }}</strong>
    </template>
    {{ description }}

    <template #footer>
      {{ year }}
    </template>
  </Card>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  year: number;
}>();
</script>
