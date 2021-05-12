<template>
  <div>
    <div class="header header-not-home">
      <div class="container container-header">
        <div class="logo">
          <router-link class="about-link" tag="a" to="/" title="На главную">
            <img :src="this.publicPath + 'footer.png'" alt="DriV3R" width="200px" height="auto" />
          </router-link>
        </div>
        <div class="header-items">
          <p
            class="header-item"
          >Мы находимся: г. Магнитогорск, ул. Ленина, 83 | ТЦ "Континент", 3 этаж</p>
          <p class="header-item">Мы работаем: ежедневно с 10:00 до 21:00</p>
        </div>
        <div class="header-info">
          <div class="tel">
            <a href="tel: +79000939392" title="Позвонить нам">+7 (900) 093-93-92</a>
          </div>
          <div class="social">
            <a href="https://vk.com/mgnvr" target="_blank" title="Мы ВКонтакте">
              <img :src="this.publicPath + 'vk.svg'" alt width="30px" height="30px" />
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
        </vk-breadcrumb>-->
        <router-link class="link-home" tag="a" to="/" title="Вернуться на главную">❮ На главную</router-link>
      </div>
      <h1 class="about-header">О нас</h1>
      <p>
        DriV3R - это то место, где Вы пересекаете грань реальности, оказываетесь в совершенно новых мирах и становитесь их частью, а не только наблюдателями.
        <br />У нас Вы сможете испытать самые последние технологии, которые используются для погружения в виртуальную реальность.
      </p>
      <div class="features">
        <div class="feature-item">
          <h2 class="game-platform">HTC</h2>
          <img
            :src="this.publicPath + 'htc_vive.png'"
            alt="HTC"
            width="100%"
            height="auto"
            class="feature-picture"
          />
          <p
            class="feature-desc"
          >VIVE изначально был задуман как система, позволяющая получить опыт полного погружения в виртуальную среду с возможностью перемещения в пространстве.</p>
          <p
            class="game-count"
          >Игр на платформе: {{ this.$store.state.games.filter(game => game.category==='htc').length }}</p>
        </div>
        <div class="feature-item">
          <h2 class="game-platform">PSVR</h2>
          <img
            :src="this.publicPath + 'ps_vr.png'"
            alt="PSVR"
            width="100%"
            height="auto"
            class="feature-picture"
          />
          <p
            class="feature-desc"
          >К особенностям представленного шлема необходимо отнести наличие системы 3D-обработки звука, социального экрана, кинематографического режима работы.</p>
          <p
            class="game-count"
          >Игр на платформе: {{ this.$store.state.games.filter(game => game.category==='psvr').length }}</p>
        </div>
        <div class="feature-item">
          <h2 class="game-platform">PS4</h2>
          <img :src="this.publicPath + 'ps_4.png'" alt="PS4" width="100%" height="auto" />
          <p
            class="feature-desc"
          >Вселенная игрового киберпространства открыта перед вами! Приставка Sony PlayStation 4 даст вам лучший игровой опыт с передовой графикой нового поколения.</p>
          <p
            class="game-count"
          >Игр на платформе: {{ this.$store.state.games.filter(game => game.category==='ps').length }}</p>
        </div>
      </div>
      <h2>Прайс</h2>
      <table class="uk-table uk-table-striped">
        <thead>
          <tr>
            <th>HTC</th>
            <th>PSVR</th>
            <th>PS4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10 мин - 200₽</td>
            <td>10 мин - 200₽</td>
            <td>15 мин - 120₽</td>
          </tr>
          <tr>
            <td>20 мин - 350₽</td>
            <td>20 мин - 350₽</td>
            <td>30 мин - 200₽</td>
          </tr>
          <tr>
            <td>30 мин - 450₽</td>
            <td>30 мин - 450₽</td>
            <td>60 мин - 300₽</td>
          </tr>
          <tr>
            <td>60 мин - 600₽</td>
            <td>60 мин -600₽</td>
            <td>120 мин - 500₽</td>
          </tr>
          <tr>
            <td>120 мин - 1100₽</td>
            <td>120 мин - 1100₽</td>
            <td>безлимит - 1000₽</td>
          </tr>
          <tr>
            <td></td>
            <td>1 заезд - 150₽</td>
            <td></td>
          </tr>
          <tr>
            <td colspan="3" class="cell-rent">Аренда центра - 2000₽/час</td>
          </tr>
        </tbody>
      </table>
      <!--       <vk-table :data="data" striped>
        <vk-table-column title="HTC" cell="htc"></vk-table-column>
        <vk-table-column title="PSVR" cell="psvr"></vk-table-column>
        <vk-table-column title="PS4" cell="ps4"></vk-table-column>
      </vk-table>-->
      <h2>Мы Вконтакте</h2>
      <p>Конкурсы, акции, новости игровой индустрии в нашей группе ВКонтакте. Подпишись! 😉</p>
      <div id="vk_groups"></div>
      <h2>Как проехать</h2>
      <p>Мы находимся по адресу: г. Магнитогорск, ул. Ленина, 83 | ТЦ "Континент", 3 этаж, рядом с залом игровых автоматов Sky Game | тел. 8-9000-93-93-92</p>
      <!-- <iframe style="margin-bottom: 20px" src="https://yandex.ru/map-widget/v1/-/CCrrEBOI" width="100%" height="300" frameborder="0" allowfullscreen="true"></iframe> -->
      <div id="2gisWidget"></div>
    </div>
    <div class="footer">
      <div class="container container-footer">
        <div class="logo">
          <router-link class="about-link" tag="a" to="/about" title="О нас">
            <img :src="this.publicPath + 'footer.png'" alt="DriV3R" width="200px" height="auto" />
          </router-link>
        </div>
        <div class="tel">
          <a href="tel: +79000939392" title="Позвонить нам">+7 (900) 093-93-92</a>
        </div>
        <div class="social">
          <a href="https://vk.com/mgnvr" target="_blank" title="Мы ВКонтакте">
            <img :src="this.publicPath + 'vk.svg'" alt width="30px" height="30px" />
          </a>
        </div>
        <div
          class="copyright"
        >&#9400; Driv3r, 2017 - 2020 | По всем вопросам обращаться по телефону или в группу ВКонтакте</div>
        <div class="developer">
          Дизайн и разработка
          <a href="https://vk.com/primirenkov" target="_blank">
            <img :src="this.publicPath + 'ps.svg'" alt="Сергей Примиренков" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      sitename: "Driv3r - Каталог игр",
      publicPath: process.env.BASE_URL,
      data: [
        { htc: "10 мин - 150₽", psvr: "10 мин - 150₽", ps4: "15 мин - 100₽" },
        { htc: "20 мин - 300₽", psvr: "20 мин - 300₽", ps4: "30 мин - 150₽" },
        { htc: "30 мин - 400₽", psvr: "30 мин - 400₽", ps4: "60 мин - 250₽" },
        { htc: "60 мин - 550₽", psvr: "60 мин - 550₽", ps4: "120 мин - 450₽" },
        {
          htc: "120 мин - 1000₽",
          psvr: "120 мин - 1000₽",
          ps4: "безлимит - 900₽"
        },
        { psvr: "1 заезд - 120₽" }
      ]
    };
  },
  mounted() {
    VK.Widgets.Group(
      "vk_groups",
      { mode: 4, wide: 1, height: "400" },
      19336666
    );

    DG.FloorsWidget.init({
      container: "2gisWidget",
      width: "100%",
      height: "400px",
      initData: {
        complexId: "3659703978840901",
        options: {
          initialFloor: "3",
          initialFirm: "70000001028584133",
          initialZoom: "18"
        }
      }
    });
  }
};
</script>
