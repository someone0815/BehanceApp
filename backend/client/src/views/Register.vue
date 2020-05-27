<template>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Errors from '../components/notifications/Error.vue';

export default {
  components: {
    Errors
  },
  data() {
    return {
      // username: '',
      // password: '',
      // confirm_password: '',
      // name: '',
      // email: ''
    };
  },
  methods: {
    // ...mapActions(['register']),

    
  },
  // computed: mapGetters(['error'])
};
</script>

<style scoped>
button {
  color: white;
  padding: 10px 15px 10px 15px;
  background-color: #1473e6;
  border: 0px;
  border-radius: 200px;
  font-size: 12px;
  font-weight: 700;
  float: right;
  cursor: pointer;
}
@media only screen and (max-height: 600px) {
  #signin,
  #signup {
    align-items: flex-start !important;
  }
  /* .formcontainer { */
  /* height: inherit !important; */
  /* } */
}
input[type='submit' i] {
  color: white;
  padding: 10px 15px 10px 15px;
  background-color: #1473e6;
  border: 0px;
  border-radius: 200px;
  font-size: 12px;
  font-weight: 700;
  float: right;
  cursor: pointer;
}
input[type='password'],
input[type='text'] {
  background-color: transparent !important;
  border: none;
  border-bottom: 1px solid;
  width: -webkit-fill-available;
  border-color: #cacaca;
  padding: 5px;
  margin-bottom: 15px;
  font-family: 'acumin-pro', 'Acumin Pro', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
}
a {
  cursor: pointer;
  color: #0a5dd8;
}
p {
  font-size: 0.9em;
}
.inputlabel {
  color: #747474;
  font-size: 0.75em;
  font-weight: 400;
}
.formcontainer {
  /* height: 600px; */
  width: 100%;
  background-color: white;
  padding: 45px;
  box-sizing: border-box;
}
a {
  cursor: pointer;
}
h2 {
  font-weight: 600;
  font-size: 1.8em;
  margin: 0px;
}
</style>