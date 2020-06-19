<template>
  <div class="container"
       @scroll="scrollcalc">
    <div class="holder">
      <div class="sider">
        <a href="#section-1"
           class="listitem current">Browsing
        </a>
        <a href="#section-2"
           class="listitem">Password
        </a>
        <a href="#section-3"
           class="listitem">Email
        </a>
        <a href="#section-4"
           class="listitem">Blocked Users
        </a>
        <a href="#section-5"
           class="listitem">Delete Account
        </a>
      </div>
      <div class="main">
        <section id="section-1">
          <div class="elem">
            <div class="title">Browsing</div>
            <!-- <div class="seperator"></div> -->
            <input type="checkbox"
                   id="mature"
                   name="mature"
                   value="Bike">
            <label for="mature"> Block mature content in the Behance gallery</label>
            <br>
            <input type="checkbox"
                   id="recommendations"
                   name="recommendations"
                   value="Bike">
            <label for="recommendations"> Opt out of recommendations based on my project views and appreciations</label>

            <div class="br"></div>
          </div>
        </section>
        <section id="section-2">
          <div class="elem">
            <div class="title">Password</div>
          </div>
        </section>
        <section id="section-3">
          <div class="elem">
            <div class="title">Email</div>
          </div>
        </section>
        <section id="section-4">
          <div class="elem">
            <div class="title">Blocked Users</div>
          </div>
        </section>
        <section id="section-5">
          <div class="elem">
            <div class="title">Delete Account</div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created: function() {},
  methods: {
    scrollcalc() {
      let mainNavLinks = document.querySelectorAll('.sider a');
      // console.log(mainNavLinks);
      let fromTop = document.querySelector('#app > div.container').scrollTop;
      // console.log(fromTop);
      mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add('current');
          // console.log(link);
        } else {
          link.classList.remove('current');
        }
      });
    }
  }
};
</script>

<style scoped>
section {
  padding-top: 20px;
  width: -webkit-fill-available;
}
.current {
  border-left: 4px solid hsla(220, 100%, 66%, 1);
  color: #0057ff !important;
  font-weight: 600;
}
.main {
  grid-column: 2/3;
  padding-bottom: 100vw;
}

a {
  text-decoration: none;
}
label {
  cursor: pointer;
}

label,
span {
  font-size: 0.9em;
  color: #383838;
}
.title {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.8em;
  color: #3c3c3c;
  margin-bottom: 15px;
  cursor: default;
}

.elem {
  background-color: white;
  padding: 30px;
  /* margin-bottom: 20px; */
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  /* width: 100%; */
}
.container {
  background-color: #f9f9f9;
  letter-spacing: initial;
  position: sticky;
  overflow-y: scroll;
  height: calc(100vh - 60px);
  padding: 0px;
}
.holder {
  display: grid;
  grid-template-columns: 300px 10fr;
  /* grid-auto-rows: minmax(100px, auto); */
  gap: 1em;
  margin: auto;
  max-width: 1200px;
  padding: 0em 3em 0em 3em;
  width: 1200px;
}
.sider {
  width: 300px;
  background-color: white;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  position: fixed;
  width: 300px;
  margin-top: 20px;
}

.listitem:hover {
  background-color: hsla(0, 0%, 94%, 1);
}
.listitem {
  display: block;
  padding: 9px 9px 9px 25px;
  /* text-align: center; */
  color: #5f5f5f;
  font-size: 0.95em;
  border-bottom: 1px solid #e2e2e2;
  cursor: pointer;
  transition: border 0.3s, color 0.3s;
}
</style>