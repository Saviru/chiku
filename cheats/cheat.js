const textArray = ["Kiwwa neda ada open karanna epa kiyala. Heta enna.", "Ada epa chikuuuuuuu. Heta open karanna. Surprise ekak.", "Adai hetai kiyana eke wenasa dannawada ? Poddak iwasanna.", "Ada open karala wadak na ithin. Poddak idapnko heta wenakan. heta uden aharuna gmn oopen karanna.", "Bane ithin karanna. ada awata wadak na. Ubt mnwth ballana ba chikuu."];
const imageArray = [
    "cheats/1.webp",
    "cheats/2.webp",
    "cheats/3.webp",
    "cheats/4.webp",
    "cheats/5.webp"
];

function changeTextRandomly() {
    const textDiv = document.getElementById("textar");
    const randomIndex = Math.floor(Math.random() * textArray.length);
    textDiv.innerText = textArray[randomIndex];

    const imgElement = document.getElementById("imgf");
    const randomIndeximg = Math.floor(Math.random() * imageArray.length);
    imgElement.src = imageArray[randomIndeximg];

}

// Change text when the page loads
window.onload = changeTextRandomly;
