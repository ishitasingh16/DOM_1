//const para=document.getElementById('para')
//para.innerText="This is updated paragraph"
//para.style.color="green"
//console.log(para)

//const para=document.getElementsByClassName('para')
//para[0].innerText="This is updated paragraph"
//para[1]

//ele)

//const container=document.querySelector(".container")
//container.innerHTML="<h1>This is a heading</h1>"
//console.log(container)

//const start = document.querySelector('#start');
//const stop = document.querySelector('#stop');

//start.classList.add("btn");

//function message(event) {
//console.log("button clicked");
//}
//start.addEventListener('keyup',message)

//start.addEventListener('click', message);

//stop.addEventListener('click', () => {
    //console.log("stop button clicked!!");
    
    //start.removeEventListener('click', message);
//});

//const form=document.querySelector('form')
//form.addEventListener('submit',(event)=>{
//event.preventDefault()
   // console.log("Form Submitted")
//})

// const div=document.querySelector('.container')
// const div2=document.querySelector('outer')
// const btn=document.querySelector('button')


// div.addEventListener('click',()=>{console.log("clicked the div")})
// div2.addEventListener('click',()=>{console.log("clicked the outer div")})
// btn.addEventListener('click',()=>{console.log("clicked the btton")})


// var message = "Hello User"; 

// function greet() {
//     console.log(message); 
// }

// greet();
// console.log(message); 
const timerId=setInterval(()=>{
    console.log("After 3 sec")
},1000)
console.log(timerId)
setTimeout(()=>{
    classInterval(timerId)
},10*1000)