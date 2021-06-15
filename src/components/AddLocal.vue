<template>
  <b-row>
      <b-form inline>
           <label class="sr-only" for="inline-form-input-name">Nome</label>
            <b-form-input
                id="inline-form-input-name"
                class="mb-4 mr-sm-4 mb-sm-0"
                placeholder="Insira um nome"
                v-model="form.name"
            ></b-form-input>
            <label class="sr-only" for="inline-form-input-name">ID</label>
            <b-form-input
                id="inline-form-input-name"
                class="mb-4 mr-sm-4 mb-sm-0"
                placeholder="BR01"
                v-model="form.id"
            ></b-form-input>
            <label class="sr-only" for="inline-form-input-name">lat</label>
            <b-form-input
                id="inline-form-input-lat"
                class="mb-4 mr-sm-4 mb-sm-0"
                placeholder="Insira latitude"
                v-model="form.lat"
            ></b-form-input>
            <label class="sr-only" for="inline-form-input-name">lng</label>
            <b-form-input
                id="inline-form-input-lng"
                class="mb-4 mr-sm-4 mb-sm-0"
                placeholder="Insira um longitude"
                v-model="form.lng"
            ></b-form-input>
            <label class="sr-only" for="select">Categorias</label>
            <b-row></b-row>
            <b-form-select id="select" v-model="form.categories" :options="options"  multiple :select-size="5"></b-form-select>

            <b-button variant="dark" block @click="createLocal()">Save</b-button>
      </b-form>
  </b-row>
</template>

<script>

import { mapActions } from "vuex";
export default {
    name: "AddLocal",
    data(){
        return {
            form : {
                name: "", id: "", lat:"", lng: "", categories: ""
            },
            options: [
          { value: null, text: 'Please select an option' },
          { value: 'NATURE', text: 'NATURE' },
          { value: 'MOI', text: 'MOI' },
          { value: 'MAJOR', text: 'MAJOR' },
          { value: 'MUSEUM', text: 'MUSEUM' },
          { value: 'POI', text: 'POI' },
        ]
        }
    }, methods: {
    ...mapActions(["addPlace"]),
    createLocal(){
        this.form.lat = parseFloat(this.form.lat)
        this.form.lng = parseFloat(this.form.lng)
        this.addPlace(this.form)
        this.$root.$emit('bv::hide::modal', 'add-modal', '#btnAddLocal')
    }
  },

}
</script>

<style scoped>

button{
    margin-bottom: 20px;
    margin-top: 20px;
    width: 466px;
}

select{
    width: 466px;
    border: 1px solid lightgrey;
    border-radius: 5px;
}
</style>