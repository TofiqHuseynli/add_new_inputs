


const plasBtn = document.getElementById("plas-button");

plasBtn.addEventListener('click', function(){
    let myForm = document.getElementById('my-form');

   

    let div = document.createElement('div');
    div.innerHTML = '<span class="space"></span> <input class="my-input" type="text" placeholder="Answer..."> <i class="fa fa-trash fa-1x trash-button" id="trash-btn"></i>'  
    div.className = 'addition';  
    myForm.appendChild(div);    
})






    let myForm = document.getElementById('my-form');

    myForm.addEventListener('click',function(e){
    if(e.target &&  e.target.className.match(/trash-button/g)){
        e.target.parentElement.remove() 
     }  
 });

