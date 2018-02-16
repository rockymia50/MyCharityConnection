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
  "Seabury Resources for Aging <i>6031 Kansas Avenue NW Washington, DC 20011</i> 202-289-5690 <a href='http://marthastable.org/volunteer/'target='_blank'>website</a>",

]
var kids = [
  "Little Lights <i>760 7th Street SE Washington, DC 20003</i> 202-548-4021 <a href='http://www.littlelights.org/getinvolved/individual/'target='_blank'>website</a>",

  "Homeless Children's Playtime Project <i>1525 Newton Street, NW, Washington, D.C. 20010</i> 202-329-4481 <a href='https://www.playtimeproject.org/get-involved/volunteer/'target='_blank'>website</a>",
]
var mentoring = [
  "Homeless Children's Playtime Projecr <i>1525 Newton Street, NW, Washington, D.C. 20010</i> 202-329-4481 <a href='https://www.playtimeproject.org/get-involved/volunteer/'target='_blank'>website</a>",

  "DC127 <i>1616 7th St NW Washington, District of Columbia 20001</i> 202-670-1145 <a href='http://dc127.org/volunteer-forms/'target='_blank'>website</a>",

  "Little Lights <i>760 7th Street SE Washington, DC 20003</i> 202-548-4021 <a href='http://www.littlelights.org/getinvolved/individual/'target='_blank'>website</a>",

]
var homeless = [
  "<strong>Central Union Mission</strong> <i>65 Massachusetts Avenue, NW Washington DC 20001 </i> 202-745-7118  <a href=' https://www.missiondc.org/get-involved/volunteer/?utm_source=google&utm_medium=cpc&utm_term=central%20union%20mission&utm_campaign=sitelinks'target='_blank'>website</a>",

  "A Wider Circle <i>9159 Brookville Road Silver Spring, MD 20910</i> 301-608-3504 <a href='http://awidercircle.org/get-involved/volunteer/'target='_blank'>website</a>",

  "Homeless Children's Playtime Project <i>1525 Newton Street, NW, Washington, D.C. 20010</i> 202-329-4481 <a href='https://www.playtimeproject.org/get-involved/volunteer/'target='_blank'>website</a>",

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
  "Humane Rescue Alliance <i>71 Oglethorpe Street, NW, Washington, DC 20011</i> 202-328-6608, <a href='http://www.humanerescuealliance.org/volunteer'target='_blank'>website</a>",

  "City Dogs and City Kitties <i>2121 Decatur Place NW Unit #3 Washington, DC 20008 </i> 202-567-7364 <a href='https://www.citydogsrescuedc.org/volunteer.html'target='_blank'>website</a>",

]
var farming = [
  "DC Greens <i>2000 P St NW Suite 240 Washington, DC 20036</i> 202-601-9200, <a href='https://www.dcgreens.org/volunteer/'target='_blank'>website</a>",

  "<strong>Bread for the City</strong> <i>1525 7th Street NW Washington, DC 20001 </i> 202-265-2400  <a href=' https://breadforthecity.org/volunteer/'target='_blank'>website</a>",
]

//If food pantry is clicked, this function will run to display all organizations in the foodPantry Array.

$(document).ready(function() {
  $('#foodPantry').val(this.checked);
    $('#foodPantry').change(function() {
      if(this.checked) {
        for (var i = 0; i < foodPantry.length; i++) {
          var newOrgDiv = document.createElement("div");
          newOrgDiv.innerHTML = foodPantry[i];
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
            newOrgDiv.innerHTML = soupKitchen[i];
            array.appendChild(newOrgDiv);
          }
        }
      });
    });


//determine which checkboxes are returning as true

//create array of true checkbox values

//return global variables

//return the arrays of global variables

// each item on array will have information affiliated with it that will return name, address, phone #, link to volunteer page


// Food Pantry: Food and Friends address (link to volunteer page)
