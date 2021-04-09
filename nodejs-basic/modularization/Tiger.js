class Tiger {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }

    grow() {
        console.log('grrrrr!')
    }
}

// TODO 1
module.exports = Tiger;