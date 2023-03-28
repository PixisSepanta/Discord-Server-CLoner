<h1 align="center">Discord Server Cloner</h1>
<p align="center">Clone any Discord server without Admin Privileges<p>

<p align="center">
<a href="https://github.com/simonfarah/Discord-Server-Cloner">
<img src="https://img.shields.io/badge/discord server cloner-7289DA?&style=for-the-badge&logo=discord&logoColor=white"></a>

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
</p>

<p align="center">
<a href="https://github.com/simonfarah"><img src="https://img.shields.io/badge/author-simon farah-red.svg?style=for-the-badge&logo=github"></a>
</p>


<p align="center">
<img src="https://img.shields.io/github/forks/simonfarah/Discord-Server-Cloner?color=7289DA&style=flat-square">
<img src="https://img.shields.io/github/stars/simonfarah/Discord-Server-Cloner?color=7289DA&style=flat-square">
<img title="Forks" src="https://img.shields.io/github/followers/simonfarah?color=7289DA&style=flat-square">
<img src="https://img.shields.io/badge/maintained-yes-7289DA?&style=flat-square">
</p>

**For educational purposes only. I am not responsible for any action or consequence for using this tool.**

## How To Use
Login to Discord in your browser, open `dev tools`, go the the `Network` tab, search for the `messages?limit=50` request and open it. In the `Request Headers` search for `authorization` and copy its value.

Create a `.env` file and put in it the following:

    TOKEN=THE_TOKEN_YOU_JUST_COPIED

Go to your Discord profile settings and search for `Advanced` tab in the `App Settings` category. Toggle on the `Developer Mode`.

Go back, right click on the Discord server you want to clone and click on `Copy ID`. Save the ID, we'll use it soon.

Install the dependencies by running `npm install` in the command line.

Now run the script by running the command `node app.js` or `npm start` in the command line. Insert the Server ID you just copied and let the script run. It'll copy the Server with all its channels, roles and images.

## Support My Work
<a href="https://www.buymeacoffee.com/simonfarah" target="blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

---
Original script by [ExordiumX](https://github.com/ExordiumX/ExoCord-Discord-Server-Cloner)

Changes made:
- Update the dependecies and scripts related to it
- Edits to use the Node.JS require (CommonJS) instead of the ES6 import/export
- Document all the steps needed to make it run
