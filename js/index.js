let slider=document.querySelectorAll('.slide');
let arryFrom =Array.from (slider);
console.log(arryFrom);
 let next= document.querySelector('.next');




function prevNext(){
    let activeSlide = document.querySelector('.slide.active');

    let currentIndx = arryFrom.indexOf(activeSlide);
  

    let prev;
    let next;
 if(currentIndx == 0){
    prev =arryFrom[arryFrom.length -1];
 }else{
    prev= arryFrom[currentIndx -1];
 }
   if(currentIndx ==arryFrom.length -1){
    next=arryFrom[0];
   }else{
    next= arryFrom[currentIndx +1];
   }
     
    return [prev ,next]
}


function koijaba(){
    let activeSlide = document.querySelector('.slide.active');
    let currentIndx = arryFrom.indexOf(activeSlide);

  let [prev,next]=prevNext();

  arryFrom.map((slide,index)=>{
    if(currentIndx== index){
        slide.style.transfrom ="translateX(0%)"
    } else if( slide ==prev){
        slide.style.transfrom ="translateX(-100%)"
    } else if( slide == next){
        slide.style.transfrom ="translateX(100%)"
    }
  })


}

koijaba();


next.addEventListener('click',function(){
    let activeSlide = document.querySelector('.slide.active');
  let [next] =prevNext();
   
   
    console.log("ok");
    activeSlide.classList.remove('active');
    activeSlide.style.transfrom="translateX(-100%)";

    next.classList.add('active');
    next.style.transfrom="translateX(0%)";
    
})