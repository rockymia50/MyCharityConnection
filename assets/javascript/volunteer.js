// global variables that call an array of organizations
var foodPantry = [
  {
  name: "<strong>Food and Friends</strong>",
  category: "Food Pantry",
  address: "219 Riggs Road NE <br> Washington, DC 20011",
  phone: "202-269-2277",
  website: "<a href=' https://www.foodandfriends.org/volunteer/'target='_blank'>website</a>",
  },

  {
  name: "<strong>Bread for the City</strong>",
  category: "Food Pantry",
  address: "<i>1525 7th Street NW <br> Washington, DC 20001 </i>",
  phone: "202-265-2400",
  website: "<a href=' https://breadforthecity.org/volunteer/'target='_blank'>website</a>",
  },

  {
  name: "<strong>So Others Might Eat </strong>",
  category: "Food Pantry",
  address: " <i> 71 O Street NW <br> Washington, DC 20001 </i>",
  phone: "202-123-4567",
  website: "<a href='http://some.org/volunteer/'target='_blank'>website</a>",
  },

  {
  name: "<strong>Martha's Table </strong>",
  category: "Food Pantry",
  address: "<i>2114 14th Street NW <br> Washington, DC 20009 </i>",
  phone: "202-328-6608",
  website: "<a href=' http://marthastable.org/volunteer/'target='_blank'>website</a>",
  },

];

var soupKitchen = [
  {
  name: "<strong>DC Central Kitchen</strong>",
  category: "Soup Kitchen",
  address: "<i>425 2nd Street NW <br> Washington, DC 20001 </i>",
  phone: "202-234-0707",
  website: "<a href=' https://dccentralkitchen.org/volunteer/'target='_blank'>website</a>",
  },
  {
  name: "<strong>So Others Might Eat</strong>",
  category: "Soup Kitchen",
  address: "<i> 71 O Street NW <br> Washington, DC 20001 </i>",
  phone: "202-123-4567",
  website: "<a href=' http://some.org/volunteer/'target='_blank'>website</a>",
  },

  {
  name: "<strong>Martha's Table</strong>",
  category: "Soup Kitchen",
  address: "<i > 2114 14 th Street NW <br> Washington, DC 20009 </i>",
  phone:"202 - 328 - 6608",
  website:"<a href = ' http://marthastable.org/volunteer/' target = '_blank' > website < /a>",
  },
  {
  name:"<strong>Central Union Mission</strong>",
  category: "Soup Kitchen",
  address: "<i>65 Massachusetts Avenue <br> NW Washington DC 20001 </i>",
  phone:"202-745-7118",
  website:"<a href='https://www.missiondc.org/get-involved/volunteer/?utm_source=google&utm_medium=cpc&utm_term=central%20union%20mission&utm_campaign=sitelinks'target='_blank'>website</a>",
  },
];
var elders = [
  {
  name:"<strong>Seabury Resources for Aging</strong>",
  category: "Elder Services",
  address: "<i>6031 Kansas Avenue NW <br> Washington, DC 20011</i>",
  phone:"202-289-5690",
  website:"<a href='http://marthastable.org/volunteer/'target='_blank'>website</a>",
  },
];
var kids = [
  {
  name:"<strong>Little Lights</strong>",
  category: "Children",
  address: "<i>760 7th Street SE <br> Washington, DC 20003</i>",
  phone:"202-548-4021",
  website:"<a href='http://www.littlelights.org/getinvolved/individual/'target='_blank'>website</a>",
  },
  {
  name:      "<strong>Homeless Children's Playtime Project</strong>",
  category: "Children",
  address: "<i>1525 Newton Street, NW <br> Washington, D.C. 20010</i>",
  phone:"202-329-4481",
  website:"<a href='https://www.playtimeproject.org/get-involved/volunteer/'target='_blank'>website</a>",
  },
];
var mentoring = [
  {
  name:"<strong>Homeless Children's Playtime Project</strong>",
  category: "Mentoring",
  address: "<i>1525 Newton Street, NW <br> Washington, D.C. 20010</i>",
  phone:"202-329-4481",
  website:"<a href='https://www.playtimeproject.org/get-involved/volunteer/'target='_blank'>website</a>",
  },
  {
  name:"<strong>DC127 </strong>",
  category: "Mentoring",
  address: "<i>1616 7th St NW <br> Washington, District of Columbia 20001</i>",
  phone:"202-670-1145",
  website:"<a href='http://dc127.org/volunteer-forms/'target='_blank'>website</a>",
  },
  {
  name:"<strong>Little Lights </strong>",
  category: "Mentoring",
  address:"<i>760 7th Street SE <br> Washington, DC 20003</i>",
  phone:"202-548-4021",
  website:"<a href='http://www.littlelights.org/getinvolved/individual/'target='_blank'>website</a>",
  },
];
var homeless = [
  {
  name:"<strong>Central Union Mission</strong>",
  category: "Homeless Services",
  address: "<i>65 Massachusetts Avenue <br> NW Washington DC 20001 </i>",
  phone:"202-745-7118",
  website:"<a href=' https://www.missiondc.org/get-involved/volunteer/?utm_source=google&utm_medium=cpc&utm_term=central%20union%20mission&utm_campaign=sitelinks'target='_blank'>website</a>",
  },
  {
  name:"<strong>A Wider Circle</strong>",
  category: "Homeless Services",
  address: "<i>9159 Brookville Road <br> Silver Spring, MD 20910</i>",
  phone:"301-608-3504",
  website:"<a href='http://awidercircle.org/get-involved/volunteer/'target='_blank'>website</a>",
  },
  {
  name:      "<strong>Homeless Children's Playtime Project</strong>",
  category: "Homeless Services",
  address: "<i>1525 Newton Street NW <br> Washington, D.C. 20010</i>",
  phone:"202-329-4481",
  website:"<a href='https://www.playtimeproject.org/get-involved/volunteer/'target='_blank'>website</a>",
  },
  // {"Center for Creative Non-Violence"{
  //   Address: "2114 14th Street NW Washington, DC 20009",
  //   phone: "202-328-6608",
  //   website: "http://marthastable.org/volunteer/",
  //   }
  // },
  {
  name:"<strong>Martha's Table </strong>",
  category: "Homeless Services",
  address: "<i>2114 14th Street NW <br> Washington, DC 20009 </i>",
  phone:"202-328-6608",
  website:"<a href=' http://marthastable.org/volunteer/'target='_blank'>website</a>",
  },
  {
  name:"<strong>So Others Might Eat </strong>",
  category: "Homeless Services",
  address: "<i> 71 O Street NW <br> Washington, DC 20001 </i>",
  phone:"202-123-4567",
  website:"<a href='http://some.org/volunteer/'target='_blank'>website</a>",
  },
];
var animals = [
  {
  name:"<strong>Humane Rescue Alliance</strong>",
  category: "Animal Care",
  address: "<i>71 Oglethorpe Street, NW <br> Washington, DC 20011</i>",
  phone:"202-328-6608",
  website:"<a href='http://www.humanerescuealliance.org/volunteer'target='_blank'>website</a>",
  },
  {
  name:"<strong>City Dogs and City Kitties</strong>",
  category: "Animal Care",
  address: "<i>2121 Decatur Place NW Unit #3 <br> Washington, DC 20008 </i>",
  phone:"202-567-7364",
  website:"<a href='https://www.citydogsrescuedc.org/volunteer.html'target='_blank'>website</a>",
  },
]
var farming = [
  {
  name:"<strong>DC Greens</strong>",
  category: "Farming",
  address: "<i>2000 P St NW Suite 240 <br> Washington, DC 20036</i>",
  phone:"202-601-9200",
  website:"<a href='https://www.dcgreens.org/volunteer/'target='_blank'>website</a>",
  },
  {
  name:"<strong>Bread for the City</strong>",
  category: "Farming",
  address: "<i>1525 7th Street NW <br> Washington, DC 20001 </i>",
  phone:"202-265-2400",
  website:"<a href=' https://breadforthecity.org/volunteer/'target='_blank'>website</a>",
  },
];

