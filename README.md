# SecurityJS
<div class="aside">
  <button>Butt</button>
</div>
### Table of contents:
#### [Trusting certain and/or all loading sources](#trusting-certain-andor-all-loading-sources-1)
#### [Installing it with file/script tag](#without-further-ado-lets-install-it)
#### [SecurityJS Functions](#securityjs-functions)
#### [Using the same teqnique with `link` tags](#using-the-same-teqnique-with-link-tags-1)
<hr>
SecurityJS is a JavaScript shield protecter from various attacks on your site. It is free, safe, and fully customizable.

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
You can also trust all <script> tags under any circumstance. Example:
###### HTML
```
  <script trust-all="true" src="http://github.io/example.js"></script>
```
###### JavaScript
```
  securityjs.trustAll('true');
```
### With SecurityJS:
![Success screenshot](securityJS_screenshot_s_png.png)
  
Depending on your browser, it will output a message due to any issues such as:
  > **example.com** currently has <a href='#'>SecurityJS</a> active.<br>
  This site prevented potential risk of attack.<br>
  If you encountered a problem, please contact the owner.<br>
                                       <kbd>Back</kbd>

  #### Without further ado, let's install it:
  
  ### 1. Download full file
  The only step for this is to install it by download. 
  
  It will download *1* File.
  
  You can download it by the [download page](https://parking-master.github.io/Security.js/download.html)
  
  ### 2. Get by `<script>` tag
  You can easily get the JavaScript source code by embedding it:
  ```
  <script type='text/javascript' src='https://cdn.jsdelivr.net/gh/Parking-Master/Security.js/security.js'></script>
  ```
  **NOTE:** Please embed the `<script>` tag right at the end of the body tag, or else it won't block anything!
  
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
  1. <kbd>https://example.com?javascript</kbd>
  2. <kbd>https://example.com?not_allowed</kbd>
  
  #### Blocking console commands
  ###### JavaScript
  ```
  securityjs.block('console', '<script>');
  ```
  **Notice:** You only need 2 parameters for the console. You can use `what` or `str` for the last one.
  ##### Output:
  ```
  >> var script = document.createElement('script'); script.src = 'http://example.js'; document.body.appendChild(script);
  ```
  ```
  SecurityJS: blocked loading resource from 'http://example.js'.
  ```
  #### Please read the [documentation](doc.html) to see more `block` functions.
  
  ### Custom blockers
  ###### JavaScript
  ```
    function onexecute(){
    // do what you want to do
    alert('You are not welcomed!');
    }
  ```
  ##### Output:
  <kbd>http://example.com?javascript</kbd>
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
You can also use "**OR**" (||) or "**AND**" (&&):
```
  securityjs.block('source', 'link', 'http' || 'http://');
```
```
  securityjs.block('source', 'link', 'http' && 'http://');
```
  _This also works with the `script` tags too._
  
