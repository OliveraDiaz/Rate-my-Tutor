function search_bar() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();

      
    if (input ='a'){
        document.location.replace('/tutor/1');

    }
}

document
.querySelector('#searchbutton')
.addEventListener('submit', search_bar());