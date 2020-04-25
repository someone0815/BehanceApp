<template>
  <div>
    <div class="container">
      <div id="xx"
           class="wrapper">
        <div class="card"
             v-for="(category, index) in categories"
             v-bind:key="category.id"
             @click="moveTo(category.id)">
          <div class="cont"
               :class="[selected == index ? 'is-selected' : '']">
            <img class="thumb"
                 :src="category.thumbnail" />
          </div>

          <div class="txt">
            <p>{{ category.id}} {{ category.category}}</p>
          </div>
        </div>
      </div>
      <div class="controls-wrapper">
        <button class="controls"
                @click="moveTo(selected -1)"><i class="fas fa-angle-left fa-lg"></i></button>
        <button class="controls"
                @click="moveTo(selected +1)"><i class="fas fa-angle-right fa-lg"></i></button>
      </div>
    </div>
    <div class="container">
      <div class="wrapper sub">
        <button class="sub-btn"
                v-if="categories[this.selected].subcategories.length != 0"
                :class="[subselected == -1 ? 'is-selectedsub' : '']"
                @click="selectSub(-1)">
          All Categories
        </button>
        <button class="sub-btn"
                v-for="(subcategory, index) in categories[this.selected].subcategories"
                v-bind:key="subcategory.id"
                :class="[subselected == index ? 'is-selectedsub' : '']"
                @click="selectSub(index)">
          <!--@click="" -->
          {{subcategory.subcategory}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import categories from '../data/categories.json';
export default {
  data: () => ({
    selected: 14,
    subselected: -1,
    galleryAmount: 0
    // categories: []
  }),
  created() {
    this.categories = categories;
    this.selected = 15;
    this.galleryAmount = categories.length;
  },
  mounted() {
    document
      .querySelector('#xx')
      .scrollTo(6500 / 2 - window.innerWidth / 2 + 20, 6500);
  },
  methods: {
    moveTo: function(destination) {
      let steps = destination - this.selected;

      // if click on right side of screen
      if (event.clientX > window.innerWidth / 2) {
        if (destination <= this.selected) {
          steps = this.galleryAmount - this.selected + destination;
        }
        for (let i = 0; i < steps; i++) {
          if (this.selected > this.galleryAmount - 2) {
            this.selected = -1;
          }
          this.selected = this.selected + 1;
          let parent = document.querySelector('.wrapper');
          let first = parent.firstElementChild;
          parent.append(first);
        }
      } else {
        if (destination >= this.selected) {
          steps = (this.galleryAmount - 1 - steps + 1) * -1;
        }
        for (let i = 0; i > steps; i--) {
          if (this.selected < 1) {
            this.selected = this.galleryAmount;
          }
          this.selected = this.selected - 1;
          let parent = document.querySelector('.wrapper');
          let last = parent.lastElementChild;
          parent.prepend(last);
        }
      }
      document
        .querySelector('#xx')
        .scrollTo(6500 / 2 - window.innerWidth / 2 + 20, 6500);
    },
    selectSub: function(index) {
      this.subselected = index;
      console.log(index);
    }
  }
};
</script>

<style scoped>
/* @media only screen and (max-width: 605px) {
  .wrapper {
    overflow: hidden !important;
  }
} */
.sub-btn {
  padding: 12px 18px 12px 18px;
  margin: 5px 5px 0px 5px;
  cursor: pointer;
  border: 0px;
  border: 1px #efeeee solid;
  /* height: 45px; */
  /* width: 45px; */
  background: white;
  align-self: center;
  border-radius: 3px;
  /* margin: 16px; */
  display: inline-block;
  justify-content: center;
  pointer-events: all;
  color: gray;
  transition: all 0.3s;
  cursor: pointer;
  box-shadow: 0px 2px 3px 0px rgba(69, 69, 76, 0.2);
  font-size: 16px;
  font-weight: bold;
  color: #2b2b2b;
}
.is-selectedsub,
.sub-btn:hover {
  color: #0057ff;
}
.disabled {
  pointer-events: none !important;
  display: none !important;
}
.move-forward {
  /* right: 210px !important; */
  transition: all 0.2s;
}
.move-backward {
  right: -210px !important;
}
.controls-wrapper {
  position: absolute;
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  background: transparent;
  z-index: 29;
  background: linear-gradient(
    90deg,
    rgb(255, 255, 255) 0%,
    rgb(255, 255, 255) 2%,
    rgba(255, 255, 255, 0) 10%,
    rgba(255, 255, 255, 0) 90%,
    rgb(255, 255, 255) 98%,
    rgb(255, 255, 255) 100%
  );
  pointer-events: none;
}
.controls {
  border: 1px #f5f5f5 solid;
  height: 45px;
  width: 45px;
  background: white;
  align-self: center;
  border-radius: 100%;
  margin: 16px;
  display: flex;
  justify-content: center;
  pointer-events: all;
  color: gray;
  transition: all 0.3s;
  cursor: pointer;
  box-shadow: 1px 2px 5px 0px rgba(69, 69, 76, 0.2);
}
.controls:hover {
  color: black;
  background: hsla(0, 0%, 95%, 1);
}
i {
  align-self: center;
}

.txt {
  z-index: 3;
  grid-column: 1;
  grid-row: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

p {
  font-weight: 900;
  font-size: 17px;
}
.is-selected {
  opacity: 0 !important;
}
.container {
  padding: 1.25em;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper {
  display: grid;
  grid-gap: 10px;
  grid-auto-columns: 200px;
  background-color: #fff;
  color: #444;
  display: grid;
  grid-auto-flow: column;
  position: relative;
  right: 0;
  transition: all 0.2s;
  overflow: scroll;
}
.wrapper .card {
  background-color: #0057ff;
  color: #fff;
  border-radius: 3px;
  /* padding: 20px; */
  font-size: 150%;
  height: 80px;
  /* max-height: 80px; */
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  box-sizing: border-box;
}
.sub {
  grid-auto-columns: auto;
  display: block;
  text-align: center;
}
::-webkit-scrollbar {
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: gray;
  height: 0px;
}
.cont {
  transition: all 0.3s;
  display: grid;
  grid-column: 1;
  grid-row: 1;
  margin-top: -30px;
  display: grid;
  grid-column: 1;
  height: 80px;
  opacity: 1;
  filter: brightness(70%);
}
.cont:hover {
  opacity: 0;
}

img {
  width: 100%;
  display: grid;
  grid-column: 1;
  grid-row: 1;
}

.card:nth-child(2) .cont:hover {
  background: blue;
  color: #fff;
}
</style>