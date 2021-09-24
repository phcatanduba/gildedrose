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

    test('quality should not be negative', () => {
        const gildedRose = new Shop([new Item('foo', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(-1);
        expect(items[0].quality).toBe(0);
    });

    test('quality update as a aged brie (increase)', () => {
        const gildedRose = new Shop([new Item('Aged Brie', 2, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(1);
        expect(items[0].quality).toBe(1);
    });

    test('quality should`nt be greater than 50', () => {
        const gildedRose = new Shop([new Item('Aged Brie', 1, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(0);
        expect(items[0].quality).toBe(50);
    });

    test('backstage: quality increase two units because 5 < sellIn <= 10', () => {
        const gildedRose = new Shop([
            new Item('Backstage passes to a TAFKAL80ETC concert', 7, 48),
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(6);
        expect(items[0].quality).toBe(50);
    });

    test('backstage: quality increase three units because 0 < sellIn <= 5', () => {
        const gildedRose = new Shop([
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 47),
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(4);
        expect(items[0].quality).toBe(50);
    });

    test('backstage: quality is zero because sellIn < 0', () => {
        const gildedRose = new Shop([
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 47),
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(-1);
        expect(items[0].quality).toBe(0);
    });
});
