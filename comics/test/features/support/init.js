'use strict';

const apickli = require('apickli');
const {
    Before
} = require('cucumber');

Before(function () {
    this.apickli = new apickli.Apickli('http', 'darrenkabengele-eval-test.apigee.net');
    this.apickli.addRequestHeader('Cache-Control', 'no-cache');
});