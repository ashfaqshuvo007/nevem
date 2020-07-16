<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{el}}</p>
    <form>
      <el-input v-model="name" placeholder="Name" style="width:200px"></el-input>
      <el-input v-model="price" placeholder="Price" style="width:200px"></el-input>
      <el-button type="primary" @click="addUser">Submission</el-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to NEVEM App",
      name: "",
      price: "",
      el: ""
    };
  },
  methods: {
    addUser() {
      var name = this.name;
      var price = this.price;
      this.$http
        .post(
          "/api/user/addUser",
          {
            name: name,
            price: price
          },
          {}
        )
        .then(response => {
          console.log(response);
        });
    },
    aaa() {
      this.el = "Successful introduction element";
    }
  }
};
</script>