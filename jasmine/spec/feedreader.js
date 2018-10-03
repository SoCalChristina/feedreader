/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
//Source https://udenver.zoom.us/recording/play/-1Agy4wDME0_ab_zaNUiWquZOWdb4qQvCJENURKWT4CDtHWqXrE0yI7DSi8kfvm5?continueMode=true
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('all feeds have an url defined and not an empty string', function() {
           allFeeds.forEach(feed => {
           //make sure each feed has a url parameter
           expect(feed.url).toBeDefined();
           //check the length and make sure url is not empty
           expect(feed.url.length).not.toBe(0);
         });
       });
       /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         // write a description
      it('all feeds have a name and not an empty string', function() {
      //  loop through each feed
        allFeeds.forEach(feed => {
        //make sure each feed has a url parameter, and the feed name is defined
        expect(feed.name).toBeDefined();
        //check the length to make sure it is not empty
        expect(feed.name.length).not.toBe(0);
      });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         //description and function
        it('menu is hidden by default', function(){
           // use JQuery to target the body
           //look at the body and see if it has class menu-hidden and set the value to true for default
           expect($("body").hasClass("menu-hidden")).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          //write a two step process to check for visibility and for click
        it('menu changes visibility on click', function() {
            //check for a click on the menu icon
            $(".menu-icon-link").click();
            //make sure menu-hidden class is not there by setting it to false.
            expect($("body").hasClass("menu-hidden")).toBe(false);
            //click again to make sure menu hidden is there by setting it to true
            $(".menu-icon.link").click();
            expect($("body").hasClass("menu-hidden")).toBe(true);
        })
  });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         // use before each tests
         //load feed is asynchonously
         //source
         //https://jasmine.github.io/tutorials/async
        beforeEach(done => {
           //load first feed in the list then run a callback function
           //this must be done before starting the test function
            loadFeed(0, done);
        });
          it("at least 1 entry found when loadFeed is called and done.", function() {
            // check if entry retuned with all the entries is greater than 0
            // return an array of all entries found
            expect($(".feed .entry").length).toBeGreaterThan(0);
          });
        });
         // now run the tests - check if atleast one entry is added
/*
    /* TODO: Write a new test suite named "New Feed Selection" */
   describe('New Feed Selection', function(){
      let feedOne;
          feedTwo;


        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         beforeEach(done => {
         // will compare two feeds.
         //Load one feed and save content
         //then load second feed and save that contentType
         //First feed loaded
           loadFeed(0, function(){
            //  grab content from feed element use j query to grab html element
            feedOne = $(".feed").html();
            done();
        });
            //load second feed
            loadFeed(1, function(){
            //store contents of new feed
            feedTwo = $(".feed").html();
            done();
          })
      });
        // test loadFeed functions
        it('content changes when new feed is loaded', function(){
        // feed one is the same as feed two and expect it to be false
        expect(feedOne === feedTwo).toBe(false);
      });
    });
}());
