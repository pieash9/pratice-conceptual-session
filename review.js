document.getElementById('addComment').addEventListener('click',function(){
    const commentField = document.getElementById('yourComment');
    const comment = commentField.value ;

    const p = document.createElement('p');
    p.innerText = comment;
   
    const parent = document.querySelector('#comment-container');
    parent.appendChild(p);
    commentField.value = '';
})