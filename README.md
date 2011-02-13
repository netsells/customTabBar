Custom Tab Bar
==============

Easily add a custom tabbar to your Appcelerator Titanium iPhone app!

All available settings are shown in the example, defaults will be along shortly.

Example
--------

	// Create the tab group
	var tabGroup = Titanium.UI.createTabGroup();

	// Assign windows & tabs
	// IMPORTANT:
	//			'tabBarHidden: true' should be set on all windows
	//			height should be set to 480 - customTabBar's height (change 480 to app screen height)
	var win1 = Titanium.UI.createWindow({ title:'Tab 1', height: 440, tabBarHidden: true });
	var tab1 = Titanium.UI.createTab({ window:win1 });
	var win2 = Titanium.UI.createWindow({ title:'Tab 2', height: 440, tabBarHidden: true });
	var tab2 = Titanium.UI.createTab({ window:win2 });
	tabGroup.addTab(tab1);  
	tabGroup.addTab(tab2);  

	// open tab group
	tabGroup.open();

	// Here is the magic
	Ti.include("customTabBar/customTabBar.js");

	var ctb = new CustomTabBar({
		tabBar: tabGroup,
		imagePath: 'iphone/images/',
		width: 80,
		height: 40,
		items: [
			{ image: 'home.png', selected: 'home_over.png' },
			{ image: 'cloud.png', selected: 'cloud_over.png' },
			{ image: 'cart.png', selected: 'cart_over.png' },
			{ image: 'settings.png', selected: 'settings_over.png' }
		]
	});