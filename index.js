var elements = document.getElementsByClassName("drum");
var audio = null;
var currentSong;

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
            currentSong = "justin-songs/Justin-song-"+randomNumber+".mp3";
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
