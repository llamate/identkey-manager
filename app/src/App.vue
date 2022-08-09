<template>
  <div> 
    <b-container fluid class="my-3">
      <b-row>
        <b-col>
          <b-form-group
              class="mb-3"
              label-cols="2"
              content-cols="10"
              label="Suchen:"
              label-for="input-search"
          >
            <b-row>
              <b-col cols="10">
                <b-form-input v-model="searchInput" id="input-search"></b-form-input>
              </b-col>
              <b-col>
                <b-button @click="search()" block>Suchen</b-button>
              </b-col>
            </b-row>
          </b-form-group>
        </b-col>
      </b-row>

      <!-- RFID -->
      <b-form-group
          class="mb-3"
          label-cols="2"
          content-cols="10"
          label="RFID:"
          label-for="input-rfid"
      >
        <div>
          {{ foundEmployee?.rfid }}
        </div>
      </b-form-group>

      <!-- KEY -->
      <b-form-group
          class="mb-3"
          label-cols="2"
          content-cols="10"
          label="KEY:"
          label-for="input-key"
      >
        <div>
          {{ foundEmployee?.key }}
        </div>
      </b-form-group>

      <!-- EMPLOYEE -->
      <b-form-group
          class="mb-3"
          label-cols="2"
          content-cols="10"
          label="EMPLOYEE:"
          label-for="input-employee"
      >
        <b-row>
          <b-col cols="10">
            <div>
              {{ foundEmployee?.employee }}
            </div>
          </b-col>
          <b-col>
            <b-btn block>Bearbeiten</b-btn>
          </b-col>
        </b-row>
      </b-form-group>
      <!-- ERROR MESSAGE -->
      <b-form-group
          class="mb-3"
          label-cols="2"
          content-cols="10"
          label="ERROR:"
          label-for="error-message"
      >
        <div>
          {{ errmessage }}
        </div>
      </b-form-group>

      <div class="d-flex justify-content-between">
        <div>
          <b-form-file v-model="file" accept=".csv, text/csv" class="mt-3" plain></b-form-file>
        </div>

        <div>
          <b-button class="mr-2" @click="modals.create = true">
            Create
          </b-button>
          
          <b-button class="mr-2">
            Delete
          </b-button>
          <b-button>
            Save
          </b-button>
        </div>
      </div>
    </b-container>

    <b-modal
      v-model="modals.create"
      centered
      hide-footer
			title="Create new user"
		>
      <CreateUser :csv="csv" />
    </b-modal>
  </div>
</template>

<script>
  import ParseCSV from "@/components/ParseCSV";
  import CreateUser  from "@/components/CreateUser";
  import Search from "@/components/Search";
  export default {
    name: 'App',
    mixins: [ParseCSV, Search],
    components: {
      CreateUser
    },
    data: () => ({
      modals: {
        create: false
      }
    })
  }
</script>

<style>
  #app { }
</style>
