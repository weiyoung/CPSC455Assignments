const cards = [];

document.addEventListener('submit', (e)=>{
    e.preventDefault();

    const name = document.getElementById('name').value;
    const url = document.getElementById('url').value;
    const desc = document.getElementById('desc').value;

    if (name.length < 1 || url.length < 1 || desc.length < 1) {
        alert("Please ensure all fields are filled in!");
    } else {
        let newCard = {
            name: name,
            url: url,
            desc: desc
        }
        cards.push(newCard);

        let thisCard = `<li class="card">
                        <img src="${newCard.url}" alt="${newCard.name}">
                        <div class="card-body">
                            <h4>${newCard.name}</h4>
                            <p>${newCard.desc}</p>
                        </div>
                        </li>`;
        
        const cardsContainer = document.getElementById('cards-container');
        cardsContainer.innerHTML += thisCard;

        document.querySelector('form').reset();
        localStorage.setItem('MyCards', JSON.stringify(cards));
    }
});

function showAll() {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = "";
    let shrekCard = `<li class="card">
                    <img src="https://i.imgflip.com/18pk4c.jpg" alt="">
                    <div class="card-body">
                        <h4>Shrek</h4>
                        <p>This is my <s>card</s> swamp! You won't be able to delete it.</p>
                    </div>
                    </li>`;
    cardsContainer.innerHTML += shrekCard;
    
    let myCards = localStorage.getItem('MyCards');
    myCards = JSON.parse(myCards);
    if (myCards == null) return;
    for (const card of myCards) {
        let thisCard = `<li class="card">
                        <img src="${card.url}" alt="${card.name}">
                        <div class="card-body">
                            <h4>${card.name}</h4>
                            <p>${card.desc}</p>
                        </div>
                        </li>`;
        
        cardsContainer.innerHTML += thisCard;
    }
}

function hideAll() {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = "";
}

function deleteAll() {
    location.reload();
    localStorage.clear();
}