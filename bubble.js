document.getElementById('grandParents').addEventListener('click',function(){
    console.log('grandParents clicked');
},true)
document.getElementById('parent').addEventListener('click',function(e){
    
    console.log('parent clicked');
    e.stopPropagation();
    
},true)
document.getElementById('child').addEventListener('click',function(){
    console.log('child clicked');
},true)