//If food pantry is clicked, this function will run to display all organizations in the foodPantry Array.


$('#foodPantry').val(this.checked);
  $('#foodPantry').change(function() {
    if (this.checked) {
      $("#array1").css("visibility", "visible")
      for (var i = 0; i < foodPantry.length; i++) {
        var h2 = $('<h2>');
          h2.append('<h2>' + foodPantry[i].name + '</h2>');
        var p = $('<p>');
          p.append('<p>' + foodPantry[i].category + '</p>');
          p.append('<p>' + foodPantry[i].address + '</p>');
          p.append('<p>' + foodPantry[i].phone + '</p>');
          p.append('<p>' + foodPantry[i].website + '</p>');
        $('#array1').append(h2);
        $('#array1').append(p);
      }
    }
    else {
      $("#array1").empty();
      $("#array1").css("visibility", "hidden")
    }
  });

//If Soup Kitchen is clicked, this function will run to display all organizations in the soupKitchen Array.

$('#soupKitchen').val(this.checked);
$('#soupKitchen').change(function() {
  if (this.checked) {
      $("#array2").css("visibility", "visible")
    for (var i = 0; i < soupKitchen.length; i++) {
      var h2 = $('<h2>');
        h2.append('<h2>' + soupKitchen[i].name + '</h2>');
      var p = $('<p>');
        p.append('<p>' + soupKitchen[i].category + '</p>');
        p.append('<p>' + soupKitchen[i].address + '</p>');
        p.append('<p>' + soupKitchen[i].phone + '</p>');
        p.append('<p>' + soupKitchen[i].website + '</p>');
      $('#array2').append(h2);
      $('#array2').append(p);
    }
  }
  else {
    $("#array2").empty();
    $("#array2").css("visibility", "hidden")
  }
});

