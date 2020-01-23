class Score {
    constructor(score = 0, name) {
        this.score = score;
        this.name = (name == "null" || name == '') ? 'Nobody' : name;
    }
}