<template>
  <div class="hello">
    <div class="alert" :class="mode" role="alert">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: [
    'mode'
  ]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.danger {
  color:whitesmoke;
  background-color: red;
  border-color: red;

}
.primary {
  color:whitesmoke;
  background-color: #3f51b5;
  border-color: #3f51b5;

}
.success {
  color:whitesmoke;
  background-color: green;
  border-color: green;

}
.alert{
  position: relative;
  padding: .75rem 1.25rem;
  margin-bottom:1rem;
  border: 2px solid transparent;
  border-radius:.25rem;
}
</style>
