document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault()
  })
function submitData() {
    var dd = document.getElementById("dd").value;
    var mm = document.getElementById("mm").value;
    var yy = document.getElementById("yy").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;

    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday"];

    var months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw","Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var birthDate = newDate(mm + '/' + dd + '/' + yy);
    var daysOfWeek = birthDate.getDay()
    if(dd<=0 || dd>31) {
        document.getElementById("invalid").innerText="Please enter a valid date"
    }else if(male ===true) {
        document.getElementById("results")="Your Akan Name is" + maleNames[daysOfWeek]
    }else if (female===true) {
        document.getElementById("results")="Your Akan Name is" + femaleNames[daysOfWeek]
    }
}