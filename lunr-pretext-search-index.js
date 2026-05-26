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
  "id": "ch-statistics",
  "level": "1",
  "url": "ch-statistics.html",
  "type": "Chapter",
  "number": "1",
  "title": "Statistics",
  "body": " Statistics   Data is all around us. Researchers collect data on the effectiveness of a medication for lowering cholesterol. Pollsters report on the percentage of Americans who support gun control. Economists report on the average salary of college graduates. There are many other areas where data is collected. In order to be able to understand data and how to summarize it, we need to understand statistics. Suppose you want to know the average net worth of a current U.S. Senator. There are 100 Senators, so it is not that hard to collect all 100 values, and then summarize the data. Instead you may want to find the average net worth of all Representatives in the U.S. Congress (there are 435 members of Congress). So even though it will be a little more work, it is not that difficult to find the average net worth of all members. Now suppose you want to find the average net worth of everyone in the United States. This would be very difficult, if not impossible. It would take a great deal of time and money to collect the information in a timely manner before all of the values have changed. So instead of getting the net worth of every American, we have to figure out an easier way to find this information. The net worth is what you want to measure, and is called a variable. The net worth of every American is called the population. What we need to do is collect a smaller part of the population, called a sample. In order to see how this works, let's formalize the definitions.  Variable: Any characteristic that is measured from an object or individual.   "
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
