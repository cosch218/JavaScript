/* a 태그 클릭했을 때 */
// 목적 1. 해당 a태그를 감싸고 있는 li태그에 on 클래스 추가
// 목적 2. 다른 li 태그의 on 클래스 제거

// 1. a 태그 3개는 querySelectorAll을 사용해 배열로 받아오기
const btnList = document.querySelectorAll(".list .btn");
console.log(btnList);

// 2. button 중 하나를 선택하면 onTab 함수의 이벤트 추가
for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener("click", onTab)
}

// 3. on 클래스를 li에 추가하는 onTab 함수
function onTab(e) {
    // 4. a 태그에 기본 설정되어 있는 새로고침 이벤트 제거
    e.preventDefault();
    // 5. 전역변수 btnList에 접근해서 다른 li에 이미 적용된 on 클래스 제거
    // e.target은 이벤트가 발생한 태그 자체
    // => 이벤트를 붙여준 btnList[0].btnList[1],btnList[2] 중 하나에 접근해야 함
    // => for 반복문 사용
    for (let i = 0; i < btnList.length; i++) {
        btnList[i].parentNode.classList.remove("on");
    }
    // 6. e.target 에 on 클래스 추가
    e.target.parentNode.classList.add("on");
}