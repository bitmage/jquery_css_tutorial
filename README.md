# INTRODUCTION

The goal of this tutorial is to familiarize you with how websites work.

By the end you should be familiar enough to play around yourself and create something.  Feel free to skip steps that you already know.

This tutorial is focused on front end (stuff that happens in your browser).  This will expose you to the following technologies:

  - html
  - css
  - jquery
  - browser dev tools
  - github

We'll use JQuery to learn HTML document structure through EXPERIMENTATION.  Event triggers provide a nice playground for this - you can set them up then immediately go test them out in your browser.

Another way we'll tie into HTML structure is through our CSS stylesheet.  CSS and JQuery both use "CSS selectors" to find elements in your HTML and perform some modification on them.

Browser dev tools such as Firebug for Firefox, the web developer toolbar for IE, and the builtin development features on Safari and Chrome, will also let you examine the page structure and type in ad-hoc commands in the console.

# GETTING STARTED

We'll be using Cloud9 IDE:  https://c9.io
And github: https://github.com  (you're already here if you're reading this)

1. Create a github account if you don't already have one.
2. Log into Cloud9 via your github account.
3. Click the green button in the upper left called "Create Project", then click "Clone From URL".
4. Paste this URL:  https://github.com/bitmage/jquery_css_tutorial.git
5. Click "CREATE".
6. Wait for the project to load, then click the green button "Start Editing".

# PEDAL TO THE FLOOR

You should see a project environment open up.  On your left there is a file browser.  Right click "sample.html", and select "Preview".  Click around on the links and you'll see the current behavior of the page.  These hiding of the links was done with jQuery.

Let's look at how.  Next double click on "sample.html".  The first two lines include our JQuery library and stylesheet.  After that, some HTML for the text and links on the page, and some JQuery code to create the actions for the links.

To break down what the JQuery is doing... The first part uses a CSS selector to find 1 or more elements in the web page:

  $('.trigger')

'$' is an alias for the jQuery function, which finds an HTML element on the page and creates an object out of it that has some nice helper functions for you to use.  We're passing it the CSS selector '.trigger' which finds all elements with a class of 'trigger'.  In our case it's just going to come back with this one:

  <a href="#" class="trigger">Trigger</a>

So that's how we find stuff.  You can check out this page for a complete reference of different selectors you can use:

  http://www.w3.org/TR/CSS2/selector.html

Once you've found the element(s) that you want, you can manipulate them.  In our case, we're going to attach an action that will happen when we click the link:

  $('.trigger').click()

The 'click' function takes another function as its argument.  That lets you do literally whatever you want when the event is triggered.  In Javascript functions can be passed around like any other object, and can have a name or just be anonymous.  In the example, we're defining an anonymous function:

  $('.trigger').click(function(){})

This means it's a function that takes 0 arguments:

  function()

And when it's triggered it will perform whatever commands are listed in the body:

  {
    do_something();
  }

Since the event that triggers this function happened on a specific element, it passes the identity of that element on to our function.  You can access it using `$(this)`:

  {
    $(this).id; //evaluates to the id of the element the event occured on
  }

So when you combine all that, you have the ability to manipulate the element that was clicked on:

  $('.trigger').click(function(){
      $(this).fadeOut();
      });

If you wanted to, you could also assign a name to your function:

  function foo() {
    $(this).fadeOut();
  }

Then you could use it later, as many times as you want:

  $('.trigger').click(foo);
  $('.bar').click(foo);
  $('.baz').click(foo);

But if you're only going to use it once, why not leave it anonymous?

# EXCERCISES FOR THE READER

  - Look up the Events and Effects documentation on the JQuery website.  Add some events then test them out in your browser to see what they do.
  - Add some styles in sample.css.  Try changing colors, adding borders, padding, margins.  How are margins and padding different?
  - Try triggering more than one action on an event.  Refer to other elements on the page.

REFERENCES

  jQuery:  http://docs.jquery.com/
  HTML:  https://developer.mozilla.org/en-US/docs/Web/HTML
  CSS: https://developer.mozilla.org/en-US/docs/Web/CSS
  Javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript
