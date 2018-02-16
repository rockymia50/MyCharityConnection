// global variables that call an array of organizations
var foodPantry = [
  {"Food and Friends": {
    Address: "219 Riggs Road NE Washington, DC 20011",
    phone: "202-269-2277",
    website: "https://www.foodandfriends.org/volunteer/",
    }
  },
  {"Bread for the City": {
    Address: "1525 7th Street NW Washington, DC 20001",
    phone: "202-265-2400",
    website: "https://breadforthecity.org/volunteer/",
    }
  },
  {"So Others Might Eat": {
    Address: "71 O Street NW",
    phone: "202-123-4567",
    website: "http://some.org/volunteer/",
    }
  },
  {
  "Martha's Table": {
    Address: "2114 14th Street NW Washington, DC 20009",
    phone: "202-328-6608",
    website: "http://marthastable.org/volunteer/",
    }
  },
]

var soupKitchen = [
  {"DC Central Kitchen":{
    Address: "425 2nd Street NW Washington, DC 20001",
    phone: "202-234-0707",
    website: "https://dccentralkitchen.org/volunteer/",
    }
  },
  {"So Others Might Eat": {
    Address: "71 O Street NW",
    phone: "202-123-4567",
    website: "http://some.org/volunteer/",
    }
  },
  {"Martha's Table": {
    Address: "2114 14th Street NW Washington, DC 20009",
    phone: "202-328-6608",
    website: "http://marthastable.org/volunteer/",
    }
  },
  {"Central Union Mission":{
    Address: "65 Massachusetts Avenue, NW Washington DC 20001",
    phone: "202-745-7118",
    website: "https://www.missiondc.org/get-involved/volunteer/?utm_source=google&utm_medium=cpc&utm_term=central%20union%20mission&utm_campaign=sitelinks",
    }
  },
]
var elders = [
  {"Seabury Resources for Aging":{
    Address: "6031 Kansas Avenue NW Washington, DC 20011",
    phone: "202-289-5690",
    website: "http://marthastable.org/volunteer/",
    }
  }
]
var kids = [
  {"Little Lights":{
    Address: "760 7th Street SE Washington, DC 20003",
    phone: "202-548-4021",
    website: "http://www.littlelights.org/getinvolved/individual/",
    }
  },
  {"Homeless Children's Playtime Project":{
    Address: "1525 Newton Street, NW, Washington, D.C. 20010",
    phone: "202-329-4481",
    website: "https://www.playtimeproject.org/get-involved/volunteer/",
    }
  },
]
var mentoring = [
  {"Homeless Children's Playtime Project":{
    Address: "1525 Newton Street, NW, Washington, D.C. 20010",
    phone: "202-329-4481",
    website: "https://www.playtimeproject.org/get-involved/volunteer/",
    }
  },
  {"DC127":{
    Address: " 1616 7th St NW Washington, District of Columbia 20001",
    phone: "202-670-1145",
    website: "http://dc127.org/volunteer-forms/",
    }
  },
  {"Little Lights":{
    Address: "760 7th Street SE Washington, DC 20003",
    phone: "202-548-4021",
    website: "http://www.littlelights.org/getinvolved/individual/",
    }
  }
]
var homeless = [
  {"Central Union Mission":{
    Address: "65 Massachusetts Avenue, NW Washington DC 20001",
    phone: "202-745-7118",
    website: "https://www.missiondc.org/get-involved/volunteer/?utm_source=google&utm_medium=cpc&utm_term=central%20union%20mission&utm_campaign=sitelinks",
    }
  },
  {"A Wider Circle":{
    Address: "9159 Brookville Road Silver Spring, MD 20910",
    phone: "301-608-3504",
    website: "http://awidercircle.org/get-involved/volunteer/",
    }
  },
  {"Homeless Children's Playtime Project":{
    Address: "1525 Newton Street, NW, Washington, D.C. 20010",
    phone: "202-329-4481",
    website: "https://www.playtimeproject.org/get-involved/volunteer/",
    }
  },
  // {"Center for Creative Non-Violence"{
  //   Address: "2114 14th Street NW Washington, DC 20009",
  //   phone: "202-328-6608",
  //   website: "http://marthastable.org/volunteer/",
  //   }
  // },
  {"Martha's Table": {
    Address: "2114 14th Street NW Washington, DC 20009",
    phone: "202-328-6608",
    website: "http://marthastable.org/volunteer/",
    }
  },
  {"So Others Might Eat": {
    Address: "71 O Street NW",
    phone: "202-123-4567",
    website: "http://some.org/volunteer/",
    }
  }
]
var animals = [
  {"Humane Rescue Alliance":{
    Address: "71 Oglethorpe Street, NW, Washington, DC 20011",
    phone: "202-328-6608",
    website: "http://www.humanerescuealliance.org/volunteer",
    }
  },
  {"City Dogs and City Kitties":{
    Address: "2121 Decatur Place NW Unit #3 Washington, DC 20008",
    phone: "202-567-7364",
    website: "https://www.citydogsrescuedc.org/volunteer.html",
    }
  }
]
var farming = [
  {"DC Greens":{
    Address: "2000 P St NW Suite 240 Washington, DC 20036",
    phone: "202-601-9200",
    website: "https://www.dcgreens.org/volunteer/",
    }
  },
  {"Bread for the City": {
    Address: "1525 7th Street NW Washington, DC 20001",
    phone: "202-265-2400",
    website: "https://breadforthecity.org/volunteer/",
    }
  }
]
$(document).ready(function() {
    //set initial state.
    $('#foodPantry').val(this.checked);

    $('#foodPantry').change(function() {
        if(this.checked) {
          $("#array").html("<div> <h2> volunteer at " + foodPantry.address + "</h2></div>");
        }

    });
});


  // console.log(foodPantry);
  // console.log(homeless );
  //
  // console.log(kids );
  // console.log( animals );
  // console.log( mentoring);




//determine which checkboxes are returning as true

//create array of true checkbox values

//return global variables

//return the arrays of global variables

// each item on array will have information affiliated with it that will return name, address, phone #, link to volunteer page


// Food Pantry: Food and Friends address (link to volunteer page)
