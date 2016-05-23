import { test } from 'qunit';
import moduleForAcceptance from 'jd-frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | projects');

test('visiting /projects', function(assert) {
  visit('/projects');

  andThen(function() {
    assert.equal(currentRouteName(), 'projects.index', 'Current Route should be correct');
    assert.equal(currentURL(), '/projects', 'Current URL should be correct');
  });
});

test('Clicking Project tile should take user to project show page', function(assert) {
  visit('/projects');

  var targetUrl = null,
      targetElement = '.project-list .post-tile:first a';

  andThen(function() {
    targetUrl = $(targetElement).attr('href');
    click(targetElement);

    andThen(function() {
      assert.equal(currentRouteName(), 'projects.show', 'Current Route should be correct');
      assert.equal(currentURL(), targetUrl, 'Current URL should be correct');
    });
  });
});