var ch = 0;
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
var Target = document.getElementById('clock');
var Target_apm = document.getElementById('apm');
function clock(){
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var apm = "AM";
    if(hours>12){
        apm = "PM";
        hours %= 12;
    }
    Target.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    Target_apm.innerText = `${apm}`;
}
clock();
setInterval(clock, 1000);

function clear_tempartureBox(){ // temparture 입력받아서 옷 추천해주기
    var term = document.getElementById("input-temparture");
    recommend_fashion(term.value);
    term.value = null;
}
function recommend_fashion(input_temparture){
    const options = 'width=700, height=600, top=50, left=50, scrollbars=yes';
    if (input_temparture <=10) {
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
