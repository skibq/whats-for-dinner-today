<template>
  <main class="container random-recipe-page">
    <header class="responsive-fontsize-scale">
      <h1 class="title">
        What's for dinner today
      </h1>
      <h2 class="subtitle">
        Get some inspiration when you don&#39;t know what to eat today
      </h2>
    </header>
    <RandomRecipeContainer />
    <a
      href="#"
      class="button--green random-recipe-button"
      @click="getRandomRecipe"
    >
      Something else, please...
    </a>
  </main>
</template>

<script>
import { mapActions } from 'vuex'
import RandomRecipeContainer from '~/components/recipe/random-recipe-container'

export default {
  components: { RandomRecipeContainer },
  methods: {
    ...mapActions({ getRandomRecipe: 'recipe/getRandomRecipe' })
  }
}
</script>

<style lang="scss">
  @import '~/assets/styles/colours';
  @import '~/assets/styles/breakpoints';

  .random-recipe-page {
    margin-bottom: 80px;
  }

  .container {
    margin-left: auto;
    margin-right: auto;
    min-height: 100vh;
    margin-top: 50px;
    text-align: center;
    padding: 0 10px;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 400;
    font-size: 1em;
    line-height: 1.1em;
    color: $main-color;
    letter-spacing: 1px;
    @include md {
      font-weight: 300;
    }
  }

  .subtitle {
    font-weight: 400;
    font-size: 0.42em;
    color: #526488;
    word-spacing: 5px;
    margin-bottom: 1em;
    @include md {
      font-weight: 300;
    }
  }

  .random-recipe-button {
    margin-top: 15px;
  }
</style>
