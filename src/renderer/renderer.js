var $ = require('jquery');

$(function () {
  $('#get-change-files').on('click', function () {
    console.log('button click');
    callAjax();
  });
});

function callAjax() {
  $.ajax({
    type: 'GET',
    url: $('#url').val()
  }).done(function (data) {
    console.log('success');
    console.log(data);
    var result = parseResult(data);
    showResult(result);
  }).fail(function (data) {
    console.log('fail');
    console.log(data);
  });
}

function parseResult(data) {
  var result = '';
  for(var i = 0; i < data.length; i++) {
    result += data[i].filename + '\n';
  }

  return result;
}

function showResult(data) {
  $('#result-area').val(data);
}