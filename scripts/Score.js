function Score(score, name) {
    this.score = (score === undefined) ? 0 : score;
    this.name = (name == "null" || name == '') ? 'Nobody' : name;
}