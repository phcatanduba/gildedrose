import Item from './item.js';

export default class LegendaryItem extends Item {
    constructor(name = 'Sulfuras, Hand of Ragnaros') {
        super(name, 0, 80);
    }

    update() {}
}
