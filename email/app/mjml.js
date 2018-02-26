const fs = require('fs')
const path = require('path')
const mjml2html = require('mjml').mjml2html

fs.readFile(path.join(__dirname, 'template/Anschreiben.mjml'), 'utf8', function (err, template) {
  if (err) {
    console.error(err)
  } else {
    console.log(mjml2html(template))
  }
})
