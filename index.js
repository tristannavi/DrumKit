//Determines which sound to play based on the selected key
const keyPressEvent = (key) => {
    let sound = "sounds/";

    switch (key) {
        case "w":
            return sound + "crash.mp3"
        case "a":
            return sound + "kick-bass.mp3"
        case "s":
            return sound + "snare.mp3"
        case "d":
            return sound + "tom-1.mp3"
        case "j":
            return sound + "tom-2.mp3"
        case "k":
            return sound + "tom-3.mp3"
        case "l":
            return sound + "tom-4.mp3"
    }
}

//When the button is clicked, play sound
document.querySelectorAll(".drum").forEach(x => x.addEventListener("click", async function () {
    const sound = keyPressEvent(this.innerHTML)
    await new Audio(sound).play()
}))

//When the key is pressed, play sound
document.addEventListener("keydown", async function (event) {
    const sound = keyPressEvent(event.key)
    await new Audio(sound).play()
})