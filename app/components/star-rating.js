import Component from '@ember/component';
import { computed, action } from '@ember/object';

export default Component.extend({
  tagName: 'div', //this is a default, could be omitted
  classNames: ['rating-panel'],

  rating: 0,
  maxRating: 5,
  item: null,

  onClick() {},

  stars: computed('rating', 'maxRating', function() {
    let stars = [];
    for (let i = 1; i <= this.maxRating; i++) {
      stars.push({ rating: i, isFull: this.rating >= i });
    }
    return stars
  }),

  setRating: action(function(newRating, /* event */) {
    return this.onClick({
      item: this.item,
      rating: newRating
    })
  })
});
