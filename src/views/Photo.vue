<template>
  <div>
    <div class="header header-not-home">
      <div class="container container-header">
        <div class="logo">
          <router-link class="about-link" tag="a" to="/" title="На главную">
            <img :src="this.publicPath + 'footer.png'" alt="" width="200px" height="auto" alt="DriV3R">
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
    <div class="container container-about">
      <div class="breadcrumb-container">
        <!--         <vk-breadcrumb>
          <router-link class="home" tag="vk-breadcrumb-item" to="/" title="Вернуться на главную страницу">Главная</router-link>
          <vk-breadcrumb-item>О нас</vk-breadcrumb-item>
        </vk-breadcrumb> -->
        <router-link class="link-home" tag="a" to="/" title="Вернуться на главную">
          ❮ На главную
        </router-link>
      </div>
      <h1>Услуга "Хромакей"</h1>
      <h2 style="margin-top: 20px; font-size: 25px;">Забери впечатления с собой 📸</h2>
      <div class="photo-algorithm">
        <div class="algorithm-item">
          <img :src="this.publicPath + 'choice.svg'" alt="" width="50px" height="50px">
          <p>1. Выбери фон</p>
        </div>
        <div class="algorithm-item">
          <img :src="this.publicPath + 'pose.svg'" alt="" width="50px" height="50px">
          <p>2. Замри</p>
        </div>
        <div class="algorithm-item">
          <img :src="this.publicPath + 'photo.svg'" alt="" width="50px" height="50px">
          <p>3. Забери</p>
        </div>
      </div>
      <div class="chromakey">
        <div class="chromakey__polaroid">
          <div ref="polaroid" class="chromakey__polaroid-back">
            <div class="chromakey__polaroid-img">
              <img ref="photoMockup" class="polaroid-photo" :src="changeTheme[0].src" @load="imageLoaded">
              <div class="chromakey__polaroid-human"></div>
              <div class="chromakey__polaroid-img-wrapper"></div>
            </div>
          </div>
        </div>
        <div class="chromakey__backgrounds">
          <div class="chromakey__backgrounds-control">
            <label class="label-genre" for="theme">Выбрать тему</label>
            <select v-model="theme" class="uk-select" id="theme">
              <option :selected="theme === 'все'" value="все">все</option>
              <option>город</option>
              <option>природа</option>
            </select>
          </div>
          <vue-select-image :dataImages="changeTheme" :selectedImages="selectedBacks" :useLabel=true @onselectimage="onSelectImage">
          </vue-select-image>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container container-footer">
        <div class="logo">
          <router-link class="about-link" tag="a" to="/about" title="О нас">
            <img :src="this.publicPath + 'footer.png'" alt="" width="200px" height="auto" alt="DriV3R">
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
import VueSelectImage from 'vue-select-image'

export default {
  name: 'photo',
  data() {
    return {
      backgrounds: [],
      theme: 'все',
      sitename: 'Driv3r - Каталог игр',
      publicPath: process.env.BASE_URL,
      index: null,
      windowWidth: 0,
      selectedBacks: [{
        id: 1
      }]
    }
  },
  components: {
    'vue-select-image': VueSelectImage
  },
  methods: {
    onSelectImage: function(image) {
      this.$refs.photoMockup.src = image.src

      var
        fac = new FastAverageColor(),
        container = document.querySelector('.chromakey__polaroid-img-wrapper'),
        img = document.querySelector('.polaroid-photo')

      fac.getColorAsync(img)
        .then(function(color) {
          container.style.backgroundColor = color.rgba
        })
        .catch(function(e) {
          console.log(e)
        });
    },
    getWindowWidth(event) {
      this.windowWidth = window.innerWidth

      var heightPolaroid = document.querySelector('.chromakey__polaroid').offsetHeight
      var imgPolaroid = document.querySelector('.polaroid-photo')
      var heightBackControl = document.querySelector('.chromakey__backgrounds-control').offsetHeight

      var imageWrapper = document.querySelector('.vue-select-image__wrapper')

      if (this.windowWidth >= 768) {
        imageWrapper.style.height = (heightPolaroid - heightBackControl) + 'px'
      }
    },
    // setWindowWidth() {
    //   var heightPolaroid = document.querySelector('.chromakey__polaroid').offsetHeight;
    //   var heightBackControl = document.querySelector('.chromakey__backgrounds-control').offsetHeight

    //   var imageWrapper = document.querySelector('.vue-select-image__wrapper')

    //   this.windowWidth = window.innerWidth
    //   console.log(this.windowWidth)

    //   if (this.imageLoaded) {
    //     if (this.windowWidth >= 768) {
    //       imageWrapper.style.height = (heightPolaroid - heightBackControl) + 'px'
    //     }
    //   }
    // },
    imageLoaded() {
      var heightPolaroid = document.querySelector('.chromakey__polaroid').offsetHeight
      var imgPolaroid = document.querySelector('.polaroid-photo')
      var heightBackControl = document.querySelector('.chromakey__backgrounds-control').offsetHeight

      var imageWrapper = document.querySelector('.vue-select-image__wrapper')
      
      if (this.windowWidth >= 768) {
        imageWrapper.style.height = (heightPolaroid - heightBackControl) + 'px'
      }
    }
  },
  mounted() {
    this.$store.dispatch('loadBackgrounds')

    // var imageWrapper = document.querySelector('.vue-select-image__wrapper')

    $('.vue-select-image__wrapper').addClass('scrollbar-rail').on('mousewheel DOMMouseScroll', function(e) {

      var e0 = e.originalEvent
      var delta = e0.wheelDelta || -e0.detail

      this.scrollTop += (delta < 0 ? 1 : -1) * 30
      e.preventDefault()
    })

    // imageWrapper.classList.add('scrollbar-rail');

    $('.scrollbar-rail').scrollbar()

    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth)

      // this.setWindowWidth()

      //Init
      this.getWindowWidth()
    })
  },
  beforeUpdate() {
    // var heightPolaroid = document.querySelector('.chromakey__polaroid').offsetHeight
    // var heightBackControl = document.querySelector('.chromakey__backgrounds-control').offsetHeight
    // var actualWindowWidth = window.innerWidth

    // var imageWrapper = document.querySelector('.vue-select-image__wrapper')

    // this.windowWidth = window.innerWidth

    //  if (this.windowWidth >= 768) {
    //   imageWrapper.style.height = (heightPolaroid - heightBackControl) + 'px'
    // }

    // $('.vue-select-image__wrapper').on('mousewheel DOMMouseScroll', function(e) {

    //   var e0 = e.originalEvent;
    //   var delta = e0.wheelDelta || -e0.detail;

    //   this.scrollTop += (delta < 0 ? 1 : -1) * 30;
    //   e.preventDefault();
    // })

    // imageWrapper.classList.add('scrollbar-rail');

    // $('.scrollbar-rail').scrollbar();

    // var
    //         fac = new FastAverageColor(),
    //         container = document.querySelector('.chromakey__polaroid-img-wrapper'),
    //         img = document.querySelector('.polaroid-photo');

    //     fac.getColorAsync(img)
    //         .then(function(color) {
    //             container.style.backgroundColor = color.rgba;
    //         })
    //         .catch(function(e) {
    //             console.log(e);
    //         });
  },
  computed: {
    changeTheme() {
      return this.$store.getters.showBackgrounds(this.theme)
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth)
  }
}

</script>
