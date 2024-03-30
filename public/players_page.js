var myChart;
var chartDefaultOption = "bar";
var chartDefaultOption2 = "Top NBA Players of 2023 [Total Career Points]";
var arrayofSeasonPoints = [];
var arrayOfPlayers = ['Stephen Curry', 'James Harden', 'Kevin Durant', 'Kyle Anderson', 'Kyrie Irving'];
var arrayOfFirstNames = [];
var arrayOfLastNames = [];
var arrayOfIDs = [];
var arrayOfWeights = [];
var seasonYear;
const options = [
  "Juhann Begarin",
  "Jaylen Brown",
  "Kris Dunn",
  "Carsen Edwards",
  "Tacko Fall",
  "Bruno Fernando",
  "Al Horford",
  "Enes Kanter",
  "Luke Kornet",
  "Romeo Langford",
  "Aaron Nesmith",
  "Jabari Parker",
  "Payton Pritchard",
  "Josh Richardson",
  "Dennis Schroder",
  "Marcus Smart",
  "Jayson Tatum",
  "Grant Williams",
  "Robert Williams III",
  "LaMarcus Aldridge",
  "DeAndre' Bembry",
  "Bruce Brown",
  "Jevon Carter",
  "Nicolas Claxton",
  "Sekou Doumbouya",
  "Kevin Durant",
  "Kessler Edwards",
  "RaiQuan Gray",
  "Blake Griffin",
  "James Harden",
  "Joe Harris",
  "Kyrie Irving",
  "Mike James",
  "Alize Johnson",
  "James Johnson",
  "Tyler Johnson",
  "Timothe Luwawu-Cabarrot",
  "Patty Mills",
  "Paul Millsap",
  "Jahlil Okafor",
  "Reggie Perry",
  "Day'Ron Sharpe",
  "Cameron Thomas",
  "Marcus Zegarowski",
  "Dwayne Bacon",
  "RJ Barrett",
  "Alec Burks",
  "Evan Fournier",
  "Taj Gibson",
  "Quentin Grimes",
  "Jared Harper",
  "Kevin Knox II",
  "Miles McBride",
  "Nerlens Noel",
  "Frank Ntilikina",
  "Norvel Pelle",
  "Theo Pinson",
  "Immanuel Quickley",
  "Julius Randle",
  "Mitchell Robinson",
  "Derrick Rose",
  "Jericho Sims",
  "Obi Toppin",
  "Luca Vildoza",
  "Kemba Walker",
  "Charles Bassey",
  "Gary Clark",
  "Seth Curry",
  "Andre Drummond",
  "Joel Embiid",
  "Danny Green",
  "Tobias Harris",
  "Aaron Henry",
  "Isaiah Joe",
  "Furkan Korkmaz",
  "Tyrese Maxey",
  "Shake Milton",
  "Georges Niang",
  "Filip Petrusev",
  "Paul Reed",
  "Grant Riller",
  "Mike Scott",
  "Ben Simmons",
  "Jaden Springer",
  "Matisse Thybulle",
  "Precious Achiuwa",
  "OG Anunoby",
  "Dalano Banton",
  "Scottie Barnes",
  "Khem Birch",
  "Isaac Bonga",
  "Chris Boucher",
  "Sam Dekker",
  "Goran Dragic",
  "Malachi Flynn",
  "Freddie Gillespie",
  "David Johnson",
  "Stanley Johnson",
  "Pascal Siakam",
  "Gary Trent Jr.",
  "Fred VanVleet",
  "Yuta Watanabe",
  "Ryan Arcidiacono",
  "Lonzo Ball",
  "Tony Bradley",
  "Troy Brown Jr.",
  "Alex Caruso",
  "DeMar DeRozan",
  "Ayo Dosunmu",
  "Devon Dotson",
  "Cristiano Felicio",
  "Javonte Green",
  "Derrick Jones Jr.",
  "Zach LaVine",
  "Adam Mokoka",
  "Denzel Valentine",
  "Nikola Vucevic",
  "Coby White",
  "Patrick Williams",
  "Jarrett Allen",
  "Damyean Dotson",
  "Darius Garland",
  "Mfiondu Kabengele",
  "Kevin Love",
  "Lauri Markkanen",
  "Evan Mobley",
  "Isaac Okoro",
  "Cedi Osman",
  "Ricky Rubio",
  "Collin Sexton",
  "Lamar Stevens",
  "Brodric Thomas",
  "Dean Wade",
  "Dylan Windler",
  "Saddiq Bey",
  "Cade Cunningham",
  "Hamidou Diallo",
  "Luka Garza",
  "Jerami Grant",
  "Killian Hayes",
  "Frank Jackson",
  "Josh Jackson",
  "Cory Joseph",
  "Balsa Koprivica",
  "Saben Lee",
  "Isaiah Livers",
  "Trey Lyles",
  "Rodney McGruder",
  "Kelly Olynyk",
  "Chris Smith",
  "Dennis Smith Jr.",
  "Isaiah Stewart",
  "Goga Bitadze",
  "Oshae Brissett",
  "Malcolm Brogdon",
  "Torrey Craig",
  "Chris Duarte",
  "Justin Holiday",
  "Isaiah Jackson",
  "DeJon Jarreau",
  "Jeremy Lamb",
  "Caris LeVert",
  "Kelan Martin",
  "T.J. McConnell",
  "Domantas Saboni",
  "JaKarr Sampson",
  "Cassius Stanley",
  "Edmond Sumner",
  "Myles Turner",
  "T.J. Warren",
  "Grayson Allen",
  "Giannis Antetokounmpo",
  "Thanasis Antetokounmpo",
  "Elijah Bryant",
  "Pat Connaughton",
  "Donte DiVincenzo",
  "Mamadi Diakite",
  "George Hill",
  "Jrue Holiday",
  "Rodney Hood",
  "Justin Jackson",
  "Rodions Kurucs",
  "Brook Lopez",
  "Sandro Mamukelashvili",
  "Khris Middleton",
  "Jordan Nwora",
  "Semi Ojeleye",
  "Bobby Portis",
  "Jeff Teague",
  "Axel Toupane",
  "Bogdan Bogdanovic",
  "Clint Capela",
  "John Collins",
  "Sharife Cooper",
  "Gorgui Dieng",
  "Danilo Gallinari",
  "Brandon Goodwin",
  "Solomon Hill",
  "Kevin Huerter",
  "De'Andre Hunter",
  "Jalen Johnson",
  "Skylar Mays",
  "Onyeka Okongwu",
  "Cam Reddish",
  "Lou Williams",
  "Delon Wright",
  "Trae Young",
  "LaMelo Ball",
  "Bismack Biyombo",
  "James Bouknight",
  "Miles Bridges",
  "Vernon Carey Jr.",
  "Nate Darling",
  "Gordon Hayward",
  "Wes Iwundu",
  "Kai Jones",
  "Scottie Lewis",
  "Caleb Martin",
  "Cody Martin",
  "Jalen McDaniels",
  "Kelly Oubre Jr.",
  "Mason Plumlee",
  "Nick Richards",
  "Terry Rozier",
  "Ish Smith",
  "JT Thor",
  "Brad Wanamaker",
  "P.J. Washington",
  "Bam Adebayo",
  "Jimmy Butler",
  "Dewayne Dedmon",
  "Marcus Garrett",
  "Udonis Haslem",
  "Tyler Herro",
  "Kyle Lowry",
  "Markieff Morris",
  "RJ Nembhard",
  "KZ Okpala",
  "Victor Oladipo",
  "Duncan Robinson",
  "D.J. Stewart Jr.",
  "Max Strus",
  "P.J. Tucker",
  "Gabe Vincent",
  "Omer Yurtseven",
  "Cole Anthony",
  "Mo Bamba",
  "Ignas Brazdeikis",
  "Wendell Carter Jr.",
  "Michael Carter-Williams",
  "Jeff Dowtin",
  "James Ennis III",
  "Markelle Fultz",
  "Hassani Gravett",
  "R.J. Hampton",
  "Gary Harris",
  "Jonathan Isaac",
  "Robin Lopez",
  "Chuma Okeke",
  "Chasson Randle",
  "Terrence Ross",
  "Jalen Suggs",
  "Jon Teske",
  "Sindarius Thornwell",
  "Franz Wagner",
  "Moritz Wagner",
  "Deni Avdija",
  "Bradley Beal",
  "Davis Bertans",
  "Thomas Bryant",
  "Kentavious Caldwell-Pope",
  "Spencer Dinwiddie",
  "Daniel Gafford",
  "Anthony Gill",
  "Rui Hachimura",
  "Montrezl Harrell",
  "Aaron Holiday",
  "Caleb Homesley",
  "Corey Kispert",
  "Kyle Kuzma",
  "Garrison Mathews",
  "Raul Neto",
  "Isaiah Todd",
  "Cassius Winston",
  "Jordan Bell",
  "Nemanja Bjelica",
  "Chris Chiozza",
  "Stephen Curry",
  "Draymond Green",
  "Andre Iguodala",
  "Jonathan Kuminga",
  "Damion Lee",
  "Kevon Looney",
  "Nico Mannion",
  "Moses Moody",
  "Mychal Mulder",
  "Gary Payton II",
  "Jordan Poole",
  "Otto Porter Jr.",
  "Klay Thompson",
  "Juan Toscano-Anderson",
  "Andrew Wiggins",
  "James Wiseman",
  "Nicolas Batum",
  "Eric Bledsoe",
  "Amir Coffey",
  "DeMarcus Cousins",
  "Yogi Ferrell",
  "Paul George",
  "Serge Ibaka",
  "Reggie Jackson",
  "Keon Johnson",
  "Luke Kennard",
  "Kawhi Leonard",
  "Terance Mann",
  "Marcus Morris Sr.",
  "Patrick Patterson",
  "Jason Preston",
  "Jay Scrubb",
  "Justise Winslow",
  "Ivica Zubac",
  "Kostas Antetokounmpo",
  "Carmelo Anthony",
  "Trevor Ariza",
  "Kent Bazemore",
  "Devontae Cacok",
  "Anthony Davis",
  "Wayne Ellington",
  "Marc Gasol",
  "Talen Horton-Tucker",
  "Dwight Howard",
  "LeBron James",
  "Wesley Matthews",
  "Malik Monk",
  "Kendrick Nunn",
  "Rajon Rondo",
  "Russell Westbrook",
  "Deandre Ayton",
  "Devin Booker",
  "Mikal Bridges",
  "Jae Crowder",
  "Langston Galloway",
  "Chandler Hutchison",
  "Cameron Johnson",
  "Frank Kaminsky",
  "JaVale McGee",
  "E'Twaun Moore",
  "Abdel Nader",
  "Chris Paul",
  "Cameron Payne",
  "Elfrid Payton",
  "Dario Saric",
  "Landry Shamet",
  "Jalen Smith",
  "Marvin Bagley III",
  "Harrison Barnes",
  "Terence Davis",
  "De'Aaron Fox",
  "Tyrese Haliburton",
  "Maurice Harkless",
  "Buddy Hield",
  "Richaun Holmes",
  "Justin James",
  "Damian Jones",
  "Louis King",
  "Alex Len",
  "Chimezie Metu",
  "Davion Mitchell",
  "Neemias Queta",
  "Jahmi'us Ramsey",
  "Tristan Thompson",
  "Robert Woodard II",
  "Moses Brown",
  "Sterling Brown",
  "Jalen Brunson",
  "Reggie Bullock",
  "Trey Burke",
  "Willie Cauley-Stein",
  "Luka Doncic",
  "Dorian Finney-Smith",
  "Josh Green",
  "Tim Hardaway Jr.",
  "Maxi Kleber",
  "Boban Marjanovic",
  "JaQuori McLaughlin",
  "Eugene Omoruyi",
  "Kristaps Porzingis",
  "Dwight Powell",
  "JJ Redick",
  "Tyrell Terry",
  "D.J. Augustin",
  "Avery Bradley",
  "Armoni Brooks",
  "Josh Christopher",
  "Dante Exum",
  "Usman Garuba",
  "Eric Gordon",
  "Jalen Green",
  "Danuel House Jr.",
  "Matthew Hurt",
  "Anthony Lamb",
  "Kenyon Martin Jr.",
  "David Nwaba",
  "Kevin Porter Jr.",
  "Alperen Sengun",
  "Jae'Sean Tate",
  "Daniel Theis",
  "Khyri Thomas",
  "John Wall",
  "D.J. Wilson",
  "Christian Wood",
  "Steven Adams",
  "Santi Aldama",
  "Kyle Anderson",
  "Desmond Bane",
  "Dillon Brooks",
  "Brandon Clarke",
  "Jarrett Culver",
  "Tim Frazier",
  "Juancho Hernangomez",
  "Jaren Jackson Jr.",
  "Tyus Jones",
  "John Konchar",
  "Sean McDermott",
  "De'Anthony Melton",
  "Sam Merrill",
  "Ja Morant",
  "Daniel Oturu",
  "Yves Pons",
  "Jontay Porter",
  "Killian Tillie",
  "Xavier Tillman",
  "Ziaire Williams",
  "Nickeil Alexander-Walker",
  "Wenyen Gabriel",
  "Devonte' Graham",
  "Josh Hart",
  "Jaxson Hayes",
  "Willy Hernangomez",
  "Brandon Ingram",
  "Herbert Jones",
  "Kira Lewis Jr.",
  "Didi Louzada",
  "Naji Marshall",
  "Trey Murphy III",
  "James Nunnally",
  "Tomas Satoransky",
  "Garrett Temple",
  "Jonas Valanciunas",
  "Zion Williamson",
  "Al-Farouq Aminu",
  "Keita Bates-Diop",
  "Zach Collins",
  "Drew Eubanks",
  "Bryn Forbes",
  "DaQuan Jeffries",
  "Keldon Johnson",
  "Tre Jones",
  "Jock Landale",
  "Doug McDermott",
  "Dejounte Murray",
  "Jakob Poeltl",
  "Joshua Primo",
  "Luka Samanic",
  "Devin Vassell",
  "Lonnie Walker IV",
  "Derrick White",
  "Joe Wieskamp",
  "Thaddeus Young",
  "Will Barton",
  "Bol Bol",
  "Facundo Campazzo",
  "Vlatko Cancar",
  "PJ Dozier",
  "Aaron Gordon",
  "JaMychal Green",
  "Jeff Green",
  "Shaquille Harrison",
  "Markus Howard",
  "Nah'Shon Hyland",
  "Nikola Jokic",
  "Monte Morris",
  "Jamal Murray",
  "Zeke Nnaji",
  "Michael Porter Jr.",
  "Austin Rivers",
  "Malik Beasley",
  "Patrick Beverley",
  "Ed Davis",
  "Anthony Edwards",
  "Nathan Knight",
  "Jake Layman",
  "Jaden McDaniels",
  "Jordan McLaughlin",
  "Jaylen Nowell",
  "Josh Okogie",
  "Taurean Prince",
  "Naz Reid",
  "D'Angelo Russell",
  "Karl-Anthony Towns",
  "Jarred Vanderbilt",
  "Darius Bazley",
  "Charlie Brown Jr.",
  "Gabriel Deck",
  "Luguentz Dort",
  "Derrick Favors",
  "Josh Giddey",
  "Shai Gilgeous-Alexander",
  "Josh Hall",
  "Jaylen Hoard",
  "Ty Jerome",
  "Vit Krejci",
  "Theo Maledon",
  "Tre Mann",
  "Mike Muscala",
  "Svi Mykhailiuk",
  "Aleksej Pokusevski",
  "Jeremiah Robinson-Earl",
  "Isaiah Roby",
  "Aaron Wiggins",
  "Kenrich Williams",
  "Keljin Blevins",
  "Greg Brown",
  "Robert Covington",
  "CJ Elleby",
  "Harry Giles III",
  "Rondae Hollis-Jefferson",
  "T.J. Leaf",
  "Damian Lillard",
  "Nassir Little",
  "CJ McCollum",
  "Ben McLemore",
  "Larry Nance Jr.",
  "Jusuf Nurkic",
  "Norman Powell",
  "Anfernee Simons",
  "Tony Snell",
  "Trendon Watford",
  "Cody Zeller",
  "Udoka Azubuike",
  "Bojan Bogdanovic",
  "Jarrell Brantley",
  "Jared Butler",
  "Jordan Clarkson",
  "Mike Conley",
  "Trent Forrest",
  "Rudy Gay",
  "Rudy Gobert",
  "Elijah Hughes",
  "Ersan Ilyasova",
  "Joe Ingles",
  "Donovan Mitchell",
  "Juwan Morgan",
  "Royce O'Neale",
  "Olumiye Oni",
  "Eric Paschall",
  "Hassan Whiteside"
];




