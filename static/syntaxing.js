var subject = document.getElementsByName('subjectSelector').value
const wordCounter = 0
let area=document.querySelectorAll('#editor');
var chosenSubjectKeywords=[];
var chosenColor=[];
var englishKeywords=['Adjective','Adverb','Affix','Agreement','Appositive','Article'];
var mathsKeywords=['Addition','Acute','Binomial','Cartesian','Division','Degrees'];
var historyKeywords=['Archive','Autobiography','Bibliography','Biography','Book Review'];
var chemKeywords=['Acid','Addition','Reaction','Alkaline','Alkane','Alkene','Alkyne'];
var physKeywords=['Angular Frequency','Equilibrium','Momentum','Amplitude','Displacement'];
var bioKeywords=['Abdomen','Abiotic','Algae','Allele','Amniotes','Abiogenesis'];
var techKeywords=['Applique','Aesthetics','Batch','Biodegradable','CAD','Cotton'];
var compKeywords=['App','Analysis','Abstraction','Alpha Testing','Cybersecurity'];
var artKeywords=['Abstract','Artist','Acrylic','Artwork','Crosshatch','Print'];
switch(subject) {
    case maths:
        chosenSubjectKeywords[mathsKeywords];
        chosenColor.push('#52b0e0')
    case english:
        chosenSubjectKeywords[englishKeywords];
        chosenColor.push('#e0535f')
    case history:
        chosenSubjectKeywords[historyKeywords];
        chosenColor.push('#e0b453')
    case chemistry:
        chosenSubjectKeywords[chemKeywords];
        chosenColor.push('#77e053')
    case physics:
        chosenSubjectKeywords[physKeywords];
        chosenColor.push('#53e09b')
    case biology:
        chosenSubjectKeywords[bioKeywords];
        chosenColor.push('#e07c53')
    case technology:
        chosenSubjectKeywords[techKeywords];
        chosenColor.push('#a553e0')
    case compsci:
        chosenSubjectKeywords[compKeywords];
        chosenColor.push('#a553e0')
    case art:
        chosenSubjectKeywords[artKeywords];
        chosenColor.push('#e0d853')
    console.log('lists appended')
}
function pullText() {
    var textarea = document.getElementById('editor');
    text=textarea.value.replace(/\s+/g, ' ').split(' ').filter((e) => e.length > 0);
    console.log(text);
    setInterval(1);
}
function styleText(subject) {
    for (var i=0 < text.length; i++; ){
        word=text[i];
        if (word.indexOf(chosenSubjectKeywords) ){
            word.replace("<span style='color: ",chosenColor,"</span>")
            console.log('replaced')
        } else {
            word.replace(word);
            console.log('not replaced')
        }
    }
}

function getMostFrequent(text) {
    const hashmap = text.reduce( (acc, val) => {
     acc[val] = (acc[val] || 0 ) + 1
     return acc
  },{})
 frequentword=Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b)
 return frequentword
}


var webSearch;
webSearch = new google.search.WebSearch();
webSearch.setSearchCompleteCallback(this, webSearchComplete, [webSearch]);

function webSearchComplete (searcher, searchNum) {
	var contentDiv = document.getElementById('web-content');
	contentDiv.innerHTML = '';
    var results = searcher.results;

    var newResultsDiv = document.createElement('div');
    newResultsDiv.id = 'web-content';
    for (var i = 0; i < results.length; i++) {
      var result = results[i];

	  var resultHTML = '<div>';
      resultHTML += '<a href="' + result.unescapedUrl + '" target="_blank"><b>' +
                        result.titleNoFormatting + '</b></a><br/>' +
                        result.content +
                        '<div/>';
      newResultsDiv.innerHTML += resultHTML;
    }
    contentDiv.appendChild(newResultsDiv);
}

function search(frequentword) {
    setInterval(10);
	webSearch.execute(frequentword);
}

function main() {
    setInterval(10);
    pullText();
    styleText();
}

main()
