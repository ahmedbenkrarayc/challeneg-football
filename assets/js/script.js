const players = [
  {
    name: "Lionel Messi",
    photo: "https://cdn.sofifa.net/players/158/023/25_120.png",
    position: "RW",
    nationality: "Argentina",
    flag: "https://cdn.sofifa.net/flags/ar.png",
    club: "Inter Miami",
    logo: "https://cdn.sofifa.net/meta/team/239235/120.png",
    rating: 93,
    pace: 85,
    shooting: 92,
    passing: 91,
    dribbling: 95,
    defending: 35,
    physical: 65,
  },
  {
    name: "Cristiano Ronaldo",
    photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
    position: "ST",
    nationality: "Portugal",
    flag: "https://cdn.sofifa.net/flags/pt.png",
    club: "Al Nassr",
    logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
    rating: 91,
    pace: 84,
    shooting: 94,
    passing: 82,
    dribbling: 87,
    defending: 34,
    physical: 77,
  },
  {
    name: "Kevin De Bruyne",
    photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
    position: "CM1",
    nationality: "Belgium",
    flag: "https://cdn.sofifa.net/flags/be.png",
    club: "Manchester City",
    logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
    rating: 91,
    pace: 74,
    shooting: 86,
    passing: 93,
    dribbling: 88,
    defending: 64,
    physical: 78,
  },
  {
    name: "Kylian Mbappé",
    photo: "https://cdn.sofifa.net/players/231/747/25_120.png",
    position: "ST",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 92,
    pace: 97,
    shooting: 89,
    passing: 80,
    dribbling: 92,
    defending: 39,
    physical: 77,
  },
  {
    name: "Virgil van Dijk",
    photo: "https://cdn.sofifa.net/players/203/376/25_120.png",
    position: "CB1",
    nationality: "Netherlands",
    flag: "https://cdn.sofifa.net/flags/nl.png",
    club: "Liverpool",
    logo: "https://cdn.sofifa.net/meta/team/8/120.png",
    rating: 90,
    pace: 75,
    shooting: 60,
    passing: 70,
    dribbling: 72,
    defending: 92,
    physical: 86,
  },
  {
    name: "Antonio Rudiger",
    photo: "https://cdn.sofifa.net/players/205/452/25_120.png",
    position: "CB2",
    nationality: "Germany",
    flag: "https://cdn.sofifa.net/flags/de.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 88,
    pace: 82,
    shooting: 55,
    passing: 73,
    dribbling: 70,
    defending: 86,
    physical: 86,
  },
  {
    name: "Neymar Jr",
    photo: "https://cdn.sofifa.net/players/190/871/25_120.png",
    position: "LW",
    nationality: "Brazil",
    flag: "https://cdn.sofifa.net/flags/br.png",
    club: "Al-Hilal",
    logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
    rating: 90,
    pace: 91,
    shooting: 83,
    passing: 86,
    dribbling: 94,
    defending: 37,
    physical: 61,
  },
  {
    name: "Mohamed Salah",
    photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
    position: "RW",
    nationality: "Egypt",
    flag: "https://cdn.sofifa.net/flags/eg.png",
    club: "Liverpool",
    logo: "https://cdn.sofifa.net/meta/team/8/120.png",
    rating: 89,
    pace: 93,
    shooting: 87,
    passing: 81,
    dribbling: 90,
    defending: 45,
    physical: 75,
  },
  {
    name: "Joshua Kimmich",
    photo: "https://cdn.sofifa.net/players/212/622/25_120.png",
    position: "CM2",
    nationality: "Germany",
    flag: "https://cdn.sofifa.net/flags/de.png",
    club: "Bayern Munich",
    logo: "https://cdn.sofifa.net/meta/team/503/120.png",
    rating: 89,
    pace: 70,
    shooting: 75,
    passing: 88,
    dribbling: 84,
    defending: 84,
    physical: 81,
  },
  {
    name: "Jan Oblak",
    photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
    position: "GK",
    nationality: "Slovenia",
    flag: "https://cdn.sofifa.net/flags/si.png",
    club: "Atletico Madrid",
    logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
    rating: 91,
    diving: 89,
    handling: 90,
    kicking: 78,
    reflexes: 92,
    speed: 50,
    positioning: 88,
  },
  {
    name: "Luka Modrić",
    photo: "https://cdn.sofifa.net/players/177/003/25_120.png",
    position: "CM1",
    nationality: "Croatia",
    flag: "https://cdn.sofifa.net/flags/hr.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 88,
    pace: 74,
    shooting: 78,
    passing: 89,
    dribbling: 90,
    defending: 72,
    physical: 65,
  },
  {
    name: "Vinicius Junior",
    photo: "https://cdn.sofifa.net/players/238/794/25_120.png",
    position: "LW",
    nationality: "Brazil",
    flag: "https://cdn.sofifa.net/flags/br.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 89,
    pace: 91,
    shooting: 88,
    passing: 85,
    dribbling: 94,
    defending: 39,
    physical: 61,
  },
  {
    name: "Brahim Diáz",
    photo: "https://cdn.sofifa.net/players/231/410/25_120.png",
    position: "LW",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 82,
    pace: 85,
    shooting: 74,
    passing: 78,
    dribbling: 85,
    defending: 31,
    physical: 56,
  },
  {
    name: "Karim Benzema",
    photo: "https://cdn.sofifa.net/players/165/153/25_120.png",
    position: "ST",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Al-Ittihad",
    logo: "https://cdn.sofifa.net/meta/team/476/120.png",
    rating: 90,
    pace: 77,
    shooting: 90,
    passing: 83,
    dribbling: 88,
    defending: 40,
    physical: 78,
  },
  {
    name: "Erling Haaland",
    photo: "https://cdn.sofifa.net/players/239/085/25_120.png",
    position: "ST",
    nationality: "Norway",
    flag: "https://cdn.sofifa.net/flags/no.png",
    club: "Manchester City",
    logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
    rating: 91,
    pace: 89,
    shooting: 94,
    passing: 65,
    dribbling: 80,
    defending: 45,
    physical: 88,
  },
  {
    name: "N'Golo Kanté",
    photo: "https://cdn.sofifa.net/players/215/914/25_120.png",
    position: "CDM",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Al-Ittihad",
    logo: "https://cdn.sofifa.net/meta/team/476/120.png",
    rating: 87,
    pace: 77,
    shooting: 66,
    passing: 75,
    dribbling: 82,
    defending: 88,
    physical: 82,
  },
  {
    name: "Alphonso Davies",
    photo: "https://cdn.sofifa.net/players/234/396/25_120.png",
    position: "LB",
    nationality: "Canada",
    flag: "https://cdn.sofifa.net/flags/ca.png",
    club: "Bayern Munich",
    logo: "https://cdn.sofifa.net/meta/team/503/120.png",
    rating: 84,
    pace: 96,
    shooting: 68,
    passing: 77,
    dribbling: 82,
    defending: 76,
    physical: 77,
  },
  {
    name: "Yassine Bounou",
    photo: "https://cdn.sofifa.net/players/209/981/25_120.png",
    position: "GK",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Al-Hilal",
    logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
    rating: 84,
    diving: 81,
    handling: 82,
    kicking: 77,
    reflexes: 86,
    speed: 38,
    positioning: 83,
  },
  {
    name: "Bruno Fernandes",
    photo: "https://cdn.sofifa.net/players/212/198/25_120.png",
    position: "CM2",
    nationality: "Portugal",
    flag: "https://cdn.sofifa.net/flags/pt.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 88,
    pace: 75,
    shooting: 85,
    passing: 89,
    dribbling: 84,
    defending: 69,
    physical: 77,
  },
  {
    name: "Jadon Sancho",
    photo: "https://cdn.sofifa.net/players/233/049/25_120.png",
    position: "LW",
    nationality: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 84,
    pace: 85,
    shooting: 74,
    passing: 78,
    dribbling: 88,
    defending: 34,
    physical: 63,
  },
  {
    name: "Trent Alexander-Arnold",
    photo: "https://cdn.sofifa.net/players/231/281/25_120.png",
    position: "RB",
    nationality: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    club: "Liverpool",
    rating: 87,
    pace: 76,
    shooting: 66,
    passing: 89,
    dribbling: 80,
    defending: 79,
    physical: 71,
  },
  {
    name: "Achraf Hakimi",
    photo: "https://cdn.sofifa.net/players/235/212/25_120.png",
    position: "RB",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Paris Saint-Germain",
    logo: "https://cdn.sofifa.net/meta/team/591/120.png",
    rating: 84,
    pace: 91,
    shooting: 76,
    passing: 80,
    dribbling: 80,
    defending: 75,
    physical: 78,
  },
  {
    name: "Youssef En-Nesyri",
    photo: "https://cdn.sofifa.net/players/235/410/25_120.png",
    position: "ST",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Fenerbahçe",
    logo: "https://cdn.sofifa.net/meta/team/88/120.png",
    rating: 83,
    pace: 82,
    shooting: 82,
    passing: 63,
    dribbling: 77,
    defending: 36,
    physical: 80,
  },
  {
    name: "Noussair Mazraoui",
    photo: "https://cdn.sofifa.net/players/236/401/25_120.png",
    position: "LB",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 81,
    pace: 78,
    shooting: 66,
    passing: 77,
    dribbling: 83,
    defending: 77,
    physical: 71,
  },
  {
    name: "Ismael Saibari",
    photo: "https://cdn.sofifa.net/players/259/480/25_120.png",
    position: "CM1",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "PSV",
    logo: "https://cdn.sofifa.net/meta/team/682/120.png",
    rating: 83,
    pace: 89,
    shooting: 78,
    passing: 80,
    dribbling: 86,
    defending: 55,
    physical: 84,
  },
  {
    name: "Gianluigi Donnarumma",
    photo: "https://cdn.sofifa.net/players/230/621/25_120.png",
    position: "GK",
    nationality: "Italy",
    flag: "https://cdn.sofifa.net/flags/it.png",
    club: "Paris Saint-Germain",
    logo: "https://cdn.sofifa.net/meta/team/591/120.png",
    rating: 89,
    diving: 88,
    handling: 84,
    kicking: 75,
    reflexes: 90,
    speed: 50,
    positioning: 85,
  },
];


