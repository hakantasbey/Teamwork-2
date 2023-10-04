// ?-------------Get Season----------------


// let month = prompt("enter a month: 1/12")
// let day = prompt("enter a day: 1/31")

// if(!(month>=1 && month<=12) || !(day>=1 && day<=31)){
//     console.log("ERROR");
// } else{
// let season 
// if((month>=3 && month<=5) || (month == 2 && day>=21 && day<=29)){
//     season = "SPRING"
// } else if((month>=6 && month<=8) || (month == 9 && day<=21 )){
//     season = "SUMMER"
// } else if((month>=10 && month<=11) || (month==9 && day>=22) || (month == 12 && day<=20)){
//     season = "FALL"
// } else if((month==1) || (month == 12 && day>=21) || (month==2 && day<=20)){
//     season = "WINTER"
// }
// console.log(`The season for ${month} / ${day} is ${season}`);
// }

// ?---------Leap Year------------

// let year = prompt("Please enter a year")
// if(((year % 4 == 0)&& !(year % 100 == 0)) || (year % 400 == 0)){
//     console.log(`${year} is a leap year.`);
// }else{
//     console.log(`${year} is not a leap year.`);
// }

//? -------- Aylarin kac gun oldugu--------

let month = prompt("enter a month").toLowerCase();
month = month.toLowerCase();
switch (month) {
  case "ocak":
  case "mart":
  case "mayis":
  case "temmuz":
  case "agustos":
  case "ekim":
  case "aralik":
    console.log(`${month} has a 31 days`);
    break;
  case "nisan":
  case "haziran":
  case "eylul":
  case "kasim":
    console.log(`${month} has a 30 days`);
    break;
  case "subat":
    console.log(`${month} has a 28 days`);
    break;
  default:
    console.log("hatali bir giris yaptiniz");
}

// ?-------Listeden cift ve tek sayilari bulup toplamlarini yazdirma------

const oddOrEven=[10,11,12,13,14,15,16,17,18,19,20,21]
let even=[]
let odd=[]
let sum =0
let sumo =0
for(let i=0;i<oddOrEven.length;i++){
    if(oddOrEven[i]%2==0){
       even.push(oddOrEven[i])
       sum = sum + oddOrEven[i]
       
    }else{odd.push(oddOrEven[i])
        sumo = sum + oddOrEven[i]
    }
}
console.log(`cift sayılar: ${even},
bu sayıların toplamı: ${sum}`);
console.log(`tek sayılar: ${odd},
bu sayıların toplamı: ${sumo}`);

