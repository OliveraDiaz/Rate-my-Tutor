const submitRating = async (event) => {
    event.preventDefault();

    const rateing = document.getElementById('#rateingSelect').value
   

    if (rateing) {
        const response = await fetch('/api/tutors', {
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