# That's My Line

### Description

This chrome extension is pretty simple. It's only job is to intercept any chrome browser request to https://bing.com/search and redirect the query to my harcoded search engine of choice.
<br />
<br />

#### Problem
I wanted to start using the "search the web" feature within the start menu of Windows 10 but much to my dismay, Microsoft required me to use edge and search via Bing. Nothing against Microsoft, I'm typing this into a github readme, in VS Code, on a windows PC, but I wanted it to work my way. I was able to find a solution to open the search within my browser of choice, but it was still searching through bing.
<br />
<br />

#### Solution
I figured the easiest way to have the browser intercept the request before it was sent, grab the query string, and then send it through to the search engine I wanted to.
It's nothing fancy. It's a pretty monotasker solution to the problem but so far it seems to work.
<br />
<br />

#### Future
Ability to set specific redirect rules