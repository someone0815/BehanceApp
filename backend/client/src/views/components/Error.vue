<template>
  <div>
    <div class="alert-danger"
         v-for="(error, index) in errorss.errors"
         v-bind:key="index">

      <i class="fas fa-info-circle"></i>
      <div class="group">

        <div class="title">
          {{  error.msg }}
        </div>

        {{ error.param }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['errorss']
};
</script>

<style scoped>
i.fas.fa-info-circle {
  align-self: center;
  font-size: 1.5em;
  margin-right: 17px;
  color: #e8e8e8;
}
/* .group {
  display: inline-grid;
} */
.title {
  font-weight: 600;
  color: #6f6f6f;
}
.alert-danger {
  background: hsl(0, 0%, 100%);
  /* color: #da5617; */
  z-index: 30;
  padding: 10px 20px;
  margin: 15px 0px 15px 0px;
  border-radius: 5px;
  font-weight: 200;
  width: fit-content;
  border: 1px solid #e2e2e2;
  font-size: 0.9em;
  /* font-style: italic; */
  /* border: 1px solid #e2e2e2; */
  border-bottom: 3px solid #e8e8e8;
  display: grid;
  grid-template-columns: auto 1fr;
  cursor: default;
  margin: auto;
  grid-auto-flow: ;
}
</style>
