var counter = 1;
$(document).on('click','.add', function(){
     
    console.log(counter);
    var name = $("#sub_name").val();
    var phone = $("#sub_phone").val();
    var markup = "<tr class=subscriber"+counter+"><td>" + name + "</td><td>" + phone + "</td><td><button id="+counter+" class='delete'>Delete</button></td></tr>";
            $("table tbody").append(markup);
    counter++;
   
    $("#sub_name").val('');
    $("#sub_phone").val('');
});

$(document).on('click', '.delete', function(){
    var id = $(this).attr("id");
    console.log(id);
    $(".subscriber"+id).remove();
})



function check()
{

    var pass1 = document.getElementById('mobile');


    var message = document.getElementById('message');

   var goodColor = "#0C6";
    var badColor = "#FF9B37";

    if(mobile.value.length!=10){

        mobile.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "required 10 digits, match requested format!"
    }}