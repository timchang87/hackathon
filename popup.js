
//chrome.extension.getBackgroundPage().console.log("This is a popup!");
const submissionForm = document.getElementById('submissionForm');
const searchBar = document.getElementById('searchBar');
const submitButton = document.getElementById('submitButton');
const test = document.getElementById('test');
let searchValue = searchBar.value;
// let endpoint = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchValue}&key=AIzaSyAq_H_sghOVRxbrXdC76Pbd-NMTMBjezBo`

//TRY ANOTHER TUTORIAL
let queryURL = "https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972";
const apiKey = 'v9P8xDOEoiDUfqFS0FhEn6SWR5oldcQspuSywTOdT-E-eL85rV0f2YE3A6O9jSJuMGLOfvoy9jIZT43I-xU-voAgyfRYsCru66w6HWpIIP9hh0souABSpQPBxxhJY3Yx'

// submissionForm.addEventListener('submit', ()=>{
//     const myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer v9P8xDOEoiDUfqFS0FhEn6SWR5oldcQspuSywTOdT-E-eL85rV0f2YE3A6O9jSJuMGLOfvoy9jIZT43I-xU-voAgyfRYsCru66w6HWpIIP9hh0souABSpQPBxxhJY3Yx");

// const requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://api.yelp.com/v3/businesses/search?term=restaurants&location=92697", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
// })

const restaurants = [];
addEventListener('DOMContentLoaded', ()=> {
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer v9P8xDOEoiDUfqFS0FhEn6SWR5oldcQspuSywTOdT-E-eL85rV0f2YE3A6O9jSJuMGLOfvoy9jIZT43I-xU-voAgyfRYsCru66w6HWpIIP9hh0souABSpQPBxxhJY3Yx");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.yelp.com/v3/businesses/search?term=restaurants&location=92697", requestOptions)
  .then(response => response.json())
//   .then(response => console.log(response.businesses))
  .then(result => {
    return result['businesses'].filter(function(element){
        // console.log(element);
        if(element['review_count'] < 100) return element;
    })
  })
  .then(result => {
    console.log(result);
    //create elements to hold review count, name, location
    let name;
    let location;
    let count;
    //iterate through array
    for (let i = 0; i < result.length; i++) {
        //access name in current object and set it to name variable
        name = result[i]['name'];
        //access location in current object and set it to location variable
        location = result[i]['location']['display_address'];
        //access review count and set it to count variable
        count = result[i]['review_count'];
        let testing = document.createElement('p');
        testing.innerText = `${name} \n${location} \n Reviews:${count}\n`;
            //append them to document
    test.appendChild(testing);
    }
  })
  .then(result => console.log(result))
//   .then(result => {
//     test.innerText = result;
//     document.body.appendChild(test.innerText);
//   })
  .catch(error => console.log('error', error));
})

//YELP INFO:
// Client ID
// 7ZloVo9eWsavYdkZodoSMA

// API Key
// v9P8xDOEoiDUfqFS0FhEn6SWR5oldcQspuSywTOdT-E-eL85rV0f2YE3A6O9jSJuMGLOfvoy9jIZT43I-xU-voAgyfRYsCru66w6HWpIIP9hh0souABSpQPBxxhJY3Yx



