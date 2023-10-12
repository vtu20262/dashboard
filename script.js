document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const appointmentList = document.getElementById("projects");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name1 = document.getElementById("name1").value;
        const vtu1 = document.getElementById("vtu1").value;
        const name2 = document.getElementById("name2").value;
        const vtu2 = document.getElementById("vtu2").value;
        const name3 = document.getElementById("name3").value;
        const vtu3 = document.getElementById("vtu3").value;
        const name = document.getElementById("name").value;
        const title = document.getElementById("title").value;
        const Supervisor = document.getElementById("Supervisor").value;
        // Create a new appointment item and add it to the list
        const appointmentItem = document.createElement("li");
        appointmentItem.innerHTML = `<strong>${name1}</strong> <strong>${vtu1}</strong> <strong>${name2}</strong> <strong>${vtu2}</strong> <strong>${name3}</strong> <strong>${vtu3}</strong> Team name:<strong>${name}</strong> Title:<strong>${title}</strong> Supervisor:<strong>${Supervisor}</strong>  `;
        appointmentList.appendChild(appointmentItem);

        // Clear the form
        form.reset();
    });
});
