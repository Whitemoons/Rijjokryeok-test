// 쿠키에 점수를 저장하는 함수
function saveScoreToCookie(score) {
    // 쿠키 만료일을 현재로부터 7일 후로 설정
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    
    // 쿠키에 점수 저장
    document.cookie = `userScore=${encodeURIComponent(score)}; expires=${expirationDate.toUTCString()}; path=/`;
}

// 쿠키에서 점수를 가져오는 함수
function getScoreFromCookie() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'userScore') {
            return parseInt(decodeURIComponent(value));
        }
    }
    return 0; // 점수가 쿠키에 없는 경우 0 반환
}

// 점수를 갱신하는 함수
function updateScore(newScore) {
    const currentScore = getScoreFromCookie();
    const updatedScore = newScore || currentScore || 0;
    saveScoreToCookie(updatedScore);
    return updatedScore;
}