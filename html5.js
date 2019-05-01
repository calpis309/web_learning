$( document ).ready(function() {
    console.log( "ready!" );
    // document.addEventListener('click', changeColor);
    $('#title').click(changeColor);

    console.log( "ready2!" );
    console.log("ready789");
});

function changeColor() 
{
    alert( "changeColor!" );
    $('#title').css("color", "black");
}

function varTest() 
{
    $("h1").css("color", "pink");

    var arr = [1,2,3];
    var int = 100;
    var str = '10';
    var boolen = false;

    var obj = {
        color: "red",
        width: "100px"
    };

    for(var i=0; i<arr.length; i++)
    {
        var reasult = arr[i]+1;
        arr[i] = reasult;
        console.log(reasult);
    }

    var test = 5;
    if (test<6) {
        console.log("less");
    } else if (test==6){
        console.log("==");
    } else {
        console.log("more");
    }
}