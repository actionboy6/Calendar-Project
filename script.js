var scheduleContainer = document.getElementById("timeSlot")


$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY"));
    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = this.parent().child(".description").val(); 
        var time = this.parent().attr("id");

        localStorage.setItem(time, text,);
    })
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    function hourTracker () {
        var currentHour = moment().hour();
        $(".time-block").each(function () {
            var timeSlot = parseInt($(this).attr("id").split("hour")[1]);

            if (timeSlot < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");

            }
            if (timeSlot === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");

            }
            if (timeSlot > currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");

            }
        })
    }
    hourTracker();
})
var storageObject = {};

function saveInfo () {
    scheduleContainer.children[0].children[1].value = "javascript"
    console.log(scheduleContainer.children[0].children[1].value)
}
saveInfo()