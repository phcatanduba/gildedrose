import LegendaryItem from './items/legendary-item.js';
import AgedBrie from './items/aged-brie.js';
import BackstagePass from './items/backstage-pass.js';
import ConjuredItem from './items/conjured-item.js';
import RandomItem from './items/random-item.js';

export default class Shop {
    constructor(items = []) {
        this.items = items.map((item) => {
            if (item.name === 'Sulfuras, Hand of Ragnaros')
                return new LegendaryItem();
            else if (item.name === 'Aged Brie')
                return new AgedBrie(item.sellIn, item.quality);
            else if (item.name === 'Backstage passes to a TAFKAL80ETC concert')
                return new BackstagePass(item.sellIn, item.quality);
            else if (item.name.includes('Conjured'))
                return new ConjuredItem(item.name, item.sellIn, item.quality);
            else return new RandomItem(item.name, item.sellIn, item.quality);
        });
    }

    updateQuality() {
        this.items.forEach((item) => item.update());
        return this.items;
    }

    getItems() {
        return this.items;
    }
}
