<template>
    <div class="welcome">
        <div class="container h-100">
            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-md-5">
                    <div class="welcome-content">
                        <h1 class=" Welcome-title">
                            Welcome to my personal Vue Shop
                        </h1>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate distinctio omnis vitae sunt ipsa obcaecati laboriosam fugiat id officiis natus repellendus quidem aliquid officia iure assumenda rerum quam, inventore adipisci.</p>
                        
                        <div class="welcome-btn mt-5">
                            <button class="btn custom-btn btn-info mr-4"> Discover</button>
                             <button class="btn custom-btn btn-outline-secondary"> Inventory</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="images">
                        <img src="" alt="">
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script>
export default {
  name: "welcome",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

