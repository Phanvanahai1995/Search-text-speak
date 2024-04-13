"use strict";

const msgEl = document.getElementById("msg");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new window.SpeechRecognition();

//   Start recognition and game

recognition.start();

// Capture user speak
function onSpeak(e) {
  const msg = e.results[0][0].transcript.toLowerCase();
  console.log(msg);

  switch (msg) {
    case "google":
      window.open("https://google.com", "target");
      break;
    case "facebook":
      window.open("https://facebook.com", "target");
      break;
    case "youtube":
      window.open("https://youtube.com", "target");
      break;
    case "google drive":
      window.open("https://drive.google.com", "target");
      break;
    case "Vinhomes Smartcity Tây Mỗ":
      window.open(
        "https://www.google.com/maps/dir/20.9992854,105.791488/Vinhomes+Smart+City+T%C3%A2y+M%E1%BB%97,+T%C3%A2y+M%E1%BB%97,+B%E1%BA%AFc+T%E1%BB%AB+Li%C3%AAm,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0042407,105.7678999,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x313453d4ead47a63:0x9af352cfc1f411a1!2m2!1d105.7412839!2d21.0046874?hl=vi-VN&entry=ttu",
        "target"
      );
      break;
    case "bài hát ai chung tình được mãi":
      window.open(
        "https://zingmp3.vn/tim-kiem/tat-ca?q=ai%20chung%20t%C3%ACnh%20%C4%91%C6%B0%E1%BB%A3c%20m%C3%A3i",
        "target"
      );
      break;
    case "mở bài hát ai chung tình được mãi":
      window.open(
        "https://zingmp3.vn/album/Ai-Chung-Tinh-Duoc-Mai-Single-Dinh-Tung-Huy-ACV/699A9WO9.html",
        "target"
      );
      break;
    case "mở video ai chung tình được mãi":
      window.open("https://www.youtube.com/watch?v=eZpJdO22jZ0", "target");
      break;
    default:
      alert("Not search value");
  }

  window.location.reload();
}

// Speak result

recognition.addEventListener("result", onSpeak);
