/ let viewportHeight = window.innerHeight;
// let viewportWidth = window.innerWidth;
// alert(viewportWidth)

let hamburger=document.querySelector(".ham");
let drpdown1=document.querySelector(".first");
let drpdown2=document.querySelector(".second");
let cnt1=0;
let cnt2=0;
let cnt3=0;



document.querySelector(".ldrop1").addEventListener("click",()=>{
    document.querySelector(".floating_1").classList.toggle("f1");
    document.querySelector(".ldrop1").classList.toggle("l1");
})
document.querySelector(".ldrop2").addEventListener("click",()=>{
    document.querySelector(".floating_2").classList.toggle("f2");
    document.querySelector(".ldrop2").classList.toggle("l2");
})
hamburger.addEventListener('click',()=>{
    cnt3+=1;
    document.querySelector(".menupg").classList.toggle("activepg");
    document.querySelector(".Company").classList.toggle("activepgcom");
    document.querySelector(".Careers").classList.toggle("activepgcar");
    document.querySelector(".backblur").classList.toggle("bb");
    document.querySelector(".ham").classList.toggle("open");
    if(cnt3%2!=0){
    document.getElementsByTagName('body')[0].style.overflowY="hidden";
    }
    else{
        document.getElementsByTagName('body')[0].style.overflowY="visible";
    }
    
})


drpdown1.addEventListener("click", ()=>{
    cnt1+=1;
    drpdown1.classList.toggle("ek");
    if(cnt2%2==0){
    
     document.querySelector(".Company").classList.toggle("fst");
    document.querySelector(".Careers").classList.toggle("sec");
    }
    else{
        document.querySelector(".Company").classList.toggle("fst");
        document.querySelector(".Careers").classList.toggle("already1d");

    }
})
drpdown2.addEventListener("click", ()=>{
    drpdown2.classList.toggle("dui");
    cnt2+=1;
        
    if(cnt1%2==0){
        document.querySelector(".Careers").classList.toggle("two");
    }
    else{
        document.querySelector(".Careers").classList.toggle("already1d");
        
    }
})
Footer
© 2022 GitHub,