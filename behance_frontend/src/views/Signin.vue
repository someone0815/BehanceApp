<template>
  <div id="sign">
    <div class="bg"></div>
    <div class="signcontainer">
      <div class="holder left">
        <img class="icon"
             src="https://static.adobelogin.com/clients/bhnc_22989526-955d-49e3-9a7d-f093e8f3dbf5/4x_ae636b0f623792081b77838920fee109.png">
        <div class="logo">Behance</div>
      </div>
      <div class="holder">

        <div id="signin">
          <div class="formcontainer">
            <h2>Sign in</h2>
          </div>
        </div>
        <div id="signup">
          <div class="formcontainer">
            <h2>Sign up</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="source">
      <img class="software"
           src="https://auth.services.adobe.com/img/attributions/Behance.svg">
      <div class="sourcetxt">Tom Anders Wilkens</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media only screen and (max-width: 700px) {
  .source,
  .left {
    display: none !important;
  }
  .holder {
    margin: auto;
  }
}
@media only screen and (max-width: 500px) {
  .holder {
    max-width: unset !important;
  }
}

#sign {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: 36;
  /* background-image: url(https://auth.services.adobe.com/img/canvas/Fotolia_118267918_XL.jpg); background-image: url(https://auth.services.adobe.com/img/canvas/Fotolia_228669299_XL.jpg); */
  background-image: url(https://auth.services.adobe.com/img/canvas/TomAndersWatkins.jpg);
  background-size: cover;
  background-position: center center;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  z-index: -1;
}
.signcontainer {
  max-width: 950px;
  /* background-color: gray; */
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.holder {
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  max-width: 430px;
  position: relative;
}
.formcontainer {
  height: 600px;
  width: 100%;
  background-color: white;
  padding: 45px;
  box-sizing: border-box;
}
.left {
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  box-sizing: border-box;
  width: auto;
}
.icon {
  max-height: 50px;
}
.logo {
  font-size: 2em;
  color: white;
  padding-left: 20px;
}
.source {
  position: fixed;
  color: white;
  bottom: 0px;
  width: 100%;
  display: flex;
  padding: 10px;
  padding-left: 25px;
  box-sizing: border-box;
}
.software {
  max-height: 14px;
}
.sourcetxt {
  vertical-align: middle;
  position: relative;
  bottom: 4px;
  margin-left: 10px;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
}
h2 {
  font-weight: 600;
  font-size: 1.8em;
  margin: 0px;
}
#signin,
#signup {
  position: absolute;
  width: inherit;
}
</style>