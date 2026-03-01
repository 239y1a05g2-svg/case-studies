
function searchDoctor() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        const doctorName = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        if (doctorName.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

