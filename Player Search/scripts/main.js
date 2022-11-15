// grabbing the key html elements

const input = document.getElementById('searchBar');
const themeBtn = document.getElementById('themeButton');
const searchBtn = document.getElementById('searchButton');
const playerStats = document.querySelector('stats');
// const leagueTitle = playerStats.querySelector('h2');
// const playerInfo = playerStats.querySelector('p');
const otherInfo = document.querySelector('#others');
const wrapperSection = document.getElementById('wrapper');

let arrValue = input.value.split(/\W+/g);
const value = {};
value['name'] = arrValue[0];
value['year'] = arrValue[1];


//adding event listener to the search button
searchBtn.addEventListener('click', event => {
    event.preventDefault();
    if (input.value === '') {
        alert('Field must be filled');
        console.log('Empty field');
    }
    getData(value.name, value.year);
})

function hideLoader() {
    const loader = document.getElementById('loader');
    loader.classList.add('hide');
}

function showLoader() {
    const loader = document.getElementById('loader');
    loader.classList.remove('hide');
}

function getData(name = 'Messi', year = '2022') {
    const options = {
        method: 'GET', headers: {
            'X-RapidAPI-Key': 'c516eb6162msh896a009857123fcp13de7bjsn7cf40d7debeb',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };
    showLoader();
    fetch(`https://api-football-v1.p.rapidapi.com/v3/players?season=${year}&search=${name}`, options)
        .then(response => response.json())
        .then(data => {
            hideLoader();
            createUI(data)
        })
        .catch(err => {
            hideLoader();
            wrapperSection.style.textAlign = 'center';
            wrapperSection.style.marginTop = '2em';
            wrapperSection.style.display = 'flex';
            wrapperSection.style.justifyContent = 'center';
            wrapperSection.style.alignItems = 'center';
            wrapperSection.innerHTML = `<p>
                <img src="" alt="crying_baby">
                <br>
                <span>${err.status} Not found</span>
            </p>`;
        });

}

function createUI(data) {
    const playerImg = document.querySelector('#player-image');
    const name = document.getElementById('name');
    const age = document.getElementById('age');
    const nationality = document.getElementById('nationality');
    const height = document.getElementById('height');
    const teamName = document.getElementById('team-name');
    const league = document.getElementById('league');
    const apps = document.getElementById('apps');
    const position = document.getElementById('pos');
    const shots = document.getElementById('shot-on-target');
    const goals = document.getElementById('total-goals');
    const assists = document.getElementById('assists');
    const saves = document.getElementById('saves');
    const passes = document.getElementById('total-passes');
    const accuracy = document.getElementById('pass-accuracy');
    const tackles = document.getElementById('total-tackles');
    const interceptions = document.getElementById('interceptions');
    const dribbles = document.getElementById('dribble-attempts');
    const successfulDribbles = document.getElementById('successful-dribbles');
    const penaltyWon = document.getElementById('penalty-won');
    const penaltyCommitted = document.getElementById('penalty-committed');
    const season = document.getElementById('season');

    playerImg.src = data.response[0].player.photo;
    name.innerText = `Name: ${data.response[0].player.name}`;
    age.innerText = `Age: ${data.response[0].player.age}`;
    nationality.innerText = `Nationality: ${data.response[0].player.nationality}`;
    height.innerText = `Height: ${data.response[0].player.height}`;
    teamName.innerText = `Club: ${data.response[0].statistics[0].team.name}`;
    league.innerText = `League: ${data.response[0].statistics[0].league.name}`;
    season.innerText = `Season: ${data.response[0].statistics[0].league.season}`;
    apps.innerText = `Apps.: ${data.response[0].statistics[0].games.appearences}`;
    position.innerText = `Position: ${data.response[0].statistics[0].games.position}`;
    shots.innerText = `Shots: ${data.response[0].statistics[0].shots.on}`;
    goals.innerText = `Goals: ${data.response[0].statistics[0].goals.total}`;
    assists.innerText = `Assists: ${data.response[0].statistics[0].goals.assists}`;
    saves.innerText = `Saves: ${data.response[0].statistics[0].goals.saves}`;
    passes.innerText = `Passes: ${data.response[0].statistics[0].passes.total}`;
    accuracy.innerText = `Passing Accuracy: ${data.response[0].statistics[0].passes.accuracy}`;
    tackles.innerText = `Tackles: ${data.response[0].statistics[0].tackles.total}`;
    interceptions.innerText = `Interceptions: ${data.response[0].statistics[0].tackles.interceptions}`;
    dribbles.innerText = `Dribbles: ${data.response[0].statistics[0].dribbles.attempts}`;
    successfulDribbles.innerText = `Successful Dribbles: ${data.response[0].statistics[0].dribbles.success}`;
    penaltyWon.innerText = `Penalty Won: ${data.response[0].statistics[0].penalty.won}`;
    penaltyCommitted.innerText = `Penalty Commited: ${data.response[0].statistics[0].penalty.commited}`;
}