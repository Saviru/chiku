var typeWriter1 = document.getElementById('type-writer1');
var typeWriter2 = document.getElementById('type-writer2');
var typeWriter3 = document.getElementById('type-writer3');
var dataText1 = typeWriter1.getAttribute('data-text1');
var dataText2 = typeWriter2.getAttribute('data-text2');
var dataText3 = typeWriter3.getAttribute('data-text3');

var count = 0;
var dataTextLength1 = dataText1.length;
var dataTextLength2 = dataText2.length;
var dataTextLength3 = dataText3.length;

var f1 = false;
var f2 = false;
var f3 = false;

var setText1 = function () {
  setTimeout(function () {
    typeWriter1.textContent = typeWriter1.textContent + dataText1.charAt(count);
    count++;

    if (count < dataTextLength1) {
      setText1();
    }
    else if (count === dataTextLength1) {
        count = 0;
        setText2();
    }
  }, 50);
}

var setText2 = function () {
    setTimeout(function () {
      typeWriter2.textContent = typeWriter2.textContent + dataText2.charAt(count);
      count++;
      if (count < dataTextLength2) {
        setText2();
      }
      else if (count === dataTextLength2) {
        count = 0;
        setText3();
    }
    }, 50);
}

var setText3 = function () {
    setTimeout(function () {
      typeWriter3.textContent = typeWriter3.textContent + dataText3.charAt(count);
      count++;
      if (count < dataTextLength3) {
        setText3();
      }
      else if (count === dataTextLength3){
        openHtmlInNewFrame('flowers/index.html');
      }
    }, 50);
}

window.onload = () => {
    setText1();
}

function openHtmlInNewFrame(url) {
    const iframe = document.createElement('iframe');
    const ldpg = document.getElementById('maincls');
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '50em';
    iframe.style.position = 'absolute';
    iframe.style.border = 'none';
    iframe.style.zIndex = '-1';
    iframe.style.bottom = '0';
    document.body.appendChild(iframe);
}

