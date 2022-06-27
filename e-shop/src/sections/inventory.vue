<template>
  <div class="Inventory" id="inventory">
    <div class="container">
      <h1 class="text-center p-5">Our Items</h1>
      <div class="row">
        <div class="col-md-4">
          <div class="card product-item">
            <img
              src="img/images/beauty-products-recipients-assortment-grey-stones.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">Item 1</h5>
              <p>Description</p>
              <a href="#" class="btn">Add to cart</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card product-item">
            <img
              src="img/images/foundation-with-dark-background.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">Item 2</h5>
              <p>Description</p>
              <a href="#" class="btn ">Add to cart</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card product-item">
            <img
              src="img/images/front-view-skin-oil-droppers-composition.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">Item 3</h5>
              <p>Description</p>
              <a href="#" class="btn">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Inventory",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
