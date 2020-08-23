describe('Arr', () => {
    it('arr is an array', () => {
        expect(arr).to.be.an('array');
    });
});
describe('CallBack functions', () => {

    describe('addTxt', () => {
        it('addTxt typeof === function', () => {
            expect(addTxt).to.be.an('function');
        });
    });
    describe('everySome', () => {
        it('everySome typeof === function', () => {
            expect(everySome).to.be.an('function');
        });

    });
});

describe('Array iteration methods', () => {

    describe('forEach', () => {

        it('Array elements + text from cb', () => {

            for (let i = 0; i <= arr.length - 1; i++) {

                expect(ArrElemWithTxt[i]).to.equal(addTxt('array elements - ', arr[i]));
            };
        });
    });

    describe('map', () => {
        it('New Array with elements + text from cb', () => {

            const testMap = arr.map((testArr) => (addTxt('array elements - ', testArr)));

            for (let i = 0; i <= testMap.length - 1; i++) {

                expect(ArrElemWithTxt[i]).to.equal(testMap[i]);

            };
        });
    });

    describe('filter', () => {
        it('Write down in new array elements >= 3', () => {
            const fil = arr.filter(function(result) {
                return result >= 3;
            });
            expect(arrFilter).to.eql(fil);
        });
    });



    describe('some', () => {
        it('Test method  some', () => {
            const som = arr.some(everySome)
            expect(functionSome).to.equal(som);
        });
    });


    describe('every', () => {
        it(' Test method every', () => {
            const eve = arr.every(everySome)
            expect(functionEvery).to.equal(eve);
        });
    });


    describe('find', () => {
        it(' Test method every', () => {
            const fin = arr.find(everySome);
            expect(findNum).to.equal(fin);
        });
    });


    describe('reduce', () => {
        describe('Array sum', () => {});
        it('Sum array elements === 15', () => {
            const arrSumTest = arr.reduce(function(sum, current) {
                return sum + current;
            });
            expect(arrSum).to.equal(`Array sum = ${arrSumTest}`);
        });
    });
});