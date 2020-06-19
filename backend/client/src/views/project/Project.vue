<template>
  <div>
    <div class="notfound"
         v-if="notfound">
      <h1>404</h1>
      <br />{{ $route.params.id }} not found
    </div>
    <div v-else
         class="back">
      <div v-if="dataLoaded"
           class="wrapper">

        <div class="holder">
          <div class="sider">
            <div class="creatorsbtn">
              <div class="btncontainer"><img v-bind:src="project.submitter.profile.profileimg"
                     alt="" /></div>
              <p>Follow</p>
            </div>
            <div class="toolbtn">
              <div class="btncontainer"><i class="fas fa-tools"></i></div>
              <p>Tools</p>
            </div>
            <div class="savebtn">
              <div class="btncontainer"><i class="fas fa-bookmark"></i></div>
              <p>Save</p>
            </div>
            <div class="likebtn">
              <div class="btncontainer"><i class="fas fa-thumbs-up"></i></div>
              <p>Appreciate</p>
            </div>
          </div>
          <div class="header">
            <img v-bind:src="project.submitter.profile.profileimg"
                 alt="" />
            <div class="profile">
              <span class="title">{{ project.title }}</span>
              <div class="subline">
                <a class="name">{{ project.submitter.name }}</a><span class="dot"> &#8203; • &#8203; </span><a>Follow</a>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="img">
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/1f34ae95081319.5e98a37b1dc3d.jpg"
                   alt="" />
            </div>

            <div class="txt">
              <h4>
                Task: to develop a label design for the traditional czech
                absinth.
              </h4>
              <span>
                It's not a secret that the Czech Republic is famous as an
                absinth producing country. Plenty of tourists are coming here
                every year to try different kinds of mystical beverage.
              </span>
            </div>
            <div class="img"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/13969295081319.5e8ed67634f47.jpg"
                   alt=""></div>
          </div>
          <div class="socials">
            <div class="like">
              <i class="fas fa-thumbs-up"></i>
              <!-- <span class="likenumber">875</span> -->
            </div>
            <h2>{{ project.title }}</h2>
            <div class="socialgroup">
              <i class="fas fa-thumbs-up"></i> {{ project.social.apperciations }}
              <i class="fas fa-eye"></i> {{ project.social.projectviews }}
              <i class="fas fa-comment-alt"></i> {{ project.social.comments }}
            </div>
            <div class="published">
              Published: {{ formatDateProject(project.date) }}
            </div>
          </div>
          <div class="reel">
            <div class="header">
              <img v-bind:src="project.submitter.profile.profileimg"
                   alt="" />
              <div class="profile">
                <span class="title secondary">{{
                  project.submitter.name
                }}</span>
                <div class="subline"><a>Follow</a></div>
              </div>

            </div>
            <ProjectWork :username="project.submitter.username" />
          </div>
          <div class="footer">
            <div class="footercard comments">
              <Comments />
            </div>
            <div class="infogroup">
              <div class="footercard owners">
                <div class="cardtitle">Owners</div>
                <div class="header"
                     v-for="owner in this.owners"
                     v-bind:key='owner.username'>
                  <img v-bind:src="owner.profile.profileimg"
                       alt="" />
                  <div class="profile">
                    <span class="title secondary">{{
                      owner.name
                    }}</span>
                    <div class="subline"><a><i class="fas fa-map-marker-alt">⠀</i>{{owner.profile.location}}</a></div>
                  </div>
                  <button class=" btn follow">Follow</button>
                </div>
              </div>

              <div class="footercard tools">
                <div class="cardtitle">Tools</div>
                <div class="iconcontainer">
                  <a href=""><img v-for="tool in knownTools"
                         v-bind:key="tool.type"
                         class="toolicon"
                         :src="tool.img" /></a>
                </div>

                <!-- </img> -->
                <a v-for="tool in project.tools"
                   v-bind:key="tool"
                   class="tool">
                  {{ tool }}
                </a>
                <div class="br"></div>
                <div class="cardtitle">Categories</div>
                <a v-for="category in project.categories"
                   v-bind:key="category"
                   class="category">
                  {{ category }}
                </a>
              </div>

              <div class="footercard tags">
                <div class="cardtitle">Tags</div>
                <div class="cardgroup">
                  <button v-for="tag in project.tags"
                          v-bind:key="tag"
                          class="tag">
                    {{ tag }}
                  </button>
                </div>
              </div>
              <div class="legals">
                <div>© All Rights Reserved</div>
                <div><i class="fas fa-flag"></i> Mark as Spam</div>
                <div><i class="fas fa-exclamation-triangle"></i> Report</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toolConfig from '../project/data/tools.json';