// Declare necessary elements for inputs and form
const addingForm = document.getElementById("form");
const searchInput = document.getElementById("search");
const playerNameElement = document.getElementById("player_name");
const playerPhotoElement = document.getElementById("player_photo");
const playerNationalityElement = document.getElementById("player_nationality");
const playerClubElement = document.getElementById("player_club");
const positionDropdown = document.getElementById("position");
const ratingInput = document.getElementById("rating");
const static1 = document.getElementById("pace");
const static2 = document.getElementById("shooting");
const static3 = document.getElementById("passing");
const static4 = document.getElementById("defending");
const static5 = document.getElementById("dribbling");
const static6 = document.getElementById("physicality");
const placeinput = document.getElementById("placing");
const save_button = document.getElementById("save");

//  declaring stats labels
const divinglabel = document.getElementById("diving");
const handlinglabe = document.getElementById("handling");
const kicking = document.getElementById("kicking");
const reflexes = document.getElementById("reflexes");
const speedlabel = document.getElementById("speed");
const positioninglabel = document.getElementById("positioning");





// array to push the objects in
const used_players = [];

// form visibility
function show_hide_form() {
  addingForm.classList.toggle("hidden");
}

function get_player_info() {
  const search_input = searchInput.value.toLowerCase(); // Get search input
  const foundPlayer = players.find((player) =>
    player.name.toLowerCase().includes(search_input)
  );  
       
  if (foundPlayer) {
    if (
      [
        "CB1",
        "CB2",
        "CB3",
        "RM",
        "CM1",
        "CM2",
        "LM",
        "LW",
        "ST",
        "RW",
      ].includes(foundPlayer.position)
    ) {
      //  adding player info to the inputs
      playerNameElement.value = foundPlayer.name; // Display name
      playerPhotoElement.value = foundPlayer.photo; // Player photo
      playerNationalityElement.value = foundPlayer.flag; // Nationality
      playerClubElement.value = foundPlayer.logo; // Club
      positionDropdown.value = foundPlayer.position; // Set position
      ratingInput.value = foundPlayer.rating; // Player rating

      // change text content for those labels
      divinglabel.textContent = "pace";
      handlinglabe.textContent = "shooting";
      kicking.textContent = "passing";
      reflexes.textContent = "defending";
      speedlabel.textContent = "dribbling";
      positioninglabel.textContent = "Physicality";

      static1.value = foundPlayer.pace; // Pace
      static2.value = foundPlayer.shooting; // Shooting
      static3.value = foundPlayer.passing; // Passing
      static4.value = foundPlayer.defending; // Defending
      static5.value = foundPlayer.dribbling; // Dribbling
      static6.value = foundPlayer.physical; // Physicality
    } else if (foundPlayer.position === "GK") {
      // change text content for those labels
      divinglabel.textContent = "diving";
      handlinglabe.textContent = "handling";
      kicking.textContent = "kicking";
      reflexes.textContent = "reflexes";
      speedlabel.textContent = "speed";
      positioninglabel.textContent = "positioning";

      //  adding player info to the inputs
      playerNameElement.value = foundPlayer.name; // Display name
      playerPhotoElement.value = foundPlayer.photo; // Player photo
      playerNationalityElement.value = foundPlayer.flag; // Nationality
      playerClubElement.value = foundPlayer.logo; // Club
      positionDropdown.value = foundPlayer.position; // Set position
      ratingInput.value = foundPlayer.rating; // Player rating

      static1.value = foundPlayer.diving; // Pace
      static2.value = foundPlayer.handling; // Shooting
      static3.value = foundPlayer.kicking; // Passing
      static4.value = foundPlayer.reflexes; // Defending
      static5.value = foundPlayer.speed; // Dribbling
      static6.value = foundPlayer.positioning; // Physicality
      
    }
  } else {
    alert("Player not found!");
  }
}


