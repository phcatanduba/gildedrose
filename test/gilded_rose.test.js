import Shop from '../src/gilded_rose.js';
import Item from '../src/items/item.js';

describe('Gilded Rose', function () {
    it('should foo', function () {
        const gildedRose = new Shop([new Item('foo', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe('foo');
    });
});
