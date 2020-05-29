<template>
  <div class="recipe__container">
    <div class="recipe">
      <h3 class="recipe__title">
        {{ recipe.title }}
      </h3>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="recipe__instructions" v-html="recipe.instructions" />
    </div>
  </div>
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

  .recipe {
    max-width: 1200px;
    &__container {
      display: flex;
      justify-content: center;
    }
    &__title {
      color: $main-color;
      margin-bottom: 20px;
      font-size: 38px;
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
