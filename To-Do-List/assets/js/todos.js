$("ul").on('click','li',function()
{
	$(this).toggleClass("completed");
});


$("ul").on('click','span',function(e)
{
	e.stopPropagation();
	$(this).parent().fadeOut(500,function()
	{
		$(this).remove();
	});
})

$('input[type="text"]').keypress(function(event)
{
	if(event.which===13)
	{
	   $('ul').append('<li><span><i class="fa fa-trash-alt"></i></span> '+ $(this).val() + '</li>');
	   $(this).val("");
	}
})



$('.fa-plus').click(function()
{
	$('input').fadeToggle();
})