function submit_by_Id () {
    var Date = document.getElementById("dd").value;
    var Month = document.getElementById("mm").value;
    var Year = document.getElementById("yy").value;
    var Male = document.getElementById("male").value;
    var Female = document.getElementById("female").value;
    if (validation())
    {
        document.getElementById("form_id").submit();
        alert("Date :" + dd + "n Month : " + mm + " n Year : " + yy + " n Male : " + male +" n Female : " + female 
        + "n Form Id :" + document.getElementById("form_id").getAttribute("id") + " nn Form Submitted Successfully.");
    }
}
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
"Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw","Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function maleNames(daysOfWeek) {
   if(daysOfWeek === 0) {
   console.log("Your Akan Name is Kwasi");
   }else if(daysOfWeek === 1) {
   console.log("Your Akan Name is Kwadwo");
   }else if(daysOfWeek === 2) {
   console.log("Your Akan Name is Kwabena");
   }else if(daysOfWeek === 3) {
   console.log("Your Akan Name is Kwaku");
   }else if(daysOfWeek === 4) {
   console.log("Your Akan name is Yaw");
   }else if(daysofWeek === 5) {
   console.log("Your Akan Name is Kofi");
   }else {
   console.log("Your Akan Name is Kwame");
   }
}
function femaleNames(daysOfWeek) {
    if(daysOfWeek === 0) {
    console.log("Your Akan Name is Akosua");
    }else if(daysOfWeek === 1) {
    console.log("Your Akan Name is Adwoa");
    }else if(daysOfWeek === 2) {
    console.log("Your Akan Name is Abenaa");
    }else if(daysOfWeek === 3) {
    console.log("Your Akan Name is Akua");
    }else if(daysOfWeek === 4) {
    console.log("Your Akan Name is Yaa");
    }else if(daysOfWeek === 5) {
    console.log("Your Akan Name is Afua");
    }else {
    console.log("Your Akan Name is Ama");
    }
}