<template>
  <Recipe :recipe="randomRecipe" />
</template>

<script>
import Recipe from '~/components/recipe/recipe'

export default {
  name: 'RandomRecipeContainer',
  components: {
    Recipe
  },
  computed: {
    randomRecipe () {
      return this.$store.state.recipe.randomRecipe
    }
  },
  created () {
    this.$store.dispatch('recipe/getRandomRecipe')
  }
}
</script>

<style>
</style>
