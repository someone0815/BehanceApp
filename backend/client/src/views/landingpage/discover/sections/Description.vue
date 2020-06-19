<template>
  <div class="cent">
    <div class="holder">
      <h1>{{title}}</h1>
      <h4>{{description}}</h4>
      <a v-if="button"
         href=""
         class="btn mail"><span>Follow {{button}}</span></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: {
    title: String,
    description: String,
    button: String
  }
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  * {
    transition: font-size 0.3s;
  }
  h1 {
    font-size: 45px !important;
  }
  h4 {
    font-size: 15px !important;
    line-height: 12px;
  }
}

h1 {
  font-weight: 900;
  margin: 0px;
  font-size: 4em;
  color: #191919;
  line-height: 1em;
  margin-bottom: 10px;
}
h4 {
  /* margin: 0px; */
  /* font-size: 1.3em; */
  /* font-weight: lighter; */
  /* margin-top: -0.8em; */
  margin: 0px;
  font-size: 1.3em;
  font-weight: lighter;
  /* margin-top: -0.8em; */
  font-weight: 500;
  font-family: 'acumin-pro-wide', 'Acumin Pro Wide', 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  color: #191919;
}
.cent {
  display: flex;
  align-items: center;
  justify-content: center;
}
.holder {
  text-align: center;
  display: block;
  padding: 2em;
  max-width: 600px;
}

.btn {
  background-color: #0057ff;
  border-radius: 50px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.25;
  padding: 7px 15px 8px;
  transition-duration: 300ms;
  text-decoration: none;
  transition-property: background, color, border;
  transition-timing-function: linear;
  margin-top: 10px;
}
.mail:hover {
  background-color: #003ecb;
}
</style>