// function to stor the informations of players in the field
function store_player_info() {
     if  (edit_index === null) { 
    if (positionDropdown.value === "GK") {
      let GK_info = {
        name: playerNameElement.value,
        photo: playerPhotoElement.value,
        club: playerClubElement.value,
        nationality: playerNationalityElement.value,
        position: positionDropdown.value,
        rating: ratingInput.value,
        diving: static1.value,
        handling: static2.value,
        kicking: static3.value,
        reflexes: static4.value,
        speed: static5.value,
        positioning: static6.value,
        place: placeinput.value,
      }; 
      used_players.push(GK_info);
    } else if (
      ["CB1", "CB2", "CB3", "RM", "CM1", "CM2", "LM", "LW", "ST", "RW"].includes(
        positionDropdown.value
      )
    ) {
      let players_info = {
        name: playerNameElement.value,
        photo: playerPhotoElement.value,
        club: playerClubElement.value,
        nationality: playerNationalityElement.value,
        position: positionDropdown.value,
        rating: ratingInput.value,
        pace: static1.value,
        shooting: static2.value,
        passing: static3.value,
        defending: static4.value,
        dribbling: static5.value,
        physical: static6.value,
        place: placeinput.value,
      };
      used_players.push(players_info);
    }   
  }else{
    if (used_players[edit_index].position === "GK") { 

        used_players[edit_index].name = playerNameElement.value;
        used_players[edit_index].photo = playerPhotoElement.value;
        used_players[edit_index].club = playerClubElement.value;
        used_players[edit_index].nationality = playerNationalityElement.value;        
        used_players[edit_index].rating = ratingInput.value;  
        used_players[edit_index].diving = static1.value;
        used_players[edit_index].handling = static2.value;
        used_players[edit_index].kicking = static3.value;
        used_players[edit_index].reflexes = static4.value;
        used_players[edit_index].speed = static5.value;
        used_players[edit_index].positioning = static6.value;
        used_players[edit_index].place = placeinput.value;


    } else if (
      ["CB1", "CB2", "CB3", "RM", "CM1", "CM2", "LM", "LW", "ST", "RW"].includes(used_players[edit_index].position)
    ) {

        used_players[edit_index].name = playerNameElement.value;
        used_players[edit_index].photo = playerPhotoElement.value;
        used_players[edit_index].club = playerClubElement.value;
        used_players[edit_index].nationality = playerNationalityElement.value;
        used_players[edit_index].position = positionDropdown.value;
        used_players[edit_index].rating = ratingInput.value;
        used_players[edit_index].pace = static1.value;
        used_players[edit_index].shooting = static2.value;
        used_players[edit_index].passing = static3.value;
        used_players[edit_index].defending = static4.value;
        used_players[edit_index].dribbling = static5.value;
        used_players[edit_index].physical = static6.value;
        used_players[edit_index].place = placeinput.value;

    }      
edit_index = null; 
  }
  } 


