function resetFields() {
    $("input#albumName").val("");
    $("input#url").val("");
    $("input#notes").val("");
}

$(function(){
  $('#theForm').submit(function(event){
    event.preventDefault();

    var albumName = $('input#albumName').val();
    var url = $('input#url').val();
    var notes = $('input#notes').val();

    console.log(albumName, url, notes);

    resetFields();
  });
});
