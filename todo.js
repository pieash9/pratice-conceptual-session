let count = 0; 
document.getElementById('input-btn').addEventListener('click',function(){
    count +=1;
    const inputValue = document.getElementById('input-value').value;
    
    const parent = document.getElementById('content-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${count}</td>
    <td>${inputValue}</td>
    <td>
    <button class = 'btn btn-danger deleteBtn'>Delete</button>
    <button class = 'btn btn-primary'>Done</button>
    </td>
    `
    parent.append(tr);

    document.getElementById('input-value').value = '';

    const elements = document.querySelectorAll('.deleteBtn');
    for(const value of elements){
        value.addEventListener('click',function(event){
            event.target.parentNode.parentNode.style.display = 'none';
        })
    }
})
document.getElementById('clear-btn').addEventListener('click',function(event){
    console.log(event.target.parentNode);
    event.target.parentNode.style.display='none'
})