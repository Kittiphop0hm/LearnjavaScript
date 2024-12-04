class Dairy {
    static dairyId = 1

    constructor(id = Dairy.dairyId++, text) {
        this.id = id
        this.text = text
    }

    setText(newText) {
        this.text = newText
    }

    getDairy() {
        this
    }
}

export{Dairy}