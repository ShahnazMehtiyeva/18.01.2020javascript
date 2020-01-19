// console.log("Hello world")

// var username = "john";
// console.log(username);



// var result=5+7+"5"+5;
// console.log(result);


// var month=prompt("Enter month number: ");
// if (month==1||month==2||month==12) {
//     console.log("Winter"); 
// } else if(month>=3 && month<=5){
//     console.log("Spring"); 
// }else if(month>=6 && month<=8){
//     console.log("Summer"); 
// }else if(month>=9 &&  month<=11){
//     console.log("Autumn"); 
// }else{
//     console.log("Not valid number");
// }




// function getfullname( name,surname){
//     let fullname=name+" "+surname;
//     console.log(fullname);
// }

// getfullname("eli","eliyev");



// let age=24;
// function soldier(age,isstudent){
//     if(!isstudent){
//         if(age>18){
//             console.log("Bu il qeder kecib: "+ (age-18));
//         }
//         else if(age<18){
//             console.log("Bu il qeder qalib: " + (18-age));
//         }else{
//             console.log("Vaxtidir");
//         }
//     }else{
//         if(age>21){
//             console.log("Bu il qeder kecib: "+ (age-21));
//         }
//         else if(age<21){
//             console.log("Bu il qeder qalib: " + (21-age));
//         }else{
//             console.log("Vaxtidir");
//         }
//     }
// }
// soldier(age,true);




// function getTime(minute) {
//     let hour=(minute- minute%60)/60;
//     minute=minute%60;
//     console.log("Hour : "+hour+" hours "+  " Minute : "+ minute + " minutes");
// }
// getTime(546);


// let name="eli";
// let surname="eliyev";
// let fullname=`${name} ${surname}`;
// console.log(fullname);


//polindrome
let text="abcba";

checkPolindrome(text);

// first version
// function checkPolindrome(arr) {
//     let lastindex=arr.length-1;
//     let count=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]==arr[lastindex]){
//             count++;
//             lastindex--;
//         }
//     }
//     if(count==arr.length){
//         console.log("Polindrome");
//     }else{
//         console.log("Is not polindrome");
//     }
// }

//second version
function checkPolindrome(arr) {
    let lastindex=arr.length-1;
    for (let i = 0; i < arr.length/2; i++) {
        if(arr[i]!=arr[lastindex]){
            console.log("Is not polindrome");
            return;
        }
        lastindex--;
    }
    console.log("Polindrome");
}