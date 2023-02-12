let value = 0;
document.getElementById('btn-blue').addEventListener('click',function(){
    value +=1;
    console.log(value );
    document.getElementById('counter').innerText = value;
})

document.getElementById('btn-success').addEventListener('click',function(){
    value -=1;
    document.getElementById('counter').innerText = value;
})