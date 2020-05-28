<template>
  <div class="container">
    <div>
      <h1 class="title">
        What's for dinner today
      </h1>
      <h2 class="subtitle">
        Get some inspiration when you don&#39;t know what to eat today
      </h2>
      <RandomRecipeContainer />
      <div class="links">
        <a
          href="#"
          class="button--green"
        >
          Something else, please...
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import RandomRecipeContainer from '~/components/recipe/random-recipe-container'

export default {
  components: { RandomRecipeContainer }
}
</script>

<style lang="scss">
  @import '~/assets/styles/colours';

  .container {
    margin: 0 auto;
    min-height: 100vh;
    margin-top: 50px;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: $main-color;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    margin-bottom: 50px;
  }

  .links {
    padding-top: 15px;
  }
</style>
