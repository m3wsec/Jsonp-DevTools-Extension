chrome.runtime.onMessage.addListener(
	function(request,sender,sendResponse){
		let url = new URL(request.url);
		
		for(let i=0;i<word.length;i++)
		{
			if(url.searchParams.has(word[i]))
			{
				var p = document.createElement("p");
				p.textContent = url;
				document.body.appendChild(p);
			}
		}		
	}
)

var word = new Array("callback","jsonp","cb");

