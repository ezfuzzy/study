function open_boj(){
    const options = 'width=700, height=600, top=50, left=50, scrollbars=yes';
    window.open('http://127.0.0.1:5500/html/Step05_ul.html', '_blank', options );

}
// document.getElementById('editableTextbox').addEventListener('click', function(){
//   var textbox = this;
//   textbox.disabled = true;
// })
document.getElementById('editableTextboxBtn').addEventListener('dblclick',()=>{
  var textboxBtn = document.getElementById('editableTextboxBtn');
  var textbox = document.getElementById('editableTextbox');
  
  textboxBtn.style.display = 'none';
  textbox.style.display = 'flex';
})
document.getElementById('editableTextbox').addEventListener('dblclick', function(){
  var textbox = this; //document.getElementById('editableTextbox');

  textbox.focus();
})

document.getElementById('editableTextbox').addEventListener('blur', function() {
  var textbox = this;
  var textboxBtn = document.getElementById('editableTextboxBtn');
  textboxBtn.innerText = textbox.value;

  textbox.style.display = 'none';
  textboxBtn.style.display = 'flex';

  // textbox.readOnly = true;

  // 텍스트박스를 수정한 후 포커스를 잃으면 읽기 전용 상태로 변경합니다.
});
document.getElementById('WSS').addEventListener('click', function(){
  var textboxBtn = document.getElementById('editableTextboxBtn');

  if(textboxBtn.style.display === 'none'){
    textboxBtn.style.display = 'flex';
    this.innerText = "Hide mint area";
  }
  else{
    textboxBtn.style.display = 'none';
    this.innerText = "Reveal mint area";
  }
  //textbox.disabled = false;
})
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.btn-open-modal');
modalBtn.addEventListener('click', ()=>{
  modal.style.display = "flex";
})
const modal_inline_closeBtn = document.querySelector('.modal_inline.close');
modal_inline_closeBtn.addEventListener('click', ()=>{
  modal.style.display = "none";
})
const modal_inline_confirmBtn = document.querySelector('.modal_inline.confirm');
modal_inline_confirmBtn.addEventListener('click', ()=>{
  document.querySelector('#modal_output').innerText = modal_textarea.value;
  modal.style.display = "none";
})

var ch = 0;
// document.getElementsByClassName("custom-btn").addEventListener("click", CMC());
// searchbox 
function CMC(){
    ch %= 4; // wait 2secs ? 
    switch (ch) {
        case 0:
            CIC_red();
            ch++;
            break;
        case 1:
            CIC_orange();
            ch++
            break;
        case 2:
            CIC_yellow();
            ch++;
            break;
        case 3:
            CIC_green();
            ch++;
            break;
        default:
            CIC_white();
            ch++;
            break;
    }
};
function CIC_white() {
    var el = document.getElementById('ChangeBackgroundColor');
    el.style.backgroundColor = 'white';
};
function CIC_red(){
    var el = document.getElementById('ChangeBackgroundColor');
    el.style.backgroundColor = 'red';
};
function CIC_orange(){
    var el = document.getElementById('ChangeBackgroundColor');
    el.style.backgroundColor = 'orange';
};
function CIC_yellow(){
    var el = document.getElementById('ChangeBackgroundColor');
    el.style.backgroundColor = 'yellow';
};
function CIC_green(){
    var el = document.getElementById('ChangeBackgroundColor');
    el.style.backgroundColor = 'green';
};

//document.getElementById("ChangeColor").addEventListener("click", ChangeMyColor);

function RMC() {
    var el = document.getElementById('ChangeColor');
    el.style.backgroundColor = 'transparent';
};

function CMC_red(){
    var el = document.getElementById('ChangeColor');
    el.style.backgroundColor = 'red';
};
function CMC_orange(){
    var el = document.getElementById('ChangeColor');
    el.style.backgroundColor = 'orange';
};
function CMC_yellow(){
    var el = document.getElementById('ChangeColor');
    el.style.backgroundColor = 'yellow';
};
function CMC_green(){
    var el = document.getElementById('ChangeColor');
    el.style.backgroundColor = 'green';
};

/*clock*/

function clock(){
    var Target_clock = document.getElementById('clock');
    var Target_apm = document.getElementById('apm');

    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var apm = "AM";
    if(hours>12){
        apm = "PM";
        hours %= 12;
    }
    Target_clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    Target_apm.innerText = `${apm}`;
}

function clear_tempartureBox(){ // temparture 입력받아서 옷 추천해주기
    var term = document.getElementById("input-temparture");
    recommend_fashion(term.value);
    term.value = null;
}
function recommend_fashion(input_temparture){
    const options = 'width=700, height=600, top=50, left=50, scrollbars=yes';
    // alert(input_temparture); ?? 
    if (input_temparture == null) { 
        window.open('http://127.0.0.1:5500/html/Step05_ul.html', '_blank', options);
    } else if (input_temparture <=10) {
        window.open('http://127.0.0.1:5500/html/Step06_ol.html', '_blank', options);
    } else {
        window.open('http://127.0.0.1:5500/html/Step07_dl.html', '_blank', options);
    }
}
function CBC(input){
    if (input.value.trim() !== '') {
        input.classList.add('filled-inputBox');
    } else {
        input.classList.remove('filled-inputBox')
    }
}

function img_slide(){
    console.log('123');
    
    var slider = document.getElementById('imgSlider');
    slider.src = "https://picsum.photos/200/300?grayscale";

    // 랜덤한 파라미터 추가하여 이미지 소스 변경
    // const randomNumber = Math.floor(Math.random() * 1000);
    // img.src = `https://picsum.photos/200/300?grayscale&random=${randomNumber}`;
}
// var cycle = 0; 병렬처리 
// function processing-intervalJob() {
//     if (cycle % 10 != 0) {
//         clock();
//     } else {
//         img_slide();
//     }
//     cycle++;
//     cycle %= 10;
// }
clock();
setInterval(clock, 1000);
// img_slide();
// setinterval(img_slide,5000);
// processing-intervalJob();
// setinterval(processing-intervalJob, 1000);

