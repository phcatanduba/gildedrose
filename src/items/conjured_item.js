import Item from './item.js';

export default class ConjuredItem extends Item {
    update() {
        this.quality = Math.max(
            0,
            this.sellIn > 0 ? this.quality - 2 : this.quality - 4
        );
        this.sellIn -= 1;
    }
}
