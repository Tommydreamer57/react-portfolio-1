
# My Portfolio

<br>

Live at >>> [https://thomaslowry.me](https://thomaslowry.me)

<br>

## Technology

 - React
 - Vanilla JavaScript
 - HTML5
 - CSS3

<br>

## Custom Scrollbar

For my portfolio I wanted a scrollbar that looked better than the blocky default ones on Windows, so I built my own. It was a fun challenge.

The page transition made the scrollbar even more challenging, since all the views are rendered at the same time with classNames `previous`, `current`, and `next`. The scrollbar couldn't be calculated off the entire content's height, because the previous or next views might be larger than the current one, and they will be at a different scroll position too.

Additionally, since the scrollbar needs to be updated on scroll, which fires rapidly, controlling it with state was not an option (I tried it and it was awfully slow).

The scrollbar is therefore just a plain HTML element controlled with vanilla JavaScript.

### Calculations

I used a recursive function to find the height of the tallest `current` node, and simple algebra to calculate the `height` of the scrollbar based off of the content height and the window's view height.

Then, based off of the `current` view's `scrollTop`, the correct `top` property of the scrollbar is calculated.

The scrollbar's `height` and `top` are calculated on `click` and `resize` of the window object, and on `scroll` of the `current` view.

### Changing Views

Once the calculations were working correctly, I faced the challenge of making the scrollbar listen to the correct view. As soon as the page loaded, the event-listeners were added to the `current` view, but this wouldn't update when the view changed.

This problem took me a little while to figure out, but then I realized that I would have to remove the event-listeners anytime a link was clicked, and then re-add the event-listeners to the new `current` view.

Using a closure to return a funtion that would remove the event-listeners from the function that added them, in combination with React lifecycle methods, each time the user clicks on a link to go to a different route, the event-listeners are removed from the previous `current` view and added to the new `current` view.

<br>

## Staggered Transitions

The page transitions (getting them to slide back and forth) presented a more difficult challenge. I think there are probably much better ways of solving the problem than the way that I did, but my solution is more than adequate for a small static site.

As mentioned above, all views are rendered at the same time and given classes of `previous`, `current`, and `next`, based off of the URL. Their positions are fixed to be left of the screen, centered on the screen, and right of the screen, respectively, and then a CSS transition allows them to slide smoothly between positions.

The stagger between each item's slide is calculated when mapping through the elements to display them. It was actually much easier than I had first anticipated.

<br>

## Project Filter

On the Portfolio view, the project filters were a fun challenge. Instead of saving the filters in state, I wanted them to be in the URL so that I could link to the page with filters already in place. Also so that refreshing would not remove them.

When a user clicks on one of the tags or technologies at the top of the page, it will filter the projects and display only projects that fall under that category. Multiple filters can be applied at once, and if there are no projects that fit the combination of filters, then a nice sentence is displayed in place of the projects.

<br>

## Go Take a Look!

Take a look at my portfolio at [https://thomaslowry.me](https://thomaslowry.me)
