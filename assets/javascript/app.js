$(document).ready(function () {

    // <![Donation generator[

    var NumberOfWords = 16;

    var words = new BuildArray(NumberOfWords)
    var wordBox = document.getElementById('WordBox');


    //  random words:
    var words = ["<a href='https://waterkeeper.org/'>Waterkeeps Alliance</a>", "<a href='http://www.nfwf.org/Pages/default.aspx'>National Wildlife Foundation</a>", "<a href='https://www.wcs.org/'<Wildlife Conservation Society</a>", "<a href='http://www.kidneyfund.org/'>American Kidney Fund</a>", "<a href='https://ww5.komen.org/'>Susan G Komen Breast Cancer</a>", "<a href='http://www.pedaids.org/'>Elizabeth Glaser Pediatric AIDS Foundation</a>", "<a href='https://www.charitywater.org/'>Charity:Water</a>", "<a href='https://www.bbrfoundation.org/'>Brain and Behavior Research Foundation</a>", "<a href='https://www.bgca.org/'>Boys and Girls Clubs of America</a>", "<a href='https://www.pva.org/'>Paraylzed Veteran's of America</a>", "<a href='https://www.hfotusa.org/'>Homes for Our Troops</a>", "<a href='http://preventchildabuse.org/'>Prevent Child Abuse America</a>", "<a href='http://www.feedingamerica.org/'>Feeding America</a>", "<a href='http://www.savethechildren.org/'>Save the Children</a>", 
    "<a href='https://www.americansforthearts.org/'>American for the Arts</a>"];


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


// Slideshow auto animations

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 3000); // Change image every 3 seconds
}
