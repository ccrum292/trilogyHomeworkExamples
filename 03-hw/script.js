
// arrays to be selected from 

var arrOfFruit = [
  "https://i.pinimg.com/originals/94/1f/db/941fdb9a311ed790b73fad62d4cc9355.jpg", 
  "https://thumbs.dreamstime.com/b/lemon-flat-icon-slot-machine-symbol-174359651.jpg", 
  "https://thumbs.dreamstime.com/b/watermelon-flat-icon-slot-machine-symbol-174359647.jpg"
];
var arrOfPlayingCards = [
  "https://i.pinimg.com/originals/5f/ad/e1/5fade1c8afba4d74f2c5aead076b3765.jpg", 
  "data:image/jpeg;base64,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", 
  "https://previews.123rf.com/images/pavlostv/pavlostv1804/pavlostv180400042/98628100-colored-card-suit-icon-vector-playing-cards-symbols-vector-card-suit-icon-sign-icon-stock-vector.jpg",
  "https://www.nicepng.com/png/detail/422-4221014_naipe-paus-playing-card-symbols.png"
];
var arrOfMoneyItems = [
  "https://www.pngitem.com/pimgs/m/130-1307352_transparent-money-sign-clipart-gold-dollar-sign-transparent.png", 
  "https://cdn1.vectorstock.com/i/1000x1000/57/50/money-coin-cartoon-vector-23565750.jpg", 
  "https://cdn2.vectorstock.com/i/1000x1000/42/16/dollar-bill-icon-money-cash-vector-20584216.jpg"
];


// grabbing html elements to use later

var playButton = document.getElementById("play-button");
var imgOne = document.getElementById("img-one");
var imgTwo = document.getElementById("img-two");
var imgThree = document.getElementById("img-three");

var arrOfImgs = [imgOne, imgTwo, imgThree];

// add an Event listener

playButton.addEventListener("click", randomLottoGenerator);

// add a function to grab randomly from an array

function grabRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)] 
}

// write a function that confirms what shapes to include in lotto play

function randomLottoGenerator() {

  var arrOfSelectedArrays = [];

  var hasFruit = confirm("Click ok to confirm including fruit.")
    if (hasFruit) {
      arrOfSelectedArrays.push(arrOfFruit);
    }

  var hasPlayingCards = confirm("Click ok to confirm including Playing Card Symbols.");
    if (hasPlayingCards) {
      arrOfSelectedArrays.push(arrOfPlayingCards);
    }

  var hasMoneyItems = confirm("Click ok to confirm including Money Items.");
    if (hasMoneyItems) {
      arrOfSelectedArrays.push(arrOfMoneyItems);
    }

  if (!hasFruit && !hasPlayingCards && !hasMoneyItems) {
    alert("Please select at least one option.")
    return;
  }

  console.log(arrOfSelectedArrays)

  for (var i = 0; i < arrOfImgs.length; i++){
    var randomArr = grabRandom(arrOfSelectedArrays);
    var singleRandomUrl = grabRandom(randomArr);
    arrOfImgs[i].src = singleRandomUrl;
  }



}







// let hiddenDiv = document.getElementById("hidden-div")

// const allPictures = [...arrOfColoredCircles, ...arrOfColoredHearts, ...arrOfColoredSquares, ...arrOfColoredStars]


// for (const string of allPictures) {
//   console.log("hit")
//   let favIcon = document.createElement("p");
//   favIcon.className = string;
//   hiddenDiv.appendChild(favIcon);


// }