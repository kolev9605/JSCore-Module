let expect = require('chai').expect;
let Console = require('../05-c#-console').Console

describe('C# Console tests', function () {
    it('', function () {
        let msg = Console.writeLine('Hello {0}', 'world')
        expect(msg).equal('Hello world')
    })

    //
})