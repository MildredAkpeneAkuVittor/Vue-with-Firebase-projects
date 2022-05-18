<template>
  <div class="todos">
    <h1>My Personal Agenda</h1>

    <input @keyup.enter="addToList" type="text" v-model="item" placeholder="What are your plans">
    <button @click="addToList">Add to list</button>
    <ul>
      <li v-for="(todo,index) in todos" :key="todo">
        {{todo}}
        <span @click="remove(index)" class="remove">x</span>
      </li>
      
    </ul>

  </div>
</template>

<script>
export default {
  name: "todo",
  props:{
    msg: String
  },

  data(){
    return{
      item:'', 
      todos:[
        'wake up'
      ]
    }
  },
  methods:{
    addToList(){
       this.todos.push(this.item) 
    },
    remove(id){
      // this.todos.splice(id,1)
      this.$delete(this.todos, id);
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.remove{
  padding:.3rem .6rem;
  background-color: red;
  color:white;
  border-radius:30px;
}
.remove:hover{
  cursor: pointer;
}
ul li{
  padding: .4rem
}

</style>
