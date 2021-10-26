/*------------------PHOTOGRAPHY--------------------*/
/*------------------PHOTOGRAPHY--------------------*/
const imgPlaceholder = document.querySelector("img");
const prevBtn = document.querySelector("button[name=prev]");
const nextBtn = document.querySelector("button[name=next]");
let arrImages = ["img/7.jpg", "img/1.JPG","img/about2.JPG","img/21.jpg","img/3.JPG","img/8.JPG", "img/9.JPG", "img/16.JPG","img/17.JPG", "img/19.JPG"];

/** define the default image in the array to display when loading the page */
let currentIndex = 1;
let defaultImg = arrImages[currentIndex];
imgPlaceholder.src = defaultImg;

/** 3. event listeners */
prevBtn.addEventListener("click",getPrev);
nextBtn.addEventListener("click",getNext);

/** 4. declare functions */
function getPrev(){
  /** find current index */
  /** get current index -1 */
  
  /** check if index exists, if > -1 */
  currentIndex = --currentIndex % arrImages.length < 0 ? arrImages.length: currentIndex % arrImages.length;

    /** change src to image in array[index-1] */
  imgPlaceholder.src = arrImages[currentIndex];
  
       
  
}

function getNext(){
    /** find current index */
    /** get current index +1 */
    currentIndex = ++currentIndex % arrImages.length;
    imgPlaceholder.src = arrImages[currentIndex];
    /** check if index exists, if < length of array */

}


/*-----------Navigation Bar-----------------------------------------*/
/*-----------Navigation Bar-----------------------------------------*/


    function myFunction(myNav) {
      var x = document.getElementById(myNav);
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }

    
  