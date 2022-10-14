chrome.extension.getBackgroundPage().console.log("This is a popup!");
const submissionForm = document.getElementById('submissionForm');
const searchBar = document.getElementById('searchBar');
const submitButton = document.getElementById('submitButton');

let searchValue = searchBar.value;
let endpoint = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchValue}&key=AIzaSyAq_H_sghOVRxbrXdC76Pbd-NMTMBjezBo`


submissionForm.addEventListener('submit', ()=>{
    fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Sydney&key=AIzaSyAq_H_sghOVRxbrXdC76Pbd-NMTMBjezBo')
        .then((response) => response.json())
        .then((data) => console.log(data));
})
