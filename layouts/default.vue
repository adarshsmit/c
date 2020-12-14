<template>
  <div>
    <p class="p-4 pb-2">
      <select
        v-model="$colorMode.preference"
        class="border w-24 h-8 dark:bg-gray-900 dark:border-gray-700"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </p>
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      >{{ locale.name }}</nuxt-link
    >
    <nuxt class="mx-auto p-4" />
  </div>
</template>

<script>
export default {
  head: {
    title: "Nuxt.js Boiler Plate with Localization and Tailwind implemented.",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js with TailwindCSS example",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>
