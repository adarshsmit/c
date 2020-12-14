<template>
  <section class="changelog-container">
    <h1>{{ changelogs.title }}</h1>
    <h2>{{ changelogs.sub1 }}</h2>
    <h2>{{ changelogs.sub2 }}</h2>
    <nuxt-content class="container ui" :document="changelogs"></nuxt-content>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      changelogs: "",
    };
  },
  async fetch() {
    this.changelogs = await this.$content("CHANGELOG").fetch();
  },
};
</script>

<style lang="scss">
.changelog-container {
  .nuxt-content {
    a {
      color: rgb(40, 153, 161);

      &:hover {
        text-decoration: underline;
      }
    }

    h3 {
      color: rgb(60, 165, 39);
    }

    ul {
      li {
        color: rgb(88, 102, 116);

        strong {
          color: rgb(92, 92, 95);
        }
      }
    }
  }
}

.dark-mode .changelog-container {
  .nuxt-content {
    a {
      color: rgb(142, 240, 240);
    }

    h3 {
      color: rgb(183, 248, 204);
    }

    ul {
      li {
        color: rgb(235, 122, 229);

        strong {
          color: rgb(189, 81, 211);
        }
      }
    }
  }
}
</style>
