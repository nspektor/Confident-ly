# Confident.ly
#### __Made by -__ Nellie Spektor, Mark Abramov & Amir Lavi

## __Our Mission:__
Create a community to help people gain confidence in their own abilities and instill a sense of belonging.

## __Future Planning__ - what we hope to accomplish:

-    [ ] Raise awareness for imposter syndrome.
-    [ ] Get more people to use our website to create a community environment
-    [ ] More things?

## How To Run
1. clone the directory 
2. in terminal, navigate to the directory you cloned and run: npm install
3. install [mongodb](https://docs.mongodb.com/getting-started/shell/installation/)
4. in terminal, type: mongod
5. in a new terminal window at the same location, type: node app.js
6. open http://localhost:8080 in a web browser

## Project Structure

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **config**/passport.js             | Passport Local and OAuth strategies, plus login middleware.  |
| **controllers**/api.js             | Controller for /api route and all api examples.              |
| **controllers**/contact.js         | Controller for contact form.                                 |
| **controllers**/home.js            | Controller for home page (index).                            |
| **controllers**/user.js            | Controller for user account management.                      |
| **models**/User.js                 | Mongoose schema and model for User.                          |
| **public**/                        | Static assets (fonts, css, js, img).                         |
| **public**/**js**/application.js   | Specify client-side JavaScript dependencies.                 |
| **public**/**js**/main.js          | Place your client-side JavaScript here.                      |
| **public**/**css**/main.scss       | Main stylesheet for your app.                                |
| **public/css/themes**/default.scss | Some Bootstrap overrides to make it look prettier.           |
| **views/account**/                 | Templates for *login, password reset, signup, profile*.      |
| **views/api**/                     | Templates for API Examples.                                  |
| **views/partials**/flash.pug       | Error, info and success flash notifications.                 |
| **views/partials**/header.pug      | Navbar partial template.                                     |
| **views/partials**/footer.pug      | Footer partial template.                                     |
| **views**/layout.pug               | Base template.                                               |
| **views**/home.pug                 | Home page template.                                          |
| .env.example                       | Your API keys, tokens, passwords and database URI.           |
| app.js                             | The main application file.                                   |
| package.json                       | NPM dependencies.                                            |
| package-lock.lock                          | Contains exact versions of NPM dependencies in package.json. |

## Credits:
    # https://github.com/sahat/hackathon-starter
    #
