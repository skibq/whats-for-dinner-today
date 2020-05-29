<template>
  <article class="recipe__container">
    <div class="recipe">
      <div class="responsive-fontsize-scale">
        <h3 class="recipe__title">
          {{ recipe.title }}
        </h3>
      </div>
      <img class="recipe__image" :src="recipe.image">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="recipe__instructions" v-html="recipe.instructions" />
    </div>
  </article>
</template>

<script>
export default {
  name: 'Recipe',
  props: {
    recipe: {
      type: Object,
      default: () => {},
      required: true
    }
  }
}
</script>

<style lang="scss">
  @import '~/assets/styles/colours';
  @import '~/assets/styles/breakpoints';

  .recipe {
    @include xl {
      max-width: 1100px;
    }
    &__container {
      display: flex;
      justify-content: center;
    }
    &__title {
      color: $main-color;
      margin-bottom: 20px;
      font-size: 0.38em;
    }
    &__image {
      margin-bottom: 20px;
      max-width: 100%;
    }
    &__instructions {
      & ol {
        list-style-type: none;
        padding: 0;
        & li {
          margin-bottom: 5px;
        }
      }
      padding: 0;
    }
  }
</style>
