const cards = [];

document.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Form has been submitted!");
    let newCard = {
        name: document.getElementById('name').value,
        url: document.getElementById('url').value,
        desc: document.getElementById('desc').value
    }
    cards.push(newCard);

    let cardsContainer = document.getElementById('cards-container');
    let thisCard = `<div class="card">
                        <img src="${newCard.url}" alt="">
                        <div class="card-body">
                            <h4>${newCard.name}</h4>
                            <p>${newCard.desc}</p>
                        </div>
                        </div>`;
        cardsContainer.innerHTML += thisCard;

});