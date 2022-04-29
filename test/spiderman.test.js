const Spiderman = require('./../app/spiderman');

describe("Unit test for Spiderman class", () => {
    test('Test case 1 - Create an spiderman object', () => {
        // We'll write our code just like need it to be written
        // We'll create a new spiderman object

        const andrewGarfield = new Spiderman('Spiderman Sony', 38, 'Andrew Garfield', 2, 'Sony');

        // We'll check if the object is created as expected
        expect(andrewGarfield.name).toBe('Spiderman Sony');
        expect(andrewGarfield.age).toBe(38);
        expect(andrewGarfield.actor).toBe('Andrew Garfield');
        expect(andrewGarfield.movies).toBe(2);
        expect(andrewGarfield.studio).toBe('Sony');
    });

    test('Test case 2 - Use method getGreetings()', () => {
        const tomHolland = new Spiderman('Spiderman Marvel', 25, 'Tom Holland', 3, 'Marvel/Sony');
        expect(tomHolland.getGreetings()).toBe("Hi, I'm Tom Holland and I work at Marvel/Sony");
    });
})