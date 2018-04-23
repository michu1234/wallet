<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Added at</th>
          <th scope="col">Title</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(number, index) in numbers" :key="index">
          <td>{{number.createdAt | date}}</td>
          <td>{{number.name}}</td>
          <td :class="number.amount>0?'is--green':'is--red'">{{number.amount}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'All',
    props: ['numbers'],
    filters: {
      date(d) {
        return d.slice(0, 10);
      }
    }
  }

</script>

<style lang="scss" scoped>
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
  $ketchup-red: #ae4121;

  .is--green {
    color: $forest-green;
  }

  .is--red {
    color: $ketchup-red;
  }

th {
  width: 5%;
}

td, th {
  text-align: left;
}


</style>

