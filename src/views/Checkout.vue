<template>
  <div class="checkout">
         <Navbar></Navbar>
    <div class="container mt-5 pt-5">
        <div class="row">
            <div class="col-9">
                <h4 class="py-5">Checkout Page
                    
                </h4>
                  <ul>
                    <li v-for="item in this.$store.state.cart" class="media">
                      <img :src="item.productImage" width="80px" class="align-self-center mr-3" alt="">
                      <div class="media-body">
                        <h5 class="mt-0">{{item.productName}}

                          <span class='float-right' @click="$store.commit('removeFromCart',item)">X</span>
                        </h5>
                        <p class="mt-0">{{item.productPrice | currency}}</p>
                        <p class="mt-0">Quantity : {{item.productQuantity }}</p>
                      </div>
                    </li>

                  </ul>
            </div>
            <div class="col-3">
                Total Price
            </div>
        </div>
    </div>
  </div>
</template>
