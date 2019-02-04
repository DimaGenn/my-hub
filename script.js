let headerList = document.querySelectorAll(".header-list li a");
let block1Paragraphs = document.querySelectorAll(".block1 div.col-3");
let block2aParagraphs = document.querySelectorAll(".block2a div.col-3");
let signUpBtns = document.querySelectorAll(".sign-up");
let albumsBtn = document.querySelectorAll(".album-btn");
let onlineBtn = document.querySelectorAll(".online-btn")[0];
let block4List = document.querySelectorAll(".block4 li p");
var feedbackBtns = document.querySelectorAll(".feedback-btns");
let nameInFeedback = document.querySelectorAll(".name-in-feedback")[0];
let textOfFeedback = document.querySelectorAll(".text-of-feedback")[0];
// let onlineForm = document.getElementById("online-form");
let articleEl = document.querySelector("#block4-article");
let avatar = document.getElementById("avatar");
let images = document.querySelectorAll(".images div img");


let feedbacks = [
    { name: "Галя", text: `Уже не первый раз делала перманент бровей у Татьяны. Теперь всегда только к ней: качественная анестезия, идеальная форма бровей, естественный цвет. Я очень довольна! Татьяна, огромное спасибо! Отдельно хочется отметить индивидуальный подход и доброжелательную атмосферу салона.` },
    { name: "Раиса", text: "приду еще" },
    { name: "Людмила", text: "замечательно" },
    { name: "Ольга", text: "супер" }
]
let article = [
    {
        title: `Стойкий макияж, который не повредит коже и будет выглядеть великолепно – разве не об
        этом мечтают многие женщины?!! И если в недавнем времени эта мечта казалась несбыточной, то сегодня это
        стало возможным с применением перманентного макияжа – косметологической новации, которая буквально
        произвела фурор. Перманентный макияж ( бровей, век, губ) – это тот же татуаж, только выполненный очень
        поверхностно , менее травматично. Поэтому перманентный макияж имеет ещё одно название, которое говорит
        само за себя - микропигментация, и именно поэтому результат перманентного макияжа выглядит более
        натурально, нежно, воздушно. Татуаж в свою очередь больше востребован среди девушек предпочитающих
        более яркий и декоративный эффект . С использованием новых современных технологий есть возможность
        удовлетворить все, даже самые взыскательные желания клиента. Перманентный макияж – это словно ювелирное
        дело в косметологической отрасли. Результат татуажа превосходит все ожидания, ведь теперь можно не
        только не наносить ежедневный макияж, но и подчеркнуть или скорректировать линию губ, форму бровей или
        добавить пикантную изюминку, например, мушку над губой, которая будет смотреться очень естественно и
        можно не переживать, что она потеряет форму или смоется.`},
    {
        title: `губы губы губы губы губы губы губы губы губы губы губы губы губы губы губы губы губы губы
    губы губы губы губы губы губы губы губы губы губы губы губы губы губы губы губы губы губы губы губы губы губы губы губы
    губы губы губы губы губы губы`},
    {
        title: `Брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови 
    брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови  
    брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови 
    брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови  
    брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови 
    брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови  
    брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови 
    брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови  
    брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови брови`},
    {
        title: `стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки 
    стрелки стрелки стрелки стрелки стрелки стрелки  стрелки стрелки стрелки стрелки стрелки стрелки  
    стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки 
    стрелки стрелки стрелки стрелки стрелки стрелки  стрелки стрелки стрелки стрелки стрелки стрелки  
    стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки 
    стрелки стрелки стрелки стрелки стрелки стрелки  стрелки стрелки стрелки стрелки стрелки стрелки  
    стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки стрелки `},
    {
        title: `ресницы ресницы ресницы ресницы ресницы ресницы ресницы ресницы ресницы ресницы 
    ресницы ресницы ресницы ресницы ресницы ресницы ресницы ресницы ресницы ресницы 
    ресницы ресницы ресницы ресницы ресницы ресницы ресницы ресницы ресницы ресницы `},
    {
        title: `самая лучшая технология самая лучшая технология самая лучшая технология
    самая лучшая технология самая лучшая технология самая лучшая технология самая лучшая технология
    самая лучшая технология самая лучшая технология самая лучшая технология самая лучшая технология`}
]



    let onlineForm = document.createElement("div");
    onlineForm.classList.add("online-form");
    onlineForm.innerHTML = `
        <form action="#" class=" rounded modal-form bg-dark">
        <button class="close-btn btn-danger rounded px-2" id="close-btn">X</button><br>
            <div class="modal-form__line">
                <select name="servise" id="servise">
                    <option value="Нос">Записаться на услугу</option>
                    <option value="Губы">Губы</option>
                    <option value="Брови">Брови</option>
                    <option value="Глаза">Глаза</option>
                    <option value="Нос">Нос</option>
                </select><br>
            </div>
            <div class="modal-form__line">
                <input type="date" placeholder="Время"></input><br>
            </div>
            <div class="modal-form__line">
                <input type="text" placeholder="Ваше имя"></input><br>
            </div>
            <div class="modal-form__line">
                <input type="tel"  placeholder="+375..."></input><br>
            </div>
            <div class="modal-form__line">
                <textarea  rows="4" placeholder="Дополнительно"></textarea><br>
            </div>
            <div class="modal-form__line">
                <input type="submit" class="btn-danger" value="Записаться"></input>
            </div>
        </form>
  `

  let slider = document.createElement("div");
  slider.classList.add("slider");
  slider.innerHTML = `
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="http://zdraviie.ru/wp-content/uploads/2018/01/modnyj-makijazh-na-vypusknoj-2.jpg" class="d-block mx-auto" alt="...">
              </div>
              <div class="carousel-item">
                <img src="http://zdraviie.ru/wp-content/uploads/2018/01/modnyj-makijazh-na-vypusknoj-2.jpg" class="d-block mx-auto" alt="...">
              </div>
              <div class="carousel-item">
                <img src="http://zdraviie.ru/wp-content/uploads/2018/01/modnyj-makijazh-na-vypusknoj-2.jpg" class="d-block mx-auto" alt="...">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
        </div>`

