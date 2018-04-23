<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-2">
        <img src="../assets/logo.svg" alt="">
      </div>
      <div @click="logout" class="app__signout col-2 ml-auto d-flex justify-content-end align-items-center"><router-link to="/">Logout</router-link></div>
    </div>

    <div class="row">
      <div class="col-sm-4">
        <p>Your wallet's balance is
          <span class="text--info">{{balance}}</span>.</p>
      </div>
      <div class="col-sm-4 d-flex ml-auto align-items-center justify-content-end">
        <button @click="filterData(null,true)" class="all">All</button>
        <button @click="filterData(filterPositive)" class="withdrowal">Withdrowal</button>
        <button @click="filterData(filterNegative)" class="additions">Additions</button>
      </div>
    </div>
    <keep-alive>
      <wallet-table :numbers="response" />
    </keep-alive>
  </div>
</template>

<script>
  import WalletTable from './WalletTable.vue';
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'Wallet',
    components: {
      'wallet-table': WalletTable
    },
    data() {
      return {
        response: '',
        balance: ''
      }
    },
    computed: {
        filterPositive() {
          return this.$store.getters.filterPositive;
        },
        filterNegative() {
          return this.$store.getters.filterNegative;
        }
    },
    methods: {
      filterData(data, all = false) {
        this.response = data;
        if(all){
          this.response = this.$store.state.tabledata.moneyData;
        }
      },
      logout() {
        localStorage.removeItem("wallet-auth-token");
      }
    },
    created() {
      this.response = this.$store.state.tabledata.moneyData;
      this.balance = this.response.reduce(function (amount, next) {
        return amount + next.amount
      }, 0);

    }
  }

</script>

<style lang="scss" scoped>
  /* Table of contents
=====================
// 1. Variables
// 2. Base
// 3. Layout
// 4. Block + element
// 5. Modifier
// 6. State
// 7. Animations
=====================
*/

  // 1. Variables
  $hell-black: #353436;
  $soil-black: #4a4a4a;
  $sad-gray: #aeaeae;
  $cloud-gray: #d8d8d8;
  $noise-gray: #f2f2f2;
  $almost-white: #f9f9f9;
  $pure-white: #ffffff;
  $ocean-blue: #57b6ff;
  $sky-blue: #3592d8;
  $forest-green: #178657;
  $ketchup-red: #ae4121; // $main-font: ;
  // $secondary-font: ;
  // 2. Base
  #app {
    margin-top: 10px;
  }

  p {
    width: 233.32px;
    height: 19px;
    color: $soil-black;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-stretch: normal;
    font-weight: 400;
    text-align: left;
  }

  img {
    min-width: 69px;
    height: 50px;
  }

  div {
    border: 1px solid gray;
  }

  button {
    height: 40px;
    color: #4a4a4a;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-stretch: normal;
    font-weight: 400;
    text-align: left;
  }

  .all {
    border-radius: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    width: 51px;
    height: 40px;
    background: $ocean-blue;
    color: #4a4a4a;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-stretch: normal;
    font-weight: 400;
    text-align: center;
  }

  .additions {
    border-radius: 0;
    width: 100px;
    height: 40px;
    background: #f9f9f9;
    color: #4a4a4a;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-stretch: normal;
    font-weight: 400;
    text-align: center;
  }

  .withdrowal {
    border-radius: 0;
    width: 113px;
    height: 40px;
    background: #f9f9f9;
    color: #4a4a4a;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-stretch: normal;
    font-weight: 400;
    text-align: center;
  } //   4. Block + element 
  .app__signout {
    min-width: 120px;
  } // 5. Modifier
  .text--info {
    color: $ocean-blue;
  } // 6. State
  // 7. Animations

</style>

