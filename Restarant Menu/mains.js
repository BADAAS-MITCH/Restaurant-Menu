const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn10 = document.getElementById('btn10');
const btn11 = document.getElementById('btn11');
const btn12 = document.getElementById('btn12');
const btn13 = document.getElementById('btn13');
const btn14 = document.getElementById('btn14');
const btn15 = document.getElementById('btn15');
const ordered = document.getElementById('ordered');
const button = document.getElementById('button');

const buttn = document.getElementById('button')

const btnbt = document.getElementsByClassName('btnbt')
const btnbt1 = document.getElementsByClassName('btnbt1')
const btnbt2 = document.getElementsByClassName('btnbt2')
const btnbt3 = document.getElementsByClassName('btnbt3')
const btnbt4 = document.getElementsByClassName('btnbt4')
const btnbt5 = document.getElementsByClassName('btnbt5')
const btnbt6 = document.getElementsByClassName('btnbt6')
const btnbt7 = document.getElementsByClassName('btnbt7')
const btnbt8 = document.getElementsByClassName('btnbt8')
const btnbt9 = document.getElementsByClassName('btnbt9')
const btnbt10 = document.getElementsByClassName('btnbt10')
const btnbt11 = document.getElementsByClassName('btnbt11')
const btnbt12 = document.getElementsByClassName('btnbt12')
const btnbt13 = document.getElementsByClassName('btnbt13')
const btnbt14 = document.getElementsByClassName('btnbt14')
const btnbt15 = document.getElementsByClassName('btnbt15')



const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const ten = document.getElementById('ten');
const eleven = document.getElementById('eleven');
const twelve = document.getElementById('twelve');
const thirteen = document.getElementById('thirteen');
const fourteen = document.getElementById('fourteen');
const fifteen = document.getElementById('fifteen');
const sixteen = document.getElementById('sixteen');

const muste = document.getElementsByClassName('must')
const muste1 = document.getElementsByClassName('must1')
const muste2 = document.getElementsByClassName('must2')
const muste3 = document.getElementsByClassName('must3')
const muste4 = document.getElementsByClassName('must4')
const muste5 = document.getElementsByClassName('must5')
const muste6 = document.getElementsByClassName('must6')
const muste7 = document.getElementsByClassName('must7')
const muste8 = document.getElementsByClassName('must8')
const muste9 = document.getElementsByClassName('must9')
const muste10 = document.getElementsByClassName('must10')
const muste11 = document.getElementsByClassName('must11')
const muste12 = document.getElementsByClassName('must12')
const muste13 = document.getElementsByClassName('must13')
const muste14 = document.getElementsByClassName('must14')
const muste15 = document.getElementsByClassName('must15')


btn.addEventListener('click', click)

function click() {
    btn.style.backgroundColor = 'black';
    for(var i = 0; i < btnbt.length; i++) {  
        btnbt[i].style.display = 'inline-block';
    }
    ordered.textContent += one.textContent;
}

for (let i = 0; i < btnbt.length; i++) {
    btnbt[i].addEventListener('click', () => {
        ordered.textContent = '';
    })
}

btn1.addEventListener('click', click1)

function click1() {
    btn1.style.backgroundColor = 'black';   
    for(var i = 0; i < btnbt1.length; i++) {  
        btnbt1[i].style.display = 'inline-block';
    } 
    ordered.textContent += two.textContent + ' ';
}

for (let i = 0; i < btnbt1.length; i++) {
    btnbt1[i].addEventListener('click', () => {
        ordered.textContent = '';
    })
}

btn2.addEventListener('click', click2)

function click2() {
    btn2.style.backgroundColor = 'black';  
    for(var i = 0; i < btnbt2.length; i++) {  
        btnbt2[i].style.display = 'inline-block';
    }  
    ordered.textContent += three.textContent + ' ';
}

for (let i = 0; i < btnbt2.length; i++) {
    btnbt2[i].addEventListener('click', () => {
        ordered.textContent = '';
    })
}

btn3.addEventListener('click', click3)

function click3() {
    btn3.style.backgroundColor = 'black';   
    for(var i = 0; i < btnbt3.length; i++) {  
        btnbt3[i].style.display = 'inline-block';
    }    
    ordered.textContent += four.textContent + ' ';
}

for (let i = 0; i < btnbt3.length; i++) {
    btnbt3[i].addEventListener('click', () => {
        ordered.textContent = '';
    })
}

btn4.addEventListener('click', click4)

function click4() {
    btn4.style.backgroundColor = 'black';  
    for(var i = 0; i < btnbt4.length; i++) {  
        btnbt4[i].style.display = 'inline-block';
    }     
    ordered.textContent += five.textContent + ' ';
}

for (let i = 0; i < btnbt4.length; i++) {
    btnbt4[i].addEventListener('click', () => {
        ordered.textContent = '';
    })
}

