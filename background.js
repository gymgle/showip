let currentIPList = {};

chrome.webRequest.onCompleted.addListener(
	(details) => {
		currentIPList[details.url] = details.ip;
		return;
	},
	{
		urls: [],
		types: []
	}
);


// Called by ip.js
chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		var currentURL = sender.tab.url;
		if (currentIPList[currentURL] !== undefined) {
			sendResponse({
				domainToIP: currentIPList[currentURL]
			});
		} else {
			// IP not found in array (maybe an iframe has been loaded).
			sendResponse({
				domainToIP: null
			});
		}

		// Reset temporary object
		currentIPList = {};
	}
);
