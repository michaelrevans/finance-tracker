function init_friend_lookup() {
  $('#friend-lookup-form').on('ajax:before ajax:after', function(event, data, status) {
    toggleSpinner();
  });

  $('#friend-lookup-form').on('ajax:success', function(event, data, status) {
    $('#friend-lookup').replaceWith(data);
    init_friend_lookup();
  });

  $('#friend-lookup-form').on('ajax:error', function(event, xhr, status, error) {
    $('#friend-lookup-results').replaceWith(' ');
    $('#friend-lookup-errors').replaceWith('Person was not found');
    toggleSpinner();
  });
}

function submitOnEnter() {
  $('#friend').on('keypress', function(event) {
    if (event.which === 13) {
      $('#friend-lookup-form').submit();
    }
  });
}

$(document).ready(function() {
  init_friend_lookup();
  submitOnEnter();
});
