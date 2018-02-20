// set up arrays
var animalwildlifeCat = [
    {
        category:"Animal / Wildlife",
        name: "National Wildlife Federation",
        Address:"PO Box 1583, Merrifield, <br> VA 22116-1583",
        Phone:"800-822-9919",
        Website: "<a href='http://www.nwf.org' > Website</a>",
        Donation: "<a href='https://online.nwf.org/site/Donation2?df_id=42395&42395.donation=form1&mfc_pref=T' > Donate Here!</a>",
    },
    {   
        category:"Animal / Wildlife",
        name: "Conservation Society",
        Address:"2300 Southern Boulevard Bronx, <br>  New York 10460",
        Phone:"(718) 220-5100",
        Website: "<a href='https://www.wcs.org/' > Website</a>",
        Donation: "<a href='https://secure.wcs.org/donate/donate-and-help-save-wildlife?_ga=2.197344236.21712484.1518721538-494685728.1518721538' > Donate Here!</a>",
    },
];

var environmentalCat = [
    {
        category:"Environment",
        name: "WaterKeepers Alliance",
        Address:"180 Maiden Lane Suite 603, <br> New York, NY 10038 USA",
        Phone:"(212) 747-0622",
        Website: "<a href='http://www.waterkeeper.org/' > Website</a>",
        Donation: "<a href='https://waterkeeper.org/donate/' > Donate Here!</a>",
    },
    {   
        category:"Environment",
        name: "Conversation Society",
        Address:"2300 Southern Boulevard Bronx, <br> New York 10460",
        Phone:"(718) 220-5100",
        Website: "<a href='https://www.wcs.org/' > Website</a>",
        Donation: "<a href='https://secure.wcs.org/donate/donate-and-help-save-wildlife?_ga=2.197344236.21712484.1518721538-494685728.1518721538' > Donate Here!</a>",
    },
    {   
        category:"Environment",
        name: "Charity:Water",
        Address:"40 Worth Street, Suite 330, <br> New York, NY 10013",
        Phone:"1-646-688-2323",
        Website: "<a href='https://www.charitywater.org/' > Website</a>",
        Donation: "<a href='https://www.charitywater.org/donate' > Donate Here!</a>",
    },
];

var healthCat = [
    {   
        category:"Health",
        name: "American Kidney Fund",
        Address:"11921 Rockville Pike, Suite 300, <br> Rockville, MD 20852",
        Phone:"800-638-8299",
        Website: "<a href='http://www.kidneyfund.org/' > Website</a>",
        Donation: "<a href='https://secure2.convio.net/akf/site/SPageNavigator/Open_Input_100.html?s_src=rkd1707_mainform&s_subsrc=mainform_headeronetime&_ga=2.69670930.383023995.1518721907-1793086592.1518721907' > Donate Here!</a>",
    },
    {   
        category:"Health",
        name: "Elizabeth Glaser Pediatric AIDS Foundation",
        Address:"1140 Connecticut Avenue NW, Suite 200, <br> Washington, DC 20036",
        Phone:"202-296-9165",
        Website: "<a href='http://www.pedaids.org/' > Website</a>",
        Donation: "<a href='https://secure.pedaids.org/page/contribute/donate' > Donate Here!</a>",
    },
    {
        category:"Health",
        name: "Susan G. Komen Breast Cancer",
        Address:"5005 LBJ Freeway, Suite 526, <br> Dallas, TX 75244",
        Phone:"1-877 GO KOMEN",
        Website: "<a href='https://ww5.komen.org/' > Website</a>",
        Donation: "<a href='https://secure.info-komen.org/site/Donation2;jsessionid=00000000.app30117b?df_id=19029&mfc_pref=T&19029.donation=form1&s_src=NavigationHeaderDonateCTA&utm_source=OnpageDonateCTAs&utm_medium=NavigationHeader&utm_campaign=NavigationHeaderDonateCTA&_ga=2.81240213.328876585.1518722011-1749400543.1518722011&NONCE_TOKEN=2075B85FC59D4E9A2933DAB634165A10' > Donate Here!</a>",
    },
];
var educationCat = [
    {
        category: 'Education',
        name: "Save the Children",
        Address:"501 Kings Highway East, Suite 400, <br> Fairfield, CT 06825",
        Phone:"1.800.999.2445",
        Website: "<a href='http://www.savethechildren.org/' > Website</a>",
        Donation: "<a href='https://secure.savethechildren.org/site/c.8rKLIXMGIpI4E/b.8102415/k.1377/Please_Give_Monthly_to_Save_the_Children/apps/ka/sd/donor.asp' > Donate Here!</a>",
    },
    {
        category:"Education",
        name: "Children's Scholarship Fund",
        Address:"8 West 38th Street, 9th Floor <br> New York, NY 10018",
        Phone:"(212) 515-7100",
        Website: "<a href='https://scholarshipfund.org/' > Website</a>",
        Donation: "<a href='https://scholarshipfund.org/fund-scholarships-change-lives/' > Donate Here!</a>",
    },
];
var artscultCat = [
    {
        category: "Arts & Culture",
        name: "Americans for the Arts",
        Address:"1000 Vermont Avenue, NW, 6th Floor, <br> Washington, DC 20005",
        Phone:"202-371-2830",
        Website: "<a href='https://www.americansforthearts.org/' > Website</a>",
        Donation: "<a href='https://www.americansforthearts.org/support-americans-for-the-arts/donate-now' > Donate Here!",
    },
];

