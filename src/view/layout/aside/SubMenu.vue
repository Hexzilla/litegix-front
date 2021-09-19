<template>
  <ul class="menu-nav">
    <template v-for="(item, i) in menuItems">
      <router-link
        v-bind:key="i"
        :to="item.link"
        v-slot="{ href, navigate, isActive, isExactActive }"
      >
        <li
          aria-haspopup="true"
          data-menu-toggle="hover"
          class="menu-item"
          :class="[
            isActive && 'menu-item-active',
            isExactActive && 'menu-item-active'
          ]"
        >
          <a :href="href" class="menu-link" @click="navigate">
            <span class="svg-icon menu-icon">
              <inline-svg :src="item.icon" />
            </span>
            <span class="menu-text">{{ item.title }}</span>
          </a>
        </li>
      </router-link>
    </template>
  </ul>
</template>
<script>
export default {
  name: "KtSubMenu",
  props: {
    menuItems: Array
  },
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    }
  }
};
</script>
