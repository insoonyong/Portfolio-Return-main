 // 모든 모달 트리거 요소를 가져오기
 const modalTriggers = document.querySelectorAll('.text-item');

 // 각 트리거에 클릭 이벤트 리스너 추가
 modalTriggers.forEach(trigger => {
   trigger.addEventListener('click', function() {
     const modalId = this.getAttribute('data-modal');
     const modal = document.getElementById(modalId);
     modal.style.display = 'block';
   });
 });

 // 모든 닫기 버튼 요소를 가져오기
 const closeButtons = document.querySelectorAll('.close');

 // 각 닫기 버튼에 클릭 이벤트 리스너 추가
 closeButtons.forEach(button => {
   button.addEventListener('click', function() {
     const modal = this.closest('.modal');
     modal.style.display = 'none';
   });
 });

 // 모달 외부를 클릭했을 때 모달 닫기
 window.addEventListener('click', function(event) {
   if (event.target.classList.contains('modal')) {
     event.target.style.display = 'none';
   }
 });

 // Function to wrap each letter of the text in a span
function spanLetters(elements) {
  elements.forEach(function(element) {
    // Get the text of the element
    var text = element.textContent;
    
    // Create an array with each letter wrapped in a span
    var spannedText = text.split('').map(function(letter, index) {
      return '<span class="sl' + (index + 1) + ' span-letter">' + letter + '</span>';
    }).join('');
    
    // Replace the original text with the new spanned text
    element.innerHTML = spannedText;
  });
}

// Use the function on elements with the class "the-goods"
document.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('.the-goods');
  spanLetters(elements);
});

function spanLetters(elements) {
  elements.forEach(function(element) {
    // Get the text of the element
    var text = element.textContent;
    
    // Create an array with each letter wrapped in a span
    var spannedText = text.split('').map(function(letter, index) {
      // Handle line breaks separately
      if (letter === '<') {
        return '<br>';
      }
      return '<span class="span-letter">' + letter + '</span>';
    }).join('');
    
    // Replace the original text with the new spanned text
    element.innerHTML = spannedText;
  });
}

// Use the function on elements with the class "text-item"
document.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('.text-item');
  spanLetters(elements);
});
