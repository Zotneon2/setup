// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Gojo',
    job: 'The strongest',
    img: 'https://www.hdwallpapers.in/download/jujutsu_kaisen_blue_eyes_satoru_gojo_hd_jujutsu_kaisen-HD.jpg',
    text: "Satoru Gojo (五ご条じょう悟さとる Gojō Satoru?) is one of the main protagonists of the Jujutsu Kaisen series. He is a special grade jujutsu sorcerer and widely recognized as the strongest in the world. Satoru is the pride of the Gojo Clan, the first person to inherit both the Limitless and the Six Eyes in four hundred years. He works as a teacher at the Tokyo Jujutsu High and uses his influence to protect and train strong young allies.",
  },
  {
    id: 2,
    name: 'Geto',
    job: 'Special Grade',
    img: 'https://otakukart.com/wp-content/uploads/2022/02/Geto-Suguru-quotes-.jpg',
    text: 'Suguru Geto (夏げ油とう傑すぐる Getō Suguru?) is an antagonist in both the Jujutsu Kaisen series and its prequel Jujutsu Kaisen 0: Jujutsu High. He was originally a student of Masamichi Yagas alongside Satoru Gojo and Shoko Ieiri at Tokyo Jujutsu High. His experiences as a jujutsu sorcerer bred a deep hatred for non-sorcerers, leading to an incident where Suguru massacred over a hundred civilians in a single night. He was expelled from Jujutsu High and came to be known as the worst of all curse users.',
  },
  {
    id: 3,
    name: 'Yuta',
    job: 'Special Grade',
    img: 'https://www.geekmi.news/__export/1648422747713/sites/debate/img/2022/03/27/yuta7.jpg_554688468.jpg',
    text: 'Yuta Okkotsu (乙おっ骨こつ憂ゆう太た Okkotsu Yūta?) is a major supporting character in the Jujutsu Kaisen series and the main protagonist of its prequel series, Jujutsu Kaisen 0: Jujutsu High. He was initially a special grade cursed human haunted by his late childhood friend, Rika Orimoto. Satoru Gojo mentored Yuta and enrolled him at Tokyo Jujutsu High.',
  },
  {
    id: 4,
    name: 'Toji',
    job: 'sorcerer killer',
    img: 'https://i0.wp.com/www.spielanime.com/wp-content/uploads/2023/07/Jujutsu-Kaisen-Season-2-Toji-Fushiguros-scar-explained-3.jpg',
    text: 'Toji Fushiguro (伏ふし黒ぐろ甚とう爾じ Fushiguro Tōji?), born Toji Zenin (禪ぜん院いん甚とう爾じ Zenin Tōji is a recurring character in the Jujutsu Kaisen series. He was a former member of the Zenin clan and the infamous assassin known as the Sorcerer Killer 術じゅつ師し殺ごろし Jutsushi Goroshi, contracted by the Time Vessel Association among other groups throughout his time as a non-curse user. He was also the father of Megumi Fushiguro and former enemy of Satoru Gojo. While working for the Star Religious Group, Toji serves as the primary antagonist of the Gojos Past Arc.',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
 
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const startBtn = document.querySelector('.start-btn')
const endBtn = document.querySelector('.end-btn');
 
// set starting item
let currentItem = 0;
 
// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});
 
// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');
 
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

// show start person
startBtn.addEventListener('click', function () {
  console.log('start');
  currentItem = 0;
  showPerson(currentItem);
});

// show end person
endBtn.addEventListener('click', function () {
  currentItem = reviews.length - 1;
  showPerson(currentItem);
});