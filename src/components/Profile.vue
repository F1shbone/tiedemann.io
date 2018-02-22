<template>
  <section class="profile">
    <div class="container">
      <h1 class="header">Profile</h1>
      <p class="subheader">I'm a creative JS webdeveloper</p>
      <hr />

      <div class="row">
        <div class="col-sm-12 col-md-6 col-xl-6">
          <h4>About me</h4>
          <p>
            I love structure and order and I also stand for quality.
            I love spending time on fixing little details and optimizing web apps.
            Also I like working in a team, you'll learn faster and much more.
            As the saying goes: 'two heads are better than one'.
          </p>
          <p>Eiusmod voluptate sint eu sit magna quis cupidatat magna. Officia in et aliqua officia labore irure commodo. Dolore eu cupidatat amet amet nulla amet. Aliqua non dolore ipsum est nulla aliquip qui ullamco amet laborum deserunt nostrud nisi tempor. Sunt in sit proident officia consectetur adipisicing. Tempor veniam nulla dolore velit cillum deserunt magna ut excepteur irure eu consequat magna.</p> 
        </div>
        <div class="col-sm-12 col-md-6 col-xl-6">
          <div class="details">
            <h4>Details</h4>
            <dl class="row">
              <dt class="col-xs-12 col-sm-3">Name:</dt>
              <dd class="col-xs-12 col-sm-9">Christian Tiedemann</dd>

              <dt class="col-xs-12 col-sm-3">Age:</dt>
              <dd class="col-xs-12 col-sm-9">{{ age }} years</dd>

              <dt class="col-xs-12 col-sm-3">Location:</dt>
              <dd class="col-xs-12 col-sm-9">Türkenfeld, Munich, Germany</dd>
            </dl>
          </div>
          <div class="imageContainer">
            <img src="../assets/image.jpg" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    age () {
      let birthday = new Date(1991, 0, 31)
      let diff = Date.now() - birthday.getTime()
      let date = new Date(diff)
      return Math.abs(date.getFullYear() - 1970)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/overrides/variables';
@import '../scss/base/variables';

.profile {

  .imageContainer {
    padding: 1rem;
    img {
      display: block;
      width: 100%;
      max-width: 25rem;
      margin-left: auto;
      margin-right: auto;
      border-radius: 50%;
      border: 2px solid $font-color;
    }
  }

  .details {
    dl > dt { font-weight: 700; }
    dl > dd { margin: 0; }
  }
}
</style>
