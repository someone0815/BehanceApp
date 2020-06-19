<template>
  <div>
    <div class="post"
         v-if="isLoggedIn">
      <div class="header">
        <img v-bind:src="user.profile.profileimg"
             alt="" />
      </div>
      <textarea name="Text1"
                placeholder="What are your thoughts on this project?"
                cols="40"
                rows="5"></textarea>
      <button class="btn cmt"
              @click.prevent="loadProjects">
        Post a Comment
      </button>
    </div>
    <router-link to="/signin"
                 v-else>
      <button class="link">
        Signin to comment⠀
        <i class="fas fa-sign-in-alt"></i>
      </button>
    </router-link>
    <div class="br"></div>
    <div class="seperator"></div>
    <div class="br"></div>
    <div class="comment"
         v-for="(comment, index) in allProjectComments"
         v-bind:key="index">
      <!-- v-for  -->
      <div class="header">
        <img v-bind:src="comment.commentUser.profileimg"
             alt="" />
      </div>
      <div class="contents">
        <div class="commenter">
          <div class="name"
               :class="{
                  'author' :isInvolved(comment, index) || 
               comment.commentUser.username == project.submitter.username,  
               }">
            {{ comment.commentUser.name }}
          </div>

          <!-- <div class="pin author"
               v-if="comment.commentUser.username == project.submitter.username">
            Author
          </div> -->
          <!-- <div class="pin author"
               v-if="isInvolved(comment, index)">
            Author
          </div> -->
          <div class="pin  me"
               v-if="comment.commentUser.username == user.username">
            You
          </div>
          <div class="date">
            {{ formatDate(comment.date) }}
          </div>
          <div class="report">
            <i class="fas fa-flag"></i>
          </div>
          <div class="remove"
               v-if="
                        user.username == project.submitter.username ||
                          user.username == comment.commentUser.username 
                      ">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <p class="body">{{ comment.text }}</p>
      </div>
    </div>
    <button class="link"
            v-if="!comment_error"
            @click.prevent="loadComments">See more comments <i class="fas fa-arrow-down"></i></button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import misc from '../../../store/modules/misc.js';
import mixinFuncs from '../../../store/modules/misc.js';

export default {
  mixins: [mixinFuncs],
  computed: mapGetters([
    'user',
    'allProjectComments',
    'commentsindex',
    'comment_error',
    'isLoggedIn',
    'project'
  ]),
  methods: {
    ...mapActions(['getProjectComments']),
    isInvolved(comment) {
      for (let i = 0; i < this.project.involved.length; i++) {
        if (
          Object.values(this.project.involved[i]).includes(
            comment.commentUser.username
          )
        ) {
          return true;
        }
      }
    },
    loadComments() {
      this.getProjectComments({
        postID: this.$route.params.id,
        amount: 3,
        index: this.commentsindex
      }).then(() => {
        // console.log('allProjectComments');
        // console.log(this.allProjectComments);
      });
    }
  },
  components: {},
  data: () => ({
    notfound: false,
    dataLoaded: false,
    commentLoaded: false,
    tools: false,
    owners: [],
    knownTools: []
  }),
  mounted() {
    this.loadComments();
    // this.owners = [this.project.submitter];
    // Array.prototype.push.apply(this.owners, this.project.involved);
  }
};
</script>

<style>
.author {
  /* color: #0057ff; */
  font-weight: bold !important;
  /* text-shadow: 1px 1px 1px #00000038; */
  color: hsla(220, 100%, 48%, 1) !important;
}
textarea[name='Text1']:active {
  border-color: blue;
}
textarea[name='Text1'] {
  border-color: #e4e4e4;
  padding: 10px;
  font-size: 0.9em;
  border-radius: 4px;
}
.cmt:hover {
  background: #f7f7f7 !important;
}
.cmt {
  background-color: white;
  color: gray;
  border-color: #d6d6d6;
  text-decoration: none !important;
}
a {
  cursor: pointer;
}
a:hover {
  text-decoration: underline;
}
.comment .header img,
.name:hover {
  text-decoration: underline;
  cursor: pointer;
}
.pin {
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.65em;
  font-weight: 500;
  padding: 1px 8px;
  /* background-color: #cecece; */
  border: 1px solid gray;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
  /* color: white; */
  margin: 0px 10px;
  border-radius: 20px;
  cursor: default;
}

/* .pin.author {
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.65em;
  font-weight: 500;
  padding: 1px 8px;
  /* background-color: #cecece; 
  border: 1px solid gray;
  /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) !important; */
/* color: white; */
/* margin: 0px 10px; 
  border-radius: 20px;
  cursor: default;
} */

.seperator {
  width: 100%;
  height: 1px;
  background-color: hsla(0, 0%, 93%, 1);
  margin: 1em 0em 2em 0em;
}

.comment:hover .contents .commenter .remove,
.comment:hover .contents .commenter .report {
  visibility: visible;
}

.remove,
.report {
  /* display: inline-block; */
  color: gray;
  /* position: relative; */
  float: right;
  font-size: 0.75em;
  padding: 15px 0px 15px 15px;
  cursor: pointer;
  visibility: hidden;
}

.body {
  font-size: 0.9em;
  letter-spacing: normal;
  line-height: 1.4;
  margin-top: 5px;
  cursor: default;
}
.date {
  font-weight: 600;
  margin-left: 10px;
  font-size: 0.7em;
  font-weight: 500;
  color: gray;
  cursor: default;
}
.name {
  font-weight: 600;
  font-size: 0.9em;
  color: #2f2f2f;
}
.name,
.date {
  display: inline-block;
}
.comment {
  display: grid;
  grid-template-columns: 1fr 14fr;
  gap: 0;
}
.post .btn {
  grid-column: 1/3;
  justify-self: end;
  margin-right: 0px;
}

.comment .header img,
.post .header img {
  align-self: baseline;
}
.comment .header,
.post .header {
  /* max-height: 70px; */
  /* height: 70px; */
  /* width: 70px; */
  padding: 0px;
  padding-top: 5px;
  padding-right: 20px;
  display: inline-flex;
  box-sizing: border-box;
}
.post {
  display: grid;
  grid-template-columns: 1fr 14fr;
  gap: 0;
}
.header {
  padding: 8px;
  display: inline-flex;
  box-sizing: border-box;
  position: relative;
  width: 100%;
}
.header img {
  max-height: 40px;
  border-radius: 100%;
  width: auto;
  height: auto;
  align-self: center;
}
</style>