// //If Elder Services is clicked, this function will run to display all organizations in the elders Array.
//

$('#elders').val(this.checked);
$('#elders').change(function() {
  if (this.checked) {
      $("#array3").css("visibility", "visible")
    for (var i = 0; i < elders.length; i++) {
      var h2 = $('<h2>');
        h2.append('<h2>' + elders[i].name + '</h2>');
      var p = $('<p>');
        p.append('<p>' + elders[i].category + '</p>');
        p.append('<p>' + elders[i].address + '</p>');
        p.append('<p>' + elders[i].phone + '</p>');
        p.append('<p>' + elders[i].website + '</p>');
      $('#array3').append(h2);
      $('#array3').append(p);
    }
  }
  else {
    $("#array3").empty();
    $("#array3").css("visibility", "hidden")
  }
});
// //If Children is clicked, this function will run to display all organizations in the kids Array.
//

$('#kids').val(this.checked);
$('#kids').change(function() {
  if (this.checked) {
      $("#array4").css("visibility", "visible")
    for (var i = 0; i < kids.length; i++) {
      var h2 = $('<h2>');
        h2.append('<h2>' + kids[i].name + '</h2>');
      var p = $('<p>');
        p.append('<p>' + kids[i].category + '</p>');
        p.append('<p>' + kids[i].address + '</p>');
        p.append('<p>' + kids[i].phone + '</p>');
        p.append('<p>' + kids[i].website + '</p>');
      $('#array4').append(h2);
      $('#array4').append(p);
    }
  }
  else {
    $("#array4").empty();
    $("#array4").css("visibility", "hidden")
  }
});
// //If Mentoring is clicked, this function will run to display all organizations in the mentoring Array.
//

$('#mentoring').val(this.checked);
$('#mentoring').change(function() {
  if (this.checked) {
      $("#array5").css("visibility", "visible")
    for (var i = 0; i < mentoring.length; i++) {
      var h2 = $('<h2>');
        h2.append('<h2>' + mentoring[i].name + '</h2>');
      var p = $('<p>');
        p.append('<p>' + mentoring[i].category + '</p>');
        p.append('<p>' + mentoring[i].address + '</p>');
        p.append('<p>' + mentoring[i].phone + '</p>');
        p.append('<p>' + mentoring[i].website + '</p>');
      $('#array5').append(h2);
      $('#array5').append(p);
    }
  }
  else {
    $("#array5").empty();
    $("#array5").css("visibility", "hidden")
  }
});
// //If Homeless Services is clicked, this function will run to display all organizations in the homeless Array.

$('#homeless').val(this.checked);
$('#homeless').change(function() {
  if (this.checked) {
      $("#array6").css("visibility", "visible")
    for (var i = 0; i < mentoring.length; i++) {
      var h2 = $('<h2>');
        h2.append('<h2>' + homeless[i].name + '</h2>');
      var p = $('<p>');
        p.append('<p>' + homeless[i].category + '</p>');
        p.append('<p>' + homeless[i].address + '</p>');
        p.append('<p>' + homeless[i].phone + '</p>');
        p.append('<p>' + homeless[i].website + '</p>');
      $('#array6').append(h2);
      $('#array6').append(p);
    }
  }
  else {
  $("#array6").empty();
  $("#array6").css("visibility", "hidden")
  }
});
// //If Animal Care is clicked, this function will run to display all organizations in the animals Array.

$('#animals').val(this.checked);
$('#animals').change(function() {
  if (this.checked) {
    $("#array7").css("visibility", "visible")
    for (var i = 0; i < mentoring.length; i++) {
      var h2 = $('<h2>');
        h2.append('<h2>' + animals[i].name + '</h2>');
      var p = $('<p>');
        p.append('<p>' + animals[i].category + '</p>');
        p.append('<p>' + animals[i].address + '</p>');
        p.append('<p>' + animals[i].phone + '</p>');
        p.append('<p>' + animals[i].website + '</p>');
      $('#array7').append(h2);
      $('#array7').append(p);
    }
  }
  else {
    $("#array7").empty();
    $("#array7").css("visibility", "hidden")
  }
});
// //If Sustainable Farming is clicked, this function will run to display all organizations in the farming Array.
//

$('#farming').val(this.checked);
$('#farming').change(function() {
  if (this.checked) {
      $("#array8").css("visibility", "visible")
    for (var i = 0; i < mentoring.length; i++) {
      var h2 = $('<h2>');
        h2.append('<h2>' + farming[i].name + '</h2>');
      var p = $('<p>');
        p.append('<p>' + farming[i].category + '</p>');
        p.append('<p>' + farming[i].address + '</p>');
        p.append('<p>' + farming[i].phone + '</p>');
        p.append('<p>' + farming[i].website + '</p>');
      $('#array8').append(h2);
      $('#array8').append(p);
    }
  }
  else {
    $("#array8").empty();
    $("#array8").css("visibility", "hidden")
  }
});
