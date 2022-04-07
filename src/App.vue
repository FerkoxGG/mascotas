<template>
  <v-app>
    <v-app-bar
      app
      color="green"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Cat Logo"
          class="shrink mr-2"
          contain
          src="https://images.vexels.com/media/users/3/204682/isolated/preview/4d743192bd99fa7b64f6cbf55fbc058a-gato-sentado-silueta-gato.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Market Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://i0.wp.com/roccopetshop.com.ar/wp-content/uploads/2021/11/ROCCO-WEB-BANNER-02.png?fit=241%2C128&ssl=1"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-flex 
      xs3
      id="search-bar"
      >

        <v-autocomplete
        auto-select-first
        dense
        filled
        rounded
        solo
        placeholder="Buscador de Producto y Categorías"
        ></v-autocomplete>

      </v-flex>
      <div class="text-center" id="bag">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-width="200"
          offset-x
        >
          <template v-slot:activator="{ on, attrs }">
              <v-icon
              v-bind="attrs"
              v-on="on"
              >
              fa-shopping-bag
              </v-icon>
          </template>

          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-icon>mdi-cart</v-icon>
                    <span class="ml-1">Resumen de Compra</span>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-row
            align="top"
            >
              <v-col>
                <v-list-item>
                  <v-list-item-title>
                    <div>Nombre Producto</div>
                    <div>Precio: $12.990</div>
                    <br />
                    <div>Sub-total: </div>
                  </v-list-item-title>
                </v-list-item>
              </v-col>
              <v-col>
                <v-list-item >
                  <v-list-item-title> - 1 + </v-list-item-title>
                </v-list-item>
              </v-col>
              <v-col>
                <v-list-item>
                  <v-list-item-title>
                    <div>Sub-total: $12.990</div>
                    <br />
                    <br />
                    <div
                    class="text-end"
                    >Total: $12.990</div>
                  </v-list-item-title>
                </v-list-item>
              </v-col>

            </v-row>
          </v-card>
        </v-menu>
      </div>


    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
  }),
};
</script>
<style scoped>
  #search-bar {
    display: flex;
    align-items: center;
    margin-top: 25px;
  }
  #bag {
    display: flex;
    align-items: center;
    padding-left: 25px;
    padding-right: 25px;
  }
</style>
