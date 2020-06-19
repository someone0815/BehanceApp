<template>
  <div>
    <!-- <h3>text media</h3> -->
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive, focused }">
      <!--  -->
      <div class="menubar is-hidden" :class="{ 'is-focused': focused }">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <i class="fa fa-bold"></i>
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <i class="fa fa-italic"></i>
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <i class="fa fa-strikethrough"></i>
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <i class="fa fa-underline"></i>
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <i class="fa fa-paragraph"></i>
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          <b>H1</b>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          <b>H2</b>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          <b>H3</b>
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <i class="fa fa-list-ul"></i>
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <i class="fa fa-list-ol"></i>
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <i class="fa fa-quote-right"></i>
        </button>
      </div>
    </editor-menu-bar>

    <editor-content class="editor" :editor="editor" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'; //mapGetters,

import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import {
  Bold,
  Blockquote,
  BulletList,
  HardBreak,
  Heading,
  ListItem,
  OrderedList,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions';

export default {
  components: {
    EditorContent,
    EditorMenuBar,
  },
  props: {
    elem: Object,
    index: Number,
  },
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        new Blockquote(),
        new BulletList(),
        new HardBreak(),
        new Heading({ levels: [1, 2, 3] }),
        new ListItem(),
        new OrderedList(),
        new Link(),
        new Bold(),
        new Italic(),
        new Strike(),
        new Underline(),
        new History(),
      ],
      content: '',
      onUpdate: ({ getJSON }) => {
        // console.log(getHTML().length);
        this.updateHTML({ json: getJSON(), stateIndex: this.index });
      },
      autoFocus: true,
    });
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  methods: {
    ...mapActions(['updateHTML']),
  },
};
</script>

<style>
.menubar__button:hover {
  cursor: pointer;
  color: gray;
}
.menubar__button {
  background: gray;
  padding: 11px 14px;
  color: #1e1e1e;
  background-color: white;
  border: 0px;
  border-radius: 5px;
}
.menubar {
  /* display: flex; */
  /* justify-content: center; */
  background-color: white;
  padding: 8px;
  width: fit-content;
  margin: auto;
  border-radius: 10px;
  color: white;
}
.is-active {
  background: #e8e8e8;
}
.is-focused {
  opacity: 1 !important;
}
.is-hidden {
  opacity: 0;
}
.editor div {
  margin: 25px;
  padding: 4px;
}
</style>
