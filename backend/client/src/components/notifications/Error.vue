<template>
  <div>
    <div
      class="alert-danger"
      v-for="(error, index) in errorss.errors"
      v-bind:key="index"
    >
      {{ error.msg }} : {{ error.param }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['errorss'],
};
</script>

<style scoped>
.alert-danger {
  background: #fff1de;
  color: #da5617;
  z-index: 30;
  padding: 10px;
  margin: 15px 0px 15px 0px;
  border-radius: 10px;
  font-weight: 200;
  font-size: 0.8em;
  font-style: italic;
}
</style>
