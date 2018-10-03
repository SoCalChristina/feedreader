Feedreader
==========
GWG Udacity Frontend Project 4
==============================

This project uses jasmine to test the JavaScript application of a feedreader website.

Instructions
============
Download all the files and open the index.html file in your browser.

Alternatively, you can view the site on github pages by using the link below.

Test Suites
===========

###1. RSS Feeds

Feeds are Defined
The Feed is not empty

How to run this test:
Open the app.js file
Delete the contents of the allFeeds array

Refresh the index.html file to check for errors.
The test works if errors are displayed.

The Feed URL is defined
The Feed URL is not empty

How to run this test:
Open the app.js file
Delete the URLs in the allFeeds array

Refresh the index.html file to check for errors.
The test works if errors are displayed.

All Feeds have a name
Feed names are not empty

How to run this test:
Open the app.js file
Delete the names in the allFeeds array

Refresh the index.html file to check for errors.
The test works if errors are displayed.


###2. The Menu

The menu is hidden by default
The menu is visible when the menu icon is clicked

The menu is hidden when the menu icon  is clicked again

How to run this test:
Open the index.html file
Delete the body class "menu-hidden"

Refresh the index.html file to check for errors.
The test works if errors are displayed.

###3. Initial Entries

Call the loadfeed
Place an entry into the feed container before the load is done

How to run this test:
Open the index.html file
Change one of the URLs in the allFeeds array

Refresh the index.html file to check for errors.
The test works if errors are displayed.

###4. New Feed Selection

Feed content changes when new feed is loaded

How to run this test:
Make a change to the test in the feedreader.js file
Negate the === in, expect(feedOne === feedTwo).toBe(false); by changing it to !===

Refresh the index.html file to check for errors.
The test works if errors are displayed.

