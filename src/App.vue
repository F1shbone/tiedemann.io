<template>
  <div id="app">
    <page-header />
    <main id="content">
      <profile />
      <experiences />
      <abilities />
      <projects />
      <contact />
    </main>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader'
import Profile from './components/Profile'
import Experiences from './components/Experiences'
import Abilities from './components/Abilities'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default {
  name: 'App',
  components: {
    PageHeader,
    Profile,
    Experiences,
    Abilities,
    Projects,
    Contact
  }
}
</script>

<style lang="scss">
@import './scss/skeleton';
@import './scss/overrides/variables';
@import './scss/base/variables';

a { text-decoration: none; }

#content > section {
   padding: 2rem 0;

   &:nth-child(even) {
     background-color: $light-grey;

     hr { border-color: darken($light-grey, 25%); }
   }

   &:last-child {
     background-color: $dark-grey;

     hr { border-color: $font-color }

     .header { color: #fff; }
   }

  .header {
    color: $primary-color;
    text-align: center;
    letter-spacing: .5rem;
    font-size: 5.4rem;
  }
  .subheader {
    font-size: 2.1rem;
    font-weight: 200;
    text-align: center;
  }
}
</style>
