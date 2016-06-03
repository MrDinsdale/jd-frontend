import { test } from 'qunit';
import moduleForAcceptance from 'jd-frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | ui');

test('User can navigate to posts via the main nav', function(assert) {
  visit('/');

  andThen(function() {
    click('.nav-button__toggle');

    andThen(function() {
      assert.equal(this.$('.nav-button__toggle').hasClass('clicked'), true, 'Nav button has clicked state');
      assert.equal(this.$('.site-nav').hasClass('opened'), true, 'Nav is set to open');

      click('.site-nav__link--blog');

      andThen(function() {
        assert.equal(currentRouteName(), 'posts.index', 'App route has changed');

        assert.equal(this.$('.site-header__wrapper').hasClass('nav-open'), false, 'Nav closes on transition');
      });
    });
  });
});

test('Main logo returns to homepage', function(assert) {
  visit('/posts');

  andThen(function() {
    click('.site-header__logo');

    andThen(function() {
      assert.equal(currentRouteName(), 'index', 'Current Route should index');
    });
  });
});
