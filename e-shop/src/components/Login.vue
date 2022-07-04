<template>
<div id="Login">
 <v-card class=" justify-content-center align-content-center">
  <div>
         <div class="modal-body">


                      
                        <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                            
                            <h5 class="text-center">Login Please</h5>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" @keyup.enter="login" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>

                             <div class="form-group">
                                <button class="btn btn-primary mt-5" @click="login">Login</button>
                            </div>

                        </div>
                        

                    
 
                </div>
    <!-- <div class="error" v-if="error">{{error.message}}</div> -->
  </div>

 </v-card>

</div>
</template>

<script>
export default {
  name: "Login",
  props:['closeDialog'],
  data(){
    return{
      page:'Login',
      email: "",
      password: ""
    }
  },
  methods:{
    login(){
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
