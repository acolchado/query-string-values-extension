![Alt Query String Values] (https://raw.github.com/acolchado/query-string-values-extension/master/extension/img/icon-38.png) Query String Values Chrome Extension
===

Chrome extension that allows you to see the current tab's query string values in a clean form.

![Alt Query String Values] (https://raw.github.com/acolchado/query-string-values-extension/master/docs/Screenshot.JPG)

## Install from the Google Chrome Store

Visit the [Query String Values] extension page at the [Google Chrome Store]

## Install Manually

I have not yet published this extension to the Chrome Store, it takes longer to package than to create, 
but for now you can install directly. 

The steps are for Mac/Linux, but apply to Windows and others, with some adjustments.

Clone the repo to an easy to reach directory

	$ mkdir ~/Code
	$ cd ~/Code
	$ git clone git@github.com:acolchado/query-string-values-extension.git
  
or https
  
	$ git clone https://github.com/acolchado/query-string-values-extension.git

Go to the Chrome extensions manager.

	$ open chrome://extensions/
  
From the Extensions Manager follow these steps:

* Make sure that "Developer mode" is enabled
* Click "Load unpacked extension..."
* Navigate to the repo directory and select the "extension" directory
  * Should be ~/Code/query-string-values-extension/extension

## Using the extension

I haven't created a cool looking icon for this yet, but next to the navigation bar, you should see this icon ![Alt Query String Values] (https://raw.github.com/acolchado/query-string-values-extension/master/extension/img/icon-16.png), click it and you will see all of the query stirng values.

## Contributing

If you have any suggestions, please submit them as a pull request. I will take a look and integrate if desired.

## License

http://acolchado.mit-license.org/


[Google Chrome Store]: https://chrome.google.com/webstore/detail/query-string-values/cjhbheckcgogpgibfjfhkofioikhpgio
[Query String Values]: https://chrome.google.com/webstore/detail/query-string-values/cjhbheckcgogpgibfjfhkofioikhpgio
