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
        <entry
          v-for="(entry, index) in careers" :key="index"
          :data="entry"
        />

        <h4>Education</h4>
        <entry
          v-for="(entry, index) in education" :key="index"
          :data="entry"
        />
      </section>
    </div>
  </section>
</template>

<script>
import Entry from './Experiences/Entry'

export default {
  name: 'Experiences',
  components: {
    Entry
  },
  data () {
    return {
      careers: [
        {
          company: 'financial.com',
          duration: 'March 2018 - current',
          title: 'Frontend Developer',
          label: 'Fulltime',
          description: `
            financial.com is a leading provider of financial information and trading systems. Here work on our new application framework,
            written completely in typescript. As a team we are working in a fully scrum way.
          `,
          location: 'Schwabing, München',
          link: {
            target: 'https://www.financial.com',
            text: 'https://financial.com'
          }
        },
        {
          duration: 'Jun 2017 - March 2018',
          title: 'Personal Leave of Absence'
        },
        {
          company: 'Vocatus AG',
          duration: 'Jun 2015 - Jun 2017',
          title: 'Web- and Applicationsdeveloper',
          label: 'Fulltime',
          description: `
            After my apprenticeship I stayed with Vocatus and worked on projects like their internal project dashboard,
            online data analysis tools and more. Using frameworks and technologies such as Vue.js, Laravel, D3.js and node.js.
            I also introduced working with automated buildtools and supported the next generation of trainees.
          `,
          location: 'Gröbenzell, München',
          link: {
            target: 'https://www.vocatus.de',
            text: 'https://vocatus.de'
          }
        }
      ],
      education: [
        {
          company: 'Vocatus AG',
          duration: 'Sep 2012 - Jun 2015',
          title: 'Apprenticeship - "Fachinformatiker Anwendungsentwicklung"',
          label: 'Fulltime',
          description: `
            I started my apprenticeship at a company called Vocatus, a consulting firm based in Gröbenzell. There I learned to apply and
            combine my theoretical knowledge and love for programming.
            <br>
            During the redesign of both the company website and online survey, I realized that webdevelopment was the way to go for me.
          `,
          location: 'Gröbenzell, München',
          link: {
            target: 'https://www.vocatus.de',
            text: 'https://vocatus.de'
          }
        },
        {
          company: 'FH-Kempten',
          duration: 'Oct 2010 - Sep 2012',
          title: 'Bachelor - "Wirtschaftsinformatik"',
          label: '4 Semester',
          description: `
            The education was mainly Java-based programming, but I also lerned about SQL, MVC, UML and more. It also taught me a
            thing or two about design patterns, software design and the importance of OOP. While educational it sadly lacked practical use,
            so after my 4th semester I decided to start an apprenticeship.
          `,
          location: 'Kempten'
        },
        {
          company: 'Fachoberschule Fürstenfeldbruck',
          duration: 'Sep 2008 - Jul 2010',
          title: 'Fachhochschulreife - Wirtschaft',
          description: `
            I graduated from FOS, and realized that my professional future should consist more of computer science and less of economics.
          `,
          location: 'Fürstenfeldbruck'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/overrides/variables';
@import '../scss/base/variables';

.experiences {
  .subheader > blockquote { margin: 0; }
}
</style>
