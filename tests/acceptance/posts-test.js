import { test } from 'qunit';
import moduleForAcceptance from 'jd-frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | posts');

test('visiting /posts', function(assert) {
  visit('/posts');

  andThen(function() {
    assert.equal(currentRouteName(), 'posts.index', 'Current Route should be correct');
    assert.equal(currentURL(), '/posts', 'Current URL should be correct');
  });
});

test('Clicking Post tile should take user to post show page', function(assert) {
  visit('/posts');

  var targetUrl = null,
      targetElement = '.post-list .post-tile:first a';

  andThen(function() {
    targetUrl = $(targetElement).attr('href');
    click(targetElement);

    andThen(function() {
      assert.equal(currentRouteName(), 'posts.show', 'Current Route should be correct');
      assert.equal(currentURL(), targetUrl, 'Current URL should be correct');
    });
  });
});