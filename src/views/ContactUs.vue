<template>
  <div>
    <div class="header header-not-home">
      <div class="container container-header">
        <div class="logo">
          <router-link class="about-link" tag="a" to="/" title="На главную">
            <img :src="this.publicPath + 'footer.png'" width="200px" height="auto" alt="DriV3R">
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
    <div class="container container-contactus">
      <div class="breadcrumb-container">
        <router-link class="link-home" tag="a" to="/" title="Вернуться на главную">
          ❮ На главную
        </router-link>
      </div>
      <h1 class="about-header">Забронируйте место</h1>
      <form action="https://send.pageclip.co/YR97n0GUKhRoDRB8QgxgjFgUXX86SOa5" method="post" class="form-reserve pageclip-form" autocomplete="off">
        <input type="text" name="Имя" value="" placeholder="Имя" class="input-reserve" title="" required>
        <input type="tel" class="input-reserve" id="tel" name="Телефон" placeholder="Телефон в формате 8-(XXX)-XXX-XX-XX" pattern="8-\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}" title="" required>
        <div class="datetime-reserve">
          <input type="text" id="date" name="Дата" class="input-reserve" placeholder="Дата в формате ДД.ММ" pattern="\d{2}.\d{2}" title="" required>
          <input type="text" id="time" name="Время" class="input-reserve" placeholder="Время в формате ЧЧ:ММ" title="" pattern="\d{2}:\d{2}" required>
        </div>
        <input type="number" id="count" name="Количество человек" class="input-reserve" placeholder="Количество человек (максимум - 5)" min="1" max="5" title="" required>
        <textarea name="Дополнительно" rows="5" placeholder="Дополнительные пожелания" class="input-reserve textarea-reserve" title=""></textarea>
        <button class="button-reserve button pageclip-form__submit" type="submit">
          <span>Забронировать</span>
        </button>
      </form>
    </div>
    <div class="footer">
      <div class="container container-footer">
        <div class="logo">
          <router-link class="about-link" tag="a" to="/about" title="О нас">
            <img :src="this.publicPath + 'footer.png'" width="200px" height="auto" alt="DriV3R">
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
import IMask from 'imask'

export default {
  name: 'contactus',
  data() {
    return {
      sitename: 'Driv3r - Каталог игр',
      publicPath: process.env.BASE_URL
    }
  },
  mounted() {
    function setCaretPosition(elemId, caretPos) {
      var elem = document.getElementById(elemId);

      if (elem != null) {
        if (elem.createTextRange) {
          var range = elem.createTextRange();
          range.move('character', caretPos);
          range.select();
        } else {
          if (elem.selectionStart) {
            elem.focus();
            elem.setSelectionRange(caretPos, caretPos);
          } else
            elem.focus();
        }
      }
    }

    let showhideTel = document.getElementById('tel');
    let patternMaskTel = new IMask(showhideTel, {
      mask: '{8}-(000)-000-00-00',
      greedy: false,
      lazy: true,
      placeholderChar: '_'

    });
    showhideTel.addEventListener('focus', function() {
      patternMaskTel.updateOptions({ lazy: false });
      setCaretPosition('tel', 3);
    }, true);
    showhideTel.addEventListener('blur', function() {
      patternMaskTel.updateOptions({ lazy: true });
      if (!patternMaskTel.masked.rawInputValue) {
        patternMaskTel.value = '';
      }
    }, true);

    let showhideDate = document.getElementById('date');
    let patternMaskDate = new IMask(showhideDate, {
      mask: '00.00',
      lazy: true,
      placeholderChar: '_'
    });
    showhideDate.addEventListener('focus', function() {
      patternMaskDate.updateOptions({ lazy: false });
      setCaretPosition('date', 0);
    }, true);
    showhideDate.addEventListener('blur', function() {
      patternMaskDate.updateOptions({ lazy: true });
      if (!patternMaskDate.masked.rawInputValue) {
        patternMaskDate.value = '';
      }
    }, true);

    let showhideTime = document.getElementById('time');
    let patternMaskTime = new IMask(showhideTime, {
      mask: '00:00',
      lazy: true,
      placeholderChar: '_'
    });
    showhideTime.addEventListener('focus', function() {
      patternMaskTime.updateOptions({ lazy: false });
      setCaretPosition('time', 0);
    }, true);
    showhideTime.addEventListener('blur', function() {
      patternMaskTime.updateOptions({ lazy: true });
      if (!patternMaskTime.masked.rawInputValue) {
        patternMaskTime.value = '';
      }
    }, true);

    let form = document.querySelector('.pageclip-form')
    Pageclip.form(form, {
      onSubmit: function(event) {},
      onResponse: function(error, response) {},
      successTemplate: "<span>Спасибо, заявка успешно отправлена</span><a class='back-home' href='https://mgnvr.github.io/driv3r/#/'>Вернуться на главную</a><button class='form-close'></button>"
    })
  }
}

</script>
