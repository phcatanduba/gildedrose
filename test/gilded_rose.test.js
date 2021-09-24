import Shop from '../src/gilded_rose.js';
import Item from '../src/items/item.js';

describe('Gilded Rose', function () {
    test('should sellIn and quality update as a random item', () => {
        const gildedRose = new Shop([new Item('foo', 1, 1)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(0);
        expect(items[0].quality).toBe(0);
    });

    test('legendary item do nothing on update', () => {
        const gildedRose = new Shop([
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(0);
        expect(items[0].quality).toBe(80);
    });

    test('quality update decrease more than usual (2x) after sell in date', () => {
        const gildedRose = new Shop([new Item('foo', 0, 3)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(-1);
        expect(items[0].quality).toBe(1);
    });
});
