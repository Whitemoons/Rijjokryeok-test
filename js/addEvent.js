function hideStartPage() {
  const startPage = document.querySelector('.startPage');
  if (startPage) {
    startPage.style.display = 'none';
  }
}

// .bar::before의 width를 변화시키는 함수
function updateProgressBar(step) {
    const bar = document.querySelector('.bar');
    bar.style.backgroundImage = `url('img/QuestionScreen/ProgressBarImages/${step}.png')`;
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
            updateScore(30);
            break;
        case '3-2':
            updateScore(0);
            break;
        case '4-1':
            updateScore(10);
            break;
        case '4-2':
            updateScore(0);
            break;
        case '5-1':
            updateScore(10);
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
            updateScore(0);
            break;
        case '8-2':
            updateScore(10);
            break;
    }

    // 다음 질문으로 이동
    const nextQuestionNumber = parseInt(questionNumber) + 1;
    if (nextQuestionNumber === 4 || nextQuestionNumber === 7) {
        const selectCalendar = document.querySelector('.selectCalendar');
        if (nextQuestionNumber === 4) {
            selectCalendar.style.backgroundImage = "url('img/QuestionScreen/CalendarImages/25.png')";
        } else if (nextQuestionNumber === 7) {
            selectCalendar.style.backgroundImage = "url('img/QuestionScreen/CalendarImages/26.png')";
        }
    }
    if (nextQuestionNumber <= 8) {
        updateProgressBar(nextQuestionNumber);
        moveSelectContentLeft(nextQuestionNumber);
        // 여기에 다음 질문으로 이동하는 로직을 추가할 수 있습니다.
    } else {
        // 모든 질문이 끝났을 때의 처리
        showResultPage();
        console.log('테스트 완료');
        // 여기에 결과 페이지로 이동하는 로직을 추가할 수 있습니다.
    }
}

function showResultPage() {
    const resultPage = document.querySelector('.resultPage');
    resultPage.style.animation = 'bounce 1s ease';
    resultPage.style.top = '0';
    const resultImg = document.querySelector('.resultImg');
    const resultText1 = document.querySelector('.resultText1');
    const resultText2 = document.querySelector('.resultText2');
    const resultText3 = document.querySelector('.resultText3');
    const resultText = [['# 착실한 축제 모범생', '# 축제와 인간 사회 A+', '# 아름다운 사람은(=YOU)은 머문 자리도 아름답습니다'],
                        ['# 소소한 일탈을 꿈꿔', '# 축제 모범생', '# 이 정도 리쪽력은 아무도 모르겠지..?'],
                        ['# 축.낭.일.낭', '# 축제는 낭만이다 일탈도 낭만이다', '# 위풍당당리쪽당당'],
                        ['# 이 구역의 리쪽 담당은 나', '# 리쪽 주의보', '# 나 덕분에 축제는 엉망이 되.'],
                        ['# 리쪽같은 내새끼', '# 내가 리쪽 레벨 999999999라니 완전 럭키비키쟈나', '# 이 아이는 굉.장.히 불안한 아이입니다 -오OO 박사님-']]

    const finalScore = getScoreFromCookie();

    if(finalScore < 10) {
        resultImg.style.backgroundImage = "url('img/FinalScreen/MainImages/Lv0.png')";
        resultText1.innerText = resultText[0][0];
        resultText2.innerText = resultText[0][1];
        resultText3.innerText = resultText[0][2];
    } else if(finalScore < 40) {
        resultImg.style.backgroundImage = "url('img/FinalScreen/MainImages/Lv10.png')";
        resultText1.innerText = resultText[1][0];
        resultText2.innerText = resultText[1][1];
        resultText3.innerText = resultText[1][2];
    } else if(finalScore < 60) {
        resultImg.style.backgroundImage = "url('img/FinalScreen/MainImages/Lv33.png')";
        resultText1.innerText = resultText[2][0];
        resultText2.innerText = resultText[2][1];
        resultText3.innerText = resultText[2][2];
    } else if(finalScore < 90) {
        resultImg.style.backgroundImage = "url('img/FinalScreen/MainImages/Lv59.png')";
        resultText1.innerText = resultText[3][0];
        resultText2.innerText = resultText[3][1];
        resultText3.innerText = resultText[3][2];
    } else {
        resultImg.style.backgroundImage = "url('img/FinalScreen/MainImages/Lv999999999.png')";
        resultText1.innerText = resultText[4][0];
        resultText2.innerText = resultText[4][1];
        resultText3.innerText = resultText[4][2];
    }
}