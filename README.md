# meteor-bg-web-bug

This is a reproduction for https://github.com/meteor/cordova-plugin-meteor-webapp/issues/24

Run the app on an iOS device, and click the "Get" button.  The app will fetch "/" from the GDC local web server, and report success on the console log.

Now press the home button.  The app will go into the background, and will attempt to fetch "/".  It will report failure on the console log, as the GDC local web server is not running when the app is in the background.
