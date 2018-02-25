<template>
  <section class="page-header">
    <img
      src="../assets/background.png"
      srcset="
        ../assets/background.png 320w,
        ../assets/background.png 600w,
        ../assets/background.png 900w
      "
      alt="Page Header Background"
    >
      <div class="header-content container">
        <h1 class="head">Christian Tiedemann</h1>
        <p class="subhead">Mein Leben und ich</p>
      </div>

      <a
        href="#"
        v-scroll-to="'#content'"
        class="scroll-down"
      >
        <svg viewBox="0 0 252 139" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path id="path0_fill" d="M236.193 1.797a4.976 4.976 0 0 1 7.057 0l7.154 7.182a5.023 5.023 0 0 1 0 7.085L129.557 137.383a4.977 4.977 0 0 1-7.057 0l-10.683-10.725L236.193 1.797z"/>
          <path id="path1_fill" d="M1.462 15.734a5.023 5.023 0 0 1 0-7.084l7.154-7.183a4.977 4.977 0 0 1 7.057 0L140.05 126.328l-10.683 10.725a4.977 4.977 0 0 1-7.057 0L1.462 15.734z"/>
        </svg>
      </a>
  </section>
</template>

<script>
export default {
  name: 'page-header'
}
</script>

<style lang="scss" scoped>
@import '../scss/overrides/variables';

.page-header {
  position: relative;
  display: flex;
  overflow: hidden;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    filter: grayscale(75%);
    transition: .3s;
  }

  .header-content {
    position: absolute;
    top: 50%;
    left: 0; right: 0;
    transform: translateY(-50%);
    color: #fff;
    text-align: center;
    z-index: 9999;


    > .head {
      display: inline-block;
      padding: 0 1.5rem 2rem;
      font-size: 6.3rem;
      font-weight: 100;
      border-bottom: 1px solid rgba(255,255,255,0.35);
    }
    > .subhead {
      font-size: 2.1rem;
      font-weight: 200;
    }
  }

  .scroll-down {
    position: absolute;
    bottom: 0;
    right: 5%;
    display: flex;
    flex-direction: column;
    height: 8rem;
    width: 11rem;
    background-color: $secondary-color;
    text-decoration: none;
    z-index: 9999;
    align-items: center;
    justify-content: center;

    > svg {
      width: 3.5rem;
      height: 3.5rem;
      fill: $primary-color;
      animation: wiggle 1.5s linear infinite normal;
    }

    @keyframes wiggle {
      0%, 100% { margin-top: 0rem }
      50% { margin-top: .8rem }
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: #2c3e50;
    opacity: .5;
    z-index: 999;
  }
}
</style>
