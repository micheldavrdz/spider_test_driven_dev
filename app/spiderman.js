class Spiderman {
    constructor(name, age, actor, movies, studio) {
        this.name = name;
        this.age = age;
        this.actor = actor;
        this.movies = movies;
        this.studio = studio;
    }

    getGreetings() {
        return `Hi, I'm ${this.actor} and I work at ${this.studio}`;
    }
}

module.exports = Spiderman;