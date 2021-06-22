<template>
  <div id="local">
    <h1>Local {{ $route.params.id }}</h1>
    <b-row>
      <b-form-group
                id="input-group-1"
                label="Nome:"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="local.name"
                type="text"
                required
                ></b-form-input>
            </b-form-group>

    </b-row>
    <h2>{{ local.name}}</h2>
    <b-badge pill v-for="cat in local.categories" :key="cat"> {{cat}} </b-badge>
     <b-button variant="dark" block @click="updatePlace(local)">Save</b-button>
    <div id="map"></div>
  </div>
</template>

<script>
import {Loader} from 'google-maps';
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

const options = {};
const loader = new Loader('AIzaSyAn5I7pwWY0EDqA-U528o2dmD7-Koyk2DA', options);

export default {
  name: 'Local',
  data(){
    return {
      local : null
    }
  },
 methods:{
    ...mapActions(["updatePlace"]),
   initMap(){
     if (this.local){
      const lat = this.local.lat
      const lng = this.local.lng
        loader.load().then(function (google) {
          new google.maps.Map(document.getElementById('map'), {
            center: {lat: lat, lng: lng},
            zoom: 8,
        });
      });
    }
   }
 },
  computed: mapGetters(["getPlaces"]),
  created(){
    const filtered_local = this.getPlaces.filter(p => p.id == this.$route.params.id)
    this.local = filtered_local.lentgh == 0 ? null : filtered_local[0]
    this.initMap();
  }
}
</script>

<style>
/* Set the size of the div element that contains the map */
#map {
  height: 600px;
  width: 100%;
}
</style>
