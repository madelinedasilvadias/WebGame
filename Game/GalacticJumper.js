document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById("gameCanvas");
    var context = canvas.getContext("2d");

    context.fillStyle = "white";
    context.font = "30px Arial";
    context.textAlign = "center";
    context.fillText("Coming soon", canvas.width / 2, canvas.height / 2);
});