// a function to empty the form inputs
function empty_form() {
  searchInput.value = "";
  playerNameElement.value = ""; // Display name
  playerPhotoElement.value = ""; // Player photo
  playerNationalityElement.value = ""; // Nationality
  playerClubElement.value = ""; // Club
  positionDropdown.value = ""; // Set position
  ratingInput.value = ""; // Player rating

  static1.value = ""; // Pace
  static2.value = ""; // Shooting
  static3.value = ""; // Passing
  static4.value = ""; // Defending
  static5.value = ""; // Dribbling
  static6.value = ""; // Physicality
}


// a function to validat or reject the inputs 
function validation_inputs() {
  // Check if all inputs are filled
  if (
    !playerNameElement.value.trim() ||
    !playerPhotoElement.value.trim() ||
    !playerNationalityElement.value.trim() ||
    !playerClubElement.value.trim() ||
    !positionDropdown.value.trim() ||
    !ratingInput.value.trim() ||
    !static1.value.trim() ||
    !static2.value.trim() ||
    !static3.value.trim() ||
    !static4.value.trim() ||
    !static5.value.trim() ||
    !static6.value.trim() ||
    !placeinput.value.trim()
  ) {
    alert("All inputs should be filled with information!");
    return false; 
  }

  const ratingValue = ratingInput.value.trim();
  if (isNaN(ratingValue) || ratingValue < 0 || ratingValue > 100) {
    alert("Rating must be between 0 and 100, and contain only numbers!");
    return false;
  }

  const static1Value = static1.value.trim();
  if (isNaN(static1Value) || static1Value < 0 || static1Value > 100) {
    alert("Static 1 must be between 0 and 100, and contain only numbers!");
    return false;
  }

  const static2Value = static2.value.trim();
  if (isNaN(static2Value) || static2Value < 0 || static2Value > 100) {
    alert("Static 2 must be between 0 and 100, and contain only numbers!");
    return false;
  }

  const static3Value = static3.value.trim();
  if (isNaN(static3Value) || static3Value < 0 || static3Value > 100) {
    alert("Static 3 must be between 0 and 100, and contain only numbers!");
    return false;
  }

  const static4Value = static4.value.trim();
  if (isNaN(static4Value) || static4Value < 0 || static4Value > 100) {
    alert("Static 4 must be between 0 and 100, and contain only numbers!");
    return false;
  }

  const static5Value = static5.value.trim();
  if (isNaN(static5Value) || static5Value < 0 || static5Value > 100) {
    alert("Static 5 must be between 0 and 100, and contain only numbers!");
    return false;
  }

  const static6Value = static6.value.trim();
  if (isNaN(static6Value) || static6Value < 0 || static6Value > 100) {
    alert("Static 6 must be between 0 and 100, and contain only numbers!");
    return false;
  }

  // Validate player image link
  const playerPhotoValue = playerPhotoElement.value.trim();
  if (
    !playerPhotoValue.startsWith("https://") ||
    (!playerPhotoValue.endsWith(".png") &&
      !playerPhotoValue.endsWith(".jpg") &&
      !playerPhotoValue.endsWith(".webp"))
  ) {
    alert(
      "Photo link must start with 'https://' and end with '.png', '.jpg', or '.webp'!"
    );
    return false;
  }

  // Validate club logo image link
  const clubPhotoValue = playerClubElement.value.trim();
  if (
    !clubPhotoValue.startsWith("https://") ||
    (!clubPhotoValue.endsWith(".png") &&
      !clubPhotoValue.endsWith(".jpg") &&
      !clubPhotoValue.endsWith(".webp"))
  ) {
    alert(
      "Club logo link must start with 'https://' and end with '.png', '.jpg', or '.webp'!"
    );
    return false;
  }

  // Validate flag image link
  const flagPhotoValue = playerNationalityElement.value.trim();
  if (
    !flagPhotoValue.startsWith("https://") ||
    (!flagPhotoValue.endsWith(".png") &&
      !flagPhotoValue.endsWith(".jpg") &&
      !flagPhotoValue.endsWith(".webp"))
  ) {
    alert(
      "Flag photo link must start with 'https://' and end with '.png', '.jpg', or '.webp'!"
    );
    return false;
  }

  return true;
}
 

