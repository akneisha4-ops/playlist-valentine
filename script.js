const audio = document.getElementById("audio");

// DATA LAGU
const favSongs = [
  { title: "Nothin' On You — B.o.B ft. Bruno Mars", file: "nothin-on-you.mp3" },
  { title: "Thinkin Bout You — Frank Ocean", file: "thinkin-bout-you.mp3" }
];

const fromMe = [
  { title: "Untuk Perempuan yang Sedang Dalam Pelukan — Payung Teduh", file: "payung-teduh.mp3" }
];

const fromYou = [
  { title: "Forever — Yahya", file: "forever-yahya.mp3" },
  { title: "Menanti Pagi — Arash Buana", file: "menanti-pagi.mp3" }
];

// FUNCTION BIKIN LIST
function render(listId, songs) {
  const ul = document.getElementById(listId);

  songs.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.onclick = () => {
      audio.src = song.file;
      audio.play();
    };
    ul.appendChild(li);
  });
}

// RENDER SEMUA
render("fav", favSongs);
render("fromMe", fromMe);
render("fromYou", fromYou);
