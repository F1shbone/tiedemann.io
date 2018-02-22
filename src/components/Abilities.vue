<template>
  <section class="abilities">
    <div class="container">
      <h1 class="header">Abilities</h1>
      <span class="subheader">
        <blockquote>
          "Any fool can know. The point is to understand"
          <br>
          &mdash; Albert Einstein
        </blockquote>
      </span>
      <hr />

      <h4>Skills</h4>
      <div class="row">
        <div
          class="col-xs-12 col-md-6"
          v-for="(dataset, i) in chunkedData(skills)"
          :key="i"
        >
          <template v-for="item in dataset">
            <entry :value="item.value" :key="item.name">{{item.name}}</entry>
          </template>
        </div>
      </div>
      
      <h4>Languages</h4>
      <div class="row">
        <div
          class="col-xs-12 col-md-6"
          v-for="(dataset, i) in chunkedData(languages)"
          :key="i"
        >
          <template v-for="item in dataset">
            <entry :value="item.value" :key="item.name">{{item.name}}</entry>
          </template>
        </div>
      </div>
      
      <h4>Tools</h4>
      <div class="row">
        <div
          class="col-xs-12 col-md-6"
          v-for="(dataset, i) in chunkedData(tools)"
          :key="i"
        >
          <template v-for="item in dataset">
            <entry :value="item.value" :key="item.name">{{item.name}}</entry>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Entry from './Abilities/Entry'

export default {
  name: 'Abilities',
  components: {
    Entry
  },
  data () {
    return {
      skills: {
        'JavaScript': 5,
        'HTML(5)': 5,
        'CSS(3)': 5,
        'LESS': 4,
        'SASS / SCSS': 5,
        'JSON': 5,
        'Node.js': 3,
        'MSSQL / MySQL': 3,
        'PHP': 4,
        'C#': 4,
        'XML': 4,
        'jQuery': 5,
        'Bootstrap Framework': 5,
        'Laravel': 4,
        'Vue': 5,
        'Angular': 3,
        'Electron': 4,
        'Scrum': 2,
        'D3.js': 4
      },
      languages: {
        'German (Mother tongue': 5,
        'English (Daily use)': 5
      },
      tools: {
        'Windows (10+ years)': 5,
        'Mac (5 years)': 5,
        'Firefox (5 years)': 5,
        'Webkit browsers (5 years)': 5,
        'Internet Explorer 10+ (5 years)': 4,
        'Git / Git Flow (4 years)': 4,
        // 'MS Office (10+ years)': 5,
        'Notepad++ (5 years)': 5,
        'Visual Studio Code (2 years)': 5,
        'Webpack (2 years)': 4,
        'Gulp / Grunt (4 years)': 5,
        'Atlassian / Jira (3 years)': 3,
        'Joomla': 3
      }
    }
  },
  methods: {
    chunkedData (input) {
      let result = [[], []]

      let keys = Object.keys(input)
      let values = Object.values(input)
      let chunker = Math.ceil(keys.length / 2) - 1
      let data = []
      
      keys.forEach((key, index) => {
        data.push({
          name: key,
          value: values[index]
        })
      })

      let sorter = (a, b, type) => {
        type = type || 'asc'
        if (a > b) return type === 'asc' ? +1 : -1
        if (a < b) return type === 'asc' ? -1 : +1
        return 0
      }

      data.sort((a, b) => {
        return sorter(a.value, b.value, 'dsc') || sorter(a.name, b.name)
      }).forEach((item, index) => {
        result[index <= chunker ? 0 : 1].push(item)
      })

      return result
    }
  }
}
</script>

<style lang="scss" scoped>
.abilities {
  .row { margin-bottom: 2.5rem; }
}
</style>
