# Security.js
SecurityJS Is a JavaScript shield protecter from various attacks, such as installing Malware, Hackers and CyberCriminals. It is free, safe, and fully customizable.

### Watch how I type in "javascript" In the url:
![Fail screenshot](securityJS_screenshot_png.png)

#### Nothing happens? This is a big security issue.

With SecurityJS, it cuts off all params including "javascript", ":javascript", "?javascript" and much more.

_But not just that. ― See more below_

It also stops loading sources from the **Developer console command line**, URL/URI Params, and unknown `<script>` tag sources such as `HTTP`.

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
  <script type='text/javascript' src='https://raw.githubusercontent.com/Parking-Master/Security.js/main/security.js'></script>
  ```
  **IMPORTANT NOTE:** Please embed the `<script>` tag inside the head, or else it won't block anything!
  
  Now, go ahead and try to type in the address bar: <kbd>https://mydomain.com?javascript=alert()</kbd>
  
  What happenend? It outputted a message! You can also open up the dev-console, and go to the logs. You'll see a warning by SecurityJS saying it blocked a possible attack.
  
  Go ahead and try to put a `<script>` tag with `src` attribute of any http javascript file.
  
  ### Thanks for reading! Please consider getting SecurityJS for your site.
