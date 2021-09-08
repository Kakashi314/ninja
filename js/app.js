const speech_info = [
    {
        id: 0,
        name: "Naruto Uzumaki",
        ninja_way: "Sage of Nine Tails",
        speech: "I’m not gonna run away, I never go back on my word! That’s my nindo: my ninja way.",
        img: "./img/naruto.jfif"
    },
    {
        id: 1,
        name: "Kakashi Hataka",
        ninja_way: "Copy Ninja",
        speech: "Walking down a path without knowing where you really want to go…",
        img: "img/kakashi.png"
    },
    {
        id: 2,
        name: "Might Guy",
        ninja_way: "Green Beast",
        speech: "It’s not always possible to do what we want to do, but it’s important to believe in something before you actually do it.",
        img: "img/mightGuy_.jfif"
    },
    {
        id: 3,
        name: "Jiraiya",
        ninja_way: "Toad Sage",
        speech: "I believe...that someday the day will come when people truly understand one another!",
        img: "img/jiraiya.jfif"
    },
    {
        id: 4,
        name: "Tsunade",
        ninja_way: "Slug Princess",
        speech: "People become stronger because they have things they cannot forget. That’s what you call growth",
        img: "img/Tsunade.png"
    },    {
        id: 5,
        name: "Haku",
        ninja_way: "Ice Masquerade",
        speech: "Can you understand? Not having a dream… not being needed by anyone… The pain of merely being alive.",
        img: "img/haku.jpg"
    },    {
        id: 6,
        name: "Deidara",
        ninja_way: " Dei-Dei, Dei, Dara",
        speech: "True art is an explosion!",
        img: "img/Deidara_mugshot.png"
    },    {
        id: 7,
        name: "HinataHyuga",
        ninja_way: "Lord Hokage",
        speech: "To Other People, I Might Not Have Changed At All, But I Feel Like I Was Able To Change.",
        img: "img/HinataHyuga.jpeg"
    },    {
        id: 8,
        name: "Itachi",
        ninja_way: "leaf hero",
        speech: "If you want to know who you are, you have to look at your real self and acknowledge what you see.",
        img: "img/Itachi.png"
    }
]
const imges = document.getElementById("ninjas_img")
const names = document.getElementById("name")
const ninja_way = document.getElementById("ninja_way")
const speech = document.getElementById("speech")
// btn
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
let speech_index = 0;
window.addEventListener("DOMContentLoaded", () => {
    change_info(speech_index)

})
//main work
function change_info(p) {
    let ninja = speech_info[p]
    imges.src = ninja.img
    names.textContent = ninja.name
    ninja_way.textContent = ninja.ninja_way
    speech.textContent = ninja.speech
}
//<
btn1.addEventListener("click", () => {

    speech_index--
    if(speech_index<0){speech_index=speech_info.length-1}
    change_info(speech_index)

})
//>
btn2.addEventListener("click", () => {
    speech_index++
    if(speech_index>speech_info.length-1){speech_index=0}
    change_info(speech_index)

})

//random
function randomnum(){
    let num=Math.floor(Math.random()*speech_info.length);
    return num;
}
btn3.addEventListener("click",()=>{
    change_info(randomnum())
    //or i can rewrite speech_index with num in randomnum()

})