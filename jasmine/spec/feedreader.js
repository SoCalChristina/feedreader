/* feedreader.js */
$(function() {
  describe('RSS Feeds', function () {

    it('are defined', function () {
      //allFeeds variable has been defined
      expect(allFeeds).toBeDefined();
      //allFeeds variable is not empty
      expect(allFeeds.length).not.toBe(0);
    });

    // Source https://udenver.zoom.us/recording/play/-1Agy4wDME0_ab_zaNUiWquZOWdb4qQvCJENURKWT4CDtHWqXrE0yI7DSi8kfvm5?continueMode=true
    // Test to check for feed url and check that it is not empty
    it('all feeds have an url defined and not an empty string', function () {
      //  loops through each feed in the allFeeds object
      allFeeds.forEach(feed => {
        // make sure each feed has a url defined
        expect(feed.url).toBeDefined();
        // check the length to make sure it is not empty
        expect(feed.url.length).not.toBe(0);
      });
    });

    // Test feed name and check that it is not empty
    it('all feeds have a name and the name is not empty', function () {
      //  loops through each feed in the allFeeds object
      allFeeds.forEach(feed => {

        expect(feed.name).toBeDefined();
        // check the length to make sure the name field is not empty
        expect(feed.name.length).not.toBe(0);
      });
    });
  });

  //Test suite for the menu
  describe('The menu', function() {
    // check if menu is hidden by default
    it('menu is hidden by default', function() {
      // use JQuery to target the body
      // check body for class menu-hidden and set the value to true.
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    // Test if menu has visibility when the menu icon is clicked
    it('menu changes visibility on click', function() {
      // click on the .menu-icon-link
      $('.menu-icon-link').click();
      // menu should display
      expect($('body').hasClass('menu-hidden')).toBe(false);

      // click again on the .menu-icon-link
      $('.menu-icon-link').click();
      // menu should be hidden
      expect($('body').hasClass('menu-hidden')).toBe(true);
    })
  });

  // Test suite for Initial Entries
  describe('Initial Entries', function() {
    // when loadfeed is called and completes its work,
    // source: https://jasmine.github.io/tutorials/async
    beforeEach(done => {
      // load first feed in the list then run a callback function
      // this must be done before starting the test function
      loadFeed(0, done);
    });
    // there is at least a single .entry element in the.feed container
    it('at least 1 entry found when loadFeed is called and done.', function() {
      // check if entry retuned with all the entries is greater than 0
      // return an array of all entries found
      expect($('.feed .entry').length).toBeGreaterThan(0);
    });
  });

  // Source: https://www.youtube.com/watch?v=pPt4oOKNdEk
  // Test Suite for New Feed Selection
  describe('New Feed Selection', function () {
    // define feed load variables
    let firstFeed,
      secondFeed;
    beforeEach(done => {
      //load first feed
      loadFeed(0, function () {
        //save contents to firstFeed
        firstFeed = $('.feed').html();
        // load second feed as callback to first
        loadFeed(1, function () {
          // save the contents into secondFeed
          secondFeed = $('.feed').html();
          // call done as callback to second
          done();
        });
      });
    });

    it("Content changes after load", function () {
      expect(firstFeed).not.toBe(secondFeed);
    });
  });
}());
