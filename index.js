const container = document.getElementById('container');
const text = document.getElementById('text');
const pointer = document.getElementById('pointer');

const totalTime = 10500;
const breatheTime = (totalTime / 4) * 2;
const holdTime = totalTime / 5;
const spins = totalTime * 2;



breatheAnimation();

function breatheAnimation() {
    text.innerText = 'Breathe In!';  //set the innter text
    container.className = 'container grow';  //apply this class to it


    // setTimeout(() => {
    //     text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';
        }, breatheTime);


     
    }



setInterval(breatheAnimation, totalTime, spins);







