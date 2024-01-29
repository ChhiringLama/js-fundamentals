const circles=document.querySelectorAll('.item');
var btnPrev=document.querySelector('.prev');
var btnNext=document.querySelector('.next');

var activeIndex=0;

btnNext.addEventListener('click',()=>{
    activeIndex++;
    if(activeIndex>=circles.length){
        activeIndex=circles.length
    };
    console.log(activeIndex);

    updateCircle();
});

btnPrev.addEventListener('click',()=>{
    activeIndex--;
    if(activeIndex<=1){
        activeIndex=0;
    };
    console.log(activeIndex);

    updateCircle();
});

function updateCircle(){
    circles.forEach((element, index ) => {
        if(index<=activeIndex){
            element.classList.add('active')
        }else{
            element.classList.remove('active')
        }
    });

}