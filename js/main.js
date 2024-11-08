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
function makeNewCard(textContent, cardId, img, clickHandler) {
    const page = document.querySelector('#pageContent') // all cards container
    const card = document.createElement('div') // single card
    const cardButton = document.createElement('a') // clickable card area (all)

    const card_image_cont = document.createElement('div') // container for card image
    const card_image = document.createElement('img') // image..
    const card_image_text = document.createElement('div')
    card_image_text.textContent = textContent
    card.onclick = clickHandler
    card.classList.add('card-txt')

    card_image.src = img
    card_image.classList.add('card-image')

    card.appendChild(cardButton)
    cardButton.appendChild(card_image_cont)
    card_image_cont.appendChild(card_image)
    card.appendChild(card_image_text)
    card.id = cardId

    page.appendChild(card)

    
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
        makeNewCard(title, id, img ,clickHandler);
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
    { id: 'card1', title: 'See..There WAS a Reef!', img: '../../images/2021/lighthouse-reef.jpg',
        desc: `This picture is so cute! And yo this did jip us. They always put a reef on` },
    { id: 'card2', title: 'When I\m Wit You', img: '../../images/2021/napping.jpg',
        desc: "Ah yes, the garment district!! :)" },
    { id: 'card3', title: 'Yum Yum Yum!', img: '../../images/2021/hibatchi1.jpg',
        desc: `On this night we both discovered we share a love for dinner and a show` },
    { id: 'card4', title: 'Vive El Perreo!', img: '../../images/2021/goofy.jpg',
        desc: "Ah yes, the garment district!! :)" },
    { id: 'card5', title: 'Focusing On You', img: '../../images/2021/nocta.jpg',
        desc: `Our mini vacation up to Manchester, this pic has always gone hard` },
    { id: 'card6', title: 'Lean On Me!!', img: '../../images/2021/leaning.jpg',
        desc: `Lmao this one is random but soo soo funny` },
    { id: 'card7', title: 'The Color Of The Day Is..', img: '../../images/2021/good-pic.jpg',
        desc: `I know this is one of your favorite photos of us.It's grown on me so much
            its swoly become one of my favorites.` },
    { id: 'card8', title: 'We Love Imporv Dates', img: '../../images/2021/date.jpg',
        desc: `One of the many malls in MA we have visited. this was a post work dinner :) ` },
    { id: 'card9', title: 'All Cozy In Bed', img: '../../images/2021/laying-in-bed.jpg',
        desc: `I'm pretty sure this was that night we made that funny ass tiktok` },
    { id: 'card10', title: 'Our First Valentine', img: '../../images/2021/salt-bae.jpg',
        desc: `We took a trip up to Portsmouth and had a great looking in all the shops 
        and having good eats` },
    { id: 'card11', title: 'Day at the Forts', img: '../../images/2021/long-feet.jpg',
        desc: `I'm sorry I was in such a shitty mood this day. The sun was out
            , we looked good, my baby was with me and happy. What more should I ask for?    
            Well i guess I could ask for my FEET TO NOT BE SO DUMB LONG` },
    { id: 'card12', title: 'Come on Man...', img: '../../images/2021/thats-fucked-up-man.jpg',
        desc: `I don't this this need an explanation..` },
    { id: 'card13', title: 'Hidden Gem', img: '../../images/2021/hidden-gem.jpg',
        desc: `I don't remember taking this photo but we look so cute - one of my new 
        faves from the past` },
    { id: 'card14', title: 'One with nature!', img: '../../images/2021/hike1.jpg',
        desc: `So young, so happy, so full of energy lmao!! but also this was such a fun day with you
        and.....` }, 
    { id: 'card15', title: 'Great Company', img: '../../images/2021/hill-top.jpg',
        desc: `..Stanley & Anthony! This hike was mad fun especially with them - looking
        forward to going back this spring / summer!` }, 
    { id: 'card16', title: 'Hang in there baby', img: '../../images/2021/hanging-here.jpg',
        desc: `He protec-but he also attack!` },
    { id: 'card17', title: '"The green crab is my vavorite!"', img: '../../images/2021/aqua.jpg',
        desc: `Maybe now that you're an ocean expert we should go back lol` },
    { id: 'card18', title: 'Blossoms', img: '../../images/2021/white-flowers.jpg',
        desc: `These flowers are so beautiful, when I walked to the bus on those early mornings 
            in charlstown, I only could think about you <3` },
    { id: 'card19', title: 'azir', img: '../../images/2021/azir.jpg',
        desc: `Nothing specials.. just azir` },
    { id: 'card20', title: 'WE OUTSIDE', img: '../../images/2021/we-outside.jpg',
        desc: `Yes... the line was long but we had a time!!!`},
    { id: 'card21', title: 'pretty in blue', img: '../../images/2021/beauty.jpg',
        desc: `I mean wow... do I even need to say anything?` },
    { id: 'card22', title: 'babys', img: '../../images/2021/126clifton.jpg',
        desc: `Do you recognize them?  I dont lol,
               It's crazy to think about us back then.. but I love you so so dearly and I know you love 
                me aswell. I cherish you so much and I want you to know that I will never hurt, never wrong you, and always be here 
                protecting you `  },
    { id: 'card22', title: 'Rock the boat', img: '../../images/2021/boatday.jpg',
        desc: `Remeber how excited you were to be able to have a boat day with our friends up in Maine? This was such a good time!` },
    { id: 'card23', title: 'Double Trouble', img: '../../images/2021/double-trouble.jpg',
        desc: `This was.. an eventful day to say the least! my forever party buddy` },
    { id: 'card24', title: 'Rachet HBD', img: '../../images/2021/ratchet-hbd.jpg',
        desc: `I mean wow... do I even need to say anything?` },
];
const cardData2022 = [
    // 2022
    //{ id: 'card1', title: '', img: '../../images/2022/.jpg',
    //desc: `
    //       `},
        { id: 'card1', title: 'peaksparty', img: '../../images/2022/peaks.jpg',
        desc: `Yaa maahnnn. Ya makin me craaaazzzyyy`},
        { id: 'card1', title: 'poo', img: '../../images/2022/.jpg',
    desc: `
          `},
    { id: 'card1', title: '', img: '../../images/2022/.jpg',
    desc: `
          `},
    { id: 'card1', title: '', img: '../../images/2022/.jpg',
    desc: `
          `},
    { id: 'card1', title: '', img: '../../images/2022/.jpg',
    desc: `
          `},
    { id: 'card1', title: '', img: '../../images/2022/.jpg',
    desc: `
          `},
    { id: 'card1', title: '', img: '../../images/2022/.jpg',
    desc: `
          `},
    { id: 'card1', title: '', img: '../../images/2022/.jpg',
    desc: `
          `},
    { id: 'card1', title: '', img: '../../images/2022/.jpg',
    desc: `
          `},
    { id: 'card1', title: '', img: '../../images/2022/.jpg',
    desc: `
          `},
    ]

