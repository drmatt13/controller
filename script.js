var circle = document.querySelector('circle');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

const slider = document.querySelector('input');
setProgress(slider.value);


let url = 'http://localhost:3000';
let first = .5050;
let standard = .64/100;
let data = {};
data.value = this.value*standard + first;
function formatData() {
    
}

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
    });
    return response.json(); 
}

let text = document.querySelector(".text");
text.value = 'http://localhost:3000';
checkingConnection = true;

text.addEventListener("keyup", (e) => {
    if (e.key === 'Enter') {
        url = text.value;
        if (!checkingConnection) {
            text.classList = "text";
            connect();
        }
    }
});

slider.oninput = function() {
    setProgress(slider.value);
    console.log(slider.value);data.value = this.value*standard + first;
    data.value = this.value*standard + first;
    postData(url, data)
    .then(data => {
        console.log(data);
    });
    circle.setAttribute("stroke","CornflowerBlue");
}

let isActive = true;

var button = document.querySelector(".svg-container");
button.addEventListener("click", () => {
    if (isActive) {
        data.value = -1;
        circle.setAttribute("stroke","Crimson");
        isActive = false;
    } else {
        data.value = this.value*standard + first;
        circle.setAttribute("stroke","CornflowerBlue");
        isActive = true;
    }
    postData(url, data)
    .then(res => {
        console.log(res);
    });
});

async function connect() {
    await fetch(text.value)
    .then(res => {
        if (res.status == 200) {
            console.log("connected");
            text.classList = "text green-border";
            checkingConnection = false;
        }
    })
    .catch(error => {
        console.log(error);
        text.classList = "text red-border";
        checkingConnection = false;
    })
}

connect();