// Select button and image elements
const button = document.getElementById('cat-but');
const img = document.getElementById('cat-pic');

// Fetch the cat image
function getCatPic() {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => {
    if (response.ok) {
        return response.json();
    }
    else {
        alert("HTTP-Error: "+response.status);
    }
    })
    .then(data =>{
        const catImageUrl = data[0].url;
        img.src = catImageUrl;
    })
}

// Event Listener for the button
button.addEventListener('click', getCatPic);