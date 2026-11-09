import { test } from 'node:test';
import assert from 'node:assert';
import { salutation } from './app.js';

test('salutation dit bonjour avec le prénom', () => {
  assert.strictEqual(salutation('Rahim'), 'salut Rahim !');
});