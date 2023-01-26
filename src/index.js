import svgGitHub from "./assets/svg/GitHub.svg";
import svgEmail from "./assets/svg/email.svg";

const students = [{
    "name": "Андреєв Вячеслав",
    "github": "https://github.com/SlavaAndreievvvv",
    "email": "andreiev.viacheslav@gmail.com",
    "photo": "https://avatars.githubusercontent.com/u/114100602?v=4"
  },
  {
    "name": "Шутька Інна",
    "github": "https://github.com/inna-shutka",
    "email": "inna102992@gmail.com",
    "photo": "https://avatars.githubusercontent.com/u/114100620?v=4"
  },
  {
    "name": "Маклаков Григорій",
    "github": "https://github.com/GregoryMaklakov",
    "email": "maklakov.grigory@gmail.com",
    "photo": "https://avatars.githubusercontent.com/u/105268946?v=4"
  },
  {
    "name": "Картавенко Богдан",
    "github": "https://github.com/bogdanKartavenko",
    "email": "bogdankartavenko@gmail.com",
    "photo": "https://avatars.githubusercontent.com/u/71920438?v=4"
  },
  {
    "name": "Микитенко Валерій",
    "github": "https://github.com/kasper93721",
    "email": "valeraa.mikitenkoo@gmail.com",
    "photo": "https://avatars.githubusercontent.com/u/114100530?v=4"
  },
  {
    "name": "Конопльов Владислав",
    "github": "https://github.com/chooh-chooh",
    "email": "v.konoplov@merge.rocks",
    "photo": "https://avatars.githubusercontent.com/u/114100580?v=4"
  }
];

const ul = document.getElementById('ul');

students.reverse().map((item) => {
  return ul.insertAdjacentHTML('afterbegin', `
      <li class="card__item" id="li">
      <div class="card__box">
          <img class="card__photo" src="${item.photo}" alt="">
      </div>
        <div class="card__box--name">
          <span class="card__name name">${item.name}</span>
          <a class="card__email email" href="mailto:${item.email}">
          <img class="card__email--svg" src="${svgEmail}" alt="">
          ${item.email}</a>
        </div>
        <div class="card__box">
        <a class="card__link" href="${item.github}">
        <img class="card__svg" id='GitHub' src="${svgGitHub}" alt="">
        </a>
        </div>
      </li>`);
});

function darkTheme() {
  const BGbody = document.querySelector('div');
  const title = document.querySelector('h1');
  const name = document.querySelectorAll('span');
  const item = document.querySelectorAll('li');
  const svgImage = document.querySelectorAll('img');
  
  name.forEach((el) => {
    el.classList.toggle('title--black');
  });
  
  item.forEach((el) => {
    el.classList.toggle("item--black");
  });
  
  svgImage.forEach((el) => {
    el.classList.toggle("svgBlack");
  });
  
  BGbody.classList.toggle("BGblack");
  title.classList.toggle('title--black');
}

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener("click", darkTheme);