<template>
  <div class="home">
    <Navbar />
    <Welcome />
    <Inventory />

    <div class="container h-100">
      <div class="p-5 h-100 justify-content-center align-items-center">
        <div class="col-md-6">
          <img src="" alt="" width="400" />
        </div>

        <div class="col-md-6">
          <h3>learn more</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellat
            est, molestias veniam architecto dignissimos non similique, voluptas
            sapiente provident magnam reiciendis fuga autem ab explicabo
            accusamus culpa distinctio impedit.
          </p>
          <button class="btn custom-btn btn-info m-4">More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Welcome from "../components/welcome.vue";
import Inventory from "../sections/inventory.vue";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    Welcome,
    Inventory,
  },
};
</script>
