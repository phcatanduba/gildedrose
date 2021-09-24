import Item from './item.js';

export default class AgedBrie extends Item {
    constructor(sellIn, quality) {
        super('Aged Brie', sellIn, quality);
    }

    update() {
        this.quality = Math.min(
            50,
            this.sellIn > 0 ? this.quality + 1 : this.quality + 2
        );
        this.sellIn -= 1;
    }
}
