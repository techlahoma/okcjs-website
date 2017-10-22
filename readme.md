# OKCJS
![OKCjs](http://i.imgur.com/4z9STLh.png)

OKCJS is the Oklahoma City JavaScript users group. We meet on the third Tuesday of every month at 11:30am at [StarSpace46](https://www.starspace46.com/) to teach, discuss, and learn about JavaScript and related web programming technologies. OKCJS follows the [Techlahoma Code of Conduct](https://github.com/techlahoma/CodeofConduct/wiki/Techlahoma-Code-of-Conduct).

## find us online
* [twitter](https://twitter.com/okcjs)
* [meetup](http://www.meetup.com/okc-js)
* [email](mailto:oklahomacityjavascript@gmail.com)
* [website](http://okcjs.com)  

## About okcjs

⏳ What's OKCJS ' history?  
OKCJS started in January 2012 with 72 attendees. We currently range from 50-100+ members at our lunch time meetup. We organize the meetup with a couple organizers and volunteers. If you're interested in helping out, send us an [email](mailto:oklahomacityjavascript@gmail.com), [tweet](https://twitter.com/okcjs) or start contributing via [Github](https://github.com/techlahoma/okcjs-website).

🎯 What are common topics at okcjs  
Topics at okcjs range from JS on the client side, server side, optimization, frameworks, libraries, testing, IDE tips, best practices, and personal projects.

💞 Who should attend?  
This group is for people of all levels and all skills. We recommend attending especially  if you feel that you don't belong due to being new to javscript, tech in general, or the okc area. It is impossible to know everything or be an expert in every matter, but it *is* possible to learn something new at every okcjs meeting. Every meeting we learn about new tech to discover, better ways to solve our problems with code, and make new friends. Attending is an investment in yourself and our tech community! Please [rsvp](http://meetup.com/OKC-JS) and find this out for yourself.

💖 What is the okcjs community like?  
OKCJS is made up of  members from varying backgrounds. Some have recently decided they want to learn more about technology, the tech industry, and if a career in programming is right for them. Some attendees are students at high schools, vo-techs, 2 year schools, or 4 year universities. Some attendees are in their first few years or fifteenth year in tech.

⚡ What are Lightning Talks?  
⚡Lightning Talks⚡ are every third month.  They're a really fun event we put on every 3 months. Community members have 5 to 10 minutes to talk about JavaScript or topics related to JavaScript. We give preference to new speakers to strengthen our community. nyone who has attended OKCJS once before is invited to [sign up](http://www.meetup.com/OKC-js/messages/boards/). Selected speakers will be notified of their status. Common topics include: libraries, ways you've solved problems, what you're working on, or anything relating to JS.  Please note that marketing pitches are not allowed; lightning talks are a community enrichment event. Thusly, we do not accept talks that sell products, goods, or services.

📬 How can I contact OKCJS?  
Tweet to us at [@okcjs](https://twitter.com/okcjs), post a comment/question or create a new thread in our [github repo](http://github.com/techlahoma/okcjs-website), post a question on [meetup](https://meetup.com/OKC-js) in an event or discussion thread, send us an [email](mailto:oklahomacityjavascript@gmail.com), or post a question in the techlahoma [slack channel](http://techlahoma.slack.com). (Join the techlahoma slack channel [here](http://slack.techlahoma.org).) We'll try to respond as soon as possible.

💵 Is OKCJS free?  
Yes! OKCJS has been, and always will be, a free monthly training event. We organize and speak at okcjs for the betterment of Oklahoma's tech community. '*Advancing Oklahoma's grassroots technology community*' is the Techlahoma Foundation's mission.
If you or your company would like to sponsor pizza and soda for okcjs we do accept [donations](https://donate.techlahoma.org) via the [Techlahoma Foundation](http://techlahoma.org).

🔊 I like what you're doing! How can I help?  
Awesome!! We are so happy you like what we're doing and want to contribute! This readme includes instructions on how to contribute to the okcjs website github repository by adding and updating events or fixing spelling errors and broken links.

Listed below are some volunteer activities we do every month. If there's something that interests you, fits your skill set or one you'd like to expand upon, please let us know. If you have an idea for better ways to organize the group and duties, ways to get the word out, or create a better experience for the community, please share it with us!  

If you'd like to help but are unable to contribute time, we also accept  [donations](https://donate.techlahoma.org) (via the [Techlahoma Foundation](http://techlahoma.org)) to cover the cost of pizza and soda, which are provided at every meeting for no cost to attendees.

Our current volunteers include: Jesse Harlin, Jessica Campbell, Devin Clark, Vance Lucas, Amanda Harlin. Thanks for all you do!

---

## organizer and volunteer responsibilities
help is always welcome for these volunteer roles
  - find speakers for upcoming months
  - update the website via pull requests on github *
  - merge the pull request and deploy the website  *
  - keep the website's framework and plugins updated *
  - add in issues for the usergroup, make pull requests, and merge duty *
  - update the meetup website **
  - moderate meetup website and lightning talk signup discussions **
  - tweet reminders about the event **
  - tweet regularly and answer questions about the group **
  - arrive early to the meeting space, open/unlock doors, take out full trash and refill trashcans with new trashbags, arrange chairs and projector
  - stay late after meeting, throw away trash, restock trashcans with new trashbags, store away chairs, projector, and lock up space
  - order pizza and sodas for usergroup

  *how-to outlined below  
  **managed with password manager

### User Group Todos

 - Make a screencast explaining how to update the website
 - Find speakers for Sep, Oct, Dec of 2015
 - Find volunteers, future dates for js/technlahoma workshops
 - Think of something else? Add it to our readme.md with a pull request!


---

## Website Contributions

Want to contribute to the site? Great! Helping with the website via markdown, github, and pull requests is a great way to be involved. You'll be learning/using relevant skills for Oklahoma's developer job market while contributing to our tech community. Pretty cool, right? 😎  

This repo holds the basis for the Oklahoma City Javascript user group's website. This is asimply blog-type site powered by hexo, using the okcjs-hexo-theme. This currently supports multiple languages, and also has the ability to add plugins, as necessary.

### Getting Started

#### Short Version

```sh
 git clone git@github.com:techlahoma/okcjs-website.git
 cd okcjs-website
 git clone https://github.com/techlahoma/hexo-theme-okcjs.git themes/okcjs
 npm install
 hexo server
```

#### Longer Version:
1. Make sure you have [node](http://nodejs.org/download/) installed.
2. Install hexo if you haven't already. ```npm install hexo -g```
3. Clone the repository.
  * If you already have cloned the repo, please check that your clone is up to date.
4. Clone the okcjs theme into ```themes/okcjs/```
  * hexo-theme-okcjs repo: [https://github.com/techlahoma/hexo-theme-okcjs](https://github.com/techlahoma/hexo-theme-okcjs)
5. Run ```npm install``` from the root folder of your cloned repo.
  * Even though you've installed hexo, you must do this after the initial cloning.
6. You can start the server with ```hexo server``` on the command line.
7. Always submit news posts as a pull request. **Do not push directly to master.**
8. Full hexo documentation located at [http://hexo.io/docs/](http://hexo.io/docs/).

### Posting Events

Posts are located in _posts. The easiest way to write a new one is simply to type ```hexo new "Your Post Name"``` It will scaffold one for you. Nice.

Go ahead and Make the post you want to make. If you dont like it we can delete it later, no big deal. Now, type ```hexo server```. Hexo starts on port (in this case 4000);

When you have it like you like, do ```hexo generate``` this spits out all the static content.

### Menu
You can add a page with ```hexo new page "pagename"``` . You can add it to the menu by editing the _config.yml located in the metro-light folder

### Deploy

Easy mode. When on the master branch, after you have merged a pull request to Techlahoma's repo: ```hexo deploy --generate```

Boom. Its on gh pages here [http://techlahoma.github.io/okcjs-website/](http://techlahoma.github.io/okcjs-website/)

### If something goes wrong.

The magic words: ```hexo clean``` then ```hexo generate``` This will recreate everything.

*Did you forget to run* ```npm install```*?*

----


**Oklahoma's Tech Community**

- [Techlahoma Foundation](http://techlahoma.org)
- [Techlahoma Community](http://us.techlahoma.org)
- [OKCJS](http://okcjs.com)
- [OKCRB](http://okcruby.org)
- [OKCJUG](http://okcjug.org)
- [OKC#](http://okcsharp.org)
- [Code for OKC](http://codeforokc.org)
- [Tulsa Web Devs](http://tulsawebdevs.org)
- [Thunder Plains](http://thunderplainsconf.com)
