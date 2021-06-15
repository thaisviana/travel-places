import axios from "axios"

const options = {
    method: 'POST',
    url: 'https://travel-places.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-key': '657110f0a7msh6c1bc80927731a7p103c92jsncc392fa93be0',
      'x-rapidapi-host': 'travel-places.p.rapidapi.com'
    },
    data: {
      query: '{ getPlaces(categories:[]) { id,name,lat,lng,abstract,distance,categories } }'
    }
  };

const state = {
    places: [],
    favoritePlaces: []
}

const getters = {
    getPlaces: state => state.places
}

const actions = {
    retrivalPlaces({ commit }) {
          axios.request(options).then(function (response) {
                commit('getPlaces', response.data.data.getPlaces);
          }).catch(function (error) {
              console.error(error);
          });

    },
    addPlace({ commit }, data ) {
        commit('addPlace', data)
    },
    deletePlace({commit}, id){
        commit('deletePlace', id)
    }
}

const mutations = {
    getPlaces: (state, data) => (state.places = data),
    addPlace: (state, data) => state.places.push(data),
    deletePlace: (state, id) => (state.places = state.places.filter(p => p.id !== id)),
}

export default {
    state,
    getters,
    actions,
    mutations
}