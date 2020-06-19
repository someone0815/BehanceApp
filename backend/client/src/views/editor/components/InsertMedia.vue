<template>
  <div class="insertmedia">
    <div class="vis">
      <div class="tag">
        <span>Insert Media:</span>
        <i
          class="fas fa-upload"
          v-on:click="
            $emit('insert', {
              type: 'image',
              url: '',
              id: Math.floor(Math.random() * Math.floor(9999)),
            })
          "
        ></i>
        <!-- {type: 'ddd', id: Math.floor(Math.random() * Math.floor(9999))} -->
        <i
          class="fas fa-font"
          v-on:click="
            $emit('insert', {
              type: 'text',
              json: '',
              id: Math.floor(Math.random() * Math.floor(9999)),
            })
          "
        ></i>
        <!-- <i class="fas fa-link"
           v-on:click="$emit('insert', typeConfig.link)"></i> -->
        <!-- <i class="fas fa-grip-horizontal"
           v-on:click="$emit('insert', grdConfig)"></i> -->
      </div>
    </div>
  </div>
</template>

<script>
// import typeConfig from '../data/types.json';

export default {
  data: () => ({}),
};
</script>

<style>
.insertmedia:hover .vis .tag {
  opacity: 1 !important;
}
.insertmedia .vis .tag {
  opacity: 0;
  transition: inherit;
}

.insertmedia:hover .vis {
  border: 1px dashed rgba(0, 87, 255, 0.75);
}
.insertmedia .vis {
  /* opacity: 1; */
  transition: inherit;
  border: 1px dashed #e4e4e4;
  display: grid;
  height: 25px;
}
.insertmedia span {
  cursor: default;
  font-weight: 500;
  font-size: 0.8em;
  margin-right: 15px;
}
.insertmedia .vis div i:hover {
  background-color: #515151;
  border-radius: 5px;
  cursor: pointer;
}
.insertmedia .vis div i {
  padding: 12px;
}

.insertmedia {
  transition: opacity 0.15s, border 0.15s;
  margin: 15px 0px;
}
.insertmedia .vis div {
  background: gray;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  /* padding: 15px 24px; */
  place-self: center;
  padding: 5px 15px;
  background-color: #252525;
  color: white;
  border-radius: 5px;
  top: -25%;
  /* height: 125%; */
  position: relative;
}
</style>
