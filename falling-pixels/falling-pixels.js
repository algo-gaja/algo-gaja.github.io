const pixelContainer = document.getElementById('pixel-container');

function createPixel() {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');

    // 수평 위치를 랜덤으로 설정
    pixel.style.left = `${Math.random() * 100}vw`;

    // 픽셀들이 서로 다른 속도로 떨어지도록 랜덤한 애니메이션 지속 시간을 설정
    pixel.style.animationDuration = `${5 + Math.random() * 2}s`;

    // 픽셀을 컨테이너에 추가
    pixelContainer.appendChild(pixel);

    // 애니메이션이 끝나면 픽셀을 제거
    pixel.addEventListener('animationend', () => {
        pixel.remove();
    });
}

// 일정 간격으로 새로운 픽셀을 생성
setInterval(createPixel, 500);
