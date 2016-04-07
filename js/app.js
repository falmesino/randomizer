/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomize(item)
{
    var random = getRandomInt(1,2);
    var output = '';
    if(random === 1)
    {
        output = 'left';
    }
    else
    {
        output = 'right';
    }
    item.stop().fadeOut(100, function(){
        item.html(output);
        item.stop().fadeIn(100, function(){
            // do something?
        });
    });
    return output;
}

$(function(){
    var app = $('#app');
    var intro = $('#intro');
    var output = $('#output');
    var output_item = output.find('.output__item');
    
    app.on('click', function(e){
        e.preventDefault();
        if(intro.is(':visible'))
        {
            intro.stop().fadeOut(100, function(e){
                if(!output.is(':visible'))
                {
                    randomize(output_item.find('h1'));
                    output.stop().fadeIn(100);
                }
            });
        }
        else
        {
            randomize(output_item.find('h1'));
        }
        return false;
    });
    
});