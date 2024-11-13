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
// function makeCard(textContent, cardId, clickHandler) {
//     const card = document.createElement('button');
//     const page = document.querySelector('#pageContent');
//     card.textContent = textContent;
//     card.id = cardId;
//     // Set onclick handler based on the provided function
//     card.onclick = clickHandler;
//     card.classList.add('Card');
//     page.appendChild(card);
// }
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
//////////////////////USES CARDDATS DATA ARRAY TO MAKE MULTIPEL CARDS   
function createAllCards(dataMatrix) {
    for (const { id, title, img, desc} of dataMatrix) {
        // Pass unique text content, ID, and onclick handler for each card
        const clickHandler = () => //
        Swal.fire({
            title: title,
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
    { id: 'card19', title: 'azir', img: '../../images/2021/azir1.jpg',
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
    { id: 'card22', title: 'Rock the boat', img: '../../images/2021/boatday.jpeg',
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
    { id: 'card2', title: 'RachetHappyBirthday', img: '../../images/2022/bday.jpeg',
    desc: `This bday party was so fun, the group at Mijas madeit a great time and 
            of course we ended the night at HONG KONG lol
          `},
    { id: 'card3', title: 'Quick Detour', img: '../../images/2022/beach.jpg',
    desc: `I dont remember exactly where but I think this was York. we stopped, 
            at a snack and enjoyed the waves before our drive home
          `},
    { id: 'card4', title: 'Boat Party!', img: '../../images/2022/boat-night.png',
    desc: `Good company, good pizza, good drinks, and casco bay. 
        What more could we ask for?
          `},
    { id: 'card5', title: 'Felipe mi crazzy', img: '../../images/2022/burrito.png',
    desc: `Where were we coming from ? Anyways those margs had no business being THAT
            strong..
          `},
    { id: 'card6', title: 'Plus One', img: '../../images/2022/carter-wedding.jpg',
    desc: `This wedding was so fun but without you as my plus one I would not have 
        had anywhere as much fun! I love my forever plus one :)
          `},
    { id: 'card7', title: 'THE WOORLD CHAMPIONS', img: '../../images/2022/celtics.jpeg',
    desc: `This was a super fun game, I can't wait to go again or share this moment with Carmelo
            and his fam one day!
          `},
    { id: 'card8', title: 'She Cozy Cosy', img: '../../images/2022/comfy-cozy.jpeg',
    desc: `Look at our old place! But also you look so cute and comfortable in this pic. Baby :)
          `},
    { id: 'card9', title: 'Day in the park', img: '../../images/2022/commons.jpeg',
    desc: `Walking through the commons was a fun time and we did a little mini shoot.
            I like winter but spring / summer in Boston with you (or anywhere) is best!)
          `},
    { id: 'card10', title: 'Oh Brother this guy STINKS', img: '../../images/2022/concert.jpeg',
    desc: `She laughed, she cried..no wait.. she just cried. Unreal concert so glad I was able to
            experience this with you!
          `},
    { id: 'card11', title: 'Contessa Date Night', img: '../../images/2022/contessa.jpeg',
        desc: `This was such a posh dinner date I really enjoyed it, and the free cake was lit
            `},
    { id: 'card12', title: 'Ben to my Jerry', img: '../../images/2022/gazibo.jpeg',
        desc: `Dirt cup/cake was the flavor they let us try? This wasa good time we should go back to
        burlington in general

              `},
    { id: 'card13', title: 'She always be looking over me', img: '../../images/2022/heaven.jpeg',
    desc: `Don't be sad, I'm in heaben now
            `},
    { id: 'card15', title: 'Memorial picnic day', img: '../../images/2022/memorial-picnic.jpeg',
        desc: `This day was a lot of fun, playabowls, picnic, and just chillen in the grass w/ my baby
                look how cute you are ;')
                `},
    { id: 'card16', title: 'I dont rap, I picture paint', img: '../../images/2022/muse.jpg',
        desc: `lest we forget those ladys that got sauced on that sangria?? Also everyone that night
                loved us 
                `},
    { id: 'card17', title: 'couple of nerds', img: '../../images/2022/museum.jpeg',
    desc: `and NERD stands for damn I love my baby!!
          `},
    { id: 'card18', title: '"Look how cute mommy and daddy were"', img: '../../images/2022/parents-wedding.jpg',
    desc: `WERE?? Nah but really this is what our kids will say one day
            `},
    { id: 'card19', title: 'Not once...', img: '../../images/2022/picnic.png',
        desc: `But TWICE did we see a proposal lol, super fun picnic with great views from Boston Esplande
                `},
    { id: 'card20', title: 'Whole family out in the sun', img: '../../images/2022/plants.jpeg',
        desc: `FR, RIP to all out plants from 126 Clifton, but look how happy they looked soakin up the rays
                `},
    { id: 'card21', title: 'Dont laugh', img: '../../images/2022/pullingmybaby.jpg',
        desc: `This picture is top 2 and it aint 2 lmaoooo, but fr what a fun 4th of July this was at the Boles
                 camp :)
                `},
    { id: 'card22', title: 'Let Pass Let PAss!!!!', img: '../../images/2022/racing.jpeg',
        desc: `You hear that? It's the sound of Lewis Hamilton crying, or me smacking against the barrier
                `},
    { id: 'card23', title: 'SKANK', img: '../../images/2022/sk.jpg',
        desc: `OK but all jokes aside this is a very cute pic :)
                `},
    { id: 'card24', title: 'Valentines pasta night', img: '../../images/2022/strega.jpg',
        desc: `I'm blessed to have this beautiful view all the time, I love you so much by sweet baby
                `},
    { id: 'card25', title: 'Simple Simons', img: '../../images/2022/walk-selfie.jpeg',
        desc: `Such a cusal picture and we arn't doing anything that exciting, just a walk around the neighborhood.
            But I love moments like this with you <3
                `},
    { id: 'card26', title: 'Freeze! In the name of love', img: '../../images/2022/winter-walk.jpeg',
    desc: `Break it don't shake it baby
    `},
    { id: 'card27', title: 'Shooters shoot', img: '../../images/2022/wisdom.jpeg',
    desc: `Hands up and give me a kith
            `},
];
const cardData2023 = [
    { id: 'card1', title: 'THE BABY HAIRS', img: '../../images/2023/baby-hair.jpeg',
        desc: `That one time you had the most perfect baby hair crl while poopin
              `},
    { id: 'card2', title: 'smol girl big chair', img: '../../images/2023/big-seat.jpeg',
    desc: `We only took this pic because the chair is MASSIVE and you wanted to see lol
    `},
    { id: 'card3', title: 'Crunch Time', img: '../../images/2023/biology.jpeg',
        desc: `Home girl looks so down bad, I think this was one of your last exams / quizes that semester
    `},
    { id: 'card4', title: 'R&B Concert', img: '../../images/2023/brent.jpeg',
        desc: `This concert was a lot of fun especially because we had great seats, 
        I love experiences like this with you
    `},
    { id: 'card5', title: 'She came, she saw, she..well lets leave it at that..', img: '../../images/2023/burton.jpeg',
        desc: `I'm jokin I'm jokin, you did so well on your first time and have come leaps and bounds farther since then
        Always so proud of you.But for real you hit rock bottom at the top of this rock, only 
            holding this snow chink helpped ease the pain lmao
    `},
    { id: 'card6', title: 'ON , not IN', img: '../../images/2023/cape-dinner.jpeg',
        desc: `This little cape escape was so fun, I can't wait to do it again!
    `},
    { id: 'card7', title: '\HOW LONG IS THIS LINE??\'', img: '../../images/2023/epcot-ball.jpeg',
        desc: `Mission to space almosr turned into mission to the toilet if you know what I mean, disney was
        so fun I really want to see all the parks in the world with you
    `},
    { id: 'card8', title: 'dont...move...a...muscle', img: '../../images/2023/foxwoods.jpeg',
        desc: `I cant explain this picture but its so us lmao. Also Kenny G was wild
    `},
    { id: 'card9', title: 'Once I make MY move...', img: '../../images/2023/harry-bella.jpeg',
        desc: `That's right.. Black could be anywhere
    `},
    { id: 'card10', title: 'lil baby holding a lil baby', img: '../../images/2023/holding-max.jpeg',
        desc: `Look how little he was aww, I love how gentle yu are with kids and babys I love it
    `},
    { id: 'card11', title: 'drop it lik it\'s..', img: '../../images/2022/hotpot.jpeg',
        desc: `HOT POT. That day a monster was born
                `},
    { id: 'card12', title: 'Id go back just for the meatballs ngl', img: '../../images/2023/ikea.jpeg',
        desc: `You have the same look on your face as I do on hour 3 shopping with you lmao
    `},
    { id: 'card13', title: 'City Views', img: '../../images/2023/jordan.jpeg',
        desc: `DAMN would it kill him to smile? Jk but Jordan visiting was so fun
    `},
    { id: 'card14', title: 'Kissimmee', img: '../../images/2023/kissimmee.jpeg',
        desc: `Nothing to say, just a nice pic
    `},
    { id: 'card15', title: 'Oh she waaaaavy', img: '../../images/2023/miami-nails.jpeg',
        desc: `Your nails looked so good for this trip! This was a good time but damn were we siiiiick
    `},
    { id: 'card16', title: 'shes beauty and shes grace..', img: '../../images/2023/moana.jpeg',
        desc: `Oh sike thats just moana, I love feeling like a little kid woth you, aka the waterfall thing
    `},
    { id: 'card17', title: 'L for double LOOOOOSSSERRRR', img: '../../images/2023/put-shack.jpeg',
        desc: `I call rematch because thats wild you hurt my (and pats) pride that night
    `},
    { id: 'card18', title: 'Calm before the strom', img: '../../images/2023/ski-trip.jpeg',
        desc: `Our first ski day together and I was so proud to show off my tufts beanie for my baby.
                RIP that jacket ew
    `},
    { id: 'card19', title: 'smol', img: '../../images/2023/small-gloves.jpeg',
        desc: `where did her fingers goo omg.. must have been some shrinking potion in that Maine Blueberry amiright
    `},
    { id: 'card20', title: 'bald head', img: '../../images/2023/small-max.jpeg',
        desc: `This picture is just so goofy I know  i hope it makes you laugh
    `},
    { id: 'card21', title: 'BITCH IM A MOTHA', img: '../../images/2023/st-patrick.jpeg',
        desc: `nO DRAMA BUT ONLY SOMETIMES WHEN I DRINK VODKA
    `},
    { id: 'card22', title: 'dont laugh', img: '../../images/2023/sunny-dave.jpeg',
        desc: `'I'll call it...SUNNY DAY' But fr those hit so hard idk what you put in them
    `},
    { id: 'card23', title: 'Tiki Rock', img: '../../images/2023/tiki.jpeg',
        desc: `All and all aside, this was a fun time bc we got hot pot before lol, tiki rock was a fun time and 
        when you did the cotten eyed joe or something
    `},
    { id: 'card24', title: 'Time out dates', img: '../../images/2023/time-out-market.jpeg',
        desc: `I love our dates at timeout market its always a time lmao
    `}
              
];
const cardData2024 = [
{ id: 'card1', title: 'July Picnic', img: '../../images/2024/bday-picnic.jpeg',
desc: `This was a really fun day, trying on rings, walking arounf back back and celebrating your birthday
    in the commons!
`},
{ id: 'card2', title: 'Which yo lookin ass', img: '../../images/2024/beach-day.jpeg',
desc: `Besides the water being buns cold it felt like tropic water bc it ws so clear!!
`},
{ id: 'card3', title: 'its about to be one of those nights', img: '../../images/2024/bed-mike.jpeg',
desc: `Idk what the context for this picture is but I thought it captured us pretty well lol
`},
{ id: 'card4', title: 'Me + U = <3', img: '../../images/2024/bella-mike.jpeg',
desc: `From our day at Kimball famrs, I think this was shortly before you aced a massive hole in one
`},
{ id: 'card5', title: 'City Bike', img: '../../images/2024/biking.png',
desc: `Fun little bike rides around the city with you are the best, but its time for some winter sports!!
`},
{ id: 'card6', title: 'Good thing you had those little shorts on!', img: '../../images/2024/boat-day.jpg',
desc: `Our day in portsmouth was a lot of fun, adventures with you make me so happy baby :)
`},
{ id: 'card7', title: 'bumpbubumpbump', img: '../../images/2024/bumpercar.png',
desc: `Who were the bigger kids? actually, dont answer that
`},
{ id: 'card8', title: 'Alllll aboard!!!', img: '../../images/2024/conway-train.jpeg',
desc: `This was such a beautiful experience, but damn that person really did BLOW up that bathroom lol
`},
{ id: 'card9', title: 'Suprise!', img: '../../images/2024/corgi.jpeg',
desc: `Just a cute corgi for you :)
`},
{ id: 'card10', title: 'My MIIIIIND', img: '../../images/2024/eclipse.jpeg',
desc: `And she was DETERMINED to see the moon block the sun
`},
{ id: 'card12', title: 'Ya little nasty', img: '../../images/2024/feet-skin.jpeg',
desc: `If I rember correctly you were doing this during dinner or instead of studying, wakala
`},
{ id: 'card13', title: 'The Biggest E', img: '../../images/2024/ferris-wheel.jpeg',
desc: `All the kings horses and all the kings men could not make those lines move faster
`},
{ id: 'card14', title: 'The big bang', img: '../../images/2024/fireworks.jpeg',
desc: `All things aside I had a really gun time at this wedding with you, we really busted a move as always ;)
`},
{ id: 'card15', title: 'Gazibo round 2?', img: '../../images/2024/gazibo.jpg',
desc: `I really love this picture, the backgroud, the gazibo, and you look so beautiful,
     your skin glowing and your hair flawless. u 8 girl
`},
{ id: 'card16', title: 'The universe speaks so loudly', img: '../../images/2024/fire-fly.jpeg',
desc: `I love you as if we were two fire flies doing a mating dance by the water. I love you so deeply that even in 
    the hard times something in me melts and I want nothing but to be with my baby
`},
{ id: 'card17', title: 'Fire bad, fire bad!', img: '../../images/2024/habatchi.jpeg',
    desc: `This hibatchi date in sopo was a lot of fun, we even got to help celebrate that dudes bday lol, the
        scorpian bowl went real hard too btw
`},
{ id: 'card18', title: 'lil man', img: '../../images/2024/jt-boat.jpeg',
    desc: `once again thank you for always loving my friends and family as if they were your own.
        after all, thats your god baby!
`},
{ id: 'card19', title: 'lil man round 2', img: '../../images/2024/jt.jpeg',
    desc: `This was after the church potluck whoch I am so gratefull for your help, you really pulled through and held
        your own out there. I may have given people to much money back but its all good, this was also just after
            another fun porthole sesh!
`},
{ id: 'card20', title: 'Ride em!', img: '../../images/2024/cow-girl.jpeg',
    desc: `idk how to spell it but that sound you hate that I make that goes 'aehhhhhhh', I probably just did it if im behing honest
`},{ id: 'card21', title: 'wiggle wiggle wiggle!', img: '../../images/2024/max.jpeg',
    desc: `He was so happy to make waffles with me lol
`},
{ id: 'card21', title: 'Its right behind me isnt it?', img: '../../images/2024/museum.jpeg',
    desc: `Leaning new things and looking at cool rocks with you. This was such a fun little date day in harvard square
`},
{ id: 'card22', title: 'laddy and the SKANK!', img: '../../images/2024/OLIVE-GARDEN.jpeg',
    desc: `Wathcing jayls graduation was fun..but putting down the drinks and food at olive garden was wild
`},
{ id: 'card23', title: 'FORTY YEARSSS', img: '../../images/2024/opera-house.jpeg',
    desc: `Title doesnt go woth the picture but this was so much fun I'm really excited for the nut cracker with you
`},
{ id: 'card24', title: 'Right to jail..right away!', img: '../../images/2024/prisoner.jpeg',
    desc: `Now thats more like it!!
        Nothing to say here, she probably deserved it, flappin those gums all day long
`},
{ id: 'card25', title: 'Okay lets start with the corners..', img: '../../images/2024/puzzle.jpg',
    desc: `Shes beauty and shes grace...shes miss united states!
`},
{ id: 'card26', title: 'Retro 1', img: '../../images/2024/retro-1.jpeg',
    desc: `IK this one doesnt belong here but this is a fun picture we took at scorpian, feels like 5ever ago
`},
{ id: 'card27', title: 'Retro 2', img: '../../images/2024/retro-2.jpeg',
    desc: `Another one that doesnt belong in the year but I LOVE THIS PHOTO SO SO SO MUCH
`},
{ id: 'card28', title: 'Look at me I am under de water', img: '../../images/2024/rooftop.jpeg',
    desc: `Sike we on top of the world! seriously though how long was that staircase? felt like redline in porter!!
`},
{ id: 'card29', title: 'Not once...', img: '../../images/2024/sick-baby-1.jpeg',
    desc: `
`},
{ id: 'card30', title: 'Not twice...', img: '../../images/2024/sick-baby-2.jpeg',
    desc: `
`},
{ id: 'card31', title: 'but three times...', img: '../../images/2024/sick-baby-3.jpeg',
    desc: `My baby was down bad this year but best belive ima stick beside her
`},
{ id: 'card32', title: 'sean white??', img: '../../images/2024/ski-dunks.jpeg',
    desc: `Short pulled up with the hardest board on the mountain and shreded after her pep talk cry
`},
{ id: 'card33', title: 'skys the limit', img: '../../images/2024/ski-selfi.jpeg',
    desc: `So we starting with double black diamonds at watchusett right??
`},
{ id: 'card34', title: 'No but for real..', img: '../../images/2024/sleepy-pat.jpeg',
    desc: `you didnt have to do him like that ut this is sstill so funny lmao
`},
{ id: 'card35', title: '1 star baby sitters', img: '../../images/2024/slide.jpeg',
    desc: `That time we yeeted a baby down the slide..
`},
{ id: 'card36', title: 'Tea please!', img: '../../images/2024/tea.jpeg',
    desc: `This was such a fun cute date, I had a great time and loved how much you enjoyed the little finger foods (me too)
`},
{ id: 'card37', title: 'I mustache you a question..', img: '../../images/2024/wedding-2.jpeg',
    desc: `you love me? cus I love you! this wedding was so fun and yet AGAIN we threw it down on the dance floor good lord
`},
{ id: 'card29', title: '', img: '../../images/2024/wilson.jpeg',
    desc: `Our favorite little farm, you are my favorite pumpkin :)
`},

]
//////////////////////// MAKE TV & BUTTONS
function tvBtnAction() {
    // const pwr_btn = document.getElementById('tv-pwr')
    // const info_btn  =document.getElementById('tv_info')
    // const play_btn = document.getElementById('tv_action')
    //pwr
    if (this.id == 'tv_pwr') {
        console.log(this.id)
        if (this.textContent == 'On') {
            this.textContent = 'Off'
          } else {
            this.textContent = 'On'
          }
    } else if (this.id == 'tv_action') {
        console.log(this.id)

        if (this.textContent == 'Play') {
            this.textContent = 'Pause'
            //Start video code goes here
          } else {
            this.textContent = 'Play'
            //play video code goes here
          }
    } else if (this.id == 'tv_info') {
        console.log(this.id)

        window.alert('Info requested..')
    }
  }

function makeTV() {
    const tv_container = document.getElementById('tv-container');
    // const antena = document.createElement('img')
    const tv_box = document.createElement('div')
    const tv_screen = document.createElement('div')
    const tv_btn_container = document.createElement('div')
    const tv_btn_pwr = document.createElement('button') //on-off
    const tv_btn_info = document.createElement('button')
    const tv_btn_action = document.createElement('button') //play-pause
    // const tv_btn_pwr = document.createElement('button')
    
    // antena.classList.add('antena');
    tv_box.classList.add('tv-box');
    tv_screen.classList.add('tv-screen');
    tv_btn_container.classList.add('tv-btn-container');
    tv_btn_pwr.classList.add('tv-btns');
    tv_btn_pwr.id = 'tv_pwr'
    tv_btn_info.classList.add('tv-btns');
    tv_btn_info.id = 'tv_info'
    tv_btn_action.classList.add('tv-btns');
    tv_btn_action.id = 'tv_action'

    // tv_container.appendChild(antena);
    tv_container.appendChild(tv_box);
    tv_box.appendChild(tv_screen);
    tv_box.appendChild(tv_btn_container)
    tv_btn_container.appendChild(tv_btn_info)
    tv_btn_container.appendChild(tv_btn_action)
    tv_btn_container.appendChild(tv_btn_pwr)
    tv_btn_pwr.textContent = 'On'
    tv_btn_info.textContent = 'Info'
    tv_btn_action.textContent = 'Play'

    //button actions changes
    tv_btn_pwr.onclick = tvBtnAction
    tv_btn_action.onclick = tvBtnAction
    tv_btn_info.onclick = tvBtnAction

}


function loadAllContent(year) {
    //Load years for card data
    if (year == 2020) {
        createAllCards(cardData2020)
    } else if (year == 2021) {
        createAllCards(cardData2021)
    } else if (year == 2022) {
        createAllCards(cardData2022)
    } else if (year == 2023) {
        createAllCards(cardData2023)
    } else {
        createAllCards(cardData2024)
    }
    //load year for media data
    makeTV()
}
// const fake = [
//     { id: 'card20', title: '', img: '../../images/2024/.jpg',
//         desc: `
//               `},
// ]
