Feedreader
==========
GWG Udacity Frontend Project 4
==============================
This project is a feedreader testing excercise for the Grow With Google Udacity Frontend Nano Degree.

Requirements
===========
Jasmine version 2.1.2 is used in this project. (https://github.com/jasmine/jasmine/releases/tag/v2.2.1)...
...A web browser...
...Dev tools...

Instructions
============
Download all the files and open in your code editor. Next, open the index.html file in your browser.

Alternatively, you can view the site on github pages here (https://socalchristina.github.io/feedreader/)

Test Suites
===========

RSS Feeds
---------
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


The Menu
--------
The menu is hidden by default
The menu is visible when the menu icon is clicked

The menu is hidden when the menu icon  is clicked again

How to run this test:
Open the index.html file
Delete the body class "menu-hidden"

Refresh the index.html file to check for errors.
The test works if errors are displayed.

Initial Entries
---------------
Call the loadfeed
Place an entry into the feed container before the load is done

How to run this test:
Open the index.html file
Change one of the URLs in the allFeeds array

Refresh the index.html file to check for errors.
The test works if errors are displayed.

New Feed Selection
------------------
Feed content changes when new feed is loaded

How to run this test:
Make a change to the test in the feedreader.js file
Negate the === in, expect(feedOne === feedTwo).toBe(false); by changing it to !===

Refresh the index.html file to check for errors.
The test works if errors are displayed.

Resources
=========
Jasmine documentation (https://jasmine.github.io/)
The starter code is located here: (https://github.com/udacity/frontend-nanodegree-feedreader)

Acknowledgements
================
I used an extemely thorough and well presented tutorial by Lloan Alas (https://udenver.zoom.us/recording/play/-1Agy4wDME0_ab_zaNUiWquZOWdb4qQvCJENURKWT4CDtHWqXrE0yI7DSi8kfvm5?continueMode=true)

Contributions
=============
This project is not currently open for pull requests.

Contact
=======

Connect with me on LinkedIn (https://www.linkedin.com/in/christina-tovar-hamernik/) or Twitter (@CTovarHamernik)

