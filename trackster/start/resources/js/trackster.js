var Trackster = {};


$('#btn').click(function() {
  var item = $('input').val()
  Trackster.searchTracksByTitle(item);
});
/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
  var $songList = $('#song-list');

  $songList.empty();

for (var songIndex = 0, songIndex < tracks.length, songIndex++){
  var track = tracks[songIndex];
  var htmlTrackRow =
  '<div class="row track">' +
      '<div class="col-xs-1 col-xs-offset-1 play-button">' +
        '<a href="' + track.preview_url + '" target="_blank">' +
           '<i class="fa fa-play-circle-o fa-2x"></i>' +
         '</a>' +
       '</div>' +
       '<div class="col-xs-4 ">'+ track.name + '</div>' +
       '<div class="col-xs-2 ">' + track.artists[0].name + '</div>' +
       '<div class="col-xs-2 ">' + track.album.name + '</div>' +
       '<div class="col-xs-2 ">'+ track.popularity +'</div>' +
    '</div>';
}

};

/*
  Given a search term as a string, query the Spotify API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: 'https://api.spotify.com/v1/search?type=track&q=' + title,
  })
console.log(title);
};
