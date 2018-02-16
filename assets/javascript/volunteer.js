// global variables that call an array of organizations
var foodPantry = [
  "<strong>Food and Friends</strong> <i>219 Riggs Road NE Washington, DC 20011 </i> 202-269-2277  <a href=' https://www.foodandfriends.org/volunteer/'target='_blank'>website</a>",

  "<strong>Bread for the City</strong> <i>1525 7th Street NW Washington, DC 20001 </i> 202-265-2400  <a href=' https://breadforthecity.org/volunteer/'target='_blank'>website</a>",

  "<strong>So Others Might Eat </strong> <i> 71 O Street NW </i> 202-123-4567  <a href='http://some.org/volunteer/'target='_blank'>website</a>",

  "<strong>Martha's Table </strong> <i>2114 14th Street NW Washington, DC 20009 </i> 202-328-6608  <a href=' http://marthastable.org/volunteer/'target='_blank'>website</a>",

]

var soupKitchen = [
  "<strong>DC Central Kitchen</strong>  <i>425 2nd Street NW Washington, DC 20001 </i> 202-234-0707  <a href=' https://dccentralkitchen.org/volunteer/'target='_blank'>website</a>",

  "<strong>So Others Might Eat</strong> <i> 71 O Street NW </i> 202-123-4567 <a href=' http://some.org/volunteer/'target='_blank'>website</a>",

  "<strong>Martha's Table</strong> <i> 2114 14th Street NW Washington, DC 20009</i> 202-328-6608  <a href=' http://marthastable.org/volunteer/'target='_blank'>website</a>",

  "<strong>Central Union Mission</strong> <i>65 Massachusetts Avenue, NW Washington DC 20001 </i> 202-745-7118  <a href=' https://www.missiondc.org/get-involved/volunteer/?utm_source=google&utm_medium=cpc&utm_term=central%20union%20mission&utm_campaign=sitelinks'target='_blank'>website</a>",

]
var elders = [
  "<strong>Seabury Resources for Aging</strong> <i>6031 Kansas Avenue NW Washington, DC 20011</i> 202-289-5690 <a href='http://marthastable.org/volunteer/'target='_blank'>website</a>",

]
var kids = [
  "<strong>Little Lights</strong> <i>760 7th Street SE Washington, DC 20003</i> 202-548-4021 <a href='http://www.littlelights.org/getinvolved/individual/'target='_blank'>website</a>",

  "<strong>Homeless Children's Playtime Project</strong> <i>1525 Newton Street, NW, Washington, D.C. 20010</i> 202-329-4481 <a href='https://www.playtimeproject.org/get-involved/volunteer/'target='_blank'>website</a>",
]
var mentoring = [
  "<strong>Homeless Children's Playtime Project</strong> <i>1525 Newton Street, NW, Washington, D.C. 20010</i> 202-329-4481 <a href='https://www.playtimeproject.org/get-involved/volunteer/'target='_blank'>website</a>",

  "<strong>DC127 </strong><i>1616 7th St NW Washington, District of Columbia 20001</i> 202-670-1145 <a href='http://dc127.org/volunteer-forms/'target='_blank'>website</a>",

  "<strong>Little Lights </strong><i>760 7th Street SE Washington, DC 20003</i> 202-548-4021 <a href='http://www.littlelights.org/getinvolved/individual/'target='_blank'>website</a>",

]
var homeless = [
  "<strong>Central Union Mission</strong> <i>65 Massachusetts Avenue, NW Washington DC 20001 </i> 202-745-7118  <a href=' https://www.missiondc.org/get-involved/volunteer/?utm_source=google&utm_medium=cpc&utm_term=central%20union%20mission&utm_campaign=sitelinks'target='_blank'>website</a>",

  "<strong>A Wider Circle</strong> <i>9159 Brookville Road Silver Spring, MD 20910</i> 301-608-3504 <a href='http://awidercircle.org/get-involved/volunteer/'target='_blank'>website</a>",

  "<strong>Homeless Children's Playtime Project</strong> <i>1525 Newton Street, NW, Washington, D.C. 20010</i> 202-329-4481 <a href='https://www.playtimeproject.org/get-involved/volunteer/'target='_blank'>website</a>",

  // {"Center for Creative Non-Violence"{
  //   Address: "2114 14th Street NW Washington, DC 20009",
  //   phone: "202-328-6608",
  //   website: "http://marthastable.org/volunteer/",
  //   }
  // },
  "<strong>Martha's Table </strong> <i>2114 14th Street NW Washington, DC 20009 </i> 202-328-6608  <a href=' http://marthastable.org/volunteer/'target='_blank'>website</a>",

  "<strong>So Others Might Eat </strong> <i> 71 O Street NW </i> 202-123-4567  <a href='http://some.org/volunteer/'target='_blank'>website</a>",
]
var animals = [
  "<strong>Humane Rescue Alliance</strong> <i>71 Oglethorpe Street, NW, Washington, DC 20011</i> 202-328-6608, <a href='http://www.humanerescuealliance.org/volunteer'target='_blank'>website</a>",

  "<strong>City Dogs and City Kitties</strong> <i>2121 Decatur Place NW Unit #3 Washington, DC 20008 </i> 202-567-7364 <a href='https://www.citydogsrescuedc.org/volunteer.html'target='_blank'>website</a>",

]
var farming = [
  "<strong>DC Greens</strong> <i>2000 P St NW Suite 240 Washington, DC 20036</i> 202-601-9200, <a href='https://www.dcgreens.org/volunteer/'target='_blank'>website</a>",

  "<strong>Bread for the City</strong> <i>1525 7th Street NW Washington, DC 20001 </i> 202-265-2400  <a href=' https://breadforthecity.org/volunteer/'target='_blank'>website</a>",
]

