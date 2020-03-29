document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault()
  })
function submitData() {
    var dd = document.getElementById("dd").value;
    var mm = document.getElementById("mm").value;
    var yy = document.getElementById("yy").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
}
var birthDate = newDate(mm + '/' + dd + '/' + yy);
var dayOfWeek = birthDate.findDay();
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
"Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw","Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function maleNames(daysOfWeek) {
   if(daysOfWeek === 0) {
   console.log("Your Akan Name is Kwasi");
   }else if(dayOfWeek=== 1) {
   console.log("Your Akan Name is Kwadwo");
   }else if(dayOfWeek === 2) {
   console.log("Your Akan Name is Kwabena");
   }else if(dayOfWeek === 3) {
   console.log("Your Akan Name is Kwaku");
   }else if(dayOfWeek === 4) {
   console.log("Your Akan name is Yaw");
   }else if(dayOfWeek === 5) {
   console.log("Your Akan Name is Kofi");
   }else {
   console.log("Your Akan Name is Kwame");
   }
}
function femaleNames(daysOfWeek) {
    if(dayOfWeek === 0) {
    console.log("Your Akan Name is Akosua");
    }else if(dayOfWeek === 1) {
    console.log("Your Akan Name is Adwoa");
    }else if(dayOfWeek === 2) {
    console.log("Your Akan Name is Abenaa");
    }else if(dayOfWeek === 3) {
    console.log("Your Akan Name is Akua");
    }else if(dayOfWeek === 4) {
    console.log("Your Akan Name is Yaa");
    }else if(dayOfWeek === 5) {
    console.log("Your Akan Name is Afua");
    }else {
    console.log("Your Akan Name is Ama");
    }
}