function createAutocompleteBox() {
  for (let i = 0; i < 5; i++) {
      accessibleAutocomplete({
          element: document.querySelector(`#autocomplete-container${i}`),
          id: 'autocomplete-input',
          source: options,
          onConfirm: function (result) {
              if (result != undefined){
              arrayOfPlayers[i] = result
              }
              console.log(arrayOfPlayers)
          }
      });
  }
}




$('#dropdown0').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);
});

$('#dropdown0').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
});

$('#dropdown0 .dropdown-menu li').click(function () {
  chartDefaultOption  = $(this).attr('id');
  $(this).parents('#dropdown0').find('span').text($(this).text());
  $(this).parents('#dropdown0').find('input').attr('value', $(this).attr('id'));
  createChart();
});



$('#dropdown1').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);
});

$('#dropdown1').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
});

$('#dropdown1 .dropdown-menu li').click(function () {
  chartDefaultOption2 = $(this).attr('id');
  $(this).parents('#dropdown1').find('span').text($(this).text());
  $(this).parents('#dropdown1').find('input').attr('value', $(this).attr('id'));
  console.log(arrayOfPlayers)
  if(chartDefaultOption2 != "Top NBA Players of 2023 [Total Career Points]" && chartDefaultOption2 != "Weight[Pounds]"){
         seasonYear = chartDefaultOption2.slice(7,11);
  }
  console.log(seasonYear)
  arrayOfFirstNames = [];
  arrayOfLastNames = []; 
  arrayOfIDs = [];
  arrayOfWeights = [];
  arrayofSeasonPoints = [];
  split();
});




