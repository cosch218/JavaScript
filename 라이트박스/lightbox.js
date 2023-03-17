// 사진을 클릭했을 때 => 이벤트
// lightbox의 이미지가 클릭한 이미지로 바뀜
// lightbox의 display가 block으로 바뀜

// 한 번 더 클릭하면 => 이벤트
// display가 none으로 바뀜


/* 1. image-box의 모든 pic을 배열로 가져와 전역변수에 저장 */
const pics = document.querySelectorAll(".image-box .pic");
/* 3. 모든 이벤트가 lightbox를 클릭했을 때 실행되므로 lightbox를 전역변수로 저장 */
const lightbox = document.querySelector("#lightbox");
// const imgs = document.querySelectorAll("#lightbox>img");


/* 2. 사진 하나에 이벤트를 먼저 확인한 후 반복문으로 추가 */
// 이벤트 먼저 확인 : pics[1].addEventListener("click", showLightbox);
for (let i =0 ; i <pics.length ; i++) {
    pics[i].addEventListener("click",showLightbox);
}


/* 4. 사진을 클릭했을 때 lightbox가 보임 */
function showLightbox(e) {
    // 보여지는 이미지를 큰 사이즈의 이미지로 수정
    // 우선 변수에 data-src로 저장한 값을 담아 접근 : HTML에 "data-이름"으로 작성한 값은 dataset을 통해 접근
    let img = e.target.dataset.src;
    // 이미지 값을 가져와서 lightbox의 이미지에 추가
    lightbox.firstElementChild.src = img;
    // 라이트박스 보임
    lightbox.style.display = "block";
    lightbox.firstElementChild.style.display = "block";
}


/* 5. lightbox를 클릭했을 때 lightbox가 없어짐 */
lightbox.addEventListener("click", function(){
    lightbox.style.display = "none";
})