import { mapActions, mapGetters } from 'vuex';
import ProjectWork from '../project/ProjectWork.vue';
import Comments from '../project/components/Comments.vue';
import mixinFuncs from '../../store/modules/misc.js';

export default {
  mixins: [mixinFuncs],
  computed: mapGetters(['project_error', 'user', 'isLoggedIn', 'project']),
  methods: {
    ...mapActions(['getProject', 'getProjectComments']),

    replaceToolsToIcons() {
      this.knownTools = toolConfig.filter(entry => {
        if (this.project.tools.includes(entry.type)) {
          this.project.tools = this.project.tools.filter(e => e !== entry.type);
          return true;
        }
      });
    }
  },
  components: {
    ProjectWork,
    Comments
  },
  data: () => ({
    notfound: false,
    dataLoaded: false,
    tools: false,
    owners: [],
    knownTools: []
  }),
  mounted() {
    this.getProject(this.$route.params.id).then(() => {
      if (this.project_error != null) {
        console.log(this.project_error);
        this.notfound = true;
        return;
      }
      this.replaceToolsToIcons();

      this.owners = [this.project.submitter];
      Array.prototype.push.apply(this.owners, this.project.involved);
      this.dataLoaded = true;
    });
  }
};
</script>

<style scoped>
button.follow {
  float: right;
  position: absolute;
  right: 0px;
  margin: 0;
  align-self: center;
}
img.toolicon {
  max-height: 30px;
  margin: 0px 13px 13px 0px;
  cursor: pointer;
}
.likebtn .btncontainer {
  background-color: #0057ff;
  color: white;
}

.btncontainer img[data-v-7a9bcd4e] {
  max-height: 40px;
  border-radius: 100%;
  width: auto;
  height: auto;
  align-self: center;
}
.sider {
  position: fixed;
  top: 130px;
  width: 100px;
  right: 0px;
  display: grid;
  justify-items: center;
  cursor: pointer;
  position: sticky;
  float: right;
  margin-right: -100px;
}
.sider div {
  width: 100%;
}
.sider div:hover {
  filter: brightness(95%);
}

.btncontainer {
  width: 40px !important;
  height: 40px;
  background-color: white;
  border-radius: 100%;
  border: 1px solid #d8d8d8;
  overflow: hidden;
  display: grid;
  margin: auto;
  justify-items: center;
  align-items: center;
  font-size: 0.8em;
}
.sider div p {
  text-align: center;
  font-weight: 600;
  font-size: 0.75em;
  color: #9a9a9a;
  margin: 0.7em;
  margin-bottom: 2.35em;
  letter-spacing: normal;
}

/* .img {
  background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/1f34ae95081319.5e98a37b1dc3d.jpg');
} */

@media only screen and (max-width: 1300px) {
  .footer {
    display: block !important;
    grid-template-columns: 1fr !important;
    grid-template-rows: 1fr 1fr !important;
  }
  .infogroup {
    width: unset !important;
    grid-template-columns: 1fr 1fr;
    margin-top: 1em;
  }
}
@media only screen and (max-width: 900px) {
  .infogroup {
    width: unset !important;
    grid-template-columns: 1fr;
  }
}
@media only screen and (max-width: 900px) {
  .footer {
    padding: 0.5em 0.5em 0.5em 0.5em !important;
  }
}

.cardtitle {
  text-transform: uppercase;
  font-size: 0.7em;
  font-weight: 600;
  /* border: 1px solid #c5c5c5; */
  /* padding: 4px 12px; */
  /* display: inline-grid; */
  /* margin: 4px; */
  /* border-radius: 3px; */
  /* cursor: pointer; */
  color: #9c9c9c;
  padding-bottom: 10px;
  letter-spacing: normal;
}

.category:hover,
.tool:hover {
  text-decoration: underline;
  cursor: pointer;
}

