<template>
  <section class="projects">
    <div class="container">
      <h1 class="header">Projects</h1>
      <span class="subheader">
        <blockquote>
          "The only way to do great work is to love what you do"
          <br>
          &mdash; Steve Jobs
        </blockquote>
      </span>
      <hr />

      <div class="showcase row">
        <div class="col-sm-12 col-md-6">
          <img
            class="showcase-image"
            src="../assets/projects/vocatus_website.png"
          />
        </div>
        <div class="col-sm-12 col-md-6">
          <h4 class="showcase-title">Vocatus Website Redesign</h4>

          <ul class="showcase-tags">
            <li class="showcase-tag">Design</li>
            <li class="showcase-tag">Development</li>
            <li class="showcase-tag">Bootstrap</li>
            <li class="showcase-tag">Joomla</li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="showcase row">
        <div class="col-sm-12 col-md-6">
          <h4 class="showcase-title">My Website</h4>

          <ul class="showcase-tags">
            <li class="showcase-tag">Concept</li>
            <li class="showcase-tag">Design</li>
            <li class="showcase-tag">Development</li>
            <li class="showcase-tag">Vue.js</li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-6">
          <img
            class="showcase-image"
            src="../assets/projects/my_website.png"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style lang="scss" scoped>
.projects {
  .showcase {
    > div {
      position: relative;
    }

    .showcase-image {
      max-width: 100%;
    }
    .showcase-title {
      text-align: center;
    }
    .showcase-tags {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin-bottom: .6rem;
      text-align: center;

      .showcase-tag {
        display: inline-block;
        padding: .25rem .5rem;
        margin-bottom: 0;
        border: 1px solid #a1a1a1;
        border-radius: .25rem;
        font-size: 85%;
        font-weight: 100;
        text-transform: uppercase;
        user-select: none;

        + .showcase-tag {
          margin-left: .5rem;
        }
      }
    }
  }
}
</style>
