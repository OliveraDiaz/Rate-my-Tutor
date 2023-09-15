const submitRating = async (event) => {
    event.preventDefault();

    const rateing = document.getElementById('#rateingSelect').value
   // produce sum for tutors rating
   // fetch request get ratings using dot notattion in a new array
   // loop through rating data array and apply math (helper)
   //require util in js, run js function 

    if (rateing) {
        const response = await fetch('/tutors', {
            method: 'POST',
            body: JSON.stringify({rateing }),
            headers: { 'Content-Type': 'application/json'},
        });
        console.log(response)
    }
}
document
.querySelector('.rateingSelect')
.addEventListener('submit', submitRating);