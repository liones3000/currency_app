<template>
  <div class="convert">
    <BContainer>
      <h1 class="convert__title">Конвертер</h1>
      <Convert />
    </BContainer>
  </div>
</template>

<script>
import Convert from "@/components/convertView.vue";

export default {
  components: {
    Convert
  }
};
</script>

<style lang="scss" scoped>
.convert {
  &__title {
    margin: 30px 0;
    @media (max-width: 576px) {
      margin: 15px 0;
      font-size: 2em;
    }
    @media (max-width: 400px) {
      font-size: 1.6em;
    }
  }
}
</style>