async function split() {
  console.log(arrayOfPlayers)
    for (let i = 0; i < arrayOfPlayers.length; i++) {
        let splitNames = arrayOfPlayers[i].split(' ');
        let firstName = splitNames[0];
        let lastName = splitNames[splitNames.length - 1];
        arrayOfFirstNames.push(firstName);
        arrayOfLastNames.push(lastName);
    }

    const promises = arrayOfFirstNames.map(async (firstName, j) => {
        const response = await fetch(`https://www.balldontlie.io/api/v1/players/?search=${firstName} ${arrayOfLastNames[j]}`);
        const data = await response.json();

        for (let i = 0; i < data.data.length; i++) {
            if (arrayOfFirstNames[j] == data.data[i].first_name && arrayOfLastNames[j] == data.data[i].last_name) {
                arrayOfIDs[j] = data.data[i].id;
                arrayOfWeights[j] = data.data[i].weight_pounds
            }
        }
    });

    await Promise.all(promises);

    if(chartDefaultOption2 != "Top NBA Players of 2023 [Total Career Points]" && chartDefaultOption2 != "Weight[Pounds]"){
        fetchAPIPoints();
      } else{
        createChart();
      }
}


function fetchData(){
  if(chartDefaultOption2 == "Top NBA Players of 2023 [Total Career Points]"){
    return [22235, 16884, 12633, 11230, 9665]
  }else if(chartDefaultOption2 == "Weight[Pounds]") {
    return arrayOfWeights;
  }else if(chartDefaultOption2 == "Season 2023 [Avg Points Scored Per Game]") {
    return arrayofSeasonPoints;
  }else if(chartDefaultOption2 == "Season 2022 [Avg Points Scored Per Game]") {
    return arrayofSeasonPoints;
  }else if(chartDefaultOption2 == "Season 2021 [Avg Points Scored Per Game]") {
    return arrayofSeasonPoints;
  }else if(chartDefaultOption2 == "Season 2020 [Avg Points Scored Per Game]") {
    return arrayofSeasonPoints;
  }
  else{
    return arrayOfIDs;
  }
}


