$('button').click(function(){
    $('h1').css('color', 'skyblue');
})
$('body').keypress(function(event) {
    $('h1').html(event.key);
} )