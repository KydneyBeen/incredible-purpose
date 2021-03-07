# incredible-purpose
A web app that fetches and displays the 7-day forecast for a city

## Notes
*Please do not supply your name or email address in this document. We're doing our best to remain unbiased.*
### Date

Sunday March 7, 2021

### Location of deployed application

incredible-purpose.sydneyy.dev

### Time spent

6 Hours

### Assumptions made

I assumed that the API in the directions was a guideline; I used another endpoint from the same API 

### Shortcuts/Compromises made

I hardcoded a list of cities with their coordinates; ideally I would use another API to get the coordinates of any city a user typed in.  I also displayed more data than requested because it was simpler to display all 8 days returned by the API; I judged that the time I would spend reducing the data to 5 days would not be worth taking the directions so literally.

### Stretch goals attempted

**Responsiveness**: I had thought of this mobile-first to begin with, so it was responsive from the start.

**Additional cities**: I included a list of additional cities that the user can select, but it's limited to the cities I chose.

**Deployment**: I have to install an SSL certificate on my server, but it should be view-able by the time you look! I have a hosting package and domain name already and I had been testing Node apps on it anyways.

### Instructions to run assignment locally

I am assuming that you have git on your machine, and you will also need Node and NPM

1. In the terminal clone my repository to a file folder of your choice:
```
git clone https://github.com/KydneyBeen/incredible-purpose.git
```
2. cd into that directory, or navigate into the folder and open it in the terminal
3. install the third-party dependencies:
```
npm install
```
4. In the same directory create a file named `secret.js` and copy my api key into it (the code will be sent to you via email)
5. In the terminal, start the server:
```
node index.js
```
6. Follow the link that appears in the terminal

### What did you not include in your solution that you want us to know about?

**API Rate Limit**: I have not implemented any controls to prevent the user from using up my third-party API limit

**Server Errors**: I have implemented 404 error handling, but no 500-level errors; The front end will behave unexpectedly if the third-party API returns anything unexpected.

**Design**: I have used a colour theme from a generator, but I didn't spend too much time on it because I am terrible at colours

**CDNs**: I have used React CDNs, third-party images, and Google Font API for the sake of speedy development and a smaller codebase.

**Content**: I included only a couple of weather properties in my UI. The rest of the data is in the browser and could easily be displayed

### Other information about your submission that you feel it's important that we know if applicable.

I included the source code and the transpiled code so that you could read it but also run it without extra steps.

### Your feedback on this technical challenge

This was fun! I've done HackerRank tests before, but I think building something start-to-finish like this is a better demonstration of front-end skills.  I also appreciate the open-ended aspect.  I don't think I could offer any suggestions!
