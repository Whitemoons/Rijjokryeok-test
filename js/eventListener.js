// 시작하기 버튼에 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('.startButton');
    startButton.addEventListener('click', ()=>{
        hideStartPage();
        saveScoreToCookie(0);
        updateProgressBar(1);
    });
    startButton.addEventListener('touchstart', function() {
        this.style.backgroundColor = '#51483c';
        this.style.color = '#ffffff';
    });

    startButton.addEventListener('touchend', function() {
        this.style.backgroundColor = '';
        this.style.color = '';
    });
});

// 모든 .selectButton에 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', () => {
    const selectButtons = document.querySelectorAll('.selectButton');
    selectButtons.forEach(button => {
        button.addEventListener('click', handleSelectButtonClick);

        button.addEventListener('touchstart', function() {
            this.style.backgroundColor = '#51483c';
            this.style.color = '#ffffff';
        });
    
        button.addEventListener('touchend', function() {
            this.style.backgroundColor = '';
            this.style.color = '';
        });
    });
});

// 리사이즈 이벤트에 대한 리스너 추가
window.addEventListener('resize', setVH);