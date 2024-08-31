

// 모달끝
document.addEventListener('DOMContentLoaded', function () {
    var slide = document.getElementById('slide');
    var modal = document.getElementById('modal');
    var sliderThumb = document.querySelector('.slider-thumb');
    var isSliding = false;

    // 슬라이드 버튼 클릭 시 모달 표시
    slide.addEventListener('click', function() {
        if (isSliding) return; // 이미 슬라이드 중이면 동작하지 않음

        isSliding = true;
        slide.classList.add('active');
        setTimeout(function() {
            modal.style.display = 'block';
        }, 300); // 슬라이드 애니메이션 후 모달 표시
    });

    // 모달 닫기 버튼 클릭 시 모달 닫기
    document.getElementById('close-modal').onclick = function() {
        modal.style.display = 'none';
        slide.classList.remove('active');
        isSliding = false;
    };

    // 모달 외부 클릭 시 모달 닫기
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            slide.classList.remove('active');
            isSliding = false;
        }
    };

    // 슬라이드 핸들 드래그로 이동
    sliderThumb.addEventListener('mousedown', function(event) {
        var startX = event.clientX;
        var startLeft = sliderThumb.getBoundingClientRect().left;

        function onMouseMove(event) {
            var offsetX = event.clientX - startX;
            var newLeft = startLeft + offsetX;
            var maxLeft = slide.clientWidth - sliderThumb.clientWidth;
            if (newLeft >= 0 && newLeft <= maxLeft) {
                sliderThumb.style.transform = `translateX(${newLeft}px)`;
            }
        }

        function onMouseUp() {
            var thumbLeft = sliderThumb.getBoundingClientRect().left - slide.getBoundingClientRect().left;
            if (thumbLeft > slide.clientWidth - sliderThumb.clientWidth / 2) {
                slide.classList.add('active');
                modal.style.display = 'block';
            } else {
                sliderThumb.style.transform = 'translateX(0)';
            }
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
});
