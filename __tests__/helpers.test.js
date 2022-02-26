const {format_date, format_plural} = require('../utils/helpers');

// test the date
test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
});

// test for plural words
test('format_plural() returns plural string', () => {
    const plural =  new Word

    expect(format_plural(plural)).toBe('pluralized');
});

// test for 