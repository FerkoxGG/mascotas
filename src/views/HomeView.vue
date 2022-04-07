<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        cols="4"
        md="3"
        sm="6"
      >
        <v-card
          class="mx-auto overflow-hidden"
        >
          <v-app-bar
            color="white"
          >

            <v-toolbar-title>Categorías</v-toolbar-title>

            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

          </v-app-bar>
            <v-list
              nav
              dense
            >
              <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
              >
                <v-list-item>
                  <v-list-item-title>Categoría 1</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Categoría 2</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Categoría 3</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Categoría 4</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Categoría 5</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Categoría 6</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Categoría 7</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Categoría 8</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="8"
      >
        <v-card
          outlined
          tile
        >
          <!-- <div> -->
            <v-card>
              <!-- <v-card-title>
                <span class="headline">{{ title }}</span>
              </v-card-title> -->
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-breadcrumbs :links="link">
                        <template v-slot:divider>
                          <v-icon>mdi-chevron-right</v-icon>
                        </template>
                      </v-breadcrumbs>
                      <HomeTienda></HomeTienda>
                    </v-flex>
                  </v-layout>
                      <div class="text-center">
                <v-pagination
                    v-model="page"
                    :length="6"
                  ></v-pagination>
                </div>
                </v-container>
              </v-card-text>
            </v-card>
          <!-- </div> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import HomeTienda from '../components/HomeTienda.vue'
  export default {
    name: 'HomeView',
    components: {
      "HomeTienda": HomeTienda
    },

  }
</script>
