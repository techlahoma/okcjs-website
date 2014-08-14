#OKC.js
---

This is the basis for the Oklahoma City Javascript user group's website. This is asimply blog- type site powered by hexo, with a modified metro-lite theme. This currently supports multiple languages, and also has the ability to add plugins, as necessary.



##Updating The Site

### Getting Started

1. Make sure you clone the repository
2. Make sure you have [node](http://nodejs.org/download/) installed.
2. You will need to run NPM Install.
3. You san start the server with "hexo server" on the command line.
4. Always submit news posts as a pull request - Do not push directly to master.
5. Full hexo documentation located at [http://hexo.io/docs/](http://hexo.io/docs/)

### Posting Events

Posts are located in _posts. The easiest way to write a new one is simply to type ```hexo new "Your Post Name"``` It will scaffold one for you. Nice.

Go ahead and Make the post you want to make. If you dont like it we can delete it later, no big deal. Now, type ```hexo server```. Hexo starts on port (in this case 4000);

When you have it like you like, do ```hexo generate``` this spits out all the static content.

### Menu
You can add a page with ```hexo new page "pagename"``` . You can add it to the menu by editing the _config.yml located in the metro-light folder

### Deploy

Easy mode. When on the master branch, after you've merged in your changes: ```hexo deploy --generate``` 

Boom. Its on gh pages here [http://techlahoma.github.io/okcsharp-website/](http://techlahoma.github.io/okcsharp-website/)



### If something goes wrong.

The magic words: ```hexo clean``` then ```hexo generate``` This will recreate everything.

---
Readme By : Jesse Harlin [ harlinjesse@gmail.com ]