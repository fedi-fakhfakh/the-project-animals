for(let i=0;i < document.querySelectorAll('.item_name').length;i++){
    document.querySelectorAll('.item_name')[i].addEventListener('mouseover',function(){
        console.log('fayza')
        document.querySelectorAll('.item_name')[i].style.transform='translateX(calc(-100% + 250px))'
    })
    document.querySelectorAll('.item_name')[i].addEventListener('mouseout',function(){
        console.log('fayza')
        document.querySelectorAll('.item_name')[i].style.transform='translateX(0)'
    })
}
document.querySelector('.submit_price').addEventListener('click',function(){
    for(let i=0;i < document.querySelectorAll('.item').length;i++){
        document.querySelectorAll('.item')[i].style.display='none'
    }
    if(document.querySelector('.min').value.length ==0 && document.querySelector('.max').value.length ==0){
        for(let i=0;i < document.querySelectorAll('.item').length;i++){
            setTimeout(function(){document.querySelectorAll('.item')[i].style.display='block'},10)
        }
    }
    if(document.querySelector('.min').value.length !=0 && document.querySelector('.max').value.length ==0){
        for(let i=0;i < document.querySelectorAll('.item_price').length;i++){
            if(+document.querySelectorAll('.item_price')[i].classList[document.querySelectorAll('.item_price')[i].classList.length-1] >= document.querySelector('.min').value){
                setTimeout(function(){document.querySelectorAll('.item')[i].style.display='block'},10)
            }
        }
    }
    if(document.querySelector('.min').value.length ==0 && document.querySelector('.max').value.length !=0){
        for(let i=0;i < document.querySelectorAll('.item_price').length;i++){
            if(+document.querySelectorAll('.item_price')[i].classList[document.querySelectorAll('.item_price')[i].classList.length-1] <= document.querySelector('.max').value){
                setTimeout(function(){document.querySelectorAll('.item')[i].style.display='block'},10)
            }
        }
    }
    if(document.querySelector('.min').value.length !=0 && document.querySelector('.max').value.length !=0){
        for(let i=0;i < document.querySelectorAll('.item_price').length;i++){
            if(+document.querySelectorAll('.item_price')[i].classList[document.querySelectorAll('.item_price')[i].classList.length-1] >= document.querySelector('.min').value && +document.querySelectorAll('.item_price')[i].classList[document.querySelectorAll('.item_price')[i].classList.length-1] <= document.querySelector('.max').value){
                setTimeout(function(){document.querySelectorAll('.item')[i].style.display='block'},10)
            }
        }
    }
})