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
function createAllCards(dataMatrix) {
    for (const { id, title, img, desc} of dataMatrix) {
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
const cardData2020 = [
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
    desc: "Ah yes, the garment district!! :)" },
    { id: 'card7', title: 'You...Give Me Wings', img: '../../images/2020/mikes-wings.jpg',
    desc: "Ah yes, the garment district!! :)" },
    { id: 'card8', title: 'Too Close For Comfort', img: '../../images/2020/couch-selfie.jpg',
    desc: "Ah yes, the garment district!! :)" },
    { id: 'card9', title: 'Naughty AND Nice', img: '../../images/2020/goodvsevil.jpg',
    desc: "Ah yes, the garment district!! :)" },
    { id: 'card10', title: 'Some-ting-sweet', img: '../../images/2020/something-sweet.jpg',
    desc: "Ah yes, the garment district!! :)" },
    { id: 'card11', title: 'Newbury Adventures', img: '../../images/2020/cartier.jpg',
    desc: "Ah yes, the garment district!! :)" },
    { id: 'card12', title: 'A Christmas Miracle!', img: '../../images/2020/christmas-card.jpg',
    desc: "Ah yes, the garment district!! :)" },
    { id: 'card13', title: 'Grogu Green', img: '../../images/2020/grogu-green.jpg',
    desc: "Ah yes, the garment district!! :)" }
];
const cardData2021 = [
    //2021
    // { id: 'card', title: '', img: '../../images/2021/.jpg',
    // desc: "Ah yes, the garment district!! :)" }
    { id: 'card1', title: 'See..There WAS a Reef!', img: '../../images/2021/lighthouse-reef.jpg',
    desc: "Ah yes, the garment district!! :)" },
    { id: 'card2', title: 'When I\m Wit You', img: '../../images/2021/napping.jpg',
    desc: "Ah yes, the garment district!! :)" },
    { id: 'card3', title: 'Yum Yum Yum!', img: '../../images/2021/hibatchi1.jpg',
    desc: "Ah yes, the garment district!! :)" },
    { id: 'card4', title: 'Vive El Perreo!', img: '../../images/2021/goofy.jpg',
    desc: "Ah yes, the garment district!! :)" },
    { id: 'card5', title: 'Focusing On You', img: '../../images/2021/nocta.jpg',
    desc: "Ah yes, the garment district!! :)" },
    { id: 'card6', title: 'Lean On Me!!', img: '../../images/2021/leaning.jpg',
    desc: "Ah yes, the garment district!! :)" },
    { id: 'card7', title: 'The Color Of The Day Is..', img: '../../images/2021/good-pic.jpg',
    desc: "Ah yes, the garment district!! :)" },
    { id: 'card8', title: 'We Love Imporv Dates', img: '../../images/2021/date.jpg',
    desc: "Ah yes, the garment district!! :)" }
]

