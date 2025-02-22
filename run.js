
$(document).ready(function() {
    console.log("看我幹什麼"); 
    
    $('.pages').on('click', function() {
        var Name = $(this).data('name');
        window.open(`https://mamegoodbean2k.github.io/${Name}`);
    })
    $('.github').on('click', function() {
        var Name = $(this).data('name');
        window.open(`https://github.com/Mamegoodbean2k/${Name}`);
    })
});