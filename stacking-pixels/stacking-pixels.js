const pixelContainer = document.getElementById('pixel-container');
const stackHeights = {};  // 각 x 위치별로 쌓이는 높이를 저장하는 객체

function createPixel() {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');

    // 수평 위치를 더 세밀하게 설정 (0.1vw 단위로)
    const leftPosition = (Math.floor(Math.random() * 1000) / 10).toFixed(1);
    pixel.style.left = `${leftPosition}vw`;

    // 픽셀의 색상을 랜덤으로 지정
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    pixel.style.backgroundColor = randomColor;

    // 해당 위치에 쌓인 높이가 없으면 초기화
    if (!stackHeights[leftPosition]) {
        stackHeights[leftPosition] = 0;
    }

    // 픽셀들이 서로 다른 속도로 떨어지도록 랜덤한 애니메이션 지속 시간을 설정
    const duration = 3 + Math.random() * 2;
    pixel.style.animationDuration = `${duration}s`;

    // 픽셀을 컨테이너에 추가
    pixelContainer.appendChild(pixel);

    // 애니메이션이 끝나면 픽셀의 위치를 고정하여 쌓이게 설정
    setTimeout(() => {
        pixel.style.animation = 'none';  // 애니메이션을 중지시킴
        pixel.style.bottom = `${stackHeights[leftPosition]}px`;  // 쌓여야 할 위치에 픽셀을 배치
        stackHeights[leftPosition] += 5;  // 다음 픽셀이 쌓일 높이를 증가시킴
    }, duration * 1000);
}

// 일정 간격으로 새로운 픽셀을 생성
setInterval(createPixel, 100);  // 간격을 줄여서 픽셀 생성 속도를 높임
