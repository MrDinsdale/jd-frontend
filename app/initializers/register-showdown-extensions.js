import showdown from 'showdown';

export function initialize() {
  showdown.extension("imageResponsive", function() {
    return [{
      type: 'html',
      regex: '=image-mobile',
      replace: '" class="md-responsive-image--mobile"'
    }, {
      type: 'html',
      regex: '=image-desktop',
      replace: '" class="md-responsive-image--desktop"'
    },
    {
      type: 'html',
      regex: 'href="',
      replace: 'target="_blank" href="'
    }];
  });
}

export default {
  name: 'register-showdown-extensions',
  initialize
};
