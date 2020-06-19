<template>
  <div>
    <div>
      <img class="output"
           ref="output"
           :src="elem.url"
           else />
      <div class="img"
           v-if="elem.url == ''">
        <!-- v-if="elem.type == 'img'" -->

        <form enctype="multipart/form-data"
              class="drophere"
              ref="drophere"
              v-on:dragenter="myScript(true)"
              v-on:dragleave="myScript(false)"
              v-cloak
              @drop.prevent="addFile($event, 'drop')"
              :for="'upload'+indexxx"
              @dragover.prevent>
          <label :for="'upload'+indexxx"
                 class="choose"></label>
          <i class="far fa-image"></i>

          <div>
            <label class="chooselabel"
                   :for="'upload'+indexxx">Choose a file </label>
            <span class="subtext">or drag and </span>
            <label class="droplabel">drop here.</label>
          </div>
          <input type="file"
                 name="file"
                 class="inputx"
                 ref="file"
                 :id="'upload'+indexxx"
                 @change="addFile($event, 'choose')" /> <!-- @change="onSelect" -->
          <!-- <button @click.prevent="onSubmit">Submit</button> -->
        </form>

      </div>
    </div>
    <!-- <span>{{elem}}, {{indexxx}}</span>
    <h3>{{elem.id}}</h3><br>
    <span>{{message}}</span> <br> -->
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'; //mapGetters,
import axios from 'axios';

export default {
  data: () => ({
    files: [],
    file: '',
    message: 'xxx',
    uploading: false
  }),
  computed: mapGetters(['content']),
  props: {
    elem: Object,
    indexxx: Number
  },
  created() {},
  methods: {
    ...mapActions(['updateUrl', 'uploadImage']),
    myScript(event) {
      console.log(event);
      let elm = this.$refs.drophere;
      elm.classList.toggle('dragover', event);
    },
    onSelect() {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      const file = this.$refs.file.files[0];
      this.file = file;
      console.log('selected');
      console.log(this.file);
      if (!allowedTypes.includes(file.type)) {
        this.message = 'Only images are required';
      }
      if (file.size > 5500000) {
        this.message = 'too large, max size allowed is 5500kb';
      }
    },

    async addFile(e, dropType) {
      let droppedFiles = false;
      if (dropType == 'drop') {
        droppedFiles = e.dataTransfer.files;
      } else {
        droppedFiles = e.target.files;
      }
      if (!droppedFiles) return;
      if (droppedFiles.length > 1 || this.files.length > 0) {
        alert('only one file');
        return;
      }
      this.files.push(...droppedFiles);
      this.uploading = true;

      const formData = new FormData();
      formData.append('file', this.files[0]);

      try {
        await axios
          .post('http://192.168.2.104:5000/api/editor/upload/', formData)
          .then(res => {
            this.message = `upload successful`;
            this.updateUrl({ url: res.data.path, stateIndex: this.indexxx });
          });
      } catch (err) {
        console.log(err);
        this.message = 'something went wrong';
      }
    }
  }
};
</script>

<style scoped>
.output {
  width: 100%;
  /* width: 50px; */
}

.inputx {
  opacity: 0;
  position: absolute;
  z-index: -1;
}

.drophere div {
  margin: 20px 0px 70px 0px;
}

i.far.fa-image {
  font-size: 7em;
  color: #ebebeb;
  margin-top: 60px;
}
/* .drophere label,
.drophere div {
  margin-left: 25px;
  margin-right: 25px;
} */

label {
  color: gray;
  font-weight: 600;
  cursor: pointer;
  /* Style as you please, it will become the visible UI component. */
}
.drophere:hover div .chooselabel {
  color: #0057ff;
  border: 2px solid #0057ff54;
  padding: 5px 15px;
  border-radius: 5px;
}

.dragover div .chooselabel,
.dragover div .subtext {
  display: none;
}

/* .dragover div .droplabel,
.dragover div .subtext {
  display: none;
} */
.dragover div .droplabel {
  display: unset !important;
  color: #0057ff;
  border: 2px solid #0057ff54;
  box-sizing: border-box;
  padding: 5px 15px;
  border-radius: 5px;
}

.dragover {
  /* background-color: green !important; */
  background-color: hsla(0, 0%, 95%, 1) !important;
  color: #0057ff;
  outline-offset: -30px;
  outline: 9px dashed hsla(0, 0%, 92%, 1);
  color: #b5b5b5;
  transition: all 0.2s;
}

.drophere {
  display: grid;
  place-items: center;
  background-color: #f9f9f9;
  /* border: 3px dashed gray; */
  outline: 3px dashed hsla(0, 0%, 92%, 1);
  outline-offset: -15px;
  /* padding: 40px; */
  transition: all 0.2s;
}

.dragover i,
.drophere:hover i {
  filter: blur(5px);
}
.dragover,
.drophere:hover {
  outline-offset: -30px;
  outline: 9px dashed hsla(0, 0%, 92%, 1);
  background-color: hsla(0, 0%, 95%, 1);
  color: #b5b5b5;
}

.drophere:hover div span,
.drophere:hover div .droplabel {
  display: none;
}

.img {
  width: 100%;
  /* height: 40px; */
  /* background: gray; */
  position: relative;
}
.choose {
  width: 100%;
  height: 290px;
  position: absolute;
  /* background-color: gray; */
}
.subtext {
  color: gray;
}
</style>