var hungerCat = [
    {
        category: "Hunger",
        name: "Feeding America",
        Address:"1627 I Street NW, Suite 1000, <br> Washington, DC 20006",
        Phone:"646-681-4888",
        Website: "<a href='www.feedingamerica.org/' > Website</a>",
        Donation: "<a href='https://secure.feedingamerica.org/site/Donation2;jsessionid=00000000.app220b?df_id=25431&25431.donation=form1&s_onsite_promo=MainNav_Donate&s_src=W182ORGSC&s_referrer=google&s_subsrc=http%3A%2F%2Fwww.feedingamerica.org%2F%3Freferrer%3Dhttps%3A%2F%2Fwww.google.com%2F&_ga=2.152799934.646930700.1518728663-1774150216.1518728663&NONCE_TOKEN=8E7E69FD4B835A3DB9E3DF0F5A09FDF2' > Donate Here!</a>",
    },
    {
        category: "Hunger",
        name: "Action Against Hunger",
        Address:"One Whitehall Street 2nd Floor <br> New York, NY 10004",
        Phone:"212 967-7800",
        Website: "<a href='https://www.actionagainsthunger.org/' > Website</a>",
        Donation: "<a href='https://www.actionagainsthunger.org/' > Donate Here!</a>",
    },

];
var mentalhealthCat = [
    {
        category:"Mental Health",
        name: "Brain and Behavior Research Foundation",
        Address:"90 Park Avenue, 16th Floor, <br> New York, NY 10016",
        Phone:"646-681-4888",
        Website: "<a href='https://www.bbrfoundation.org/' > Website</a>",
        Donation: "<a href='https://donate.bbrfoundation.org/civicrm/contribute/transact?reset=1&id=1' > Donate Here!</a>",
    },
    {
        category:"Mental Health",
        name: "Treatment Advocacy Center",
        Address:"200 North Glebe Road, Suite 801 <br> Arlington, Virginia 22203 ",
        Phone:"(703)294-6001",
        Website: "<a href='http://www.treatmentadvocacycenter.org/i' > Website</a>",
        Donation: "<a href='https://interland3.donorperfect.net/weblink/WebLink.aspx?name=E49040&id=5' > Donate Here!</a>",
    },
];
var youthdevCat = [
    {
        category:"Youth Development",
        name: "Boys and Girls Clubs of America",
        Address:"4103 Benning Road NE, <br> Washington, DC 20019",
        Phone:"202-540-2300",
        Website: "<a href='https://www.bgcgw.org/' > Website</a>",
        Donation: "<a href='https://www.bgcgw.org/donate/' > Donate Here!</a>",
    },

    {
        category:"Youth Development",
        name: "Save the Children",
        Address:"501 Kings Highway East, Suite 400, <br> Fairfield, CT 06825",
        Phone:"1.800.999.2445",
        Website: "<a href='http://www.savethechildren.org/' > Website </a>",
        Donation: "<a href='https://secure.savethechildren.org/site/c.8rKLIXMGIpI4E/b.8102415/k.1377/Please_Give_Monthly_to_Save_the_Children/apps/ka/sd/donor.asp' > Donate Here!</a>",
    },
    {
        category:"Youth Development",
        name: "Prevent Child Abuse America",
        Address:"228 South Wabash Avenue, 10th Floor, <br> Chicago, IL 60604",
        Phone:"312-663-3520",
        Website: "<a href='http://preventchildabuse.org/' > Website</a>",
        Donation: "<a href='https://preventchildabuse.org/donation/' > Donate Here!</a>",
    },
    {
        category:"Youth Development",
        name: "Children's Scholarship Fund",
        Address:"8 West 38th Street, 9th Floor <br> New York, NY 10018",
        Phone:"(212) 515-7100",
        Website: "<a href='https://scholarshipfund.org/' > Website</a>",
        Donation: "<a href='https://scholarshipfund.org/fund-scholarships-change-lives/ > Donate Here!</a>",
    },

];
var irdCat = [
    {
        category:"International Relief and Development",
        name: "Charity:Water",
        Address:"40 Worth Street, Suite 330, <br> New York, NY 10013",
        Phone:"1-646-688-2323",
        Website: "<a href='https://www.charitywater.org/' > Website</a>",
        Donation: "<a href='https://www.charitywater.org/donate' > Donate Here!</a>",
    },
    {
        category: "International Relief and Development",
        name: "Direct Relief",
        Address:"27 S. La Patera Lane, <br> Santa Barbara, CA 93117",
        Phone:"805 964-4767",
        Website: "<a href='https://secure.directrelief.org/' > Website</a>",
        Donation: "<a href='https://secure.directrelief.org/site/Donation2?df_id=2924&mfc_pref=T&2924.donation=form1' > Donate Here!</a>",
    },
    {
        category: "International Relief and Development",
        name: "Action Against Hunger",
        Address:"One Whitehall Street 2nd Floor <br> New York, NY 10004",
        Phone:"212 967-7800",
        Website: "<a href='https://www.actionagainsthunger.org/' > Website</a>",
        Donation: "<a href='https://www.actionagainsthunger.org/' > Donate Here!</a>",
    },
];
var militaryvetCat = [
    {
        category:"Military & Veterans",
        name: "Paralyzed Veteran's of America",
        Address:"801 18th St NW, <br> Washington, DC 20006",
        Phone:"800 424-8200",
        Website: "<a href='https://www.pva.org/' > Website!</a>",
        Donation: "<a href='https://secure.pva.org/default.aspx?tsid=9491&mSource=WEQYYDFDNBTN&_ga=2.148326135.1582987586.1518723397-1319615296.1518723397' > Donate Here!</a>",
    },
    {
        category: "Military & Veterans",
        name: "Homes for Our Troops",
        Address:"6 Main Street Taunton, <br> MA 02780",
        Phone:"866-787-6677",
        Website: "<a href= 'https://www.hfotusa.org/' > Website!</a>",
        Donation: "<a href='https://donatenow.networkforgood.org/HomesforOurTroops' > Donate Here!</a>",
    },
];

