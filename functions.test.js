const assert = require('assert')
const expect = require('chai').expect
const check = require('./functions')
const axios = require('axios')
const knex = require('knex')
const config = require('config')


const connectedKnex = knex({
    client: 'pg',
    version: config.db.version,
    connection: {
        host: config.db.host,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database
    }
})


describe('Testing of the functions', () => {

    it('adding 2 arrays with equal values and length ([1, 2, 3], [1, 2, 3])', () => {
        const actual = check.is_equal([1, 2, 3], [1, 2, 3])
        const expected = true
        assert.strictEqual(expected, actual)
    }),

// טסט שבודק שני המערכים אם שווים באורך 
        it('adding 2 arrays with equal length ([6, 4, 8], [6, 4, 5])', () => {
            const actual = check.is_equal([6, 4, 8], [6, 4, 5])
            const expected = false 
            assert.strictEqual(expected, actual)
        }),


        it('adding 2 arrays with equal values and length ([10, 20, 30, 40], [10, 20, 30, 40])', () => {
            const actual = check.is_equal([10, 20, 30, 40], [10, 20, 30, 40])
            const expected = true
            assert.strictEqual(expected, actual)
        }),

        it('adding array parameter and number parameter ([1, 2, 3, 4], 5)', () => {
            assert.throws(() => {
                const actual = check.is_equal([1, 2, 3, 4], 100)
            })
        }),

        it('adding number parameter with array parameter (5, [1, 2, 3. 4])', () => {
            assert.throws(() => {
                const actual = check.is_equal(55, [1, 2, 3, 4])
            })
        }),

        it('adding number parameter with array parameter (1000, [99, 2, 80, 40])', () => {
            assert.throws(() => {
                const actual = check.is_equal(1000, [99, 2, 80, 40])
            })
        }),

        //-------------------------------------------------------------------------

        it('adding 2 equal numbers (10, 10)', () => {
            const actual = check.is_bigger(10, 10)
            const expected = false
            assert.strictEqual(expected, actual)
        }),


        it('adding 2 numbers x > y  (33 , 2)', () => {
            const actual = check.is_bigger(33, 2)
            const expected = true
            assert.strictEqual(expected, actual)
        }),


        it('adding array parameter and number parameter ([1, 2, 3, 4], 5)', () => {
            assert.throws(() => {
                const actual = check.is_bigger([1, 2, 3, 4], 100)
            })
        }),

        it('adding number parameter with array parameter (5, [1, 2, 3. 4])', () => {
            assert.throws(() => {
                const actual = check.is_bigger(55, [1, 2, 3, 4])
            })
        }),

        it('adding number parameter with array parameter (1000, [99, 2, 80, 40])', () => {
            assert.throws(() => {
                const actual = check.is_bigger(1000, [99, 2, 80, 40])
            })
        })
})

//-------------------------------------------------------------------------



//אתגר\רשות
describe('values x, y postgres', () => {

    it('adding 2 values x , y', async () => {
        const result = await connectedKnex('functionxy').select('*').where('rownumber', 4)
        console.log(result); // התוצאה היא אופייקט בתוך מערך
        let obj = result.find(e => e.rownumber === '4'); // כדי לקבל תשובת אופייקט לבד ולא בתוך מערך
        console.log(obj);
        console.log(obj.x);
        console.log(obj.y);
        const actual = check.is_bigger(obj.x, obj.y)
        const expected = true
        assert.strictEqual(expected, actual)
    })
})