.category,
.tool {
  display: block;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 1.15em;
  /* display: contents; */
}
.infogroup {
  width: 400px;
  display: grid;
  gap: 1em;
  cursor: default;
}
.tag {
  text-transform: uppercase;
  font-size: 0.7em;
  font-weight: 600;
  border: 1px solid #c5c5c5;
  /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) !important; */
  padding: 7px 14px;
  background-color: white;
  display: inline-grid;
  margin: 4px 8px 4px 0px;
  border-radius: 3px;
  cursor: pointer;
  color: #404040;
  letter-spacing: normal;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
}
.tag:hover {
  /* filter: brightness(50%); */
  background-color: #f3f3f3;
}

.secondary:hover {
  cursor: pointer;
  text-decoration: underline;
}

i.fas.fa-eye,
i.fas.fa-comment-alt {
  margin-left: 10px;
}

.published,
.legals div {
  color: gray;
  font-size: 0.75em;
  cursor: default;
}
.legals div {
  padding: 1em 1em;
  display: inline-table;
  cursor: pointer;
}
.legals div:hover {
  text-decoration: underline;
}
.footer {
  border: 1px solid #e2e2e2;
  padding: 40px 55px 55px 55px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  /* grid-auto-rows: minmax(100px, auto); */
  gap: 1em;
  margin: auto;
  max-width: 1600px;
  padding: 3em 3em 3em 3em;
  align-items: flex-start;
}
.footercard {
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr; */
  grid-template-rows: 1fr;
  padding: 30px;
  gap: 20px;
  background-color: white;
  /* border: 1px solid #e2e2e2; */
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
  border-radius: 3px;
  /* margin-bottom: 3em; */
}

@media only screen and (max-width: 1100px) {
  .holder {
    margin: 0px !important;
  }
  .sider {
    display: none;
  }
}

.reel .header {
  color: white;
}

h2 {
  margin: 10px;
  cursor: default;
}

.like > i {
  display: block;
}
.like {
  width: 85px;
  height: 85px;
  background-color: #0057ff;
  /* margin: auto; */
  border-radius: 100%;
  /* display: grid; */
  /* padding-top: 23px; */
  box-sizing: border-box;
  color: white;
  display: table-cell;
  vertical-align: middle;
  font-size: 1.5em;
  cursor: pointer;
}

.reel {
  background-color: #191919;
  padding: 30px;
}
.socials {
  /* height: 300px; */
  background-color: black;
  text-align: center;
  color: white;
  padding: 45px 30px 30px 30px;
  text-align: -webkit-center;
}
.socialgroup {
  cursor: default;
}
.published,
.socialgroup i,
.socialgroup {
  color: gray;
}
.published {
  padding: 30px;
}

.txt {
  max-width: 670px;
  font-size: 0.9em;
  line-height: 1.8;
  /* margin: auto; */
  padding: 25px;
  margin: 2em auto 3em auto;
}
.img {
  /* padding: 20px; */
  display: flex;
}
.img img {
  max-width: -webkit-fill-available;
}
.content {
  background-color: white;
  display: inline;
  /* height: 820px; */
}
.holder {
  margin: 0px 100px 250px 100px;
  position: relative;
}
.back {
  background-color: #f9f9f9;
}
.dot {
  cursor: default;
}
a {
  cursor: pointer;
}
a:hover {
  text-decoration: underline;
}
.header {
  padding: 8px;
  display: inline-flex;
  box-sizing: border-box;
  position: relative;
  width: 100%;
}
.wrapper {
  max-width: 1440px;
  /* padding: 0em 3em 0em 3em; */
  margin: auto;
  /* background-color: white; */
}
.header img {
  max-height: 40px;
  border-radius: 100%;
  width: auto;
  height: auto;
  align-self: center;
}
.profile {
  /* display: grid; */
  /* justify-content: flex-start; */
  padding-left: 15px;
  /* max-height: 50px; */
  /* box-sizing: border-box; */
  /* height: auto; */
  /* display: flex; */
  /* box-sizing: border-box; */
  align-self: center;
}

span.title {
  font-size: 0.9em;
  font-weight: bold;
  align-self: flex-end;
  /* padding-bottom: 10px; */
  /* line-height: 1.9; */
  cursor: default;
}

.subline {
  font-size: 0.8em;
  line-height: 1.9;
  color: gray;
}

span.title {
  font-size: 0.9em;
  font-weight: bold;
}
.subline {
  font-size: 0.8em;
}
.notfound {
  text-align: center;
  font-size: 1em;
  margin: auto;
}

h1 {
  text-align: center;
  font-size: 10em;
  margin: 0px;
}
</style>
