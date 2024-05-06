const data = [
    {
        id:1,
        name: "The Book Eaters By Sunyi Dean", 
        descr:"An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.", 
        img: 'img/book1.png'
    },
    {
        id:2,
        name: "Cackle By Rachel Harrison", 
        descr:"Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.", 
        img: 'img/book2.png'
    },
    {
        id:3,
        name: "Dante: Poet of the Secular World By Erich Auerbach", 
        descr:"Auerbach's engaging book places the 'Comedy' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante's uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante's main themes.", 
        img: 'img/book3.png'
    },
    {
        id:4,
        name: "The Last Queen By Clive Irving", 
        descr:"A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.", 
        img: 'img/book4.png'
    },
    {
        id:5,
        name: "The Body By Stephen King", 
        descr:"Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.", 
        img: 'img/book3.png'
    },
    {
        id:6,
        name: "Carry: A Memoir of Survival on Stolen Land By Toni Jenson", 
        descr:"This memoir about the author's relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.", 
        img: 'img/book6.png'
    },
    {
        id:7,
        name: "Days of Distraction By Alexandra Chang", 
        descr:"A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.", 
        img: 'img/book7.png'
    },
    {
        id:8,
        name: "Dominicana By Angie Cruz", 
        descr:"A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez.", 
        img: 'img/book8.png'
    },
    {
        id:9,
        name: "Crude: A Memoir By Pablo Fajardo & ​​Sophie Tardy-Joubert", 
        descr:"Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco", 
        img: 'img/book9.png'
    },
    {
        id:10,
        name: "Let My People Go Surfing By Yvon Chouinard", 
        descr:"Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual.", 
        img: 'img/book10.png'
    },
    {
        id:11,
        name: "The Octopus Museum: Poems By Brenda Shaughnessy", 
        descr:"This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics.", 
        img: 'img/book11.png'
    },
    {
        id:12,
        name: "Shark Dialogues: A Novel By Kiana Davenport", 
        descr:"An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers", 
        img: 'img/book12.png'
    },
    {
        id:13,
        name: "Casual Conversation By Renia White", 
        descr:"White's impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don't,  ", 
        img: 'img/book13.png'
    },
    {
        id:14,
        name: "The Great Fire By Lou Ureneck", 
        descr:"The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide", 
        img: 'img/book14.png'
    },
    {
        id:15,
        name: "Rickey: The Life and Legend By Howard Bryant", 
        descr:"With the fall rolling around, one can't help but think of baseball's postseason coming up! And what better way to prepare for it than reading the biography of one of the game's all-time greatest performers, the Man of Steal, Rickey Henderson?", 
        img: 'img/book15.png'
    },
    {
        id:16,
        name: "Slug: And Other Stories By Megan Milks", 
        descr:"Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds.", 
        img: 'img/book5.png'
    },

]


let btn1 = document.getElementById("favorite_btn1");
let btn2 = document.getElementById("favorite_btn2");
let btn3 = document.getElementById("favorite_btn3");
let btn4 = document.getElementById("favorite_btn4");



let firstFour = data.splice(0,4);
let secondFour = data.splice(0,4);
let thirdFour = data.splice(0,4);
let lastFour = data.splice(0,4)


const modal = document.querySelector('.modal_wrapper');

document.querySelector('#favorite_card').addEventListener('click', e => {
    if (e.target.tagName = 'BUTTON') {
        modal.style.display = 'flex';
    }
})

document.body.addEventListener('click', e => {
    if (e.target.closest('.modal_btn') || e.target.closest('.fa-x')) {
        modal.style.display = 'none';
    }
})





if (!btn2.checked) {
    btn2.checked = true;
    btn2.value = true;
    // console.log(btn1)
    // console.dir(btn1)

    let draw = ``
    secondFour.map(item => {
        draw +=  `
        <div class="card_ramk">
        <img src="${item.img}" alt="" class="item_img">
        <h2 class="item_name">Staff Picks</h2>
        <h1 class="drops"></h1>
        <h3 class="item_title">${item.name}</h3>
        <h2 class="book_descr">${item.descr}</h2>
        <button class="item_btn">Buy</button>
    </div>
        `
    })
    document.getElementById('favorite_card').innerHTML = draw
}

btn1.addEventListener("click", () => {
    let draw = ``
    firstFour.map(item => {
        draw +=  `
        <div class="card_ramk">
        <img src="${item.img}" alt="" class="item_img">
        <h2 class="item_name">Staff Picks</h2>
        <h1 class="drops"></h1>
        <h3 class="item_title">${item.name}</h3>
        <h2 class="book_descr">${item.descr}</h2>
        <button class="item_btn">Buy</button>
    </div>
        `
    })
    document.getElementById('favorite_card').innerHTML = draw
})

btn2.addEventListener("click", () => {
    // console.log(secondFour);
    let draw = ``
    secondFour.map(item => {
        draw +=  `
        <div class="card_ramk">
        <img src="${item.img}" alt="" class="item_img">
        <h2 class="item_name">Staff Picks</h2>
        <h1 class="drops"></h1>
        <h3 class="item_title">${item.name}</h3>
        <h2 class="book_descr">${item.descr}</h2>
        <button class="item_btn">Buy</button>
    </div>
        `
    })
    document.getElementById('favorite_card').innerHTML = draw
})

btn3.addEventListener("click", () => {
    console.log(secondFour);
    let draw = ``
    thirdFour.map(item => {
        draw +=  `
        <div class="card_ramk">
        <img src="${item.img}" alt="" class="item_img">
        <h2 class="item_name">Staff Picks</h2>
        <h1 class="drops"></h1>
        <h3 class="item_title">${item.name}</h3>
        <h2 class="book_descr">${item.descr}</h2>
        <button class="item_btn">Buy</button>
    </div>
        `
    })
    document.getElementById('favorite_card').innerHTML = draw
})

btn4.addEventListener("click", () => {
    console.log(secondFour);
    let draw = ``
    lastFour.map(item => {
        draw +=  `
        <div class="card_ramk">
        <img src="${item.img}" alt="" class="item_img">
        <h2 class="item_name">Staff Picks</h2>
        <h1 class="drops"></h1>
        <h3 class="item_title">${item.name}</h3>
        <h2 class="book_descr">${item.descr}</h2>
        <button class="item_btn">Buy</button>
    </div>
        `
    })
    document.getElementById('favorite_card').innerHTML = draw
})