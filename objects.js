var playlist = {Gunship: 'Tech Noir'}
function updatePlaylist(object, artist, song) {
  return Object.assign({}, object, {[artist]: song})
}
