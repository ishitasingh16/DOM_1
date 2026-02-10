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
// const timerId=setInterval(()=>{
//     console.log("After 3 sec")
// },1000)
// console.log(timerId)
// setTimeout(()=>{
//     classInterval(timerId)
// },10*1000)
// let count = 1;

// cont timerId=setInterval
// })
// function greet(){
//  console.log("hello students")
// }
// function print(sample, num){
//     console.log("total students are ",num)
// }
// print(greet, 45)
// console.log("Starting homework...");

// setTimeout(() => {
//   console.log("Homework done!");
//   console.log("Starting dinner...");

//   setTimeout(() => {
//     console.log("Dinner done!");
//     console.log("Getting ready to go out...");

//     setTimeout(() => {
//       console.log("Going to the playground!");
//     }, 1000); // after dinner

//   }, 1500); // dinner time

// }, 2000); // homework time

// function finishHomework(callback){
//     console.log("starting homework...");
//     setTimeout(() =>{
//         console.log("Homework done!");
//         callback();
        
//     },2000);
// }
// function eatDinner(callback){
//     console.log("starting dinner...");
//     setTimeout(() =>{
//         console.log("dinner done!");
//         callback();
        
//     },1500);
// }
 
// function goToplayground(){
//     console.log("going to playground!");
// }

// finishHomework(()=>{
//     eatDinner(() =>{
//         goToplayground();
//     });
// });
//  cost p=new Promise ((res,rej)=>{
//     let done=false
//     setTimeout(()=>{
//         if(done){
//             res("Work is done!!")
//         }else{
//             rej("work is done")
//         }
//     },5000)
//  })
// p.then(msg)=>{
//     console.log(msg)

// }.catch(err)=>
//     function doHomework() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let homeworkDone = true;
//             if (homeworkDone) {
//                 console.log("Homework is done");
//                 resolve("Homework complete");
//             } else {
//                 reject("Homework not done");
//             }
//         }, 3000);
//     });
// }

// function eatDinner() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let dinnerEaten = true;
//             if (dinnerEaten) {
//                 console.log("Dinner is eaten");
//                 resolve("Dinner complete");
//             } else {
//                 reject("Didn't eat dinner");
//             }
//         }, 2000);
//     });
// }

// function goToPlayground() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let permission = true;
//             if (permission) {
//                 console.log("Went to the playground");
//                 resolve("Playground time!");
//             } else {
//                 reject("Not allowed to go out");
//             }
//         }, 3000);
//     });
// }

// doHomework()
//   .then((data) => {
//     console.log(data);
//     return eatDinner();
//   })
//   .then((data) => {
//     console.log(data);
//     return goToPlayground();
//   })
//   .catch((error) => {
//     console.log("Something went wrong:", error);
//   })
//   .finally(() => {
//     console.log(" Go to sleep");
//   });
// 1. Select the main containers
const form = document.querySelector('.form');
const eventCards = document.querySelector('.cards');

// 2. Select the specific input fields (Missing in your original code)
const eventTitle = document.querySelector('#eventTitle'); 
const eventDate = document.querySelector('#eventDate');
const category = document.querySelector('#category');
const description = document.querySelector('#description');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the current values from the inputs
    let title = eventTitle.value;
    let date = eventDate.value;
    let cat = category.value;
    let desc = description.value;

    // Create the card element
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h3>${title}</h3>
        <p>📆 ${date}</p>
        <button class="cat-btn">${cat}</button>
        <p>${desc}</p>
        <div class="dlt">x</div>
    `;

    // Append to the list
    eventCards.appendChild(card);

    // Add delete functionality to the specific "x" button
    const dlt = card.querySelector('.dlt');
    dlt.addEventListener('click', () => {
        card.remove();
    });

    // Optional: Clear the form fields after submission
    form.reset();
});

// Clear All functionality
document.querySelector('.clearall').addEventListener('click', () => {
    eventCards.innerHTML = ''; // Faster way to clear all children
});