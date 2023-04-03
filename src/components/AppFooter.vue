<template>
  <div v-once class="footer">
    <div class="container container-footer">
      <div class="links">
        <a class="link" href="tel: +79000939392" title="Позвонить нам">+7 (900) 093-93-92</a>
        <a class="link" href="https://vk.com/mgnvr" target="_blank" title="Мы ВКонтакте">Вк
        </a>
        <router-link v-if="currentRouteName !== 'about'" class="link" tag="a" to="/about" title="О нас">О
          нас</router-link>
        <span v-else class="about-not-link">О нас</span>
      </div>
      <div class="copyright">
        © Driv3r, {{ new Date().getFullYear() }} | По всем вопросам обращаться по телефону или в
        группу ВКонтакте
        <div class="developer">
          Дизайн и разработка
          <a href="https://sergeyprimirenkov.github.io" class="dev" target="_blank"><img :src="this.publicPath + 'logo-ps.svg'"
              alt="Сергей Примиренков" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      sitename: "Driv3r - Каталог игр",
      publicPath: process.env.BASE_URL,
    }
  },
  computed: {
    currentRouteName() {
      return (this.$route.name);
    }
  }
}
</script>