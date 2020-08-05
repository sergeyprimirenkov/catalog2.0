<template>
  <div>
    <div class="header header-not-home">
      <div class="container container-header">
        <div class="logo">
          <router-link class="about-link" tag="a" to="/" title="На главную">
            <img :src="this.publicPath + 'footer.png'" alt="" width="200px" height="auto">
          </router-link>
        </div>
        <div class="header-items">
          <p class="header-item">
            Мы находимся: г. Магнитогорск, ул. Ленина, 83 | ТЦ "Континент", 3 этаж
          </p>
          <p class="header-item">
            Мы работаем: ежедневно с 10:00 до 21:00
          </p>
        </div>
        <div class="header-info">
          <div class="tel">
            <a href="tel: +79000939392" title="Позвонить нам">+7 (900) 093-93-92</a>
          </div>
          <div class="social">
            <a href="https://vk.com/mgnvr" target="_blank" title="Мы ВКонтакте">
              <img :src="this.publicPath + 'vk.svg'" alt="" width="30px" height="30px">
            </a>
          </div>
          <router-link class="link" tag="a" to="/about" title="О нас">О нас</router-link>
        </div>
      </div>
    </div>
    <div class="container container-game">
      <div class="breadcrumb-container">
        <router-link class="link-home" tag="a" to="/" title="Вернуться на главную">
          ❮ На главную
        </router-link>
      </div>
      <!--       <vk-breadcrumb>
        <router-link class="home" tag="vk-breadcrumb-item" to="/" title="Вернуться на главную страницу">Главная</router-link>
        <vk-breadcrumb-item>{{ game.title }}</vk-breadcrumb-item>
      </vk-breadcrumb> -->
      <div class="desc">
        <div class="game-title">
          <h1 class="game-name">{{ game.title }} <button ref="buttonLike" @click="putLike()" :class="{ liked }" class="like" title="Добавить в избранное / Удалить из избранного">
            </button></h1>
        </div>
        <flash-message transitionName="flash" class="flash-message flashpool"></flash-message>
        <p><b class="desc">Жанр:</b> {{ game.genre }}</p>
        <p class="game-description"><b class="desc">Описание:</b> {{ game.description }}</p>
        <div v-if="game.isLocalMultiplayer" class="local-multiplayer"> 
          Доступен локальный мультиплеер (несколько игроков за одним телевизором)
        </div>
        
        <agile :options="sliderOptions">
          <div class="slide">
            <img :src="game.image1" class="game-image" width="100%" height="auto" v-bind:alt="game.title">
          </div>
          <div class="slide">
            <img :src="game.image2" class="game-image" width="100%" height="auto" v-bind:alt="game.title">
          </div>
          <div class="slide">
            <img :src="game.image3" class="game-image" width="100%" height="auto" v-bind:alt="game.title">
          </div>
        </agile>

        <!-- <img :src="game.image" class="game-image" width="100%" height="auto"> -->
        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
          <iframe class="embed-responsive-item game-video" :src="game.video" allowfullscreen width="100%"></iframe>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container container-footer">
        <div class="logo">
          <router-link class="about-link" tag="a" to="/about" title="О нас">
            <img :src="this.publicPath + 'footer.png'" alt="" width="200px" height="auto">
          </router-link>
        </div>
        <div class="tel">
          <a href="tel: +79000939392" title="Позвонить нам">+7 (900) 093-93-92</a>
        </div>
        <div class="social">
          <a href="https://vk.com/mgnvr" target="_blank" title="Мы ВКонтакте">
            <img :src="this.publicPath + 'vk.svg'" alt="" width="30px" height="30px">
          </a>
        </div>
        <div class="copyright">
          &#9400; Driv3r, 2017 - 2020 | По всем вопросам обращаться по телефону или в группу ВКонтакте
        </div>
        <div class="developer">
          Дизайн и разработка <a href="https://vk.com/primirenkov" target="_blank"><img :src="this.publicPath + 'ps.svg'" alt="Сергей Примиренков"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sitename: 'Driv3r - Каталог игр',
      publicPath: process.env.BASE_URL,
      game: '',
      sliderOptions: {
        navButtons: false,
        responsive: [{
          breakpoint: 500,
          settings: {
            navButtons: true
          }
        }]
      }
    }
  },
  methods: {
    putLike: function() {
      this.liked = !this.liked

      if (this.$refs.buttonLike.classList.contains('liked')) {
        this.flash('Игра удалена из избранного', 'success', {
          timeout: 1500,
          important: true
        })
      } else {
        this.flash('Игра добавлена в избранное', 'success', {
          timeout: 1500,
          important: true
        })
      }
    },
    next() {
      this.$refs.flickity.next();
    },
    previous() {
      this.$refs.flickity.previous();
    }
  },
  mounted() {
    // this.game = this.$store.getters.getGameById(this.$route.params.id)
  },
  created: function() {
    this.game = this.$store.state.games.find(game => {
      return game.id == this.$route.params.id
    })
    // this.game.image = '/' + this.game.image

    //   this.$store.state.articles.find(article => {

    //   return article.id == this.$route.params.id

    // });

    // this.axios.get(this.publicPath + 'games.json').then(response => {
    //   this.game = response.data.games.filter(data => data.id == this.$route.params.id)[0]
    //   this.game.image = '/' + this.game.image
    // })
  },
  computed: {
    liked: {
      get() {
        return this.$store.state.wishlistIds.includes(this.game.id)
      },
      set(val) {
        this.$store.commit(val ? 'addGame' : 'removeGame', this.game.id)
      }
    }
  }
}

</script>
