CustomTabBar = function(settings) {
	var tabBarItems = [];
	var	tabCurrent = 0;
	
	var resetTabs = function() {
		for(var i = 0; i < tabBarItems.length; i++) {
			tabBarItems[i].image = tabBarItems[i].backgroundImage;
		}
	};
	
	var assignClick = function(tabItem) {
		tabItem.addEventListener('click', function(e) {
			// Just fetching the 'i' variable from the loop
			var pos = e.source.pos;

			if (tabCurrent == pos) {
				// TODO
				// Change back to root window, like the native tab action.
    			return false;
	        }		
			
			// Switch to the tab associated with the image pressed
			settings.tabBar.tabs[pos].active = true;
			tabCurrent = pos;

			
			// Reset all the tab images
			resetTabs();
			
			// Set the current tab as selected
			tabBarItems[pos].image = settings.imagePath + settings.items[pos].selected;		
		});
	};
	
	// Create the container for our tab items
	var customTabBar = Ti.UI.createWindow({
		height: settings.height,
		bottom: 0
	});
	
	
	for(var i = 0; i < settings.items.length; i++) {
		// Go through each item and create an imageView
		tabBarItems[i] = Titanium.UI.createImageView({
			// background is the default image
			backgroundImage: settings.imagePath + settings.items[i].image,
			
			width: settings.width,
			height: settings.height,
			left: settings.width * i
		});

		// Pass the item number (used later for changing tabs)
		tabBarItems[i].pos = i;
		assignClick(tabBarItems[i]);

		// Add to the container window
		customTabBar.add(tabBarItems[i]);
	}

	// Display the container and it's items
	customTabBar.open();

	// Set the first item as current :)
	resetTabs();
	tabBarItems[0].image = settings.imagePath + settings.items[0].selected;
	
	return {
		hide: function() { customTabBar.hide(); },
		show: function() { customTabBar.show(); }
	};
};