// a function to take the data from the array, creat a card and place it
function place_cards_in_field() { 
  let changement_section = document.getElementById("changement_section")
  changement_section.innerHTML = "";
  used_players.forEach((player, index) => {
// declare the goalkeeper card
let goalkeeper_info = document.createElement("div");
goalkeeper_info.innerHTML = `
                 <div class="flex bg-none flex-row">
                  <button class="delet_update_button" onclick="delete_player_card(${index})">delete</button>
                  <button class="delet_update_button" onclick="update_player_card(${index})">edit</button>
                </div>
              <div class="top_card_side">
                  <div class="player-master-info">
                    <p>${player.rating}</p>
                    <p>${player.position}</p>
                    <img
                      src="${player.nationality}"
                      alt="Argentina"
                    />
                    <img
                      src="${player.club}"
                      alt="Barcelona"
                    />
                  </div>
                  <img
                    class="player-picture"
                    src="${player.photo}"
                    alt="Messi"
                  />
                </div>
                <div class="buttom_card_side mb-0">
                  <p class="player_name">${player.name}</p>
                  <div class="player-features">
                 <div class="player-features-col">
                   <span>
                     <span class="player-feature-value">${player.diving}</span>
                     <span class="player-feature-title">DIV</span>
                   </span>
                   <span>
                     <span class="player-feature-value">${player.handling}</span>
                     <span class="player-feature-title">HAN</span>
                   </span>
                   <span>
                     <span class="player-feature-value">${player.kicking}</span>
                     <span class="player-feature-title">KIC</span>
                   </span>
                 </div>
                 <div class="player-features-col">
                   <span>
                     <span class="player-feature-value">${player.reflexes}</span>
                     <span class="player-feature-title">REF</span>
                   </span>
                   <span>
                     <span class="player-feature-value">${player.speed}</span>
                     <span class="player-feature-title">SPD</span>
                   </span>
                   <span>
                     <span class="player-feature-value">${player.positioning}</span>
                     <span class="player-feature-title">POS</span>
                   </span>
                 </div>
                  </div>
                </div>
              <button class="position_icon">${player.position}</button>                

          `;
    goalkeeper_info.classList.add("bg-none");

    
// declare the player card 
let player_info = document.createElement("div");
player_info.innerHTML = ` 
                  <div class="flex bg-none flex-row">
                    <button class="delet_update_button" onclick="delete_player_card(${index})" >delete</button>
                  <button class="delet_update_button" onclick="update_player_card(${index})" >edit</button>
                </div>
              <div class="top_card_side">
                  <div class="player-master-info">
                    <p>${player.rating}</p>
                    <p>${player.position}</p>
                    <img
                      src="${player.nationality}"
                      alt="Argentina"
                    />
                    <img
                      src="${player.club}"
                      alt="Barcelona"
                    />
                  </div>
                  <img
                    class="player-picture"
                    src="${player.photo}"
                    alt="Messi"
                  />
                </div>
                <div class="buttom_card_side mb-0">
                  <p class="player_name">${player.name}</p>
                  <div class="player-features">
                <div class="player-features-col">
                      <span>
                        <span class="player-feature-value">${player.pace}</span>
                        <span class="player-feature-title">PAC</span>
                      </span>
                      <span>
                        <span class="player-feature-value">${player.shooting}</span>
                        <span class="player-feature-title">SHO</span>
                      </span>
                      <span>
                        <span class="player-feature-value">${player.passing}</span>
                        <span class="player-feature-title">PAS</span>
                      </span>
                    </div>
                    <div class="player-features-col">
                      <span>
                        <span class="player-feature-value">${player.dribbling}</span>
                        <span class="player-feature-title">DRI</span>
                      </span>
                      <span>
                        <span class="player-feature-value">${player.defending}</span>
                        <span class="player-feature-title">DEF</span>
                      </span>
                      <span>
                        <span class="player-feature-value">${player.physical}</span>
                        <span class="player-feature-title">PHY</span>
                      </span>
                    </div>
                  </div>
                </div>
              <button class="position_icon">${player.position}</button>                

          `;
    player_info.classList.add("bg-none");
  

    if (player.place === "player" && player.position === "GK") {

        let goalkeeper = document.getElementById("GK");
        goalkeeper.innerHTML = "";
        goalkeeper.appendChild(goalkeeper_info) 

    } else if ( player.place === "player" 
      && [
        "CB1",
        "CB2",
        "CB3",
        "RM",
        "CM1",
        "CM2",
        "LM",
        "LW",
        "ST",
        "RW",
      ].includes(player.position) 
    ) {
      
  let player_card = document.getElementById(player.position)
  player_card.innerHTML = "";  
  player_card.appendChild(player_info)

    } else if (player.place === "changement" && player.position === "GK") {
        let goalkeeper_card = document.createElement('div')
        goalkeeper_card.innerHTML = `
              <div class="top_card_side">
                  <div class="player-master-info">
                    <p>${player.rating}</p>
                    <p>${player.position}</p>
                    <img
                      src="${player.nationality}"
                      alt="Argentina"
                    />
                    <img
                      src="${player.club}"
                      alt="Barcelona"
                    />
                  </div>
                  <img
                    class="player-picture"
                    src="${player.photo}"
                    alt="Messi"
                  />
                </div>
                <div class="buttom_card_side mb-0 ">
                  <p class="player_name">${player.name}</p>
                  <div class="player-features">
                 <div class="player-features-col">
                   <span>
                     <span class="player-feature-value">${player.diving}</span>
                     <span class="player-feature-title">DIV</span>
                   </span>
                   <span>
                     <span class="player-feature-value">${player.handling}</span>
                     <span class="player-feature-title">HAN</span>
                   </span>
                   <span>
                     <span class="player-feature-value">${player.kicking}</span>
                     <span class="player-feature-title">KIC</span>
                   </span>
                 </div>
                 <div class="player-features-col">
                   <span>
                     <span class="player-feature-value">${player.reflexes}</span>
                     <span class="player-feature-title">REF</span>
                   </span>
                   <span>
                     <span class="player-feature-value">${player.speed}</span>
                     <span class="player-feature-title">SPD</span>
                   </span>
                   <span>
                     <span class="player-feature-value">${player.positioning}</span>
                     <span class="player-feature-title">POS</span>
                   </span>
                 </div>

                  </div>
                </div>
          `
        goalkeeper_card.classList.add("player_card")
        changement_section.appendChild(goalkeeper_card);
            

      } else if (
        player.place === "changement" &&
        [
          "CB1",
          "CB2",
          "CB3",
          "RM",
          "CM1",
          "CM2",
          "LM",
          "LW",
          "ST",
          "RW",
        ].includes(player.position)
      ) {
        let player_card_changement = document.createElement("div")
        player_card_changement.innerHTML =`
              <div class="top_card_side">
                  <div class="player-master-info">
                    <p>${player.rating}</p>
                    <p>${player.position}</p>
                    <img
                      src="${player.nationality}"
                      alt="Argentina"
                    />
                    <img
                      src="${player.club}"
                      alt="Barcelona"
                    />
                  </div>
                  <img
                    class="player-picture"
                    src="${player.photo}"
                    alt="Messi"
                  />
                </div>
                <div class="buttom_card_side mb-0">
                  <p class="player_name">${player.name}</p>
                  <div class="player-features">
                <div class="player-features-col">
                      <span>
                        <span class="player-feature-value">${player.pace}</span>
                        <span class="player-feature-title">PAC</span>
                      </span>
                      <span>
                        <span class="player-feature-value">${player.shooting}</span>
                        <span class="player-feature-title">SHO</span>
                      </span>
                      <span>
                        <span class="player-feature-value">${player.passing}</span>
                        <span class="player-feature-title">PAS</span>
                      </span>
                    </div>
                    <div class="player-features-col">
                      <span>
                        <span class="player-feature-value">${player.dribbling}</span>
                        <span class="player-feature-title">DRI</span>
                      </span>
                      <span>
                        <span class="player-feature-value">${player.defending}</span>
                        <span class="player-feature-title">DEF</span>
                      </span>
                      <span>
                        <span class="player-feature-value">${player.physical}</span>
                        <span class="player-feature-title">PHY</span>
                      </span>
                    </div>
                  </div>
                </div>
          `;
          player_card_changement.classList.add("player_card")
        changement_section.appendChild(player_card_changement);


      }
    }
  )};


