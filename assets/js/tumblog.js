$ (document).ready (function () {
	// TUMBLOG
	var limit = 5;
	for (var blog in tumblr_api_read.posts) {
		if (limit == 0) break;
		limit --;
		
		if (tumblr_api_read.posts [blog] ["type"] != "photo") continue;
		
		console.log (tumblr_api_read.posts [blog]);
		
		var center = $ ("<center>");
		var img = $ ("<img>", {
			src:tumblr_api_read.posts [blog] ["photo-url-500"]
		});
		var a = $ ("<a>", {
			href:tumblr_api_read.posts [blog] ["photo-link-url"],
			alt:tumblr_api_read.posts [blog] ["slug"]
		});
		
		$ (a).append (img);
		
		$ (center).append (a);
		
		var ago = tumblr_api_read.posts [blog] ["date-gmt"].split (' ');
		ago = ago [0];
		console.log (ago);
		var fromNow = moment (ago).fromNow ();
		console.log (fromNow);
		
		var h2 = $ ("<h4>");		
		a = $ ("<a>", {
			text:fromNow,
			href:tumblr_api_read.posts [blog] ["url"],
			alt:tumblr_api_read.posts [blog] ["slug"]
		});
		
		$ (h2).append (a);
		$ (center).prepend (h2);
		
		var row = $ ("<div>", {
			"class":"row",
			"style": "margin-bottom:48px;"
		});
		
		var col1 = $ ("<div>", {
			"class":"col-sm-4"
		});
		
		$ (col1).append (center);
		
		var col2 = $ ("<div>", {
			"class":"col-sm-8",
			"html":tumblr_api_read.posts [blog] ["photo-caption"]
		});
		
		$ (col2).prepend (h2);
		
		$ (row).append (col1).append (col2);
		
		// $ ("#tumblog").append (h2);
		$ ("#tumblog").append (row);
	}
});