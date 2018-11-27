let ameriSports = {
    _basketball: 'Lebron James',
    _football: 'Tom Brady',
    _baseball: 'Mike Trout',
    _hockey: 'Connor McDavid',
    set newKing(newfootball) {
        if(typeof newfootball != "Tom Brady") {
        console.log("Patrick Mahomes");
        } else {
            this._football = newfootball;
        }
    }, 
    get newKing() {
        return this._football;
    }
}

ameriSports.newfootball = "Patrick Mahomes";
console.log(ameriSports._football);
console.log(ameriSports.newfootball);

let ameriSportsvalues = Object.values(ameriSports);

ameriSportsvalues.forEach(item => {
   console.log(item);

})

let object2 = {
    movies: ["Any Given Sunday", "Space Jam", "Remember the Titans"],
    music:  ["GetReadyForThis", "Thunderstruck"],
    food: ["american cuisine", "mexican cuisine", "asia cuisine", "soul food"],
}
 console.log(object2.movies);
 console.log(object2.music);