//If food pantry is clicked, this function will run to display all organizations in the foodPantry Array.

$(document).ready(function() {
  $('#foodPantry').val(this.checked);
    $('#foodPantry').change(function() {
      if(this.checked) {
        for (var i = 0; i < foodPantry.length; i++) {
          var newOrgDiv = document.createElement("div");
          newOrgDiv.innerHTML = " Food Pantry: " + foodPantry[i];
          array.appendChild(newOrgDiv);
        }
      }
    });
  });

//If Soup Kitchen is clicked, this function will run to display all organizations in the soupKitchen Array.

$(document).ready(function() {
  $('#soupKitchen').val(this.checked);
    $('#soupKitchen').change(function() {
      if(this.checked) {
        for (var i = 0; i < soupKitchen.length; i++) {
          var newOrgDiv = document.createElement("div");
          newOrgDiv.innerHTML = " Soup Kitchen: " + soupKitchen[i];
          array.appendChild(newOrgDiv);
        }
      }
    });
});

//If Elder Services is clicked, this function will run to display all organizations in the elders Array.

$(document).ready(function() {
  $('#elders').val(this.checked);
    $('#elders').change(function() {
      if(this.checked) {
        for (var i = 0; i < elders.length; i++) {
          var newOrgDiv = document.createElement("div");
          newOrgDiv.innerHTML = " Elder Services: " + elders[i];
          array.appendChild(newOrgDiv);
        }
      }
    });
});

//If Children is clicked, this function will run to display all organizations in the kids Array.

$(document).ready(function() {
  $('#kids').val(this.checked);
    $('#kids').change(function() {
      if(this.checked) {
        for (var i = 0; i < kids.length; i++) {
          var newOrgDiv = document.createElement("div");
          newOrgDiv.innerHTML = " Children: " + kids[i];
          array.appendChild(newOrgDiv);
        }
      }
    });
});

//If Mentoring is clicked, this function will run to display all organizations in the mentoring Array.

$(document).ready(function() {
  $('#mentoring').val(this.checked);
    $('#mentoring').change(function() {
      if(this.checked) {
        for (var i = 0; i < mentoring.length; i++) {
          var newOrgDiv = document.createElement("div");
          newOrgDiv.innerHTML = " Mentoring: " + mentoring[i];
          array.appendChild(newOrgDiv);
        }
      }
    });
});

//If Homeless Services is clicked, this function will run to display all organizations in the homeless Array.

$(document).ready(function() {
  $('#homelessness').val(this.checked);
    $('#homelessness').change(function() {
      if(this.checked) {
        for (var i = 0; i < homeless.length; i++) {
          var newOrgDiv = document.createElement("div");
          newOrgDiv.innerHTML = " Homeless Services: " + homeless[i];
          array.appendChild(newOrgDiv);
        }
      }
    });
});

//If Animal Care is clicked, this function will run to display all organizations in the animals Array.

$(document).ready(function() {
  $('#animals').val(this.checked);
    $('#animals').change(function() {
      if(this.checked) {
        for (var i = 0; i < animals.length; i++) {
          var newOrgDiv = document.createElement("div");
          newOrgDiv.innerHTML = " Animal Care: " + animals[i];
          array.appendChild(newOrgDiv);
        }
      }
    });
});

//If Sustainable Farming is clicked, this function will run to display all organizations in the farming Array.

$(document).ready(function() {
  $('#farming').val(this.checked);
    $('#farming').change(function() {
      if(this.checked) {
        for (var i = 0; i < farming.length; i++) {
          var newOrgDiv = document.createElement("div");
          newOrgDiv.innerHTML = " Farming: " + farming[i];
          array.appendChild(newOrgDiv);
        }
      }
    });
});
