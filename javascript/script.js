
// function add(){

// //    alert("Hello")

// //  let ans= confirm("Did you liked my website")

// //  if(ans){
// //     alert("Thaankyou")
// //  }
// //  else{
// //     alert("Bhad m ja")
// //  }

// //  let ans=prompt("What is your name?")
// //  alert("Hello "+ans)
 
//  let ans=document.querySelector("#hello span")

//  ans.innerHTML="Developer"

   
 

// }


// question :1

function age(){

   let a=prompt("what is your age")
   a>=18?alert("a"):alert("II");
}

// question :2

function cour(){

    let cr=confirm("Have you compleated any course")
    if (cr)
        alert("completed")
    else
    alert("Not completed")
}

// question :3

function discount(){

    let price=prompt("enter the price of the item you have purchaxed")
    let c=confirm("do you have any discount coupon")
    if (c)
        alert("discount applied of 10%")
    else
    alert("no discount for you")
}


// question :4

function pass(){

    let marks=prompt("enter your marks ")
    if (marks<33)
        alert("you have failed the exam")
    else
    alert("you have passed the exam")

}


// question :5

function ev_od(){
    let nu=prompt("enter a number ")
    if(nu%2==0)
        alert("even")
    else
    alert("odd")
}


// question :6

function del(){

    let a=confirm("Do you want to delete this file")
    if (a)
        alert("file deleted")
    else 
    alert("cancelled")
}


// question :7

function po_ne(){
    let a =prompt("enter a number")
    if (a>=0)
        alert("positive")
    else
        alert("negative")
}


// question :8

function pri(){
   let a=1
    while(a<=10){
        console.log(a)
        a++
    }
}


// question :9

function inp(){

    let a
    do{

         a=prompt("enter a number")
    }
    while(a<=10)
}


// question :10

function week(){

    let a=prompt("enter a day of the week in integer")

    switch(a){
         
         case "1":
            alert("Sunday")
            break;
         
         case "2":
            alert("Monday")
            break;
         
         case "3":
            alert("Tuesday")
            break;
         
         case "4":
            alert("Wednesday")
            break;
         
         case "5":
            alert("Thursday")
            break;
         
         case "6":
            alert("Friday")
            break;
         
         case "7":
            alert("Saturday")
            break;

         default:
            alert("invalid input")
            break


    }
}



// dom style change


function c(){

    // let a=document.getElementsByTagName("h1")
    let a=document.querySelector(".hh")
    a.style.backgroundColor="red"
}