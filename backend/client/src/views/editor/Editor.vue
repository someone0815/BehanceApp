<template>
  <div>
    <div class="nav-container">
      <div class="nav">
        <div class="steps">
          <div class="elm" :class="{ sel: state == 1 }" @click="state = 1">
            1. Content
          </div>
          <div class="verticalsep">|</div>
          <div class="elm" :class="{ sel: state == 2 }" @click="state = 2">
            2. Cover
          </div>
          <div class="verticalsep">|</div>

          <div class="elm" :class="{ sel: state == 3 }" @click="state = 3">
            3. Settings
          </div>
        </div>
        <div class="btngroup">
          <button class="btn preview" :class="{ deactivated: deactivated }">
            Preview
          </button>
          <div class="verticalsep">|</div>

          <button class="btn save" :class="{ deactivated: deactivated }">
            Save
          </button>
          <button class="btn continue" :class="{ deactivated: deactivated }">
            Continue
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="holder">
        <div class="sider">
          <div class="listtitle">Add Media</div>
          <div class="listitem"><i class="fas fa-upload"></i> Upload Files</div>
          <div class="listitem"><i class="fas fa-font"></i> Add Text</div>
          <div class="listitem"><i class="fas fa-link"></i> Embed Media</div>
          <div class="listitem">
            <i class="fas fa-grip-horizontal"></i> Photo grid
          </div>
          <div class="listtitle">Edit Design</div>
          <div class="listitem"><i class="fas fa-pen"></i> Style & Layout</div>
        </div>
        <div class="main">
          <div class="empty" v-if="Object.keys(content).length < 1">
            <div>Start Building your project:</div>
            <br />
            <div>
              <i
                class="fas fa-upload"
                @click="
                  addContent({
                    c: {
                      type: 'image',
                      url: '',
                      id: Math.floor(Math.random() * Math.floor(9999)),
                    },
                    i: -1,
                  })
                "
              ></i>
              <p>Files</p>
            </div>
            <div>
              <i
                class="fas fa-font"
                @click="
                  addContent({
                    c: {
                      type: 'text',
                      json: '',
                      id: Math.floor(Math.random() * Math.floor(9999)),
                    },
                    i: -1,
                  })
                "
              ></i>
              <p>Text</p>
            </div>
            <!-- <div>
              <i class="fas fa-link"
                 @click="addContent(typeConfig.link)"></i>
              <p>Embed</p>
            </div> -->
            <!-- <div>
              <i class="fas fa-grip-horizontal"
                 @click="addContent({c: grdConfig, i: -1})"></i>
              <p>Grid</p>
            </div> -->
          </div>
          <div class="content" v-else>
            <InsertMedia v-on:insert="addContent({ c: $event, i: -1 })" />
            <div
              class="contentItem"
              v-for="(elem, index) in content"
              v-bind:key="elem.id"
            >
              <ImageMedia
                v-if="elem.type == 'image'"
                :elem="elem"
                :index="index"
              />
              <TextMedia
                v-if="elem.type == 'text'"
                :elem="elem"
                :index="index"
              />

              <InsertMedia v-on:insert="addContent({ c: $event, i: index })" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import InsertMedia from '../editor/components/InsertMedia.vue';
import ImageMedia from '../editor/components/ImageMedia.vue';
import TextMedia from '../editor/components/TextMedia.vue';

export default {
  components: { InsertMedia, ImageMedia, TextMedia }, //
  computed: mapGetters(['content']),
  props: {},
  data: () => ({
    state: 1,
    deactivated: true,
  }),
  methods: {
    ...mapActions(['addContent']),
  },
};
</script>

<style scoped>
.deactivated {
  color: white !important;
  background-color: #dedede !important;
  border: 0px;
}
.empty > div:nth-child(1) {
  padding-bottom: 40px;
  font-size: 1.5em;
  color: #cacaca;
  cursor: default;
}
.empty div p {
  font-weight: 600;
  font-size: 0.85em;
  cursor: default;
}

.empty div {
  display: grid;
  place-items: center;
  display: inline-grid;
  margin: 0px 20px 0px 20px;
}

.empty div i:hover {
  background: #0057ff;
  color: white;
  transition: background 0.25s, color 0.25s;
  cursor: pointer;
}
.empty div i {
  width: 90px;
  height: 90px;
  text-align: center;
  display: grid;
  align-content: center;
  background-color: #f2f6ff;
  border-radius: 100%;
  color: #0057ff;
}
.empty {
  align-self: center;
  text-align: center;
}

div.sider div:nth-last-child(1) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

div.sider > div:nth-child(1) {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.listtitle {
  /* background-color: gray; */
  background: #000;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.7em;
  padding: 6px;
  padding-left: 25px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: default;
}
.listitem:hover {
  background: #333333;
}
.listitem {
  display: block;
  padding: 15px 15px 15px 25px;
  /* text-align: center; */
  font-size: 0.85em;
  cursor: pointer;
  transition: background 0.1s;
  color: #e2e1e1;
  background: #1e1e1e;
  border-top: 1px solid #242424;
}
.main {
  grid-area: 1/2;
  background: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
  border-radius: 3px;
  min-height: 780px;
  width: 100%;
  margin-top: 35px;
  margin-bottom: 100vh;
  display: grid;
}
.listitem i {
  margin-right: 15px;
  font-size: 0.9em;
}
.sider {
  width: 240px;
  background-color: white;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  position: fixed;
  width: 240px;
  margin-top: 35px;
}
.verticalsep {
  display: grid;
  align-content: center;
  margin: 15px;
  color: #b7b7b7;
  font-weight: 200;
}
.btn {
  padding-right: 15px;
  padding-left: 15px;
  margin-left: 15px;
  margin-right: 0px;
  float: right;
  height: fit-content;
  place-self: center;
}
.btngroup {
  display: inline-flex;
  float: right;
  /* right: 0px; */
  display: inline-flex;
  height: -webkit-fill-available;
}
.continue {
  background-color: #04ac00;
  /* border: 1px solid gray; */
  /* color: gray; */
}
.save {
  margin-left: 0px;
}
.preview {
  background-color: white;
  border: 1px solid #dadada;
  color: gray;
}

.steps {
  display: inline-flex;
  height: -webkit-fill-available;
}
.nav {
  width: 1000px;
  /* top: 60px; */
  height: 80px;
  /* position: absolute; */
  width: inherit;
  margin: 0px 40px 0px 30px;
}
.nav-container {
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e0e0e0;
  height: 80px;
  padding: 0px 20px 0px 20px;
  box-sizing: border-box;
}
.sel {
  color: #0057ff !important;
  border-bottom: 1px solid #0057ff;
}
.elm {
  /* padding: 10px; */
  /* margin-right: 20px; */
  /* height: auto; */
  display: grid;
  align-content: center;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 500;
  color: gray;
}

.container {
  background-color: #f9f9f9;
  letter-spacing: initial;
  position: -webkit-sticky;
  position: sticky;
  overflow-y: scroll;
  height: calc(100vh - 140px);
  padding: 0px;
  /* margin-top: 60px; */
}
.holder {
  display: grid;
  grid-template-columns: 240px 10fr;
  /* grid-auto-rows: minmax(100px, auto); */
  gap: 1em;
  margin: 0px auto 0px auto;
  max-width: 1530px;
  padding: 0em 3em 0em 3em;
  top: 0px;
  position: absolute;
  width: -webkit-fill-available;
}
</style>
