<template>
  <div class="center">
    <div class="card bg-image">
      <div class="card-body" v-if="visible">
        <h2 class="card-title text-white">{{ name }}</h2>
        <h1 class="card-text text-white">{{temp}}°C</h1>
      </div>
      <div v-else>
        <p class="text-white">Loading..</p>
      </div>
    </div>
  </div>
  <div class="buttonSection center">
    <button
      v-for="item in cities"
      :key="item"
      type="button"
      class="btn btn-outline-success"
      @click="setCity(item)"
    >
      <span class="name">{{ item }}</span>
    </button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Card",
  data() {
    return {
      cities: ["kochi", "delhi", "chennai", "kolkata", "bangalore"],
      selectedCity: "kochi",
      name: '',
      temp: 0,
      visible: false
    };
  },
  mounted() {
      this.getData();
  },
  methods: {
    setCity(city) {
      this.selectedCity = city;
      this.getData();
    },
    getData() {
      this.visible = false;
      return axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${this.selectedCity}&appid=c0d573b18729da9019711dcbacf8458d&units=metric`
        )
        .then((resp) => {
          this.name = resp.data.name;
          this.temp = Math.round(resp.data.main.temp);
          this.visible = true;
        });
    },
  },
};
</script>
<style scoped>
.bg-image {
  background-image: url("https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  height: 45vh;
}
h1 {
  position: absolute;
  bottom: 0;
  right: 15px;
}
.card {
  width: 500px;
}
.center {
  display: flex;
  align-content: center;
  justify-content: center;
}
.buttonSection {
  padding: 10px;
}
button {
  margin-right: 5px;
}
button span.name {
  text-transform: capitalize;
}
</style>