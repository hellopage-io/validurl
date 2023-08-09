"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
describe('valid url test', function () {
    it('https://www.hellopage.io/test.png is valid url', function () {
        var url = 'https://www.hellopage.io/test.png';
        var valid = (0, index_1.default)(url);
        expect(valid).toEqual(true);
    });
    it('https://www.hellopage.io is valid url', function () {
        var url = 'https://www.hellopage.io';
        var valid = (0, index_1.default)(url);
        expect(valid).toEqual(true);
    });
    it('https://undefined/test.png is not valid url', function () {
        var url = 'https://undefined/test.png';
        var valid = (0, index_1.default)(url);
        expect(valid).toEqual(false);
    });
    it('https://www.hellopage.io/undefined/test.png is valid url', function () {
        var url = 'https://undefined/test.png';
        var valid = (0, index_1.default)(url);
        expect(valid).toEqual(false);
    });
    it('https://www.hellopage.io/undefined/test.png is not valid url with undefined exclude opt', function () {
        var url = 'https://undefined/test.png';
        var valid = (0, index_1.default)(url, { exclude: { path: ['undefined'] } });
        expect(valid).toEqual(false);
    });
});
