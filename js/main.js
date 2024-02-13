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
    for (const { id, title, img, desc} of cardData) {
        // Pass unique text content, ID, and onclick handler for each card
        const clickHandler = () => //
        Swal.fire({
            imageUrl: img,
            text: desc,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
        makeCard(title, id, clickHandler);
    }
}

// DATA FOR ALL CARDS
const cardData = [
    // 2020
    { id: 'card1', title: 'Some Light Thrifting', img: '../../images/2020/mike-at-garment.jpg',
    desc: "Ah yes, the garment district!! :)"},
    { id: 'card2', title: 'You\'re Favorite View!', img: '../../images/2020/memDrive.png',
    desc: "Ah yes, mem drive!! :)" },
    { id: 'card3', title: 'Ojitos Lindos', img: '../../images/2020/ojitos-lindos.jpg',
    desc: "Ah yes, tour first pic :)" },
    { id: 'card4', title: 'The Sweet Beginning', img: '../../images/2020/our-first-pic.jpg',
    desc: "Ah yes, the garment district!! :)" },
    { id: 'card5', title: 'A Bad Day To Be Shoes', img: '../../images/2020/broken-shoes.jpg',
    desc: "Ah yes, the garment district!! :)" },
    { id: 'card6', title: 'A Light Selfie', img: '../../images/2020/light-selfie.jpg',
    desc: "Ah yes, the garment district!! :)" }
    //2021
    //2022
    //2023
    //2024
];

