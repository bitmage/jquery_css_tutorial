var story = {
  home: {
    stageUrl: 'https://docs.google.com/drawings/d/1im04FNVDxYQIHnqoHMcRBHPkZGZt3FlkVgg3fBP0QyI/pub?w=960&h=720',
    links: {
      introduction: {
        text: "Let's Go!",
        pageName: 'road'
      }
    }
  },
  road: {
    stageUrl: '',
    links: {}
  }
}

$('#lets-go').click(function(){
  $('#stage').attr('src', 'https://docs.google.com/drawings/d/1im04FNVDxYQIHnqoHMcRBHPkZGZt3FlkVgg3fBP0QyI/pub?w=960&h=720')
  $('#stage-commands').html('<a href="javascript:void(0);" class="command">Got it!</a>');
});
