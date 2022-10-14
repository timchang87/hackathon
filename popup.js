chrome.extension.getBackgroundPage().console.log("This is a popup!");
const submissionForm = document.getElementById('submissionForm');
const searchBar = document.getElementById('searchBar');
const submitButton = document.getElementById('submitButton');

let searchValue = searchBar.value;
let endpoint = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchValue}%20in%20Sydney&key=AIzaSyAq_H_sghOVRxbrXdC76Pbd-NMTMBjezBo`

console.log(searchBar.value);
submitButton.addEventListener('click', ()=>{
    console.log(searchBar.value);
    // fetch(endpoint)
    //     .then((response) => response.json())
    //     .then((data) => console.log(data));
})