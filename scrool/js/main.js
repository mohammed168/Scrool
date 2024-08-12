let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3'); //
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nakhal = document.querySelector('.nakhal');
window.onscroll = ()=>{
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value *3 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value  + 'px';
    boat.style.top = value  + 'px';
    boat.style.left = value *3 + 'px';
    nakhal.style.fontSize = value + 'px';
    console.log(scrollY);
    if(scrollY >= 90.4000015258789){
        nakhal.style.fontSize = 90.4000015258789 + 'px';
        nakhal.style.position =  'fixed';
        if(scrollY >= 433.6000061035156){
            nakhal.style.display = 'none';
        }else{
            nakhal.style.display = 'block';
        }
        if(scrollY >= 204.8000030517578){
            document.querySelector('#main').style.background = 'linear-gradient( #376281, #10001f) ';
        }else{
            document.querySelector('#main').style.background = 'linear-gradient( #200016 , #10001f) ';

        }
    }

}