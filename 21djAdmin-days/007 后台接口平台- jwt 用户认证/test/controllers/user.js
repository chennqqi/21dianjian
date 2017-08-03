'use strict'

import test from 'ava'
import fetch from 'node-fetch';

test('controllers my test', async t => {
    const result = await fetch(" http://localhost:3001/api/user?a=1&b=2");
    const json = await result.json()
    console.log('result： ' + JSON.stringify(json))
    t.is(200, result.status)
})