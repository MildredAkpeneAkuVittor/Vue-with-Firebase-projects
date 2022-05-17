<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <alert mode="primary"> first </alert>
    <alert mode="success"> second </alert>
    <alert mode="danger"> second </alert>
    <div>
      <input type="text" @keyup="reflect" v-model="lastName" placeholder="yourname">
      <p>
         Welcome {{lastName}}
      </p>
    </div>
    <button @click="add" >click me</button>
    <h2>Using Loop</h2>
    <ul>
      <li v-for="student in students">{{student}}</li>
    </ul>
  </div>
</template>

<script>
import alert from './alert.vue';
export default {
  components: { alert },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data(){ return{
    lastName : '',
    students:[
      'Jojo',
      'Mike',
      'Kobby',
      'Janet'
    ]
  }},
  methods:{
    add(){
      console.log('first click')
    },
    reflect(){
      console.log('hi')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
