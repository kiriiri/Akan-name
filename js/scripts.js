document.addEventListener('DOMContentLoaded',function() {
    document.getElementById("submit").addEventListener("click", function(event) {
        event.preventDefault()
    })
});
function submitData() {
    var dd = document.getElementById("dd").value;
    var mm = document.getElementById("mm").value;
    var yy = document.getElementById("yy").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;

    var daysOfWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw","Kofi", "Kwame"];

    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    var bornDate = new Date(mm + '/' + dd + '/' + yy);
    console.log(bornDate)
    var day = bornDate.getDay()

    if(dd<=0 || dd>31) {
        document.getElementById("invalid").innerText="Enter a valid date"
        document.getElementById("invalid").style.color="purple"
    }else if(mm === "----") {
        document.getElementById("invalid1").innerText="Kindly enter a month"
        document.getElementById("invalid1").style.color="purple"
    }else if(yy<1900 || yy>2020) {
            document.getElementById("invalid2").innerText="Kindly enter the year"
            document.getElementById("invalid2").style.color="purple"
    }else if(male === true) {
            document.getElementById("results").innerHTML="Your birthday is" + daysOfWeek[day] + "." + "Your Akan Name is" + maleNames[day]
            document.getElementById("results").style.color="black"
    }else if(female === true) {
            document.getElementById("results").innerHTML="Your birthday is" + daysOfWeek[day] + "." + "Your Akan Name is" + femaleNames[day]
            document.getElementById("results").style.color="black"
    }else if (female === false && male === false) {
            document.getElementById("invalid3").innerText="Select a gender"
            document.getElementById("invalid3").style.color="purple"
    }
}