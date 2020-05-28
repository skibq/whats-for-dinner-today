import { randomRecipe } from 'spoonacular-api-library'

export const state = () => ({
  randomRecipe: {
    title: ''
  }
})

export const mutations = {
  updateRandomRecipe (state, recipe) {
    state.randomRecipe = recipe
  }
}

export const actions = {
  getRandomRecipe ({ commit }) {
    randomRecipe.get().then(({ data }) => {
      commit('updateRandomRecipe', data.recipes[0])
    })
  }
}
