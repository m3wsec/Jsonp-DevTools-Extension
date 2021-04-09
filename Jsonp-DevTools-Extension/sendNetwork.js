chrome.devtools.network.onRequestFinished.addListener(
	function(request)
	{
		chrome.runtime.sendMessage({url:request.request.url})
	}
)