// a variable to store the index of the function being edited   
let edit_index = null;

function update_player_card(index) {
edit_index = index;

if (
  [
    "CB1",
    "CB2",
    "CB3",
    "RM",
    "CM1",
    "CM2",
    "LM",
    "LW",
    "ST",
    "RW",
  ].includes(used_players[index].position)
) {
  //  placing player info to the inputs
  playerNameElement.value = used_players[index].name; // Display name
  playerPhotoElement.value = used_players[index].photo; // Player photo
  playerNationalityElement.value = used_players[index].nationality; // Nationality
  playerClubElement.value = used_players[index].club; // Club
  positionDropdown.value = used_players[index].position; // Set position
  ratingInput.value = used_players[index].rating; // Player rating

  // change text content for those labels
  divinglabel.textContent = "pace";
  handlinglabe.textContent = "shooting";
  kicking.textContent = "passing";
  reflexes.textContent = "defending";
  speedlabel.textContent = "dribbling";
  positioninglabel.textContent = "Physicality";

  static1.value = used_players[index].pace; // Pace
  static2.value = used_players[index].shooting; // Shooting
  static3.value = used_players[index].passing; // Passing
  static4.value = used_players[index].defending; // Defending
  static5.value = used_players[index].dribbling; // Dribbling
  static6.value = used_players[index].physical; // Physicality
  placeinput.value = used_players[index].place;
} else if (used_players[index].position) {
  // change text content for those labels
  divinglabel.textContent = "diving";
  handlinglabe.textContent = "handling";
  kicking.textContent = "kicking";
  reflexes.textContent = "reflexes";
  speedlabel.textContent = "speed";
  positioninglabel.textContent = "positioning";
  
  //  placing player info to the inputs
  playerNameElement.value = used_players[index].name; // Display name
  playerPhotoElement.value = used_players[index].photo; // Player photo
  playerNationalityElement.value = used_players[index].nationality; // Nationality
  playerClubElement.value = used_players[index].club; // Club
  positionDropdown.value = used_players[index].position; // Set position
  ratingInput.value = used_players[index].rating; // Player rating
  
    
  static1.value = used_players[index].diving; // diving
  static2.value = used_players[index].handling; // handling
  static3.value = used_players[index].kicking; // kicking
  static4.value = used_players[index].reflexes; // reflexes
  static5.value = used_players[index].speed; // speed
  static6.value = used_players[index].positioning; // positioning
  placeinput.value = used_players[index].place;
  
}
save_button.textContent = "save";

}  
  

