<template>
<div id="Signup">
 <v-card class=" justify-content-center align-content-center">
  <div>
         <div class="modal-body">


                      
                        
                            
                             <h5 class="text-center">Create New Account</h5>
                             
                            <div class="form-group">
                                <label for="name">Your name</label>
                                <input type="text" v-model="name" class="form-control" id="name" placeholder="Your  name">
                            </div>

                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email"  v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
                            </div>

                            <div class="form-group mt-5">
                                <button class="btn btn-primary" @click="register">Signup</button>
                            </div>

                        

                    
 
                </div>
    <!-- <div class="error" v-if="error">{{error.message}}</div> -->
  </div>

 </v-card>

</div>
</template>

<script>
export default {
  name: "Signup",
  props:['closeDialog'],
  data(){
    return{
      page:'Login',
      email: "",
      password: ""
    }
  },
  methods:{
    register(){
      this.closeDialog()
    }
  }
};
</script>
<style scoped>
.textInput{
  width: 250px;
  height: 30px;
  border-radius: 1px;
  border: 1px solid black;
  margin-left:10px ;
  margin-top: 5px;
}
.loginbtn{
  border: 1px solid;
  border-radius: 5px;
  margin-left: 10px;
  margin-top: 5p;
}
</style>
