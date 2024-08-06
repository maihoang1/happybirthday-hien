const next = document.getElementById("next");
(function() {
    function $(id) {
      return document.getElementById(id);
    }
  
    var card = $("card"),
      openB = $("open"),
      closeB = $("close"),
      timer = null;
    console.log("wat", card);
    openB.addEventListener("click", function() {
      card.setAttribute("class", "open-half");
      if (timer) clearTimeout(timer);
      timer = setTimeout(function() {
        card.setAttribute("class", "open-fully");
        timer = null;
      }, 1000);
      
        setTimeout(function() { loadtext();
          isOpen = true;
          },2000);
      });
    closeB.addEventListener("click", function() {
      card.setAttribute("class", "close-half");
      if (timer) clearTimerout(timer);
      timer = setTimeout(function() {
        card.setAttribute("class", "");
        timer = null;
      }, 1000);
    });
  })();
  
    function loadtext(){
    const colorBoard = document.getElementById("color-board");
    const textElement = document.getElementById("text");
    const text = "To me, you are always the most beautiful girl";
    
    let index = 0;
    const typingSpeed = 100; // Tốc độ xuất hiện từng chữ (ms)
    function typeWriter() {
        if (index < text.length) {
            textElement.setAttribute('data-balloon', textElement.getAttribute('data-balloon') + text.charAt(index));
            index++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    typeWriter();

    colorBoard.addEventListener("click", () => {
        textElement.style.animation = "fadeOut 1s forwards";
        setTimeout(() => {
            colorBoard.style.display = "none";
        }, 1000); 
    });
  }
  function reload(){
    const colorBoard = document.getElementById("c");
    colorBoard.removeAttribute('data-balloon');
  }

  document.getElementById('next').addEventListener('click', function() {
    const text = "Mặc dù chúng mình mới là người yêu của nhau nhưng mỗi lần ngồi nhắn tin, call, hay đi chơi với bạn, tôi cảm thấy thật bình yên và hạnh phúc, cảm ơn bạn vì đã đến với tôi và tôi muốn nói là ";
    var mainContent = document.getElementById('card');
    var countdown = document.getElementById('countdown');
    var counter = 3;

    // Function to add fade-in effect
    const fadeIn = (element, duration) => {
        element.style.display = 'block';
        element.style.transition = `opacity ${duration}ms ease-in-out`;
        element.style.opacity = 1;
    };

    // Function to add fade-out effect
    const fadeOut = (element, duration) => {
        element.style.transition = `opacity ${duration}ms ease-in-out`;
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.display = 'none';
        }, duration);
    };

    // Function to display text with typewriter effect
    const typeWriter = (text, element, speed, callback) => {
        let index = 0;
        element.innerHTML = '';
        const interval = setInterval(() => {
            element.innerHTML += text[index];
            index++;
            if (index === text.length) {
                clearInterval(interval);
                if (callback) callback();
            }
        }, speed);
    };

    // Start the process
    mainContent.style.display = 'none';
    countdown.style.display = 'block';
    fadeIn(countdown, 1000);

    typeWriter(text, countdown, 150, () => {
        setTimeout(() => {
            countdown.innerHTML = counter;
            var interval = setInterval(function() {
                counter--;
                if (counter < 0) {
                    clearInterval(interval);
                    fadeOut(countdown, 1000);

                    setTimeout(() => {
                        window.location.href = 'https://maihoang1.github.io/heart/';
                    }, 1000);
                } else {
                    countdown.innerHTML = counter;
                }
            }, 1000);
        }, 1000);
    });
});




 


  