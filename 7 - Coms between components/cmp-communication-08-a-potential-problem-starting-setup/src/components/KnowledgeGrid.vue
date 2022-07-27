<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
    <!-- @select-topic="$emit('select-topic', $event)"-->
  </ul>
</template>

<script>
export default {
  inject: ['topics'],
  // emits: ['select-topic'],
};
</script>
