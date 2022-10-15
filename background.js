// console.log('test');
// const submissionForm = document.getElementById('submissionForm');
// const searchBar = document.getElementById('searchBar');
// const submitButton = document.getElementById('submitButton');
// let searchValue = searchBar.value;
// let endpoint = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchValue}&key=AIzaSyAq_H_sghOVRxbrXdC76Pbd-NMTMBjezBo`

// let queryURL = "https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972";
// const apiKey = 'v9P8xDOEoiDUfqFS0FhEn6SWR5oldcQspuSywTOdT-E-eL85rV0f2YE3A6O9jSJuMGLOfvoy9jIZT43I-xU-voAgyfRYsCru66w6HWpIIP9hh0souABSpQPBxxhJY3Yx'

// submissionForm.addEventListener('submit', ()=>{
//     var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer v9P8xDOEoiDUfqFS0FhEn6SWR5oldcQspuSywTOdT-E-eL85rV0f2YE3A6O9jSJuMGLOfvoy9jIZT43I-xU-voAgyfRYsCru66w6HWpIIP9hh0souABSpQPBxxhJY3Yx");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

fetch("https://api.yelp.com/v3/businesses/search?term=restaurants&location=92697", requestOptions)
  .then(alert('background'))
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
// })


