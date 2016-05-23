import { test } from 'qunit';
import moduleForAcceptance from 'jd-frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | homepage');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
