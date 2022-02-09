var elements = document.getElementsByClassName("drum");
var audio = null;
var currentSong;
// song array
// var edSheeranSong = ['sounds/Edsheeran-song-1.mp3','sounds/Edsheeran-song-2.mp3','sounds/Edsheeran-song-3.mp3','sounds/Edsheeran-song-4.mp3','sounds/Edsheeran-song-5.mp3'];
// var weekndSong = ['sounds/weeknd-song-1.mp3','sounds/weeknd-song-2.mp3','sounds/weeknd-song-3.mp3','sounds/weeknd-song-4.mp3','sounds/weeknd-song-5.mp3'];
// var bazziSong = ['sounds/bazzi-song-1.mp3','sounds/bazzi-song-2.mp3','sounds/bazzi-song-3.mp3','sounds/bazzi-song-4.mp3','sounds/bazzi-song-5.mp3'];
// var justinBieberSong = ['sounds/justin-song-1.mp3','sounds/justin-song-2.mp3','sounds/justin-song-3.mp3','sounds/justin-song-4.mp3','sounds/justin-song-5.mp3'];
// var zaynSong = ['sounds/zayn-song-1.mp3','sounds/zayn-song-2.mp3','sounds/zayn-song-3.mp3','sounds/zayn-song-4.mp3','sounds/zayn-song-5.mp3'];
// var deruloSong = ['sounds/derulo-song-1.mp3','sounds/derulo-song-2.mp3','sounds/derulo-song-3.mp3','sounds/derulo-song-4.mp3','sounds/derulo-song-5.mp3'];
// var brunoMarsSong = ['sounds/bruno-song-1.mp3','sounds/bruno-song-2.mp3','sounds/bruno-song-3.mp3','sounds/bruno-song-4.mp3','sounds/bruno-song-5.mp3'];

for (var i = 0; i < elements.length; i++) {
    
    elements[i].addEventListener("click", function () {
        
        var currentButton = this.innerHTML;
        if (currentButton === "E") {
            if (audio !== null) {
                audio.pause();
            }
            var randomNumber = Math.random();
            randomNumber = randomNumber * 5;
            randomNumber = Math.floor(randomNumber) + 1;
            currentSong = "Ed-sheeran-songs/Edsheeran-song-"+randomNumber+".mp3";
            audio = new Audio(currentSong);
            audio.play();
        }
        if (currentButton === "W") {
            if (audio !== null) {
                audio.pause();
            }
            var randomNumber = Math.random();
            randomNumber = randomNumber * 5;
            randomNumber = Math.floor(randomNumber) + 1;
            currentSong = "weeknd-songs/weeknd-song-"+randomNumber+".mp3";
            audio = new Audio(currentSong);
            audio.play();
        }
        if (currentButton === "B") {
            if (audio !== null) {
                audio.pause();
            }
            var randomNumber = Math.random();
            randomNumber = randomNumber * 5;
            randomNumber = Math.floor(randomNumber) + 1;
            currentSong = "bazzi-songs/bazzi-song-"+randomNumber+".mp3";
            audio = new Audio(currentSong);
            audio.play();
        }
        if (currentButton === "J") {
            if (audio !== null) {
                audio.pause();
            }
            var randomNumber = Math.random();
            randomNumber = randomNumber * 5;
            randomNumber = Math.floor(randomNumber) + 1;
            currentSong = "justin-songs/justin-song-"+randomNumber+".mp3";
            audio = new Audio(currentSong);
            audio.play();
        }
        if (currentButton === "Z") {
            if (audio !== null) {
                audio.pause();
            }
            var randomNumber = Math.random();
            randomNumber = randomNumber * 5;
            randomNumber = Math.floor(randomNumber) + 1;
            currentSong = "zayn-songs/zayn-song-"+randomNumber+".mp3";
            audio = new Audio(currentSong);
            audio.play();
        }
        if (currentButton === "D") {
            if (audio !== null) {
                audio.pause();
            }
            var randomNumber = Math.random();
            randomNumber = randomNumber * 5;
            randomNumber = Math.floor(randomNumber) + 1;
            currentSong = "derulo-songs/derulo-song-"+randomNumber+".mp3";
            audio = new Audio(currentSong);
            audio.play();
        }
        if (currentButton === "M") {
            if (audio !== null) {
                audio.pause();
            }
            var randomNumber = Math.random();
            randomNumber = randomNumber * 5;
            randomNumber = Math.floor(randomNumber) + 1;
            currentSong = "bruno-songs/bruno-song-"+randomNumber+".mp3";
            audio = new Audio(currentSong);
            audio.play();
        }
    });
}