function fetchAPIPoints(){
  fetch(`https://www.balldontlie.io/api/v1/season_averages?season=${seasonYear}&player_ids[]=${arrayOfIDs[0]}&player_ids[]=${arrayOfIDs[1]}&player_ids[]=${arrayOfIDs[2]}&player_ids[]=${arrayOfIDs[3]}&player_ids[]=${arrayOfIDs[4]}`)
    .then(resp => resp.json())
    .then(data => {
      for(j=0; j <arrayOfIDs.length; j++){

          for(i = 0; i<data.data.length; i++){
              if (arrayOfIDs[j] == data.data[i].player_id){
                  arrayofSeasonPoints.push(data.data[i].pts)  
              }
          }
      }
      createChart();
  })
}
   
    


function createChart(){


const ctx = document.getElementById('myChart');

  if(myChart){
    myChart.destroy()
  }

myChart = new Chart(ctx, {
          type: chartDefaultOption,
          data: {
            labels: arrayOfPlayers,
            datasets: [{
              label: chartDefaultOption2,
              data: fetchData(),
              backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(255, 159, 64)',
              'rgba(255, 205, 86)',
              'rgba(75, 192, 192)',
              'rgba(54, 162, 235)',
              'rgba(153, 102, 255)',
              'rgba(201, 203, 207)'
            ],borderColor: [
            chartDefaultOption == 'bar' ? 'rgb(0, 0, 0)' : 'rgba(255, 99, 132)',
            chartDefaultOption == 'bar' ? 'rgb(0, 0, 0)' : 'rgba(255, 159, 64)',
            chartDefaultOption == 'bar' ? 'rgb(0, 0, 0)' : 'rgba(255, 205, 86)',
            chartDefaultOption == 'bar' ? 'rgb(0, 0, 0)' : 'rgba(75, 192, 192)',
            chartDefaultOption == 'bar' ? 'rgb(0, 0, 0)' : 'rgba(54, 162, 235)',
            chartDefaultOption == 'bar' ? 'rgb(0, 0, 0)' : 'rgba(153, 102, 255)',
            chartDefaultOption == 'bar' ? 'rgb(0, 0, 0)' : 'rgba(201, 203, 207)'
          ],
          borderWidth: chartDefaultOption == 'bar' ? 5 : 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });

  }



window.onload = function () {
    createChart();
    createAutocompleteBox();
};






    
