<template>
  <div class="form">
    <BContainer>
      <BForm @submit.prevent="onSubmit">
        <BFormGroup
          label="Получить"
          label-for="currency_in"
          label-cols-sm="4"
          class="mb-1 mb-sm-3 font-weight-bold"
        >
          <BCol sm="8" class="form__column">
            <BFormSelect
              id="currency_in"
              v-model="form.currency_in"
              :options="getListForSelect"
              class="form__input"
            ></BFormSelect>
          </BCol>
        </BFormGroup>
        <BFormGroup
          label="Отдать"
          label-for="currency_out"
          label-cols-sm="4"
          class="mb-1 mb-sm-3 font-weight-bold"
        >
          <BCol sm="8">
            <BFormSelect
              id="currency_out"
              v-model="form.currency_out"
              :options="getListForSelect"
              class="form__input"
              :state="validation"
            ></BFormSelect>
            <BFormInvalidFeedback :state="validation">
              выберите валюту
            </BFormInvalidFeedback>
            <BFormValidFeedback :state="validation">
              отлично
            </BFormValidFeedback>
          </BCol>
        </BFormGroup>
        <BFormGroup
          label="Количество"
          label-for="value_rate"
          label-cols-sm="4"
          class="mb-1 mb-sm-3 font-weight-bold"
        >
          <BCol sm="8">
            <BFormInput
              id="value_rate"
              type="number"
              v-model.number="form.value_rate"
              class="form__input mx-auto"
              :state="validation2"
            ></BFormInput>
            <BFormInvalidFeedback :state="validation2">
              введите число больше 0
            </BFormInvalidFeedback>
            <BFormValidFeedback :state="validation2">
              отлично
            </BFormValidFeedback>
          </BCol>
        </BFormGroup>
        <BButton type="submit" variant="dark" class="ml-sm-5"
          >Рассчитать</BButton
        >
      </BForm>
      <BFormGroup
        label="Результат"
        label-for="result"
        label-cols-sm="4"
        class="mt-3 mb-1 mb-sm-3 font-weight-bold"
      >
        <BCol sm="8">
          <BFormInput
            id="result"
            type="text"
            v-model.number="result"
            readonly
            class="form__input mx-auto font-weight-bold"
          ></BFormInput>
        </BCol>
      </BFormGroup>
    </BContainer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Convert",
  mounted() {
    this.form.currency_in = this.currency_in || this.selected;
  },
  data: () => ({
    form: {
      currency_in: "",
      currency_out: "",
      value_rate: 1
    },
    result: ""
  }),
  computed: {
    ...mapGetters("currency", ["getListForSelect", "selected", "getCurrency"]),
    validation() {
      return Boolean(this.form.currency_out);
    },
    validation2() {
      return Boolean(this.form.value_rate > 0);
    }
  },
  methods: {
    onSubmit() {
      if (!this.validation || !this.validation2) {
        this.result = "";
        return;
      }
      const c_in = this.getCurrency[this.form.currency_in].rate;
      const c_out = this.getCurrency[this.form.currency_out].rate;
      const c_rate = this.form.value_rate;
      this.result = ((c_in / c_out) * c_rate).toFixed(3);
    },
    changeSelected(value) {
      this.form.currency_in = value;
    }
  },
  watch: {
    selected: "changeSelected"
  }
};
</script>

<style lang="scss" scoped>
.form {
  &__input {
    max-width: 300px;
    width: 100%;
  }
}
</style>