btn5.addEventListener('click', click5)

function click5() {
    btn5.style.backgroundColor = 'black';     
    for(var i = 0; i < btnbt5.length; i++) {  
        btnbt5[i].style.display = 'inline-block';
    }  
    ordered.textContent += six.textContent + ' ';
}

for (let i = 0; i < btnbt5.length; i++) {
    btnbt5[i].addEventListener('click', () => {
        ordered.textContent = '';
    })
}

btn6.addEventListener('click', click6)

function click6() {
    btn6.style.backgroundColor = 'black';   
    for(var i = 0; i < btnbt6.length; i++) {  
        btnbt6[i].style.display = 'inline-block';
    }    
    ordered.textContent += seven.textContent + ' ';
}

for (let i = 0; i < btnbt6.length; i++) {
    btnbt6[i].addEventListener('click', () => {
        ordered.textContent = '';
    })
}

btn7.addEventListener('click', click7)

function click7() {
    btn7.style.backgroundColor = 'black';   
    for(var i = 0; i < btnbt7.length; i++) {  
        btnbt7[i].style.display = 'inline-block';
    }    
    ordered.textContent += eight.textContent + ' ';
}

for (let i = 0; i < btnbt7.length; i++) {
    btnbt7[i].addEventListener('click', () => {
        ordered.textContent = '';
    })
}

btn8.addEventListener('click', click8)

function click8() {
    btn8.style.backgroundColor = 'black';     
    for(var i = 0; i < btnbt8.length; i++) {  
        btnbt8[i].style.display = 'inline-block';
    }  
    ordered.textContent += nine.textContent + ' ';
}

for (let i = 0; i < btnbt8.length; i++) {
    btnbt8[i].addEventListener('click', () => {
        ordered.textContent = '';
    })
}

btn9.addEventListener('click', click9)

function click9() {
    btn9.style.backgroundColor = 'black';     
    for(var i = 0; i < btnbt9.length; i++) {  
        btnbt9[i].style.display = 'inline-block';
    }  
    ordered.textContent += ten.textContent + ' ';
}

for (let i = 0; i < btnbt9.length; i++) {
    btnbt9[i].addEventListener('click', () => {
        ordered.textContent = '';
    })
}

btn10.addEventListener('click', click10)

function click10() {
    btn10.style.backgroundColor = 'black';   
    for(var i = 0; i < btnbt10.length; i++) {  
        btnbt10[i].style.display = 'inline-block';
    }    
    ordered.textContent += eleven.textContent + ' ';
}

for (let i = 0; i < btnbt10.length; i++) {
    btnbt10[i].addEventListener('click', () => {
        ordered.textContent = '';
    })
}

btn11.addEventListener('click', click11)

function click11() {
    btn11.style.backgroundColor = 'black';     
    for(var i = 0; i < btnbt11.length; i++) {  
        btnbt11[i].style.display = 'inline-block';
    }  
    ordered.textContent += twelve.textContent + ' ';
}

for (let i = 0; i < btnbt11.length; i++) {
    btnbt11[i].addEventListener('click', () => {
        ordered.textContent = '';
    })
}

btn12.addEventListener('click', click12)

function click12() {
    btn12.style.backgroundColor = 'black';     
    for(var i = 0; i < btnbt12.length; i++) {  
        btnbt12[i].style.display = 'inline-block';
    }  
    ordered.textContent += thirteen.textContent + ' ';
}

for (let i = 0; i < btnbt12.length; i++) {
    btnbt12[i].addEventListener('click', () => {
        ordered.textContent = '';
    })
}

btn13.addEventListener('click', click13)

function click13() {
    btn13.style.backgroundColor = 'black';     
    for(var i = 0; i < btnbt13.length; i++) {  
        btnbt13[i].style.display = 'inline-block';
    }  
    ordered.textContent += fourteen.textContent + ' ';
}

for (let i = 0; i < btnbt13.length; i++) {
    btnbt13[i].addEventListener('click', () => {
        ordered.textContent = '';
    })
}


btn14.addEventListener('click', click14)

function click14() {
    btn14.style.backgroundColor = 'black';     
    for(var i = 0; i < btnbt14.length; i++) {  
        btnbt14[i].style.display = 'inline-block';
    }  
    ordered.textContent += fifteen.textContent + ' ';
}

for (let i = 0; i < btnbt14.length; i++) {
    btnbt14[i].addEventListener('click', () => {
        ordered.textContent = '';
    })
}


btn15.addEventListener('click', click15)

function click15() {
    btn15.style.backgroundColor = 'black';     
    for(var i = 0; i < btnbt15.length; i++) {  
        btnbt15[i].style.display = 'inline-block';
    }  
    ordered.textContent += sixteen.textContent + ' ';
}
    
buttn.addEventListener('click', clck)

function clck() {
    ordered.innerText = ''       
    alert('ORDER PLACED')
}
