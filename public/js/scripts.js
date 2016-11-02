console.log('hello world from script.js');
emojiCall();
$(document).ready(function(){
	console.log('arty')
	// $.getJSON('js/data.json', function(data){
	// 	// var template = $('#emojitpl').html();
	// 	// var html = Mustache.to_html(template, data);
	// 	// $('#emoji').html(html);
	// 	console.log('data loaded?: ', data)
	// // template(data)
		
	// 	$('#1f633').addClass("growth pulse floater");
	// 	$('#1f473').addClass("growth pulse floater");
	// 	$('#1f4af').addClass("growth pulse floater");
		
	// });
	$('#😩').addClass("growth pulse floater");

	var linkys = document.getElementsByClassName('dropdown-toggle');
	for (var i = 0; i < linkys.length; ++i) {
	  linkys[i].onclick = function(e) {
	    //if this isn't an http/https link
	    this.focus(); 
	    e.preventDefault();
	  };
	}
	
	// console.log(twemoji.parse('I '+twemoji.convert.fromCodePoint('1f633')+' emoji!'))
	// console.log(twemoji.parse(twemoji.convert.fromCodePoint('❤️')));
})
 function template(data){

 		console.log('templating: ', data.emoji[0].type);
 		var emoji = data.emoji
 		for(i in data.emoji){
 			var html = 
					'<div>'+
						'<ul>'+
							'<li id="'+emoji[i].type+'"class="col-sm-1 emojisvg icon">'+
								emoji[i].type+
							'</li>'+
						'</ul>'+		
					'</div>';
			$('#emoji').append(html);
 		};
		
				console.log("success?");
		// console.log('data loaded?: ', data)		
};

function emojiCall(){
	console.log("start emojiCall ajax request")
	$.ajax({
	  type: 'GET',
	  url: 'http://emojiconheattracker.herokuapp.com/api/getEmojis',
	  dataType : 'jsonp',
	  beforeSend:function(){
	    // this is where we append a loading image
	    // $('#ajax-panel').html('<div class="loading"><img src="/images/loading.gif" alt="Loading..." /></div>');
	  },
	  success:function(data){
		var emoji = data.emoji;
	   	template({emoji});
	  },
	  complete: function() {
	      // Schedule the next request when the current one's complete
	      // setTimeout(emojiCall, 5000);
	  },
	  error:function(callback){
	    console.log("errororororororororor")
	    // console.log(callback)
	    // failed request; give feedback to user
	  }

	});
}

