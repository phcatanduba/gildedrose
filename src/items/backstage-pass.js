import Item from './item.js';

export default class BackstagePass extends Item {
    constructor(sellIn, quality) {
        super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality);
    }

    update() {
        this.sellIn -= 1;
        let newQuality;
        if (this.sellIn < 0) newQuality = 0;
        else if (this.sellIn <= 4) newQuality = this.quality + 3;
        else if (this.sellIn <= 9) newQuality = this.quality + 2;
        else newQuality = this.quality + 1;

        this.quality = Math.min(50, newQuality);
    }
}
