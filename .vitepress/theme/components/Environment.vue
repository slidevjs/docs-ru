<script setup lang="ts">
defineProps<{ type: 'node' | 'client' }>()
</script>

<template>
<<<<<<< HEAD
  <details class="px-4 py-3 mt-4 rounded bg-gray-400 bg-opacity-10">
    <summary class="outline-none">
      Окружение:
      <span class="capitalize" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
=======
  <details class="p4 mt-4 rounded-lg bg-gray-400 bg-opacity-10">
    <summary class="outline-none !m0 select-none">
      Environment:
      <span class="capitalize font-bold" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
>>>>>>> 081241c66e4b17a1a524facc9585f0b6f74f5699
    </summary>

    <div class="pt2 opacity-75">
      <span v-if="type === 'node'">
        Эта функция настройки будет работать только на стороне Node.js, вы также можете получить доступ к API Node.
      </span>
      <span v-else>
        Эта функция настройки будет работать только на клиентской стороне. При импорте пакетов убедитесь в совместимости браузера.
      </span>
    </div>
  </details>
</template>
