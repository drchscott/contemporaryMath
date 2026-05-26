var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-statistics-hw",
  "level": "1",
  "url": "sec-statistics-hw.html",
  "type": "Section",
  "number": "1.1",
  "title": "Homework",
  "body": " Homework   A study was conducted of schools across the U.S. about whether they require school uniforms. Two hundred ninety-six schools gave their response to the question, “Does your school require school uniforms?” State the population and sample.  The U.S. Department of Labor collects information on the average hourly earnings of professional and business services positions. Suppose that you look at 20 years and collect data on the average hourly earnings in those years. State the population and sample.  A person collects the gas prices at 25 gas stations in Phoenix, AZ. State the population and sample.  The Center for Disease Control collects data on the number of children with autism. They collect data on 32,601 children in the state of Arizona, and then look to see how many have autism. State the population and sample.  Determine if the variable is qualitative or quantitative. If quantitative, then also state if the variable is discrete or continuous.  Height of buildings in a town  Eye color of all students at a college  Weight of cars  Number of dogs in a household  Religion of people in a town  Number of fish caught daily20  Determine if the variable is qualitative or quantitative. If quantitative, then also state if the variable is discrete or continuous.  Letter grades of students in a class  Distance a person runs every day  Number of prairie dogs on a parcel of land  Time that a task takes to complete  Gender of a person  Number of cars at a dealership on a given day     "
},
{
  "id": "sec-probability-intro",
  "level": "1",
  "url": "sec-probability-intro.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction",
  "body": " Introduction  Text of section.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
