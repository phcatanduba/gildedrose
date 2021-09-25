import Item from './item.js';

export default class RandomItem extends Item {
    update() {
        this.quality = Math.max(
            this.sellIn > 0 ? this.quality - 1 : this.quality - 2,
            0
        );
        this.sellIn -= 1;
    }
}
