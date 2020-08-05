<template>
  <div id="app">
    <keep-alive include="home">
      <router-view class="app" />
    </keep-alive>
  </div>
</template>
<style>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background: #210832;
}

body::after {
  content:
    url("/catalog/search.svg") url("/catalog/close.svg") url("/catalog/star.svg") url("/catalog/star_fill.svg") url("/catalog/vk.svg");
  display: none;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  line-height: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}

.app {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
}

/*[v-cloak] > * {
  display: none;
}
.loading::before {
  content: " ";
  display: block;
  width: 16px;
  height: 16px;
  background-image: url("data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==");
}*/

.header {
  display: block;
  padding: 15px;
  padding-right: 40px;
  margin-bottom: 20px;
  text-align: left;
  font-weight: 700;
  font-size: 20px;
  color: white;
  background: #3a6186;
  background: -o-linear-gradient(left, #89253e, #3a6186);
  background: -webkit-gradient(linear, left top, right top, from(#89253e), to(#3a6186));
  background: linear-gradient(to right, #89253e, #3a6186);
}

.site-name {
  display: block;
  max-width: 400px;
  text-decoration: none;
  color: white;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
}

a {
  text-decoration: none;
  color: black;
  font-size: 20px;
}

a.back-home {
  display: inline-block;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  color: #ffffff;
  font-size: 14px;
  background-color: #89253e;
  -webkit-transition: .3s linear;
  -o-transition: .3s linear;
  transition: .3s linear;
  background-repeat: no-repeat;
  background-position: left center;
}

a.back-home:hover {
  color: #ffffff !important;
  background: #6e1e32;
  -webkit-transition: .3s linear;
  -o-transition: .3s linear;
  transition: .3s linear;
}

p {
  line-height: 1.3;
}

.container-input {
  position: relative;
}

.container-header {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.toggle-search {
  width: 24px;
  height: 24px;
  /*  position: absolute;*/
  background: transparent;
  border: none;
  cursor: pointer;
  background-image: url("/catalog/search.svg");
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: center;
}

.toggle-search:focus {
  outline: none;
}

.toggle-search.switched {
  background-image: url("/catalog/close.svg");
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: center;
}

.search-input {
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #fff;
  background: rgba(0, 0, 0, 0.8);
}

.search-input.opened {
  display: block;
}

.search-game {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  padding-right: 50px;
  padding-left: 15px;
  padding-bottom: 10px;
  width: 100%;
  font-size: 20px;
  color: white;
  border: none;
  background: transparent;
  border-bottom: 1px solid white;
  height: 50px;
  /* left: 0;
  top: 0; */
}

input:focus {
  outline: none;
}

.wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: left;
  -webkit-justify-content: left;
  -ms-flex-pack: left;
  justify-content: left;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  /*  min-height: 100vh;*/
  padding: 15px;
  padding-top: 20px;
}

.item,
.photo {
  width: 100%;
  margin-bottom: 10px;
}

.card {
  position: relative;
  width: 100%;
  height: 250px;
  cursor: pointer;
  color: white;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 10px;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.card:hover {
  -webkit-box-shadow: 0 0 10px black;
  box-shadow: 0 0 10px black;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.card-image {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 5px;
}

.card-genre {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px;
  border-radius: 5px;
  background: #210832;
  /*  opacity: 0.8;*/
  background: rgba(0, 0, 0, .7) !important;
}

b.desc {
  font-size: 18px;
}

.card-desc {
  position: absolute;
  bottom: 0;
  width: 100%;
  max-height: 100px;
  background: rgba(0, 0, 0, 0.7) !important;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

h3.game-title {
  padding: 0 10px;
  margin: 15px 0;
}

p.game-desc {
  padding: 0 10px;
  margin: 10px 0;
}

h3.game-title,
p.game-desc {
  padding-left: 10px;
  padding-right: 10px;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
}

.local-multiplayer,
.game-local-multiplayer {
  background: url("/catalog/local_multiplayer2.svg");
  background-size: 40px 40px;
  background-repeat: no-repeat;
  background-position: center;
  width: 50px;
  height: 50px;
}

.game-local-multiplayer {
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.local-multiplayer {
  display: table-cell;
  vertical-align: middle;
  position: relative;
  width: 100%;
  padding-left: 50px;
  background-position: left center;
}

/*.local-multiplayer::before {
  display: block;
  content: "*";
  position: absolute;
  top: 5px;
  left: 40px;
}*/

::-webkit-input-placeholder {
  color: #fff;
}

::-moz-placeholder {
  color: #fff;
}

:-moz-placeholder {
  color: #fff;
}

:-ms-input-placeholder {
  color: #fff;
}

input:focus {
  outline: none;
}

.tabs {
  font-size: 16px;
  list-style: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  border: 1px solid #89253e;
}

.container--tabs {
  padding-left: 0;
}

.tabs-item {
  display: block;
  width: 25%;
  text-align: center;
}

.tabs-item a {
  color: #fff;
  display: block;
  padding: 1em 0;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border-bottom: 3px solid transparent;
  text-decoration: none;
  opacity: 0.8;
}

.tabs-item.active a {
  border-bottom: 3px solid #89253e;
  opacity: 1;
  -webkit-animation: tabs-ripple 0.2s linear forwards;
  animation: tabs-ripple 0.2s linear forwards;
}

.footer {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  padding: 15px !important;
  margin-top: auto;
  text-align: left;
  font-weight: 500;
  font-size: 16px;
  color: white;
  background: #3a6186;
  background: -o-linear-gradient(left, #89253e, #3a6186);
  background: -webkit-gradient(linear, left top, right top, from(#89253e), to(#3a6186));
  background: linear-gradient(to right, #89253e, #3a6186);
}

.logo,
.tel {
  margin-right: 30px;
}

.tel a {
  display: block;
  padding: 10px;
  text-decoration: none;
  font-size: 14px;
  color: white;
  border: 1px solid rgba(255, 255, 255, .3);
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}

.tel a:hover {
  border: 1px solid rgba(255, 255, 255, .6);
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}

/*.about-header {
  margin-top: 10px;
}*/

.about-link {
  cursor: pointer;
}

.copyright {
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  color: #ccc;
}

.uk-tabs {
  padding-left: 0 !important;
  margin-left: 0 !important;
  border: 1px solid #89253e !important;
}

.uk-tab::before {
  border: none !important;
}

.uk-tab {
  margin-left: 0 !important;
  border: 1px solid #89253e !important;
}

.uk-tab>*>a {
  padding: 1em 0 !important;
  font-size: 16px !important;
  font-weight: bold !important;
  color: #fff !important;
  opacity: 0.5 !important;
}

.uk-tab>.uk-active>a {
  color: #fff !important;
  opacity: 1 !important;
  border-color: #89253e !important;
  border-width: 3px !important;
}

.uk-tab>*>a:hover,
.uk-tab>*>a:focus {
  color: #89253e !important;
}

.uk-tab>.uk-active>a:hover,
.uk-tab>.uk-active>a:focus {
  color: #fff !important;
  cursor: inherit !important;
}

.uk-tab>* {
  padding: 0 !important;
}

h1,
.uk-h1,
h2,
.uk-h2,
h3,
.uk-h3,
h4,
.uk-h4,
h5,
.uk-h5,
h6,
.uk-h6 {
  font-family: inherit !important;
  font-weight: 700 !important;
  color: #fff !important;
}

h3,
.uk-h3 {
  padding-left: 10px !important;
  padding-right: 10px !important;
  margin-top: 10px !important;
  margin-bottom: 10px !important;
  font-size: 18px !important;
}

@media (max-width: 500px) {
  h1 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 34px;
  }

  h2 {
    font-size: 20px !important;
    margin-top: 0 !important;
  }
}

a:hover,
.uk-link:hover {
  color: inherit !important;
  text-decoration: none !important;
}

.container-search {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  height: 50px;
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
}

.container-footer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.container-game,
.container-about,
.container-contactus {
  padding-left: 15px;
  padding-right: 15px;
}

.container.container-about,
.container.container-contactus {
  margin-bottom: 20px;
}

.breadcrumb-container {
  padding: 15px;
  padding-left: 0;
  margin-top: 10px;
  margin-bottom: 20px;

  /*  background: #1a0628;*/
}

.uk-breadcrumb {
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
}

.uk-breadcrumb>*>* {
  color: #fff !important;
  -webkit-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
  cursor: pointer;
}

.uk-breadcrumb>*> :hover,
.uk-breadcrumb>*> :focus {
  color: #89253e !important;
  -webkit-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
}

.uk-breadcrumb> :last-child>* {
  color: #666 !important;
  cursor: default;
}

.uk-breadcrumb> :nth-child(n+2):not(.uk-first-column)::before {
  margin: 0 10px !important;
}

.link-home {
  padding: 10px;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  background: #89253e;
  transition: all .3s linear;
}

.link-home:hover {
  background: #6e1e32;
  transition: all .3s linear;
}

.desc {
  margin-bottom: 20px;
}

.game-video {
  min-height: 300px;
}

/*.game-title {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: baseline;
  -webkit-align-items: baseline;
      -ms-flex-align: baseline;
          align-items: baseline;
  justify-content: space-between;
} */

.game-name {
  margin-bottom: 0;
  font-size: 20px;
}

.like {
  width: 20px;
  height: 20px;
  border: none;
  background: url("/catalog/star.svg");
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}

.like:focus {
  outline: none;
}

.like:focus {
  outline: none;
}

.liked {
  background: url("/catalog/star_fill.svg");
}

.flashpool {
  -webkit-perspective: 0px;
  perspective: 0px;
}

.flashpool .flash__message {
  -webkit-transition: all 500ms;
  -o-transition: all 500ms;
  transition: all 500ms;
}

.flash__message {
  margin: 0;
  margin-top: 10px;
  display: inline-block;
}

.flash__message.success {
  padding: 10px;
}

.flash-enter,
.flash-leave-to {
  opacity: 0;
  -webkit-transform: rotateX(-30deg) scale(.88) translateY(-30px);
  transform: rotateX(-30deg) scale(.88) translateY(-30px);
}

.flash-leave-active {
  position: absolute;
}

.VueCarousel {
  margin-bottom: 30px;
}

.VueCarousel-slide {
  -webkit-flex-basis: 100% !important;
  -ms-flex-preferred-size: 100% !important;
  flex-basis: 100% !important;
}

.VueCarousel-dot:focus {
  outline: none !important;
}

.VueCarousel-dot-container {
  margin: 0 !important;
  margin-top: -10px !important;
}

.VueCarousel-dot {
  border-radius: 0 !important;
  width: 40px !important;
  height: 2px !important;
}

.VueCarousel-navigation-button {
  font-size: 30px !important;
  color: rgba(137, 37, 62, .7) !important;
}

.VueCarousel-navigation-button:focus {
  outline: none !important;
}

.VueCarousel-navigation-prev {
  left: 30px !important;
  padding: 0 !important;
}

.VueCarousel-navigation-next {
  right: 30px !important;
  padding: 0 !important;
}

@media (min-width: 501px) {

  .container-game,
  .container-about,
  .container-contactus {
    padding-left: 20px;
    padding-right: 20px;
  }
}

.select-container {
  padding: 0 15px;
}

.label-genre {
  display: inline-block;
  margin-bottom: 5px;
  margin-right: 10px;
}

.uk-select {
  margin-right: 10px;
  margin-bottom: 10px;
  color: #000;
  border: 1px solid #89253e;
}

.uk-select:hover {
  border-color: #6b1a2e;
  cursor: pointer;
}

.uk-select:not([multiple]):not([size]) {
  width: auto;
  height: auto;
  padding: 5px 30px 5px 10px;
}

.header {
  padding-right: 15px;
  margin-bottom: 3px;
  text-align: center;
}

.header-not-home {
  margin-bottom: 0;
}

.container-header {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  max-width: 400px !important;
  margin: 0 auto;
}

.container-header .logo {
  margin: 0;
}

.header-item {
  margin: 0;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: normal;
}

.header-info {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 300px;
}

.header-info>* {
  display: block;
}

.header-info .tel {
  margin: 0;
}

.link {
  color: #fff;
  -webkit-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
}

.link:hover {
  color: #89253e !important;
  -webkit-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
}

.search {
  width: 100%;
  height: 50px;
  position: relative;
  margin-bottom: 20px;
  background: #3a6186;
  background: -o-linear-gradient(left, #89253e, #3a6186);
  background: -webkit-gradient(linear, left top, right top, from(#89253e), to(#3a6186));
  background: linear-gradient(to right, #89253e, #3a6186);
}

.toggle-search {
  right: 20px;
  top: 13px;
  z-index: 100;
}

.uk-table th {
  font-size: 16px;
  font-weight: bold;
}

.uk-table-striped>tr:nth-of-type(odd),
.uk-table-striped tbody tr:nth-of-type(odd) {
  background: rgba(255, 255, 255, 0.1);
}

.cell-rent {
  text-align: center;
}

input[type=checkbox]:hover,
label[for=isChild],
label[for=isLocalMultiplayer] {
  cursor: pointer;
}

.checkbox-items {
  display: flex;
}

.select-item--child {
  margin-right: 10px;
}

.select-item--checkbox {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: baseline;
  -webkit-align-items: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
}

@supports (-webkit-appearance: none) {
  input[type="checkbox"] {
    -webkit-appearance: none;
    position: relative;
    top: 4px;
    width: 24px;
    height: 24px;
    margin: 0;
    border: 1px solid #89253e;
  }

  input[type="checkbox"]:checked {
    position: relative;
    background: none;
  }

  input[type="checkbox"]:checked::after {
    position: absolute;
    top: 0.36rem;
    left: 0.12rem;
    content: "";
    width: 1.0rem;
    height: 0.3rem;
    border: 3px solid #fff;
    border-right: none;
    border-top: none;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
}

.feature-desc {
  margin-top: auto;
}

.feature-picture {
  margin-bottom: 10px;
}

.vue-back-to-top {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-size: 15px;
  background: rgba(0, 0, 0, 0.8);
}

.form-reserve {
  max-width: 500px;
}

.input-reserve {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 14px;
  color: #ffffff;
  border: 3px solid #89253e;
  background-color: transparent;
  -webkit-transition: all .3s linear;
  -o-transition: all .3s linear;
  transition: all .3s linear;
}

.input-reserve:focus {
  outline: none;
  background-color: #1a0628;
  -webkit-transition: all .3s linear;
  -o-transition: all .3s linear;
  transition: all .3s linear;
  outline: none;
}

.input-reserve:hover {
  background-color: #1a0628;
  -webkit-transition: all .3s linear;
  -o-transition: all .3s linear;
  transition: all .3s linear;
}

.input-reserve::-webkit-input-placeholder {
  color: #666 !important;
}

.input-reserve:-moz-placeholder {
  /* FF 4-18 */
  color: #666;
}

.input-reserve::-moz-placeholder {
  /* FF 19+ */
  color: #666;
}

.input-reserve:-ms-input-placeholder {
  /* IE 10+ */
  color: #666;
}

.textarea-reserve {
  resize: none;
}

.button-reserve {
  padding: 10px;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  border: none;
  /*  border: 3px solid #89253e;*/
  background: #89253e;
  cursor: pointer;
  -webkit-transition: all .3s linear;
  -o-transition: all .3s linear;
  transition: all .3s linear;
}

.button-reserve:hover {
  background: #6e1e32;
  -webkit-transition: all .3s linear;
  -o-transition: all .3s linear;
  transition: all .3s linear;
}

.button-reserve:focus {
  outline: none;
}

.datetime-reserve {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.datetime-reserve .input-reserve {
  width: 49%;
  display: inline-block;
}

.pageclip-form__success {
  font-size: 16px;
  font-weight: bold;
  color: #210832;
}

.form-close {
  position: absolute;
  width: 25px;
  height: 25px;
  top: 5px;
  right: 5px;
  border: none;
  background: #89253e;
  cursor: pointer;
  -webkit-transition: all .3s linear;
  -o-transition: all .3s linear;
  transition: all .3s linear;
}

.form-close:hover {
  background: #6e1e32;
  -webkit-transition: all .3s linear;
  -o-transition: all .3s linear;
  transition: all .3s linear;
}

.form-close::before,
.form-close::after {
  display: block;
  content: '';
  position: absolute;
  top: 12px;
  right: 5px;
  width: 15px;
  height: 2px;
  background: #ffffff;
  z-index: 100;
  cursor: pointer;
}

.form-close::before {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.form-close::after {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.label-container {
  font-size: 15px;
}

.agile {
  margin-top: 10px;
}

.agile__actions {
  margin-top: 20px;
  margin-bottom: 20px;
}

.agile__nav-button {
  position: absolute;
  top: 50%;
  margin-top: -50px;
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, .5);
  border-radius: 50%;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 0;
  -webkit-transition: all .3s linear;
  -o-transition: all .3s linear;
  transition: all .3s linear;
}

.agile__nav-button:hover {
  color: #fff;
  background: rgba(0, 0, 0, .7);
  -webkit-transition: all .3s linear;
  -o-transition: all .3s linear;
  transition: all .3s linear;
}

.agile__nav-button[disabled] {
  color: #fff;
  background: rgba(0, 0, 0, .25);
}

.agile__nav-button--prev {
  left: 20px;
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.agile__nav-button--next {
  right: 20px;
}

.agile__nav-button--prev:before,
.agile__nav-button--prev:after,
.agile__nav-button--next:before,
.agile__nav-button--next:after {
  border-right: 4px solid;
  content: '';
  display: block;
  height: 24px;
  margin-top: -19px;
  position: absolute;
  -webkit-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  transform: rotate(135deg);
  right: 22px;
  top: 50%;
  width: 0;
  -webkit-transition: all .3s linear;
  -o-transition: all .3s linear;
  transition: all .3s linear;
}

.agile__nav-button--prev:after,
.agile__nav-button--next:after {
  margin-top: -4px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.agile__nav-button--next:not([disabled]):hover:before,
.agile__nav-button--next:not([disabled]):hover:after,
.agile__nav-button--prev:not([disabled]):hover:before,
.agile__nav-button--prev:not([disabled]):hover:after {
  color: rgb(137, 37, 62);
  -webkit-transition: all .3s linear;
  -o-transition: all .3s linear;
  transition: all .3s linear;
}

.agile__dot {
  margin: 0 10px;
}

.agile__dot button {
  background-color: #fff;
  border: none;
  cursor: pointer;
  display: block;
  width: 50px;
  height: 3px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  -webkit-transition: all .3s linear;
  -o-transition: all .3s linear;
  transition: all .3s linear;
}

.agile__dot--current button {
  background-color: #89253e;
  -webkit-transition: all .3s linear;
  -o-transition: all .3s linear;
  transition: all .3s linear;
}

.agile__actions {
  -webkit-box-pack: center !important;
  -webkit-justify-content: center !important;
  -ms-flex-pack: center !important;
  justify-content: center !important;
}

.agile__slide {
  width: 100%;
  /*  touch-action: none;*/
}

.slide {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #fff;
}

.developer {
  font-size: 12px;
  color: #ccc;
}

.developer a {
  position: relative;
  top: 2px;
}

.photo-algorithm {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin: 0 auto;
  margin-bottom: 20px;
}

.algorithm-item {
  position: relative;
  width: 33.3333%;
  height: 100px;
  text-align: center;
}

.algorithm-item::after {
  display: block;
  content: "ᐳ";
  position: absolute;
  right: -5px;
  top: 10px;
  font-size: 30px;
}

.algorithm-item:last-child::after {
  display: none;
}

.chromakey {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
}

.chromakey__polaroid {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  user-select: none;
}

.chromakey__backgrounds {
  width: 100%;
}

.chromakey__polaroid-back {
  position: relative;
  display: block;
  border: 10px solid #fff;
  border-bottom-width: 40px;
  font-size: 0;
}

.chromakey__polaroid-img {
  position: relative;
  font-size: 0;
}

.chromakey__polaroid-img img {
  font-size: 0;
  display: block;
}

.chromakey__polaroid-human {
  display: block;
  content: '';
  position: absolute;
  bottom: 0;
  right: 10px;
  width: 120px;
  height: 120px;
  background: url("/catalog/woman2.png") center no-repeat;
  background-size: cover;
}

.vue-select-image__wrapper {
  display: flex !important;
  justify-content: space-between;
  align-items: flex-start;
  overflow-x: auto;
}

.vue-select-image__item {
  min-width: 50% !important;
  /*  margin: 0 !important;*/
  margin-right: 10px !important;
  padding: 0 !important;
}

.vue-select-image__item:last-child {
  margin-right: 0 !important;
}

.vue-select-image__item:hover {
  cursor: pointer;
}

.vue-select-image__thumbnail {
  border: 1px solid #89253e !important;
}

.vue-select-image__thumbnail--selected {
  background: #89253e !important;
}

.vue-select-image__lbl {
  line-height: 2 !important;
}

.scrollbar-rail>.scroll-element {
  background-color: #210832;
}

.scrollbar-rail>.scroll-element .scroll-element_size {
  background-color: #000;
}

.scrollbar-rail>.scroll-element .scroll-bar {
  background-color: #89253e;
}

.chromakey__polaroid-img-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: .2;
}

@media (min-width: 350px) {
  .chromakey__polaroid-human {
    width: 140px;
    height: 140px;
  }
}

@media (min-width: 400px) {
  .chromakey__polaroid-human {
    width: 170px;
    height: 170px;
  }

  .vue-select-image__item {
    min-width: 30% !important;
  }
}

@media (min-width: 500px) {
  .chromakey__polaroid-human {
    width: 200px;
    height: 200px;
  }
}

@media (min-width: 600px) {
  .chromakey__polaroid-human {
    width: 250px;
    height: 250px;
  }
}

@media (min-width: 768px) {
  .chromakey {
    justify-content: space-between;
  }

  .chromakey__polaroid {
    width: 48%;
    margin: 0;
  }

  .chromakey__backgrounds {
    width: 50%;
  }

  .chromakey__polaroid-human {
    width: 150px;
    height: 150px;
  }

  .vue-select-image__wrapper {
    flex-wrap: wrap;
    justify-content: flex-start;
    /*    height: 240px;*/
    overflow-y: scroll;
  }

  .vue-select-image__item {
    width: 45% !important;
  }
}

@media (min-width: 1024px) {
  .chromakey__polaroid-human {
    width: 180px;
    height: 180px;
  }

  .vue-select-image__item {
    width: 30% !important;
  }
}

@media (min-width: 1200px) {
  .chromakey__polaroid-back {
    border-bottom-width: 60px;
  }

  .chromakey__polaroid-human {
    width: 220px;
    height: 220px;
  }
}

@media only screen and (min-width: 1200px) {
  .vue-select-image__item {
    margin-left: 0 !important;
  }
}

@-webkit-keyframes shrink-bounce {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  33% {
    -webkit-transform: scale(.85);
    transform: scale(.85);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes shrink-bounce {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  33% {
    -webkit-transform: scale(.85);
    transform: scale(.85);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@-webkit-keyframes checkbox-check {
  0% {
    width: 0;
    height: 0;
    border-color: #212121;
    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
    transform: translate3d(0, 0, 0) rotate(45deg);
  }

  33% {
    width: .2em;
    height: 0;
    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
    transform: translate3d(0, 0, 0) rotate(45deg);
  }

  100% {
    width: .2em;
    height: .5em;
    border-color: #212121;
    -webkit-transform: translate3d(0, -.5em, 0) rotate(45deg);
    transform: translate3d(0, -.5em, 0) rotate(45deg);
  }
}

@keyframes checkbox-check {
  0% {
    width: 0;
    height: 0;
    border-color: #212121;
    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
    transform: translate3d(0, 0, 0) rotate(45deg);
  }

  33% {
    width: .2em;
    height: 0;
    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
    transform: translate3d(0, 0, 0) rotate(45deg);
  }

  100% {
    width: .2em;
    height: .5em;
    border-color: #212121;
    -webkit-transform: translate3d(0, -.5em, 0) rotate(45deg);
    transform: translate3d(0, -.5em, 0) rotate(45deg);
  }
}

@-webkit-keyframes tabs-ripple {
  0% {
    background: transparent;
  }

  50% {
    background: rgba(255, 255, 255, 0.05);
  }

  100% {
    background: transparent;
  }
}

@keyframes tabs-ripple {
  0% {
    background: transparent;
  }

  50% {
    background: rgba(255, 255, 255, 0.05);
  }

  100% {
    background: transparent;
  }
}

@media (min-width: 501px) {
  .container {
    padding-left: 20px;
  }

  .container--tabs {
    padding-left: 0;
  }

  .item {
    width: calc(50% - 10px);
    margin-right: 10px;
  }

  .photo {
    width: calc(55% - 10px);
    margin-right: 10px;
  }

  .game-name {
    font-size: 24px;
  }

  .select-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: baseline;
    -webkit-align-items: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    padding: 0;
    padding-right: 20px;
  }

  .agile__actions {
    margin-top: 0;
  }
}

@media (min-width: 600px) {
  .container-header {
    max-width: 500px !important;
    padding: 0;
  }

  .container-header .logo img {
    width: 250px;
    height: auto;
  }
}

@media (min-width: 768px) {
  .container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }

  .container-contactus {
    width: 100%;
  }

  .game-video {
    min-height: 500px;
  }

  .game-name {
    font-size: 28px;
  }

  .container-header {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    max-width: 960px !important;
  }

  .header-items {
    width: 300px;
  }

  .header-info {
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }

  .header-info .tel {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    margin-bottom: 5px;
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: 20px;
  }

  .container--tabs {
    padding-left: 0;
  }

  .item,
  .photo {
    width: calc(33.3333% - 10px);
    margin-right: 10px;
  }

  .features {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .feature-item {
    width: 30%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .game-platform {
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
  }

  .container-header {
    padding: 0;
  }

  .header-items {
    width: 400px;
  }

  .header-info .tel {
    -webkit-flex-basis: auto;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    margin-bottom: 0;
  }

  .agile__slide {
    height: 550px;
  }
}

@media (min-width: 1025px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .container-header {
    max-width: 1200px !important;
  }

  .item,
  .photo {
    width: calc(25% - 10px);
    margin-right: 10px;
  }
}

@media (min-width: 768px) {
  .container-footer {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }
}

@media (max-width: 499px) {
  .datetime-reserve .input-reserve {
    display: block;
    width: 100%;
  }
}

@media (max-width: 500px) {

  .container-footer {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .logo,
  .tel {
    margin-right: 0;
    margin-bottom: 10px;
  }

  .button-reserve {
    width: 100%;
  }
}

@media (min-width: 1024px) {
  .container-footer {
    padding-left: 20px;
  }
}

</style>
