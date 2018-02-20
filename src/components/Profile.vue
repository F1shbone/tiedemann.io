<template>
  <section class="profile">
    <div class="container">
      <h1 class="header">Profile</h1>
      <p class="subheader">I'm a creative JS webdeveloper</p>
      <hr />

      <div class="row">
        <div class="col-sm-12 col-md-4">
          <h4>About me</h4>
          <p>Eiusmod voluptate sint eu sit magna quis cupidatat magna. Officia in et aliqua officia labore irure commodo. Dolore eu cupidatat amet amet nulla amet. Aliqua non dolore ipsum est nulla aliquip qui ullamco amet laborum deserunt nostrud nisi tempor. Sunt in sit proident officia consectetur adipisicing. Tempor veniam nulla dolore velit cillum deserunt magna ut excepteur irure eu consequat magna.</p> 
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="imageContainer">
            <img src="../assets/image.jpg" />
          </div>
        </div>
        <div class="col-sm-6 col-md-4 details">
          <h4>Details</h4>
          <dl>
            <dt>Name:</dt>
            <dd>Christian Tiedemann</dd>

            <dt>Age:</dt>
            <dd>{{ age }} years</dd>

            <dt>Location:</dt>
            <dd>Türkenfeld, Munich, Germany</dd>

            <dt>Phone:</dt>
            <dd><a href="tel:+4915150460533">+49 151 50460533</a></dd>
          </dl>
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
  .header {
    color: $primary-color;
    text-align: center;
    letter-spacing: .5rem;
    font-size: 5.4rem;
  }
  .subheader {
    font-size: 2.1rem;
    font-weight: 200;
    // color: $;
    text-align: center;
  }

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
    text-align: right;

    dl > dt { 
      margin-top: .5rem;
      font-weight: 700;
    }
    dl > dd { margin: 0; }
  }
}
</style>
