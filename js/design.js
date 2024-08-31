document.addEventListener('DOMContentLoaded', function() {
    const dragText = document.querySelector('.drag-text');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
  
    function hideDragText() {
      dragText.style.opacity = '0';
      setTimeout(() => {
        dragText.style.display = 'none';
      }, 300); // opacity transition 시간과 맞추기
    }
  
    // 슬라이더 영역을 클릭하면 드래그 텍스트 사라지기
    sliderWrapper.addEventListener('click', hideDragText);
  
    // 버튼 클릭 시 드래그 텍스트 사라지기
    prevButton.addEventListener('click', hideDragText);
    nextButton.addEventListener('click', hideDragText);
  });

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider-wrapper');
    const slides = Array.from(document.querySelectorAll('.slide'));
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let isDragging = false;
    let startX;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    let currentIndex = 0;

    function setSliderPosition() {
        slider.style.transform = `translateX(${currentTranslate}px)`;
    }

    function setPositionByIndex() {
        currentTranslate = currentIndex * -window.innerWidth;
        prevTranslate = currentTranslate;
        setSliderPosition();
    }

    function updateIndex() {
        if (currentIndex < 0) currentIndex = slides.length - 1;
        if (currentIndex >= slides.length) currentIndex = 0;
    }

    function dragStart(event) {
        isDragging = true;
        startX = getPositionX(event);
        animationID = requestAnimationFrame(animation);
        slider.style.cursor = 'grabbing';
    }

    function dragEnd() {
        isDragging = false;
        cancelAnimationFrame(animationID);

        const movedBy = currentTranslate - prevTranslate;
        const threshold = window.innerWidth / 2; // 중간 정도의 이동으로 스냅

        if (movedBy < -threshold && currentIndex < slides.length - 1) {
            currentIndex += 1;
        } else if (movedBy > threshold && currentIndex > 0) {
            currentIndex -= 1;
        }

        // Smoothly transition to the closest slide
        currentTranslate = currentIndex * -window.innerWidth;
        setSliderPosition();
        slider.style.cursor = 'grab';
    }

    function drag(event) {
        if (isDragging) {
            const currentPosition = getPositionX(event);
            currentTranslate = prevTranslate + currentPosition - startX;
            setSliderPosition();
        }
    }

    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    function animation() {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
    }

    function goToPrevSlide() {
        currentIndex -= 1;
        updateIndex();
        currentTranslate = currentIndex * -window.innerWidth;
        setSliderPosition();
    }

    function goToNextSlide() {
        currentIndex += 1;
        updateIndex();
        currentTranslate = currentIndex * -window.innerWidth;
        setSliderPosition();
    }

    prevButton.addEventListener('click', goToPrevSlide);
    nextButton.addEventListener('click', goToNextSlide);
    slider.addEventListener('mousedown', dragStart);
    slider.addEventListener('touchstart', dragStart);
    slider.addEventListener('mouseup', dragEnd);
    slider.addEventListener('touchend', dragEnd);
    slider.addEventListener('mousemove', drag);
    slider.addEventListener('touchmove', drag);

    // Initialize the slider position
    setPositionByIndex();
});
// 끝
document.addEventListener('DOMContentLoaded', function() {
    var popupBtns = document.querySelectorAll('.popup-btn');
    var overlay = document.getElementById('popupOverlay');
    var popups = document.querySelectorAll('.popup');
    var closeBtns = document.querySelectorAll('.popup-close');

    // 팝업 열기
    popupBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var popupId = this.getAttribute('data-popup');
            document.getElementById(popupId).style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    // 팝업 닫기
    closeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            this.closest('.popup').style.display = 'none';
            overlay.style.display = 'none';
        });
    });

    // 오버레이 클릭 시 팝업 닫기
    overlay.addEventListener('click', function() {
        popups.forEach(function(popup) {
            popup.style.display = 'none';
        });
        overlay.style.display = 'none';
    });

    // "더 알아보기" 버튼 클릭 이벤트 설정
    var actionBtns = document.querySelectorAll('.popup-action-btn');
    
    actionBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var popupId = this.getAttribute('data-popup');
            
            if (popupId === 'popup1-action') {
                window.location.href = 'https://example.com/포멘트';
            } else if (popupId === 'popup2-action') {
                window.location.href = 'https://example.com/핸드크림';
            } else if (popupId === 'popup3-action') {
                window.location.href = 'https://example.com/카카오';
            } else if (popupId === 'popup4-action') {
                window.location.href = 'https://example.com/진로';
            } else if (popupId === 'popup5-action') {
                window.location.href = 'https://example.com/tripmate';
            } else if (popupId === 'popup6-action') {
                window.location.href = 'https://example.com/핏모드';
            }
        });
    });
});