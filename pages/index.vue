<template>
  <div
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md items-center space-x-4 dark:bg-gray-900"
  >
    <div
      class="max-w-sm rounded overflow-hidden shadow-lg mb-4 dark:bg-gray-900"
    >
      <div class="flex justify-center uppercase">{{ $t("welcome") }}</div>
      <img
        class="w-full"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4 pb-2">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 dark:text-gray-300 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-6 py-4">
        <span class="badge mr-2">#photography</span>
        <span class="badge mr-2">#travel</span>
        <span class="badge">#winter</span>
      </div>
    </div>
    <div class="flex justify-center">
      <n-link to="about">
        <TButton>About</TButton>
      </n-link>
    </div>
  </div>
</template>

<script>
import TButton from "~/components/TButton";

export default {
  components: {
    TButton,
  },
};
</script>

<style scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;

  &:hover {
    @apply bg-gray-300;
  }
}

.dark-mode .badge {
  @apply bg-gray-700 text-gray-200;
}
</style>
