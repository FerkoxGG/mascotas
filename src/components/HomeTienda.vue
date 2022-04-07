<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <div id="disp">
      <v-img
        height="300"
        src="https://www.olina.cl/img/productos/1636172565_Portada%20Cat061c.jpg"
      >
      </v-img>
      <div id="disp2">
        Disponible
      </div>
    </div>


    <v-card-title>Rascador Para Gatos Dos Casitas</v-card-title>

    <v-card-title>$12.990</v-card-title>

    <v-card-actions>
        <!-- decrement item -->
        <v-btn
          dark
          small
          @click="decrementItem"
        >
            <v-icon>mdi-minus</v-icon>
        </v-btn>
        <!-- item selected -->
        <v-text
          class="ml-4"
            dark
            v-model="itemSelected"
            :value="itemSelected"
        >
            {{ item }}
        </v-text>
        
        <!-- increment item -->
        <v-btn
          color="dark"
          dark
          small
          @click="incrementItem"
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
            
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn

          dark
          v-bind="attrs"
          v-on="on"
        >
          <i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Producto Agregado
        </v-card-title>

        <v-row>
          <v-col cols="12" sm="6">
            <v-img
              height="200"
              src="https://www.olina.cl/img/productos/1636172565_Portada%20Cat061c.jpg"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card-title class="text-h6 lighten-2 text-center">
              Rascador Para Gatos Dos Casitas
            </v-card-title>
            <v-card-text>
              Código Producto
            </v-card-text>
            <v-card-text>
              Precio: $12.990
            </v-card-text>
            <v-card-text>
              Cantidad: - 1 +
            </v-card-text>
            <v-card-text>
              Sub-total: $12.990
            </v-card-text>
          </v-col>
          <v-col>
            <v-card-text>
              <v-row>
                <v-col>
                  <div>Descripción del Producto</div>
                  <div>Descripción del Producto</div>
                  <div>Descripción del Producto</div>
                </v-col>
                <v-col>
                  <div>Descripción del Producto</div>
                  <div>Descripción del Producto</div>
                  <div>Descripción del Producto</div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            color="default"
            text
            @click="dialog = false"
          >
            Seguir comprando
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="dark"
            dark
            @click="dialog = false"
          >
            Agregar al carro
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions} from "vuex"
export default {
    name: 'component-tienda',
    // props: {},
    data: function(){
        return {
            item: 0,
            dialog: false,
        }
    },
    // computed: {},
    methods: {
        ...mapActions(['add_carrito']),

        my_method(){
            this.add_carrito("pate de gato")
        },

        ...mapActions(['incrementItem']),
        incrementItem(){
            this.incrementItem()
        },

        // -- UI Modification
        // -- Data fetching
        // -- Data handling and transformations
        // -- Validations and Error handling
        // -- Other functions
        // -- Vuex mappings
        
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.my_method()
        },
    mounted(){
        // this.my_method()
    },
    // -- End Lifecycle Methods
}
</script>

<style scoped>
#disp{
    position: relative;
}
#disp2{
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #00ff00;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
}
</style>