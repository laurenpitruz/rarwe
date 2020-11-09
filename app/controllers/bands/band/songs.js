import Controller from '@ember/controller';
import { action } from '@ember/object';
import { empty } from '@ember/object/computed';
import Song from 'rarwe/models/song';

export default Controller.extend({
  isAddingSong: false,
  newSongTitle: '',

  isSongAddButtonDisabled: empty('newSongTitle'),

  addSong: action(function() {
    this.set('isAddingSong', true);
  }),

  cancelAddSong: action(function() {
    this.set('isAddingSong', false);
  }),

  saveSong: action(function(event) {
    event.preventDefault();
    let newSong = Song.create({title: this.newSongTitle});
    this.model.songs.pushObject(newSong);
    this.set('newSongTitle', '');
  }),

  updateRating: action(function(params) {
    let { item: song, rating} = params;
    song.set('rating', rating);
  })
});
