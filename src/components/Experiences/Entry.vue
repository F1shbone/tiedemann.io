<template>
  <div class="row experience">
    <div class="col-sm-12 col-md-4">
      <strong v-if="data.company" v-text="data.company" />
      {{data.duration}}
    </div>
    <div class="col-sm-12 col-md-8">
      <p>
        <strong>
          {{data.title}}
          <span class="label" v-if="data.label" v-text="data.label" />
        </strong>
      </p>
      <p v-if="data.description" v-html="data.description" />
      <div class="links">
        <span class="location" v-if="data.location">
          <i class="ion ion-location" /> {{data.location}}
        </span>
        <a
          v-if="data.link"
          :href="data.link.target"
          target="_blank"
        >
          <i class="ion ion-link" /> {{data.link.text}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience-Entry',
  props: {
    data: {
      validator (item) {
        if (!item.hasOwnProperty('duration')) return false
        if (!item.hasOwnProperty('title')) return false
        return true
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/overrides/variables';
@import '../../scss/base/variables';

.experience {
  margin-bottom: 2.5rem;

  strong { display: block; }

  .label {
    padding: .25rem .5rem;
    float: right;
    border: 1px solid darken($light-grey, 25%);
    border-radius: .25rem;
    font-size: 85%;
    font-weight: 100;
    text-transform: uppercase;
    user-select: none;
  }

  .ion {
    font-size: 150%;
    margin-right: 1rem;
  }

  .links {
    > * {
      display: flex;
      padding: 0 1rem;
      color: $link-color;
      float: left;
      &:first-child { padding-left: 0; }
      &:last-child { padding-right: 0; }
      + * {
        padding-left: 1rem;
        border-left: 1px solid darken($light-grey, 25%);
      }
    }
  }
}
</style>
