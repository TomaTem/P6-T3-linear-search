const {linearSearch, globalLinearSearch} = require('../linear-search');

describe('linearSearch()', function () {
    it('returns index of item in array', function () {
        let item = 3;
        let arr = [1, 2, 3, 4, 5];
        expect(linearSearch(item, arr)).toEqual(2);
    });
    it('returns first index of item in array', function () {
        let item = 8;
        let arr = [0, 8, 5, 8, 9, 7, 2];
        expect(linearSearch(item, arr)).toEqual(1);
    });
    it("returns -1 if item isn't in array", function () {
        let item = 22;
        let arr = [0, 8, 5, 8, 9, 7, 2];
        expect(linearSearch(item, arr)).toEqual(-1);
    });
    it('returns -1 if array is empty', function () {
        let item = 22;
        let arr = [];
        expect(linearSearch(item, arr)).toEqual(-1);
    });
});

describe('globalLinearSearch()', function () {
    it('returns array indxes of items in array', function () {
        let item = 'a';
        let arr = ['b', 'a', 'n', 'a', 'n', 'a', 's'];
        expect(globalLinearSearch(item, arr)).toEqual([1, 3, 5]);
    });
    it('returns array indxes of numbers in array', function () {
        let item = 2;
        let arr = ['a', 2, 3, 'n', 'a', 2, 'n', 'a', 2];
        expect(globalLinearSearch(item, arr)).toEqual([1, 5, 8]);
    });
    it("returns [] if item isn't in array", function () {
        let item = 'k';
        let arr = ['b', 'a', 'n', 'a', 'n', 'a', 's'];
        expect(globalLinearSearch(item, arr)).toEqual([]);
    });
    it('returns [] if array is empty', function () {
        let item = 0;
        let arr = [];
        expect(globalLinearSearch(item, arr)).toEqual([]);
    });
});
