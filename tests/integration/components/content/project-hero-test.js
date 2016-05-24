import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('content/project-hero', 'Integration | Component | content/project hero', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(3);

  const postStub = {
    'title': 'Project title',
    'tagline': 'Project tagline',
    'featured_image': 'test-url.png'
  };

  this.set('content', postStub);

  this.render(hbs`{{content/project-hero title=content.title tagline=content.tagline featuredImage=content.featured_image }}`);

  assert.equal(this.$('.project-hero__title').text(), 'Project title', 'Project hero has correct Title');
  assert.equal(this.$('.project-hero__tagline').text(), 'Project tagline', 'Project hero has correct Excerpt');
  assert.equal(this.$('.project-hero__wrapper').attr('style'), 'background-image: url(test-url.png);', 'Project hero has correct Featured image');
});