function showSliderImg() {
    document.body.appendChild(slider);
    document.body.classList.add("hidden");
}


for (let i=0; i<images.length; i++){
    images[i].addEventListener("click",showSliderImg );
}




//     alert(fdaf);
//     // document.body.removeChild(slider);
//     // document.body.classList.remove("hidden");
// })



// let lastImg = document.querySelectorAll(".carousel-control-prev");
// lastImg.addEventListener("click", function(){
//     lastImg[i].inner
// } )



  function showOnlineSignForm() {
    document.body.appendChild(onlineForm);
    document.body.classList.add("hidden");
}

window.addEventListener("load", () => {
    nameInFeedback.innerHTML = feedbacks[0].name;
    textOfFeedback.innerHTML = feedbacks[0].text;
    articleEl.innerHTML = article[0].title;
});
function lastFeedback() {
    for (let i = 0; i <= feedbacks.length; i++) {
        if (nameInFeedback.innerHTML == feedbacks[i].name) {
            if (i == 0) { i = feedbacks.length }
            nameInFeedback.innerHTML = feedbacks[i - 1].name;
            textOfFeedback.innerHTML = feedbacks[i - 1].text;
            return;
        }
    }
}

function nextFeedback() {
    for (let i = 0; i <= feedbacks.length; i++) {
        if (nameInFeedback.innerHTML == feedbacks[i].name) {
            if (i == feedbacks.length - 1) { i = -1 }
            nameInFeedback.innerHTML = feedbacks[i + 1].name;
            textOfFeedback.innerHTML = feedbacks[i + 1].text;
            return;
        }
    }
}

let backdrop = document.createElement("div");
backdrop.classList.add("backdrop");
backdrop.innerHTML = `<img class="zoom-img" src="tata.jpg" alt="master">`;

function showZoomImg() {
    document.body.appendChild(backdrop);
    document.body.classList.add("hidden");
}

avatar.addEventListener("click", showZoomImg);

backdrop.addEventListener("click", function() {
    document.body.removeChild(backdrop);
    document.body.classList.remove("hidden");
})


for (let i = 0; i < block4List.length; i++) {
    block4List[i].addEventListener("click", () => {
        document.querySelector("#block4-headline").innerHTML = block4List[i].innerHTML;
        articleEl.innerHTML = article[i].title;
    });
}
onlineBtn.addEventListener("click", showOnlineSignForm);

let closeBtn = onlineForm.querySelector("#close-btn");
closeBtn.addEventListener("click", function () {
    document.body.removeChild(onlineForm);
    document.body.classList.remove("hidden");
})

feedbackBtns[0].addEventListener("click", lastFeedback);
feedbackBtns[1].addEventListener("click", nextFeedback);



