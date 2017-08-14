function init_stock_lookup() {
  $('#stock-lookup-form').on('ajax:before ajax:after', function(event, data, status) {
    toggleSpinner();
  });
  
  $('#stock-lookup-form').on('ajax:success', function(event, data, status) {
    $('#stock-lookup').replaceWith(data);
    init_stock_lookup();
  });

  $('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error) {
    $('#stock-lookup-results').replaceWith(' ');
    $('#stock-lookup-errors').replaceWith('Stock was not found');
    toggleSpinner();
  });
}

function submitOnEnter() {
  $('#stock').on('keypress', function(event) {
    if (event.which === 13) {
      $('#stock-lookup-form').submit();
    }
  });
}

$(document).ready(function() {
  init_stock_lookup();
  submitOnEnter();
});
