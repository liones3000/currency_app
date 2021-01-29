<template>
  <div id="app">
    <nav class="nav px-2 py-1">
      <ul class="nav__list mx-auto mb-0 col-xs-12 justify-content-center">
        <li class="nav__item">
          <router-link to="/" class="nav__link">Курс валют</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/convert" class="nav__link">Конвертер</router-link>
        </li>
      </ul>
      <div class="nav__aside col-6 col-sm-3 mx-auto my-1 my-sm-0">
        <BFormSelect
          @input="changeSelect"
          :value="selected"
          :options="getListForSelect"
          size="sm"
          class="nav__select"
        />
      </div>
    </nav>
    <router-view class="view" />
    <footer class="footer">
      <nav class="nav px-2 py-1">
        <ul class="nav__list mx-auto mb-0 col-xs-12 justify-content-center">
          <li class="nav__item">
            <router-link to="/" class="nav__link">Курс валют</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/convert" class="nav__link">Конвертер</router-link>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({}),
  computed: {
    ...mapGetters("currency", ["getListForSelect", "selected"])
  },
  watch: {},
  methods: {
    ...mapActions("currency", ["changeSelected"]),
    changeSelect(value) {
      this.changeSelected(value);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}

.nav {
  background-color: #343a40;
  align-items: center;
  &__list {
    list-style: none;
    padding: 0;
    display: flex;
  }
  &__item {
    margin: 0 5px;
    &:focus {
      outline: transparent;
    }
  }
  &__link {
    padding: 5px 10px;
    display: block;
    color: #fff;

    &:hover {
      color: #28a745;
      text-decoration: none;
    }
  }
  &__aside {
    @media (min-width: 576px) {
      position: absolute !important;
      right: 0;
    }
  }
  &__select {
    max-width: 180px;
    min-width: 110px;
    position: relative;
  }
}

.view {
  flex-grow: 1;
}
</style>