function delete_player_card(index) {
  let button_position = document.createElement("button")
  button_position.innerHTML= `${used_players[index].position}`
button_position.classList.add("position_icon")
  let card_to_delete = document.getElementById(used_players[index].position)  
  card_to_delete.innerHTML = ""; 
  card_to_delete.appendChild(button_position)
  
      used_players.splice(index,1);
      place_cards_in_field();
    }


function main_function() {
  if (validation_inputs()) {
    store_player_info();
    place_cards_in_field();
    empty_form(); 
  }
}

//challenge function
function placeBestPlayer(e){

  let find = players.filter(item => item.position == e.id)?.sort((a,b) => b.rating - a.rating)

  if(find.length > 0){
    const player = find[0]
    playerNameElement.value = player.name
    playerPhotoElement.value = player.photo
    playerClubElement.value = player.logo
    playerNationalityElement.value = player.flag
    positionDropdown.value = player.position
    ratingInput.value = player.rating
    if(player.position != 'GK'){
      static1.value = player.pace
      static2.value = player.shooting
      static3.value = player.passing
      static4.value = player.dribbling
      static5.value = player.defending
      static6.value = player.physical
    }else{
      static1.value = player.diving
      static2.value = player.handling
      static3.value = player.kicking
      static4.value = player.reflexes
      static5.value = player.speed
      static6.value = player.positioning
    }
    placeinput.value = 'player'
  
    store_player_info();
    place_cards_in_field();
    empty_form(); 
  }

}