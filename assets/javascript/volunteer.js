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
  website:"<a href = ' http://marthastable.org/volunteer/' target = '_blank' > website </a>",
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

//Map JS


       src="http://cdn.leafletjs.com/leaflet-0.7/leaflet.js"

   //---------------------Military & Vets-------------------------------------------------------
       var vets = new L.LayerGroup();
       L.marker([41.902002,-71.091712]).addTo(vets).bindPopup('<a href="https://www.guidestar.org/profile/54-2143612" target="_blank">Homes for Our Troops</a><br />Vets'),
       L.marker([38.904121,-77.046102]).addTo(vets).bindPopup('<a href="https://www.guidestar.org/profile/13-1946868" target="_blank">Paralyzed Veterans of America</a><br />Vets');
//-------------------------Youth Development------------------------------------------------------------------------------
       var youth = new L.LayerGroup();
       L.marker([38.892724,-76.943621]).addTo(youth).bindPopup('<a href="https://www.guidestar.org/profile/13-5562976" target="_blank">Boys and Girls Clubs of America</a><br />Youth'),
       L.marker([41.878670,-87.626485]).addTo(youth).bindPopup('<a href="https://www.guidestar.org/profile/23-7235671" target="_blank">Prevent Child Abuse America</a><br />Youth'),
       L.marker([41.172333,-73.228988]).addTo(youth).bindPopup('<a href="https://www.guidestar.org/profile/06-0726487" target="_blank">Save the Children</a><br />Youth'),
       L.marker([40.751130,-73.983600]).addTo(youth).bindPopup('<a href="https://www.guidestar.org/profile/13-4002189" target="_blank">Children Scholarship Fund</a><br />Youth');
//------------------------Health----------------------------------------------------------------------------------
       var health = new L.LayerGroup();
       L.marker([39.051841,-77.114851]).addTo(health).bindPopup('<a href="https://www.guidestar.org/profile/23-7124261" target="_blank">American Kidney Fund</a><br />Health'),
       L.marker([32.928014,-96.822091]).addTo(health).bindPopup('<a href="https://www.guidestar.org/profile/75-1835298" target="_blank">Susan G. Komen Breast Cancer</a><br />Health');
//------------------------Children markers----------------------------------------------------------------------------------
       var child = new L.LayerGroup();
       L.marker([38.904974,-77.041200]).addTo(child).bindPopup('<a href="https://www.guidestar.org/profile/95-4191698" target="_blank">Elizabeth Glaser Pediatric AIDS Foundation</a><br />Children');
//------------------------MENTAL HEALTH MARKERS----------------------------------------------------------------------------------
       var mental = new L.LayerGroup();
       L.marker([40.750762,-73.979376]).addTo(mental).bindPopup('<a href="https://www.guidestar.org/profile/31-1020010" target="_blank">Brain and Behavior Research Foundation</a><br />Mental Health'),
       L.marker([38.872118,-77.103623]).addTo(mental).bindPopup('<a href="https://www.guidestar.org/profile/54-1905826" target="_blank">Treatment Advocacy Center</a><br />Mental Health');
//------------------------Hunger----------------------------------------------------------------------------------
       var hunger = new L.LayerGroup();
       L.marker([38.901626,-77.038186]).addTo(hunger).bindPopup('<a href="https://www.guidestar.org/profile/36-3673599" target="_blank">Feeding America</a><br />Food');
//------------------------ANIMAL MARKERS----------------------------------------------------------------------------------
       var animal = new L.LayerGroup();
       L.marker([40.850288,-73.878611]).addTo(animal).bindPopup('<a href="https://www.guidestar.org/profile/13-1740011" target="_blank">Wildlife Conservation Society</a><br />Animal'),
       L.marker([38.961359,-77.008412]).addTo(animal).bindPopup('<a href="https://www.humanerescuealliance.org/volunteer" target="_blank">Humane Rescue Alliance</a><br />Animal'),
       L.marker([38.913505,-77.048014]).addTo(animal).bindPopup('<a href="https://www.citydogsrescuedc.org/volunteer.html" target="_blank">City Dogs and City Kitties</a><br />Animal'),
       L.marker([38.898220,-77.028195]).addTo(animal).bindPopup('<a href="https://www.guidestar.org/profile/53-0204616" target="_blank">National Wildlife Foundation</a><br />Animal');
