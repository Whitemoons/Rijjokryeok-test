// 시작하기 버튼에 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('.startButton');
    startButton.addEventListener('click', ()=>{
        if(saveNameToCookie()){
            hideStartPage();
            saveScoreToCookie(0);
            updateProgressBar(1);
        } else {
            alert('이름을 입력해주세요.');
        }
    });
});

// 모든 .selectButton에 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', () => {
    const selectButtons = document.querySelectorAll('.selectButton');
    selectButtons.forEach(button => {
        button.addEventListener('click', handleSelectButtonClick);
    });
});

// 리사이즈 이벤트에 대한 리스너 추가
window.addEventListener('resize', setVH);