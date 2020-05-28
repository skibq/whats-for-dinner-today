<template>
  <Recipe :recipe="recipe" />
</template>

<script>
import { randomRecipe } from 'spoonacular-api-library'
import Recipe from '~/components/recipe/recipe'

export default {
  name: 'RandomRecipeContainer',
  components: {
    Recipe
  },
  data () {
    return {
      recipe: {}
    }
  },
  created () {
    randomRecipe.get().then(({ data }) => {
      this.recipe = data.recipes[0]
    })
  }
}
</script>

<style>
</style>
