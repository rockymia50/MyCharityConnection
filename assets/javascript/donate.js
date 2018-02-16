// set up arrays

var animalwildlifeCat = [
    {"National Wildlife Foundation":{
        Address:"PO Box 1583, Merrifield, VA 22116-1583",
        Phone:"800-822-9919",
        Website: "http://www.nwf.org",
        Donationp: "https://online.nwf.org/site/Donation2?df_id=42395&42395.donation=form1&mfc_pref=T",
    }},
    {"Conservation Society":{
        Address:"2300 Southern Boulevard Bronx, New York 10460",
        Phone:"(718) 220-5100",
        Website: "https://www.wcs.org/",
        Donationp: "https://secure.wcs.org/donate/donate-and-help-save-wildlife?_ga=2.197344236.21712484.1518721538-494685728.1518721538",
    }},
];

var environmentalCat = [
    {"WaterKeepers Alliance":{
        Address:"180 Maiden Lane Suite 603, New York, NY 10038 USA",
        Phone:"(212) 747-0622",
        Website: "http://www.waterkeeper.org/",
        Donationp: "https://waterkeeper.org/donate/",
    }},
    {"Conversation Society":{
        Address:"2300 Southern Boulevard Bronx, New York 10460",
        Phone:"(718) 220-5100",
        Website: "https://www.wcs.org/",
        Donationp: "https://secure.wcs.org/donate/donate-and-help-save-wildlife?_ga=2.197344236.21712484.1518721538-494685728.1518721538",
    }},
    {"Charity:Water":{
        Address:"40 Worth Street, Suite 330, New York, NY 10013",
        Phone:"1-646-688-2323",
        Website: "https://www.charitywater.org/",
        Donationp: "https://www.charitywater.org/donate",
    }},
];

var healthCat = [
    {"American Kidney Fund":{
        Address:"11921 Rockville Pike, Suite 300, Rockville, MD 20852",
        Phone:"800-638-8299",
        Website: "http://www.kidneyfund.org/",
        Donationp: "https://secure2.convio.net/akf/site/SPageNavigator/Open_Input_100.html?s_src=rkd1707_mainform&s_subsrc=mainform_headeronetime&_ga=2.69670930.383023995.1518721907-1793086592.1518721907",
    }},
    {"Elizabeth Glaser Pediatric AIDS Foundation":{
        Address:"1140 Connecticut Avenue NW, Suite 200, Washington, DC 20036",
        Phone:"202-296-9165",
        Website: "http://www.pedaids.org/",
        Donationp: "https://secure.pedaids.org/page/contribute/donate",
    }},
    {"Susan G. Komen Breast Cancer":{
        Address:"5005 LBJ Freeway, Suite 526, Dallas, TX 75244",
        Phone:"1-877 GO KOMEN",
        Website: "https://ww5.komen.org/",
        Donationp: "https://secure.info-komen.org/site/Donation2;jsessionid=00000000.app30117b?df_id=19029&mfc_pref=T&19029.donation=form1&s_src=NavigationHeaderDonateCTA&utm_source=OnpageDonateCTAs&utm_medium=NavigationHeader&utm_campaign=NavigationHeaderDonateCTA&_ga=2.81240213.328876585.1518722011-1749400543.1518722011&NONCE_TOKEN=2075B85FC59D4E9A2933DAB634165A10",
    }},
];
var educationCat = [
    {"Save the Children":{
        Address:"501 Kings Highway East, Suite 400, Fairfield, CT 06825",
        Phone:"1.800.999.2445",
        Website: "http://www.savethechildren.org/",
        Donationp: "https://secure.savethechildren.org/site/c.8rKLIXMGIpI4E/b.8102415/k.1377/Please_Give_Monthly_to_Save_the_Children/apps/ka/sd/donor.asp",
    }},
];
var artscultCat = [
    {"Americans for the Arts":{
        Address:"501 Kings Highway East, Suite 400, Fairfield, CT 06825",
        Phone:"202-371-2830",
        Website: "https://www.americansforthearts.org/",
        Donationp: "https://www.americansforthearts.org/support-americans-for-the-arts/donate-now",
    }},
];

var hungerCat = [
    {"Feeding America":{
        Address:"Feeding America, 1627 I Street NW, Suite 1000, Washington, DC 20006",
        Phone:"646-681-4888",
        Website: "www.feedingamerica.org/",
        Donationp: "https://secure.feedingamerica.org/site/Donation2;jsessionid=00000000.app220b?df_id=25431&25431.donation=form1&s_onsite_promo=MainNav_Donate&s_src=W182ORGSC&s_referrer=google&s_subsrc=http%3A%2F%2Fwww.feedingamerica.org%2F%3Freferrer%3Dhttps%3A%2F%2Fwww.google.com%2F&_ga=2.152799934.646930700.1518728663-1774150216.1518728663&NONCE_TOKEN=8E7E69FD4B835A3DB9E3DF0F5A09FDF2",
    }}

];
var mentalhealthCat = [
    {"Brain and Behavior Research Foundation":{
        Address:"90 Park Avenue, 16th Floor, New York, NY 10016",
        Phone:"646-681-4888",
        Website: "https://www.bbrfoundation.org/",
        Donationp: "https://donate.bbrfoundation.org/civicrm/contribute/transact?reset=1&id=1",
    }}
];
var youthdevCat = [
    {"Boys and Girls Clubs of America":{
        Address:"4103 Benning Road NE, Washington, DC 20019",
        Phone:"202-540-2300",
        Website: "https://www.bgcgw.org/",
        Donationp: "https://www.bgcgw.org/donate/",
    }},
    {"Save the Children":{
        Address:"501 Kings Highway East, Suite 400, Fairfield, CT 06825",
        Phone:"1.800.999.2445",
        Website: "http://www.savethechildren.org/",
        Donationp: "https://secure.savethechildren.org/site/c.8rKLIXMGIpI4E/b.8102415/k.1377/Please_Give_Monthly_to_Save_the_Children/apps/ka/sd/donor.asp",
    }},
    {"Prevent Child Abuse America":{
        Address:"",
        Phone:"",
        Website: "http://preventchildabuse.org/",
        Donationp: "https://preventchildabuse.org/donation/",
    }},

];
var irdCat = [
    {"Charity:Water":{
        Address:"40 Worth Street, Suite 330, New York, NY 10013",
        Phone:"1-646-688-2323",
        Website: "https://www.charitywater.org/",
        Donationp: "https://www.charitywater.org/donate",
    }},
];
var militaryvetCat = [
    {"Paralyzed Veteran's of America":{
        Address:"801 18th St NW, Washington, DC 20006",
        Phone:"(800) 424-8200",
        Website: "https://www.pva.org/",
        Donationp: "https://secure.pva.org/default.aspx?tsid=9491&mSource=WEQYYDFDNBTN&_ga=2.148326135.1582987586.1518723397-1319615296.1518723397",
    }},
    {"Homes for Our Troops":{
        Address:"6 Main Street Taunton, MA 02780",
        Phone:"866-787-6677",
        Website: "https://www.hfotusa.org/",
        Donationp: "https://donatenow.networkforgood.org/HomesforOurTroops",
    }},
];

// Create funtion to run after radio button is clicked
$(document).ready(function() {
//set initial state.
    $('#animalv').val(this.checked);

   $('#animalv').change(function() {
       if(this.checked) {
         console.log(animalwildliifeCat);
       }  
   });
});
