function hideStartPage() {
  const startPage = document.querySelector('.startPage');
  if (startPage) {
    startPage.style.display = 'none';
  }
}

// .bar::before의 width를 변화시키는 함수
function updateProgressBar(step) {
    const percentage = (step / 8) * 100;
    console.log(percentage);
    document.documentElement.style.setProperty('--bar-width', `${percentage}%`);
}

// .selectContent를 왼쪽으로 100vw만큼 이동시키는 함수
function moveSelectContentLeft(step) {
    const moveStep = 350 - (step-1) * 100;
    const selectContent = document.querySelector('.selectContent');
    if (selectContent) {
        selectContent.style.transform = `translateX(${moveStep}vw)`;
    }
}


// 선택 버튼 클릭 처리 함수
function handleSelectButtonClick(event) {
    const buttonId = event.target.id;
    const [questionNumber, choiceNumber] = buttonId.split('-');
    
    // 여기에 선택에 따른 로직을 추가할 수 있습니다.
    console.log(`질문 ${questionNumber}, 선택지 ${choiceNumber} 선택됨`);
    
    // 예: 점수 업데이트
    switch(buttonId) {
        case '1-1':
            updateScore(0);
            break;
        case '1-2':
            updateScore(10);
            break;
        case '2-1':
            updateScore(0);
            break;
        case '2-2':
            updateScore(10);
            break;
        case '3-1':
            updateScore(10);
            break;
        case '3-2':
            updateScore(0);
            break;
        case '4-1':
            updateScore(0);
            break;
        case '4-2':
            updateScore(10);
            break;
        case '5-1':
            updateScore(30);
            break;
        case '5-2':
            updateScore(0);
            break;
        case '6-1':
            updateScore(10);
            break;
        case '6-2':
            updateScore(0);
            break;
        case '7-1':
            updateScore(0);
            break;
        case '7-2':
            updateScore(10);
            break;
        case '8-1':
            updateScore(10);
            break;
        case '8-2':
            updateScore(0);
            break;
    }
    
    // 다음 질문으로 이동
    const nextQuestionNumber = parseInt(questionNumber) + 1;
    if (nextQuestionNumber <= 8) {
        updateProgressBar(nextQuestionNumber);
        moveSelectContentLeft(nextQuestionNumber);
        // 여기에 다음 질문으로 이동하는 로직을 추가할 수 있습니다.
    } else {
        // 모든 질문이 끝났을 때의 처리
        console.log('테스트 완료');
        // 여기에 결과 페이지로 이동하는 로직을 추가할 수 있습니다.
    }
}

// 실제 뷰포트 높이 계산 및 CSS 변수 설정
function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// 초기 실행
setVH();