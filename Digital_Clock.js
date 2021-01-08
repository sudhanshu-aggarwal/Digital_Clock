let disp = document.getElementById('display');


function rotating() {

    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    disp.textContent = (hour + " : " + minute + " : " +second);
    
}

setInterval(rotating, 1000);