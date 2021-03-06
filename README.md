# SecurityJS&ThickSpace;<sub>_(Closed)_</sub>
SecurityJS is still in use, but is not monitored for security or bug fixes.<br>
_Closed. A new more powerful version has been released. [SecurityJS.128](https://github.com/Parking-Master/SecurityJS.128)_<br>
_Disclaimer: everything will be deprecated because of security issues._

<!-- ### Table of contents:

#### [Trusting certain and/or all loading sources](#trusting-certain-andor-all-loading-sources-1)
#### [Installing it / Embedding it](#to-install-it)
#### [SecurityJS Functions](#securityjs-functions)
#### [Using the same teqnique with `link` tags](#using-the-same-teqnique-with-link-tags-1)
#### [SecurityJS `Auth()` function](#securityjs-auth-function-1)
#### [Blocking site from being embedded](#blocking-site-from-being-embedded-1)
#### [SecurityJS 16-bit key generator](#key-generator-with-securityjs)

<hr>
SecurityJS is a JavaScript library for avoiding various attacks on your site. It also comes with free 8-bit security encryption<br>

#### For more advanced security: [SecurityJS.128<sup>b</sup>](https://github.com/Parking-Master/SecurityJS.128)

##### **NOTE:** SecurityJS is only available for secure sites with _**H**yper**T**ext **T**ransfer **P**rotocol **S**ecure_ (HTTPS)<br>

### Watch how I type in "javascript" In the url:
![Fail screenshot](securityJS_screenshot_png.png)

#### Nothing happens? This is a big security issue.

With SecurityJS, it cuts off all params including "javascript", ":javascript", "?javascript" and much more.

_But not just that. ― See more below_

It also stops loading sources from the **Developer console command line**, URL/URI Params, and unknown `<script>` tag sources such as `HTTP`.

### Trusting certain and/or all loading sources
*tip-*
If you trust a source from a certain script tag, you can either add the `trust` attribute (html), or add it in JavaScript:

###### HTML
```
  <script trust="true" src="http://github.io/example.js"></script>
```
###### JavaScript
```
  securityjs.trust('true', 1);
```
_the "1" in the function means it gets the element, e.g:_<br>
1, `<script src='url1'>`<br>
2, `<script src='url2'>`

*another tip-*
You can also trust all `<script>` tags. Example:
###### JavaScript
```
  securityjs.trustAll('javascript', 'true');
```
Specify what you want to trust, eg: 'javascript' (script tags) or 'css' (link tags).
### With SecurityJS:
![Success screenshot](securityJS_screenshot_s_png.png)
  
Depending on your browser, it will output a message due to any issues such as:
  > **example.com** currently has <a href='#'>SecurityJS</a> active.<br>
  This site prevented potential risk of attack.<br>
  If you encountered a problem, please contact the owner.<br>
                                       <kbd>Back</kbd>

  #### To install it:
  
  ### 1. Download full file
  The only step for this is to install it by download. 
    
  You can download it [here](https://parking-master.github.io/Security.js/download.html?download=js)<br>
  Or [get the minified version](https://parking-master.github.io/Security.js/download.html?download=min)
  
  ### 2. Get it by <a href='https://cdn.jsdelivr.net'>CDN</a>:
  You can easily get the JavaScript source code by embedding it:
  ```
  <script type='text/javascript' src='https://cdn.jsdelivr.net/gh/Parking-Master/Security.js@latest/security.min.js' aysnc defer></script>
  ```
  **IMPORTANT:** HTML `async` attribute means it executes as soon as possible. HTML `defer` attribute means the page won't load until the file is loaded.<br>
  **NOTE:** Please put the `<script>` tag right at the closing body tag, or else it won't block anything!
  
  Now, go ahead and try to type in the address bar: <kbd>https://[domain]?javascript=alert()</kbd>
  **NOTE:** Replace "[domain]" with your domain or site address.
  
  What happenend? It outputted a message! You can also open up the dev-console, and go to the logs. You'll see a warning by SecurityJS saying it blocked a possible attack.
  
  Go ahead and try it out.
  
  Now, let's get into more advanced properties.
  
  ### SecurityJS functions
  
  every SecurityJS Function starts with `securityjs`.
  ```
  securityjs.function('property', 'value', 'tag');
  ```
  (and has 3 arguments)
  #### How to block resources
  ###### JavaScript
  ```
    securityjs.block(type, what, string);
  ```
  ###### Detailed example:
  ```
    securityjs.block('url', 'javascript', 'not_allowed');
  ```
  ##### Output:
  1. <kbd>https://example.com?javascript=void(0)</kbd>
  2. <kbd>https://example.com?not_allowed</kbd>
  
  #### Blocking console commands
  ###### JavaScript
  ```
  securityjs.block('console', 'load');
  ```
  This can block loading sources from the _JavaScript console_
  **Notice:** You only need 2 parameters for the console.
  ##### Output:
  ```
  >> var script = document.createElement('script'); script.src = 'http://example.js'; document.body.appendChild(script);
  ```
  ```
  Uncaught DOMException: SecurityJS: blocked mixed loading resource from 'http://example.js' REASON (mixed content security risk).
  ```
  #### Please read the [documentation](doc.html) to see more `block` functions.
  
  ### Custom blockers
  ###### JavaScript
  ```
    securityjs.onexecute = function() {
    // do what you want to do
    alert('You are not welcomed!');
    };
  ```
  ##### Output:
  <kbd>http://example.com?javascript=void(0)</kbd>
  > <br>
  >  You are not welcomed!<br>
  >  <ul><ul><kbd>OK</kbd>
  You can make any functions you want with `onexecute()`.
  
  ### Using the same teqnique with `link` tags
  You've probably gone through this whole tutorial without<br>knowing how to do the same with `link` tags.
  
  **You can easily** Do so just by blocking link tags.
###### SecurityJS (JavaScript)
```
  securityjs.block('source', 'link');
```
  OR  
```
  securityjs.block('source', 'link', 'http');
```
You can also use "**OR**" (`||`) or "**AND**" (`&&`) operators:
```
  securityjs.block('source', 'link', 'http' || 'http://');
```
```
  securityjs.block('source', 'link', 'http' && 'http://');
```
  _This also works with the `script` tags too._
 ### SecurityJS `Auth()` function
  Authorize content to a specific IPv4 address, or password prompt
  <br>
  (it has to be public, or SecurityJS won't recognize it):
  ##### Syntax:
```
  securityjs.auth(type, string);
``` 
  ###### Example (JavaScript):
```
  securityjs.auth('ip', '8.8.8.8');
```
  ###### Passcode (JavaScript):
```
  securityjs.auth('passcode', '1secret-pass12!');
```
Accessing your authorized file ends up like this:
> Enter your passcode to access this file:<br>
> <ul><kbd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</kbd><br><ul><kbd>OK</kbd>&nbsp;&nbsp;<kbd>Cancel</kbd><br>

 ### Blocking site from being embedded
  You can block your site from being embedded using the `meta` tag:<br>
  (Note: Use the `meta` tag only in between the `head` tag).
  ###### HTML
  ```
    <meta name="X-Frame-Options" content="deny">
  ```
  To only allow it through your site domain, use "allow-same-origin":
  ###### HTML
  ```
    <meta name="X-Frame-Options" content="allow-same-origin">
  ```
  or...<br>
  ###### JavaScript
  ```
    securityjs.block('frame', 'all');
  ```
  ### Key Generator with SecurityJS
  How to generate a random key with javascript:
  ```
    var myKey = securityjs.generateKey();
    // Output: r1uu-y2ur8-EwIE4-haBVqDi9IgC1
  ```
  To make a certain length:
  ```
    var myKey = securityjs.generateKey(10);
    // Output: 6ygY87EwTp
  ```
  
  #### Did you like this project? Check out our other ones:<br>
  <kbd>[Parking Master](https://github.com/Parking-Master/Parking-Master)</kbd> | <kbd>[No-Time](https://github.com/Parking-Master/No-Time)</kbd>
 -->
