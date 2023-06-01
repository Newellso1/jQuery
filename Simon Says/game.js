const buttonColours = ['red', 'blue', 'green', 'yellow'];
let userClickedPattern = [];
$('.btn').click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
});
function animatePress(currentColour) {
    $('#' + currentColour).addClass('pressed');
    setTimeout(function() {
        $('#' + currentColour).removeClass('pressed')
    }, 100);
}
function nextSequence() {
    let gamePattern = [];
    let randomChooseColour = '';
    let randomNumber = Math.floor(Math.random() * 4);
    randomChooseColour = buttonColours[randomNumber];
    gamePattern.push(randomChooseColour);
    console.log(gamePattern);
    $('#' + randomChooseColour).fadeOut(250).fadeIn(250);
}

