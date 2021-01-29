<template>
  <div class="list">
    <BContainer>
      <h1 class="list__title">Курс валют</h1>
      <BRow>
        <template v-if="isNoEmpty">
          <div class="list__body">
            <BTable
              primary-key="1"
              striped
              small
              responsive="true"
              head-variant="dark"
              :items="dataForTable"
              :fields="fields"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              sticky-header="65vh"
              ref="table"
            >
              <template #cell(name)="data">
                <span class="list__name">{{ data.item.name }}</span>
              </template>
              <template #head(favorite)>
                <BIcon icon="star-fill" variant="success"></BIcon>
              </template>

              <template #cell(favorite)="data">
                <BLink class="list__link" @click="onClick(data)">
                  <BIcon
                    v-if="data.item.favorite"
                    icon="star-fill"
                    variant="success"
                  ></BIcon>
                  <BIcon v-else icon="star" variant="success"></BIcon>
                </BLink>
              </template>

              <template #cell(rate)="data">
                {{ data.item.rate.toFixed(3) }}
              </template>
            </BTable>
          </div>
        </template>

        <template v-else>
          <BRow class="list__loading mx-auto">
            <BIcon
              icon="circle-fill"
              animation="throb"
              font-scale="4"
              class="my-auto"
            ></BIcon>
          </BRow>
        </template>
      </BRow>
    </BContainer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CurrencyList",
  data: () => ({
    sortBy: "favorite",
    sortDesc: true,
    fields: [
      {
        key: "name",
        label: "Название",
        sortable: false
      },
      {
        key: "favorite",
        label: "",
        sortable: false
      },
      {
        key: "rate",
        label: "Курс",
        sortable: false
      },
      {
        key: "code",
        label: "Код",
        sortable: false
      }
    ]
  }),
  components: {},
  computed: {
    ...mapGetters("currency", ["getCurrency", "dataForTable"]),
    isNoEmpty() {
      return !!Object.keys(this.getCurrency).length;
    },
    changeIcon(boolean) {
      return {
        "star-fill": boolean,
        star: !boolean
      };
    }
  },
  methods: {
    ...mapActions("currency", ["changeFavorite"]),

    onClick({ item }) {
      this.changeFavorite(item);
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
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
  &__body {
    margin: auto;
    overflow: auto;
  }
  &__name {
    line-height: 1.6em;
  }
  &__link {
    &:hover {
      cursor: pointer;
    }
  }
  &__loading {
    min-height: 65vh;
  }
}
</style>
