<template>
  <b-container id="app">
    <b-row>
      <b-col><h1>Listagem de Locais</h1></b-col>
      <b-col class="col-button"
        ><b-button id="btnAddLocal" size="sm" v-b-modal.add-modal
          >Adicionar Local</b-button
        ></b-col
      >
    </b-row>
    <b-modal id="add-modal" hide-footer title="Adicionar Local"
      ><AddLocal
    /></b-modal>
    <b-row class="cards">
      <b-card
        :title="place.name"
        style="max-width: 20rem; min-width: 20rem; height: 185px"
        :sub-title="place.lat + ' , ' + place.lng"
        class="mb-2 mr-2"
        v-for="place in getPlaces"
        :key="place.id"
      >
        <b-card-text>
          <b-badge pill v-for="cat in place.categories" :key="cat">
            {{ cat }}
          </b-badge>
        </b-card-text>
        <b-card-text
          ><router-link
            tag="p"
            :to="{ name: 'local', params: { id: place.id } }"
          >
            Ver mais</router-link
          ></b-card-text
        >
        <b-card-text class="actions">
          <b-icon-trash2-fill @click="deletePlace(place.id)"></b-icon-trash2-fill>
        </b-card-text>
      </b-card>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddLocal from "./AddLocal";

export default {
  name: "Listagem",
  components: { AddLocal },
  computed: mapGetters(["getPlaces"]),
  methods: {
    ...mapActions(["retrivalPlaces", "deletePlace"]),
  },
  created() {
    this.retrivalPlaces();
  },
};
</script>

<style>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card {
  box-shadow: 1px 1px #ccc;
  backface-visibility: white;
}
.badge {
  background: firebrick;
  margin: 3px;
}
.col-button {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 0px;
}
.btn-secondary {
  width: 220px;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
