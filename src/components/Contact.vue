<template>
  <section class="contact">
    <div class="container">
      <h1 class="header">Contact</h1>
      <span class="subheader">
        <blockquote>
          "If I had asked people what they wanted, they would have said faster horses."
          <br>
          &mdash; Henry Ford
        </blockquote>
      </span>
      <div class="row">
        <div class="col-md-12 col-lg-8 offset-lg-2">
          <hr />
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <a href="mailto:christian@tiedemann.io" class="contact-entry">
                <span class="icon">
                  <i class="ion ion-at" />
                </span>
                Christian@Tiedemann.io
              </a>
            </div>
            <div class="col-xs-12 col-md-6">

              <a href="https://github.com/F1shbone" target="_blank" class="contact-entry">
                <span class="icon">
                  <i class="ion ion-social-github" />
                </span>
                https://github.com/F1shbone
              </a>
            </div>
          </div>
          <hr />
          <p class="footer">Made with <i class="ion ion-heart" /> and <i class="ion ion-coffee" /></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="scss" scoped>
@import '../scss/overrides/variables';
@import '../scss/base/variables';

.contact {
  padding-bottom: 12rem !important;

  .contact-entry {
    display: flex;
    opacity: .6;
    color: #fff;
    align-items: center;

    &:hover { opacity: 1; }

    .icon {
      display: flex;
      align-self: center;
      justify-content: center;
      width: 3.5rem;
      height: 3.5rem;
      padding: .5rem;
      margin-right: 2rem;
      color: $dark-grey;
      background-color: #fff;
      border-radius: .5rem;
      font-size: 2.5rem;
      line-height: 3.5rem;
      opacity: 1;
    }
  }

  .footer {
    font-size: 85%;
    text-align: center;
    opacity: .6;
  }
}
</style>