// Create funtion to run after radio button is clicked
 
$(document).ready(function() {

//set initial state.
    $('#animalv').val(this.checked);
    $('#animalv').change(function() {
  
    if(this.checked) { 
        $("#results").css("visibility", "visible")
    
        for(var i = 0; i < animalwildlifeCat.length; i++) {
        var h2 = $('<h2>');
        h2.append('<h2>' + animalwildlifeCat[i].name + '</h2>');
        var p = $('<p>');
        p.append('<p>' + animalwildlifeCat[i].category + '</p>');
        p.append('<p>' + animalwildlifeCat[i].Address + '</p>');
        p.append('<p>' + animalwildlifeCat[i].Phone + '</p>');
        p.append('<p>' + animalwildlifeCat[i].Website + '</p>');
        p.append('<p>' + animalwildlifeCat[i].Donation + '</p>');
        $('#results').append(h2);
        $('#results').append(p);
        }
        }
    else {
        $("#results").empty();
        $("#results").css("visibility", "hidden")
    }
    });
    // $("animalv").click(function(){
    //     $("results").animate({
    //         left: '250px',
    //         opacity: '0.5',
    //         height: '150px',
    //         width: '150px'
    //     });
    // }); 

    $('#environmentv').val(this.checked);
    $('#environmentv').change(function() {
    if(this.checked) {
        $("#results1").css("visibility", "visible")

        for(var i = 0; i < environmentalCat.length; i++) {
        var h2 = $('<h2>');
        h2.append('<h2>' + environmentalCat[i].name + '</h2>');
        var p = $('<p>');
        p.append('<p>' + environmentalCat[i].category + '</p>');
        p.append('<p>' + environmentalCat[i].Address + '</p>');
        p.append('<p>' + environmentalCat[i].Phone + '</p>');
        p.append('<p>' + environmentalCat[i].Website + '</p>');
        p.append('<p>' + environmentalCat[i].Donation + '</p>');
        $('#results1').append(h2);
        $('#results1').append(p);
        }
        }
        else {
            $("#results1").empty();
            $("#results1").css("visibility", "hidden")
        }
    });

    $('#healthv').val(this.checked);
    $('#healthv').change(function() {
    if(this.checked) {

        $("#results2").css("visibility", "visible")

        for(var i = 0; i < healthCat.length; i++) {
        var h2 = $('<h2>');
        h2.append('<h2>' + healthCat[i].name + '</h2>');
        var p = $('<p>');
        p.append('<p>' + healthCat[i].category + '</p>');
        p.append('<p>' + healthCat[i].Address + '</p>');
        p.append('<p>' + healthCat[i].Phone + '</p>');
        p.append('<p>' + healthCat[i].Website + '</p>');
        p.append('<p>' + healthCat[i].Donation + '</p>');
        $('#results2').append(h2);
        $('#results2').append(p);

        }
        }
    else {
        $("#results2").empty();
        $("#results2").css("visibility", "hidden")
        }
    });

    $('#educationv').val(this.checked);
    $('#educationv').change(function() {
    if(this.checked) {

        $("#results3").css("visibility", "visible")

        for(var i = 0; i < educationCat.length; i++) {
        var h2 = $('<h2>');
        h2.append('<h2>' + educationCat[i].name + '</h2>');
        var p = $('<p>');
        p.append('<p>' + educationCat[i].category + '</p>');
        p.append('<p>' + educationCat[i].Address + '</p>');
        p.append('<p>' + educationCat[i].Phone + '</p>');
        p.append('<p>' + educationCat[i].Website + '</p>');
        p.append('<p>' + educationCat[i].Donation + '</p>');
        $('#results3').append(h2);
        $('#results3').append(p);
        }
        }
    else {
            $("#results3").empty();
            $("#results3").css("visibility", "hidden")
            }
    });

    $('#artv').val(this.checked);
    $('#artv').change(function() {
    if(this.checked) {

        $("#results4").css("visibility", "visible")

        for(var i = 0; i < artscultCat.length; i++) {
        var h2 = $('<h2>');
        h2.append('<h2>' + artscultCat[i].name + '</h2>');
        var p = $('<p>');
        p.append('<p>' + artscultCat[i].category + '</p>');
        p.append('<p>' + artscultCat[i].Address + '</p>');
        p.append('<p>' + artscultCat[i].Phone + '</p>');
        p.append('<p>' + artscultCat[i].Website + '</p>');
        p.append('<p>' + artscultCat[i].Donation + '</p>');
        $('#results4').append(h2);
        $('#results4').append(p);
        }
        }
    else {
            $("#results4").empty();
            $("#results4").css("visibility", "hidden")
            }
    });

    $('#hungerv').val(this.checked);
    $('#hungerv').change(function() {
    if(this.checked) {

        $("#results5").css("visibility", "visible")

        for(var i = 0; i < hungerCat.length; i++) {
        var h2 = $('<h2>');
        h2.append('<h2>' + hungerCat[i].name + '</h2>');
        var p = $('<p>');
        p.append('<p>' + hungerCat[i].category + '</p>');
        p.append('<p>' + hungerCat[i].Address + '</p>');
        p.append('<p>' + hungerCat[i].Phone + '</p>');
        p.append('<p>' + hungerCat[i].Website + '</p>');
        p.append('<p>' + hungerCat[i].Donation + '</p>');
        $('#results5').append(h2);
        $('#results5').append(p);
        }
        }
    else {
            $("#results5").empty();
            $("#results5").css("visibility", "hidden")
            };
    });

    $('#mentalv').val(this.checked);
    $('#mentalv').change(function() {
    if(this.checked) {

        $("#results6").css("visibility", "visible")

        for(var i = 0; i < mentalhealthCat.length; i++) {
        var h2 = $('<h2>');
        h2.append('<h2>' + mentalhealthCat[i].name + '</h2>');
        var p = $('<p>');
        p.append('<p>' + mentalhealthCat[i].category + '</p>');
        p.append('<p>' + mentalhealthCat[i].Address + '</p>');
        p.append('<p>' + mentalhealthCat[i].Phone + '</p>');
        p.append('<p>' + mentalhealthCat[i].Website + '</p>');
        p.append('<p>' + mentalhealthCat[i].Donation + '</p>');
        $('#results6').append(h2);
        $('#results6').append(p);
        }
        }
    else {
            $("#results6").empty();
            $("#results6").css("visibility", "hidden")
            }
    });

    $('#youthv').val(this.checked);
    $('#youthv').change(function() {
    if(this.checked) {

        $("#results7").css("visibility", "visible")

        for(var i = 0; i < youthdevCat.length; i++) {
        var h2 = $('<h2>');
        h2.append('<h2>' + youthdevCat[i].name + '</h2>');
        var p = $('<p>');
        p.append('<p>' + youthdevCat[i].category + '</p>');
        p.append('<p>' + youthdevCat[i].Address + '</p>');
        p.append('<p>' + youthdevCat[i].Phone + '</p>');
        p.append('<p>' + youthdevCat[i].Website + '</p>');
        p.append('<p>' + youthdevCat[i].Donation + '</p>');
        $('#results7').append(h2);
        $('#results7').append(p);
        }
        }
    else {
            $("#results7").empty(mentalhealthCat);
            $("#results7").css("visibility", "hidden")
            }
    });

    $('#intv').val(this.checked);
    $('#intv').change(function() {
    if(this.checked) {

        $("#results8").css("visibility", "visible")

        for(var i = 0; i < irdCat.length; i++) {
        var h2 = $('<h2>');
        h2.append('<h2>' + irdCat[i].name + '</h2>');
        var p = $('<p>');
        p.append('<p>' + irdCat[i].category + '</p>');
        p.append('<p>' + irdCat[i].Address + '</p>');
        p.append('<p>' + irdCat[i].Phone + '</p>');
        p.append('<p>' + irdCat[i].Website + '</p>');
        p.append('<p>' + irdCat[i].Donation + '</p>');
        $('#results8').append(h2);
        $('#results8').append(p);
        }
        }
    else {
            $("#results8").css("visibility", "hidden")
            $("#results8").empty("#intv");
            }
    });
    
    $('#militaryv').val(this.checked);
    $('#militaryv').change(function() {
    if(this.checked) {

        $("#results9").css("visibility", "visible")

        for(var i = 0; i < militaryvetCat.length; i++) {
        var h2 = $('<h2>');
        h2.append('<h2>' + militaryvetCat[i].name + '</h2>');
        var p = $('<p>');
        p.append('<p>' + militaryvetCat[i].category + '</p>');
        p.append('<p>' + militaryvetCat[i].Address + '</p>');
        p.append('<p>' + militaryvetCat[i].Phone + '</p>');
        p.append('<p>' + militaryvetCat[i].Website + '</p>');
        p.append('<p>' + militaryvetCat[i].Donation + '</p>');
        $('#results9').append(h2);
        $('#results9').append(p);
        }
        }
    else {
            $("#results9").empty(militaryvetCat);
            $("#results9").css("visibility", "hidden")
            }
    });
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
});