//------------------------Environmental MARKERS----------------------------------------------------------------------------------
       var environment = new L.LayerGroup();
       L.marker([40.705260,-74.005515]).addTo(environment).bindPopup('<a href="https://www.guidestar.org/profile/13-4071318" target="_blank">WaterKeepers Alliance</a><br />Environmental'),
       L.marker([40.717103,-74.007019]).addTo(environment).bindPopup('<a href="https://www.guidestar.org/profile/22-3936753" target="_blank">Charity:Water</a><br />Environmental');
//------------------------Arts & Culture----------------------------------------------------------------------------------
       var art = new L.LayerGroup();
       L.marker([38.902866,-77.033934]).addTo(art).bindPopup('<a href="https://www.guidestar.org/profile/52-1996467" target="_blank">Americans for the Arts</a><br />Art/Culture');
//-------------------------International Relief and Development---------------------------------------------------------------------------------
       var dev = new L.LayerGroup();
       L.marker([40.703805,-74.012844]).addTo(dev).bindPopup('<a href="https://www.guidestar.org/profile/13-3327220" target="_blank">Action Against Hunger</a><br />International Relief'),
       L.marker([34.437269,-119.843360]).addTo(dev).bindPopup('<a href="https://www.guidestar.org/profile/95-1831116" target="_blank">Direct Relief</a><br />International Relief');
//---------------------------Food Pantry-------------------------------------------------------------------------------
       var pantry = new L.LayerGroup();
       L.marker([38.955653,-77.002196]).addTo(pantry).bindPopup('<a href="https://www.guidestar.org/profile/52-1648941" target="_blank">Food and Friends</a><br />Food Pantry'),
       L.marker([38.910311,-77.021587]).addTo(pantry).bindPopup('<a href="https://www.guidestar.org/profile/52-1138207" target="_blank">Bread for the City</a><br />Food Pantry'),
       L.marker([38.908844,-77.011420]).addTo(pantry).bindPopup('<a href="https://www.guidestar.org/profile/23-7098123" target="_blank">So Others Might Eat </a><br />Food Pantry'),
       L.marker([38.918507,-77.032383]).addTo(pantry).bindPopup('<a href="https://www.guidestar.org/profile/52-1186071" target="_blank">Marthas Table</a><br />Food Pantry');
//---------------------------Soup Kitchen-------------------------------------------------------------------------------
       var soup = new L.LayerGroup();
       L.marker([38.895459,-77.013354]).addTo(soup).bindPopup('<a href="https://www.guidestar.org/profile/52-1584936" target="_blank">DC Central Kitchen</a><br />Soup Kitchen'),
       L.marker([38.908844,-77.011420]).addTo(soup).bindPopup('<a href="https://www.guidestar.org/profile/23-7098123" target="_blank">So Others Might Eat</a><br />Soup Kitchen'),
       L.marker([38.918507,-77.032383]).addTo(soup).bindPopup('<a href="https://www.guidestar.org/profile/52-1186071" target="_blank">Marthas Table</a><br />Soup Kitchen'),
       L.marker([38.898729,-77.011111]).addTo(soup).bindPopup('<a href="https://www.guidestar.org/profile/53-0218650" target="_blank">Central Union Mission</a><br />Soup Kitchen');
//--------------------------Elders--------------------------------------------------------------------------------
       var elders = new L.LayerGroup();
       L.marker([38.963131,-77.009485]).addTo(elders).bindPopup('<a href="https://www.guidestar.org/profile/53-0204693" target="_blank">Seabury Resources for Aging</a><br />Elders');
