
$( document ).ready(function() {

// <![Donation generator[

var NumberOfWords = 16;

var words = new BuildArray(NumberOfWords)
var wordBox = document.getElementById('WordBox');


//  random words:
var words=["Waterkeeps Alliance","National Wildlife Foundation","Conservation Society","American Kidney Fund","Susan G Komen Breast Cancer","Egapf AIDS","Charity:Water","Brain and Behavior Research Foundation","Boys and Girls Clubs of America","Paraylzed Veteran's of America","Homes for Our Troops","Prevent Child Abuse America","Feeding America","Save the Children","American for the Arts"];


function BuildArray(size) {
    this.length = size
    for (var i = 1; i <= size; i++) {
        this[i] = null
    }
    return this
}


   
    $("#button").click(function (frm) {

        // Generate a random number between 1 and NumberOfWords
  
        var rnd = Math.floor(Math.random() * 16);
        console.log(words[rnd]);
        // Display the word inside the text box
         $("#wordbox").html(words[rnd]);
 

        });
});