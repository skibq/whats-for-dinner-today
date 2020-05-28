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
  created () {
    this.$store.dispatch('recipe/getRandomRecipe')
  },
  computed: {
    randomRecipe () {
      return this.$store.state.recipe.randomRecipe
    }
  }
}
</script>

<style>
</style>
