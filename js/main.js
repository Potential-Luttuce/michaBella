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

// DATA FOR ALL CARDS via years
const cardData2020 = [
    // 2020
    { id: 'card1', title: 'Some Light Thrifting', img: '../../images/2020/mike-at-garment.jpg',
    desc: `Ah yes, the garment district!
    We had such a fun day in Boston together. 
    I attempted to recreate a very cute insta post you made a few days earlier lol
        How'd I do?`},
    { id: 'card2', title: 'Your Favorite View!', img: '../../images/2020/memDrive.png',
    desc: `You loved this view of the city so much, for good reason.
        But damn woman you almost broke my neck trying to park for this pic!!` },
    { id: 'card3', title: 'Ojitos Lindos', img: '../../images/2020/ojitos-lindos.jpg',
    desc: `Need I say more? You looked so beautiful this day and this has always
        been one of my favorite pictures of you.` },
    { id: 'card4', title: 'The Sweet Beginning', img: '../../images/2020/our-first-pic.jpg',
    desc: `Our official first picture together! Look how little we both are. 
        thinking back I have never had as much fun with someone as I have with you, babe.` },
    { id: 'card5', title: 'A Bad Day To Be Shoes', img: '../../images/2020/broken-shoes.jpg',
    desc: `Okay. Laught it up. I quite literally blew a shoe out trying to make 
        you laugh.` },
    { id: 'card6', title: 'A Light Selfie', img: '../../images/2020/light-selfie.jpg',
    desc: `I was so nervous this night and this selfie really made me nervous. 
        But it was an incredbly fun date!` },
    { id: 'card7', title: 'You...Give Me Wings', img: '../../images/2020/mikes-wings.jpg',
    desc: `this one si going to be cheesy, but you make me so happy and have always been
        their for me when I needed you. You are my Angel :,)` },
    { id: 'card8', title: 'Too Close For Comfort', img: '../../images/2020/couch-selfie.jpg',
    desc: `So what if we say miles apart on your love seat? 'Heres mom and dad back
        in the day'` },
    { id: 'card9', title: 'Naughty AND Nice', img: '../../images/2020/goodvsevil.jpg',
    desc: `We are so funny lol but this picture is another top 10 moment` },
    { id: 'card10', title: 'Some-ting-sweet', img: '../../images/2020/something-sweet.jpg',
    desc: `Okay so this one might be random but damn how good do these look??` },
    { id: 'card11', title: 'Newbury Adventures', img: '../../images/2020/cartier.jpg',
    desc: `You are my diamond, you are so bright in my life and there isn't
        another person that could compare to you` },
    { id: 'card12', title: 'A Christmas Miracle!', img: '../../images/2020/christmas-card.jpg',
    desc: `Our unofficial christmad card from back in the day` },
    { id: 'card13', title: 'Grogu Green', img: '../../images/2020/grogu-green.jpg',
    desc: `You still got this make up? The ring camera light on point, helmet on point,
        makeup on point, you look stunning` }
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

