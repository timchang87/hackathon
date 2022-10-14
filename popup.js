//chrome.extension.getBackgroundPage().console.log("This is a popup!");
const submissionForm = document.getElementById('submissionForm');
const searchBar = document.getElementById('searchBar');
const submitButton = document.getElementById('submitButton');
let searchValue = searchBar.value;
let endpoint = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchValue}&key=AIzaSyAq_H_sghOVRxbrXdC76Pbd-NMTMBjezBo`

//TRY ANOTHER TUTORIAL
// let queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";
const apiKey = 'v9P8xDOEoiDUfqFS0FhEn6SWR5oldcQspuSywTOdT-E-eL85rV0f2YE3A6O9jSJuMGLOfvoy9jIZT43I-xU-voAgyfRYsCru66w6HWpIIP9hh0souABSpQPBxxhJY3Yx'

submissionForm.addEventListener('click', ()=>{
    fetch(queryURL), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Auothorization": `Bearer ${apiKey}`
        },
        data: {
            term: 'jerk chicken',
            location: 'Toronto'
        }
    }
        .then((response) => response.json())
        .then((data) => console.log(data));
        //.then((data) =>chrome.extension.getBackgroundPage().console.log(data));
})



//YELP INFO:
// Client ID
// 7ZloVo9eWsavYdkZodoSMA

// API Key
// v9P8xDOEoiDUfqFS0FhEn6SWR5oldcQspuSywTOdT-E-eL85rV0f2YE3A6O9jSJuMGLOfvoy9jIZT43I-xU-voAgyfRYsCru66w6HWpIIP9hh0souABSpQPBxxhJY3Yx


