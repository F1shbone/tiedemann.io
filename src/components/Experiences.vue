<template>
  <section class="experiences">
    <div class="container">
      <h1 class="header">Experiences</h1>
      <span class="subheader">
        <blockquote>
          "I have never let my schooling interfere with my education"
          <br>
          &mdash; Mark Twain
        </blockquote>
      </span>
      <hr />

      <section>
        <h4>Careers</h4>
        <div class="row experience">
          <div class="col-sm-12 col-md-4">
            <strong>Sabbatical</strong>
            Jun 2017 - current
          </div>
          <div class="col-sm-12 col-md-8">
            <p>
              <strong>
                Title
              </strong>
            </p>
            <p>Text</p>
          </div>
        </div>
        <div class="row experience">
          <div class="col-sm-12 col-md-4">
            <strong>Vocatus AG</strong>
            Jun 2015 - Jun 2017
          </div>
          <div class="col-sm-12 col-md-8">
            <p>
              <strong>
                Web- and Applicationdeveloper
                <span class="label">Fulltime</span> 
              </strong>
            <p>
            <p>
              TODO: Change text and get Icons
              <ul class="list-unstyled">
                <li>Planung und Implementierung des Webfrontends sowie der dazugehörigen RESTful-API, für die interne Zeiterfassung</li>
                <li>Entwicklung und Wartung der Firmenwebseite, unter Zuhilfenahme von Joomla</li>
                <li>Entwicklung diverser WPA-Applikationen</li>
                <li>Anleiten der Auszubildenden</li>
              </ul>
            </p>
            <div class="links">
              <span class="location">
                <i class="ion ion-location" /> Gröbenzell, München
              </span>
              <a href="https://www.vocatus.de" target="_blank">
                <i class="ion ion-link" />https://vocatus.de
              </a>
            </div>
          </div>
        </div>

        <h4>Education</h4>
        <div class="row experience">
          <div class="col-sm-12 col-md-4">
            <strong>Vocatus AG</strong>
            Sep 2012 - Jun 2015 
          </div>
          <div class="col-sm-12 col-md-8">
            <p>
              <strong>
                Apprenticeship - "Fachinformatiker Anwendungsentwicklung"
                <span class="label">Fulltime</span> 
              </strong>
            <p>
            <p>
              TODO: Change text and get Icons
              
            </p>
            <div class="links">
              <span class="location">
                <i class="ion ion-location" /> Gröbenzell, München
              </span>
              <a href="https://www.vocatus.de" target="_blank">
                <i class="ion ion-link" /> https://vocatus.de
              </a>
            </div>
          </div>
        </div>
        <div class="row experience">
          <div class="col-sm-12 col-md-4">
            <strong>FH Kempten</strong>
            Oct 2010 - Sep 2012 
          </div>
          <div class="col-sm-12 col-md-8">
            <p>
              <strong>
                Bachelor - "Wirtschaftsinformatik"
                <span class="label">4 Semester</span> 
              </strong>
            <p>
            <p>
              TODO: Change text and get Icons
              
            </p>
            <div class="links">
              <span class="location">
                <i class="ion ion-location" /> Kempten
              </span>
            </div>
          </div>
        </div>
        <div class="row experience">
          <div class="col-sm-12 col-md-4">
            <strong>Staatliche Fachoberschule Fürstenfeldbruck</strong>
            Sep 2008 - Jul 2010 
          </div>
          <div class="col-sm-12 col-md-8">
            <p>
              <strong>
                Fachhochschulreife
              </strong>
            <p>
            <p>
              TODO: Change text and get Icons
              
            </p>
            <div class="links">
              <span class="location">
                <i class="ion ion-location" /> Fürstenfeldbruck
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experiences'
}
</script>

<style lang="scss" scoped>
@import '../scss/overrides/variables';
@import '../scss/base/variables';

.experiences {
  .subheader > blockquote { margin: 0; }


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
}
</style>
