let saniye=0;
let deqiqe=0;
let saat=0;

let h2=document.querySelector(".saat")
let h3=document.querySelector(".deqiqe")
let h4=document.querySelector(".saniye")
setInterval (function zaman() {
    saniye++;
    if(saniye==60) {
        saniye=0;
        deqiqe++
    }
    if(deqiqe==60) {
        deqiqe=0;
        saat++;
    }
    h2.innerHTML=`saat:${saat}`
    h3.innerHTML=`deqiqe:${deqiqe}`
    h4.innerHTML=`saniye:${saniye}`
},1000)