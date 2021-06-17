/* 
    - defer (in script tags): 
        "The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. 
        The script loads “in the background”, and then runs when the DOM is fully built."

        in other words:
            - Scripts with defer never block the page.
            - Scripts with defer always execute when the DOM is ready (but before DOMContentLoaded event).

    - syntax:
        <html>
            <body>
                <p>This is a paragraph</p>
                <script defer src="./script.js" ></script>
                <script defer>//some javascript code here </script>
            </body>
        </html>


    - async (in script tags):
        The async attribute is somewhat like defer. It also makes the script non-blocking. But it has important differences in the behavior.
        The async attribute means that a script is completely independent:

        - The browser doesn’t block on async scripts (like defer).
        - Other scripts don’t wait for async scripts, and async scripts don’t wait for them.
        - DOMContentLoaded and async scripts don’t wait for each other:
            - DOMContentLoaded may happen both before an async script (if an async script finishes loading after the page is complete)
            - …or after an async script (if an async script is short or was in HTTP-cache)

        In other word:
            - The page content shows up immediately: async doesn’t block it.
            - DOMContentLoaded may happen both before and after async, no guarantees here.
            - A smaller script small.js goes second, but probably loads before long.js, so small.js runs first. Although, it might be that long.js loads first, if cached, then it runs first. In other words, async scripts run in the “load-first” order.

        syntax:
            <script async src="https://google-analytics.com/analytics.js"></script>

*/