//--------------------------Kids--------------------------------------------------------------------------------
       var kids = new L.LayerGroup();
       L.marker([38.879545,-76.995920]).addTo(kids).bindPopup('<a href="http://www.littlelights.org/getinvolved/individual/" target="_blank">Little Lights</a><br />Kids'),
       L.marker([38.933482,-77.035720]).addTo(kids).bindPopup('<a href="https://www.guidestar.org/profile/20-3380456" target="_blank">Homeless Childrens Playtime Project</a><br />Kids');
//--------------------------Mentoring--------------------------------------------------------------------------------
       var mentor = new L.LayerGroup();
       L.marker([38.933482,-77.035720]).addTo(mentor).bindPopup('<a href="https://www.guidestar.org/profile/20-3380456" target="_blank">Homeless Childrens Playtime Project</a><br />Mentoring'),
       L.marker([38.911750,-77.022076]).addTo(mentor).bindPopup('<a href="http://dc127.org/volunteer-forms/" target="_blank">DC 127</a><br />Mentoring'),
       L.marker([38.879545,-76.995920]).addTo(mentor).bindPopup('<a href="http://www.littlelights.org/getinvolved/individual/" target="_blank">Little Lights</a><br />Mentoring');
//--------------------------Homeless Services--------------------------------------------------------------------------------
       var homeless = new L.LayerGroup();
       L.marker([38.898729,-77.011111]).addTo(homeless).bindPopup('<a href="https://www.guidestar.org/profile/53-0218650" target="_blank">Central Union Mission</a><br />Homeless Services'),
       L.marker([39.005589,-77.048756]).addTo(homeless).bindPopup('<a href="https://www.guidestar.org/profile/52-2345144" target="_blank">A Wider Circle</a><br />Homeless Services'),
       L.marker([38.918507,-77.032383]).addTo(homeless).bindPopup('<a href="https://www.guidestar.org/profile/52-1186071" target="_blank">Marthas Table</a><br />Homeless Services'),
       L.marker([38.908844,-77.011420]).addTo(homeless).bindPopup('<a href="https://www.guidestar.org/profile/23-7098123" target="_blank">So Others Might Eat</a><br />Homeless Services'),
       L.marker([38.933482,-77.035720]).addTo(homeless).bindPopup('<a href="https://www.guidestar.org/profile/20-3380456" target="_blank">Homeless Childrens Playtime Project</a><br />Homeless Services');
//--------------------------Farming--------------------------------------------------------------------------------
       var farm = new L.LayerGroup();
       L.marker([38.872232,-76.966264]).addTo(farm).bindPopup('<a href="https://www.guidestar.org/profile/26-4527988" target="_blank">DC Greens</a><br />Farming'),
       L.marker([38.910311,-77.021587]).addTo(farm).bindPopup('<a href="https://www.guidestar.org/profile/52-1138207" target="_blank">Bread for the City</a><br />Farming');
//----------------------------------------------------------------------------------------------------------
       var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>',
           thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>';
       var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
           osmAttrib = '&copy; ' + osmLink + ' Contributors',
           landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
           thunAttrib = '&copy; '+osmLink+' Contributors & '+thunLink;
       var osmMap = L.tileLayer(osmUrl, {attribution: osmAttrib}),
           landMap = L.tileLayer(landUrl, {attribution: thunAttrib});
       var map = L.map('map', {
               layers: [osmMap] // only add one!
           })
           .setView([38.900660, -77.038513], 14);
   var baseLayers = {
           "OSM Mapnik": osmMap,
           "Landscape": landMap
       };
       var overlays = {
           "Military & Vets": vets,
     "Youth Development": youth,
     "Health": health,
     "Children": child,
     "Mental Health": mental,
     "Hunger": hunger,
     "Animal Services": animal,
     "Environmental": environment,
     "Art & Culture": art,
     "International Relief and Development": dev,
     "Food Pantry": pantry,
     "Soup Kitchen": soup,
     "Elders": elders,
     "Kids": kids,
     "Mentoring": mentor,
     "Homeless Services": homeless,
     "Farming": farm
       };
       L.control.layers(baseLayers,overlays).addTo(map);
