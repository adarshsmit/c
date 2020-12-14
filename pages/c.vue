<template>
  <div>
    <div
      class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
    >
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>
    <div class="p-4 mx-auto max-w-sm items-center mx-auto">
      <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4">
        <img
          class="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4 pb-2">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="badge mr-2">#photography</span>
          <span class="badge mr-2">#travel</span>
          <span class="badge">#winter</span>
        </div>
      </div>
      <div class="items-center mx-auto">
        <NuxtLink to="about">
          <TButton>About</TButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;

  &:hover {
    @apply bg-gray-300;
  }
}
</style>
