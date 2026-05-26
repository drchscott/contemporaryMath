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
  "body": " Homework   A study was conducted of schools across the U.S. about whether they require school uniforms. Two hundred ninety-six schools gave their response to the question, “Does your school require school uniforms?” State the population and sample.  The U.S. Department of Labor collects information on the average hourly earnings of professional and business services positions. Suppose that you look at 20 years and collect data on the average hourly earnings in those years. State the population and sample.  A person collects the gas prices at 25 gas stations in Phoenix, AZ. State the population and sample.  The Center for Disease Control collects data on the number of children with autism. They collect data on 32,601 children in the state of Arizona, and then look to see how many have autism. State the population and sample.  Determine if the variable is qualitative or quantitative. If quantitative, then also state if the variable is discrete or continuous.  Height of buildings in a town  Eye color of all students at a college  Weight of cars  Number of dogs in a household  Religion of people in a town  Number of fish caught daily20  Determine if the variable is qualitative or quantitative. If quantitative, then also state if the variable is discrete or continuous.  Letter grades of students in a class  Distance a person runs every day  Number of prairie dogs on a parcel of land  Time that a task takes to complete  Gender of a person  Number of cars at a dealership on a given day    A study to estimate the average salary of workers at a university was conducted using the following designs. Categorize the sampling method as a simple random sample, stratified sample, cluster sample, systematic sample, or convenience sample.  Each person who is employed by the university is first divided into groups of administrative professional, classified, faculty, and part-time. Then each person in those groupings is given a number and then random samples are taken inside each grouping.  Each researcher asks the first 40 people he or she encounters on campus what their salary is.  The researchers number all employees, and then start with the 34th person. Then they record the salary of every 10th person after that.  The researchers number all employees, and then use a random number generator to determine which employees they will use.  Each college on campus is given a number. Then five colleges are chosen at random and all employees’ salaries in each college are recorded.    A biologist is looking to see the effect of microgravity on plant growth. The researcher sends some seeds to the International Space Station and has the height of the plants measured on specific days. The researcher also plants the same number of seeds in a laboratory on Earth, using the same lighting, soil, and water conditions, and measures the height of the plants on specific days. Describe the treatment group and the control group.  A study was conducted of Long Beach School District schools regarding how many require school uniforms. In 2006, of the 296 schools questioned, 184 said they required school uniforms. (Gentile \\amp Imberman, 2009) Find the proportion of schools that require a school uniform.  A Center for Disease Control (CDC) study conducted in 2008, found that out of 32,601 children in Arizona, 507 had autism. (CDC, 2012) Find the proportion of children in Arizona who had autism in 2008.  Suppose you want to determine how many students live in a certain dorm at a certain university. One day you go around this dorm and encounter 50 random students. You give each of them a special card that says “I was captured!.” A few days later, you go back and check 40 students. You observe that 15 of those 40 students have the card. Estimate how many students live in this dorm.   "
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
