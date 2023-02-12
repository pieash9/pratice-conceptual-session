function makeRed(){
    document.body.style.backgroundColor = 'red';
    document.getElementById('heading').innerText = 'color red';
}

function makeGreen(){
    document.body.style.backgroundColor = 'green';
    document.getElementById('heading').innerText = 'changed the text';
}
document.getElementById('blue-btn').addEventListener('click',function(){
    document.body.style.backgroundColor = 'tomato';
    document.getElementById('heading2').innerText = 'hello 2'
})