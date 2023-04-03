<template>
  <div>
    <AppHeader></AppHeader>
    <div>
      <div class="container container-select">
        <div v-show="selectedPlatform !== 'мои'" class="select-container">
          <div class="select-genre-container">

            <vs-select v-show="selectedPlatform == 'htc'" class="select-genre" label="Выбрать жанр"
              v-model="selectedGenre">
              <vs-option label="все" value="все"> все </vs-option>
              <vs-option v-for="(genre, index) in htcGenres" :key="index" :label="genre" :value="genre">
                {{ genre }}
              </vs-option>
            </vs-select>

            <vs-select v-show="selectedPlatform == 'psvr'" class="select-genre" label="Выбрать жанр"
              v-model="selectedGenre">
              <vs-option label="все" value="все"> все </vs-option>
              <vs-option v-for="(genre, index) in psvrGenres" :key="index" :label="genre" :value="genre">
                {{ genre }}
              </vs-option>
            </vs-select>

            <vs-select v-show="selectedPlatform == 'ps5'" class="select-genre" label="Выбрать жанр"
              v-model="selectedGenre">
              <vs-option label="все" value="все"> все </vs-option>
              <vs-option v-for="(genre, index) in ps5Genres" :key="index" :label="genre" :value="genre">
                {{ genre }}
              </vs-option>
            </vs-select>

            <vs-select class="select-genre" label="Сортировка" v-model="selectedSort">
              <vs-option label="по умолчанию" value="default">
                по умолчанию
              </vs-option>
              <vs-option label="по жанру" value="bygenre"> по жанру </vs-option>
              <vs-option label="по тегу" value="bytag"> по тегу </vs-option>
              <vs-option label="а-я" value="ascending"> а-я </vs-option>
              <vs-option label="я-а" value="descending"> я-а </vs-option>
            </vs-select>
          </div>
          <div class="select-item select-item--checkbox">
            <vs-checkbox label-before v-model="isChild" @click="setChild">
              Для детей
            </vs-checkbox>
          </div>
          <div v-show="selectedPlatform == 'htc' || selectedPlatform == 'psvr'" class="select-item select-item--checkbox">
            <vs-checkbox label-before v-model="isVeryChild" @click="setVeryChild">
              Для самых маленьких
            </vs-checkbox>
          </div>
          <div v-show="selectedPlatform == 'ps5'" class="select-item select-item--checkbox">
            <vs-checkbox label-before v-model="isLocalMultiplayer">
              На двоих
            </vs-checkbox>
          </div>
        </div>
        <div :class="{ 'container-input-only': selectedPlatform == 'мои' }" class="container-input show"
          ref="containerInput">
          <vs-input placeholder="Поиск игры..." type="text" v-model="search" class="search-input" autocomplete="off"
            @input="closeSearchGame">
          </vs-input>
          <span class="search-icon" ref="closeSearch" @click="clearSearch"></span>
        </div>
      </div>
    </div>

    <section>
      <back-to-top visibleoffset="500">
        <img :src="this.publicPath + 'up.svg'" alt="Наверх" width="15px" height="15px" title="Наверх" />
      </back-to-top>

      <div class="container">
        <vk-tabs align="justify" v-on:click.native="changePlatform($event)">
          <vk-tabs-item v-bind:title="
            'HTC ' +
            '(' +
            this.$store.state.games.filter((game) => game.category === 'htc')
              .length +
            ')'
          ">
            <div v-if="showGamesByHTC.length !== 0" class="wrapper">
              <div class="item" v-for="game in showGamesByHTC" :key="game.id">
                <router-link tag="div" :to="{ name: 'Id', params: { id: game.id } }" class="card" title="Перейти к игре"
                  :style="{
                    'background-image':
                      `linear-gradient(180deg,
                                                                                                                                                                                                                               rgba(0, 0, 0, 0) 0%,
                                                                                                                                                                                                                               rgba(0, 0, 0, 0.35) 75%,
                                                                                                                                                                                                                               rgba(0, 0, 0, 0.65) 100%), ` +
                      'url(' +
                      game.image1 +
                      ')',
                  }">
                  <div class="card__header">
                    <button :class="{ liked: wishlistIds.includes(game.id) }" class="like"
                      @click.stop="putLike($event, game.id)" title="Добавить в избранное / Удалить из избранного">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                          fill="#fff" />
                      </svg>
                    </button>
                  </div>
                  <div v-once class="card-desc">
                    <h3 v-text="game.title" class="game-title"></h3>
                    <p v-text="game.description" class="game-desc"></p>
                    <div class="card__footer">
                      <div class="card-genre" v-text="game.genre"></div>
                      <div class="card-genre card-tag" v-text="game.tag"></div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
            <div v-else>
              По вашему запросу ничего не найдено 🔎
            </div>
          </vk-tabs-item>
          <vk-tabs-item v-bind:title="
            'PSVR ' +
            '(' +
            this.$store.state.games.filter((game) => game.category === 'psvr')
              .length +
            ')'
          ">
            <div v-if="showGamesByPSVR.length !== 0" class="wrapper">
              <div class="item" v-for="game in showGamesByPSVR" :key="game.id">
                <router-link tag="div" :to="{ name: 'Id', params: { id: game.id } }" class="card" title="Перейти к игре"
                  :style="{
                    'background-image':
                      `linear-gradient(180deg,
                                                                                                                                                                                                                               rgba(0, 0, 0, 0) 0%,
                                                                                                                                                                                                                               rgba(0, 0, 0, 0.35) 75%,
                                                                                                                                                                                                                               rgba(0, 0, 0, 0.65) 100%), ` +
                      'url(' +
                      game.image1 +
                      ')',
                  }">
                  <div class="card__header">
                    <button :class="{ liked: wishlistIds.includes(game.id) }" class="like"
                      @click.stop="putLike($event, game.id)" title="Добавить в избранное / Удалить из избранного">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                          fill="#fff" />
                      </svg>
                    </button>
                  </div>
                  <div v-once class="card-desc">
                    <h3 v-text="game.title" class="game-title"></h3>
                    <p v-text="game.description" class="game-desc"></p>
                    <div class="card__footer">
                      <div class="card-genre" v-text="game.genre"></div>
                      <div class="card-genre card-tag" v-text="game.tag"></div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
            <div v-else>
              По вашему запросу ничего не найдено 🔎
            </div>
          </vk-tabs-item>
          <vk-tabs-item v-bind:title="
            'PS5 ' +
            '(' +
            this.$store.state.games.filter((game) => game.category === 'ps5')
              .length +
            ')'
          ">
            <div v-if="showGamesByPS5.length !== 0" class="wrapper">
              <div class="item" v-for="game in showGamesByPS5" :key="game.id">
                <router-link tag="div" :to="{ name: 'Id', params: { id: game.id } }" class="card" title="Перейти к игре"
                  :style="{
                    'background-image':
                      `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0.65) 100%), ` +
                      'url(' +
                      game.image1 +
                      ')',
                  }">
                  <div class="card__header">
                    <button :class="{ liked: wishlistIds.includes(game.id) }" class="like"
                      @click.stop="putLike($event, game.id)" title="Добавить в избранное / Удалить из избранного">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                          fill="#fff" />
                      </svg>
                    </button>
                  </div>
                  <div v-once class="card-desc">
                    <h3 v-text="game.title" class="game-title"></h3>
                    <p v-text="game.description" class="game-desc"></p>
                    <div class="card__footer">
                      <div class="card-genre" v-text="game.genre"></div>
                      <div class="card-genre card-tag" v-text="game.tag"></div>
                      <div v-show="game.isLocalMultiplayer" class="card-genre card-genre-coop">
                        на двоих
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
            <div v-else>
              По вашему запросу ничего не найдено 🔎
            </div>
          </vk-tabs-item>
          <vk-tabs-item v-bind:title="'МОИ ' + '(' + wishlistIds.length + ')'">
            <div v-if="isEmpty" class="wrapper wrapper--empty">
              <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M139.407 114.647L118.147 102.344V67.6853C118.147 61.4916 114.818 55.726 109.465 52.6323L79.5062 35.3012L79.5 10.714L136.528 43.6855C138.309 44.7105 139.407 46.6292 139.407 48.6855V114.647ZM106.554 133.582L85.2933 121.088L85.2995 86.6851C85.2933 80.4914 81.9708 74.7196 76.6174 71.6259L46.6529 54.2948V29.6981L103.671 62.6853C105.456 63.7103 106.554 65.6228 106.554 67.6853V133.582ZM22.4753 116.31C20.7002 115.279 19.599 113.366 19.5927 111.31L19.599 52.0542L70.8242 81.6789C72.6024 82.7101 73.7068 84.6226 73.7005 86.6851L73.7068 145.935L22.4753 116.31ZM150.994 48.6917C150.994 42.4918 147.671 36.7231 142.318 33.6294L88.1821 2.32029C82.8225 -0.77343 76.1775 -0.77343 70.8242 2.32029L16.6821 33.6294C11.3287 36.7231 8.00624 42.498 8 48.6855L8.00624 111.304C8.00624 117.507 11.3381 123.272 16.6821 126.366L70.8242 157.675C73.5009 159.219 76.4989 159.994 79.5 160C82.5043 159.994 85.5054 159.219 88.1758 157.675L142.318 126.357C147.671 123.272 150.994 117.497 151 111.304L150.994 48.6917Z"
                  fill="#06021a"></path>
              </svg>
              <p>Список избранного пуст</p>
            </div>
            <div v-else-if="!isEmpty && showLikedGames.length == 0">
              По вашему запросу ничего не найдено 🔎
            </div>
            <div v-else class="wrapper">
              <div class="item" v-for="game in showLikedGames" :key="game.id">
                <router-link tag="div" :to="{ name: 'Id', params: { id: game.id } }" class="card" title="Перейти к игре"
                  :style="{
                    'background-image':
                      `linear-gradient(180deg,
                                                                                                                                                                                                                               rgba(0, 0, 0, 0) 0%,
                                                                                                                                                                                                                               rgba(0, 0, 0, 0.35) 75%,
                                                                                                                                                                                                                               rgba(0, 0, 0, 0.65) 100%), ` +
                      'url(' +
                      game.image1 +
                      ')',
                  }">
                  <div class="card__header">
                    <button :class="{ liked: wishlistIds.includes(game.id) }" class="like"
                      @click.stop="putLike($event, game.id)" title="Добавить в избранное / Удалить из избранного">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                          fill="#fff" />
                      </svg>
                    </button>
                  </div>
                  <div v-once class="card-desc">
                    <h3 v-text="game.title" class="game-title"></h3>
                    <p v-text="game.description" class="game-desc"></p>
                    <div class="card__footer">
                      <div class="card-genre" v-text="game.genre"></div>
                      <div class="card-genre card-tag" v-text="game.tag"></div>
                      <div v-show="game.isLocalMultiplayer" class="card-genre card-genre-coop">
                        на двоих
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </vk-tabs-item>
        </vk-tabs>
      </div>
    </section>
    <AppFooter></AppFooter>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "home",
  components: { AppHeader, AppFooter },
  data() {
    return {
      sitename: "Driv3r - Каталог игр",
      publicPath: process.env.BASE_URL,
      search: "",
      category: "",
      genre: "все",
      games: [],
      htcGenres: [
        "симулятор",
        "шутер",
        "экшн",
        "музыкальная",
        "хоррор",
        "спорт",
        "квест",
        "стратегия",
        "головоломка",
        "аттракцион",
        "приключение",
        "творчество",
        "многопользовательская",
      ],
      psvrGenres: [
        "симулятор",
        "экшн",
        "аркада",
        "гонка",
        "хоррор",
        "квест",
        "аттракцион",
        "приключение",
        "многопользовательская",
      ],
      ps5Genres: [
        "экшн",
        "ролевая",
        "аркада",
        "гонка",
        "спорт",
        "файтинг",
        "песочница",
        "симулятор",
        "интерактивное кино",
        "многопользовательская",
      ],
      isOpened: false,
      selectedGenre: "все",
      selectedPlatform: "htc",
      selectedSort: "default",
      isChild: false,
      isVeryChild: false,
      isLocalMultiplayer: false,
      end: false,
      wishlistIds: [],
      gameId: null,
    };
  },
  methods: {
    putLike: function (event, gameId) {
      this.gameId = gameId;
      this.liked = !this.liked;
      // if (event.currentTarget.classList.contains("liked")) {
      //   this.openNotificationDeleteFavGame();
      // } else {
      //   this.openNotificationAddFavGame();
      // }
    },
    closeSearchGame: function () {
      if (this.search == "") {
        this.$refs.closeSearch.classList.remove("active");
      } else {
        this.$refs.closeSearch.classList.add("active");
      }
    },
    setChild: function () {
      this.isVeryChild = false;
    },
    setVeryChild: function () {
      this.isChild = false;
    },
    clearSearch: function () {
      this.search = "";
      this.$refs.closeSearch.classList.remove("active");
    },
    changePlatform: function (evt) {
      if (evt.target.tagName.toLowerCase() === "a") {
        this.selectedPlatform = evt.target.text
          .replace(/\s.*/, "")
          .toLowerCase();
        this.selectedGenre = "все";
      }
    },
    // openNotificationAddFavGame() {
    //   this.$vs.notification({
    //     duration: 3000,
    //     position: "top-center",
    //     text: `Игра добавлена в избранное`,
    //   });
    // },
    // openNotificationDeleteFavGame() {
    //   this.$vs.notification({
    //     duration: 3000,
    //     position: "top-center",
    //     text: `Игра удалена из избранного`,
    //   });
    // },
  },
  watch: {
    search(newQuery) {
      this.search = this.search.toLocaleLowerCase();
    },
  },
  mounted() {
    this.$store.dispatch("loadGames");

    if (this.$store.state.wishlistIds.length == 0) {
      this.isEmpty = !this.isEmpty;
    }
    this.wishlistIds = this.$store.state.wishlistIds;
  },
  created() { },
  computed: {
    liked: {
      get() {
        return this.$store.state.wishlistIds.includes(this.gameId);
      },
      set(val) {
        this.$store.commit(val ? "addGame" : "removeGame", this.gameId);
      },
    },
    showGames() {
      return this.$store.getters.showGames(
        this.search,
        this.selectedPlatform,
        this.selectedGenre,
        this.isChild,
        this.isVeryChild,
        this.selectedSort
      );
    },
    showGamesByHTC() {
      return this.$store.getters.showHTCGames(
        this.search,
        this.selectedGenre,
        this.isChild,
        this.isVeryChild,
        this.selectedSort
      );
    },
    showGamesByPSVR() {
      return this.$store.getters.showPSVRGames(
        this.search,
        this.selectedGenre,
        this.isChild,
        this.isVeryChild,
        this.selectedSort
      );
    },
    showGamesByPS5() {
      return this.$store.getters.showPS5Games(
        this.search,
        this.selectedGenre,
        this.isChild,
        this.isLocalMultiplayer,
        this.selectedSort
      );
    },
    showLikedGames() {
      return this.$store.getters.wishlist(this.search);
    },
    isEmpty: {
      get() {
        return !this.$store.state.wishlistIds.length;
      },
      set(val) {
        console.log(val);
      }
    },
    showActivePlatformGenres() {
      return this.$store.getters.showGenres(this.selectedPlatform);
    },
  },
};
</script>
