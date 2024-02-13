// const cardData = require('./cardsData.js');

console.log('Welcome to the year of Covid. MC')
// SweetAert ////////////////////////////////////////////////////////////////
    function robots() {
            Swal.fire({
                imageUrl: '../../images/robot.jpg',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            console.log('Robot Popup viewed')
        }
    function customAlert() {
            Swal.fire({
                icon: 'info',
                title: 'Hi! I\'m a custom Alert',
                text: 'I\'m some description text',
                confirmButtonText: 'Move Along',
            })
            console.log('Custom Alert Viewed ')
    }

// JS FUNCTIONS TO DYNAMICLY CREATE CARDS/////////////////////////////////////

//MAKES SINGLE CARD APPENDED TO PAGE
function makeCard(textContent, cardId, clickHandler) {
    const card = document.createElement('button');
    const page = document.querySelector('#pageContent');
    card.textContent = textContent;
    card.id = cardId;
    // Set onclick handler based on the provided function
    card.onclick = clickHandler;
    card.classList.add('Card');
    page.appendChild(card);
}
//USES CARDDATS DATA ARRAY TO MAKE MULTIPEL CARDS   
function createAllCards() {
    for (const { id, text, img} of cardData) {
        // Pass unique text content, ID, and onclick handler for each card
        const clickHandler = () => //
        Swal.fire({
            imageUrl: img,
            text: 'A Heartfelt personal message - dependent on the img',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
        makeCard(text, id, clickHandler);
    }
}

// DATA FOR ALL CARDS
const cardData = [
    { id: 'card1', text: 'Card 1 Text', img:  '../../images/Michabella.jpg'},
    { id: 'card2', text: 'Card 2 Text' },
    { id: 'card3', text: 'Card 3 Text' },
    { id: 'card4', text: 'Card 4 Text' },
    { id: 'card5', text: 'Card 5 Text' }
];

