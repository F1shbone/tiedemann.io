<template>
  <div class="entry">
    <span class="entry-name">
      <slot />
    </span>
    <span class="entry-value">
      <span
        :class="[ 'star-icon', getStar(index)]"
        v-for="index in 5"
        v-bind:key="index"
      >★</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Ability-Entry',
  props: {
    value: {
      required: true,
      type: Number
    }
  },
  methods: {
    getStar (val) {
      return val <= this.value ? 'full' : 'empty'
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/overrides/variables';
@import '../../scss/base/variables';

.abilities .entry {
  display: flex;
  align-items: center;
  cursor: default;
  transition: background-color .3s;

  &:hover {
    background-color: #f2f2f2;

    .star-icon { padding-right: .25rem; }
  }
  .entry-name {
    flex-grow: 1;
  }
  .entry-value {
    flex-grow: 0;
    .star-icon {
      position: relative;
      display: inline-block;
      font-size: 2.4rem;
      cursor: default;
      transition: padding .3s;

      &.full { color: #f1c40f; }
      &.empty { color: #ddd; }
    } 
  }
}
</style>
