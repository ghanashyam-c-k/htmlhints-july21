<template>
  <div>
    <h1>Count: {{count}}</h1>
  </div>
  <div class="btn-group">
    <button class="btn btn-outline-primary" @click="add">+</button>
    <button class="btn btn-outline-warning" @click="minus">-</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      this.count++;
    },
    minus() {
      if(this.count > 0)
        this.count--
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* button {
    padding: 5px 10px;
    margin-right: 5px;
    border-radius: 4px;
  } */
</style>
