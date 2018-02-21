# Confident.ly
#### Made by the Confidence Alliance:  Nellie Spektor, Mark Abramov & Amir Lavi

![alt text](https://github.com/nspektor/Confident-ly/blob/master/confident.ly%20Screen%20Shot.png?raw=true)

## __Our Mission__
Create a community to help people gain confidence in their own abilities and instill a sense of belonging.

## __Future Planning__ - what we hope to accomplish:

-    [ ] Raise awareness for imposter syndrome.
-    [ ] Get more people to use our website to create a community environment
-    [ ] Create a better and more cohesive user experience

## How To Run
1. clone the directory 
2. in terminal, navigate to the directory you cloned and run: npm install
3. install [mongodb](https://docs.mongodb.com/getting-started/shell/installation/)
4. in terminal, type: mongod
5. in a new terminal window at the same location, type: node app.js
6. open http://localhost:8080 in a web browser

## Check Out Our Survey Results
We put out a [survey](https://goo.gl/forms/lSO2p4BAgmgwOzeI3) to find out how valuable our project would be to those who suffer from imposter syndrome, and to help us decide how to implement features to maximize impact. 
We got over 160 responses in just a day and a half, and you can find a summary of the first 187 responses [here](https://github.com/nspektor/Confident-ly/blob/master/imposterDataViz/Assessment.csv.zip)

![alt text](https://raw.githubusercontent.com/nspektor/Confident-ly/9fa728e79b1b8670ab58951814dc8d6ef4fa6829/imposterDataViz/Screen%20Shot%202018-02-18%20at%203.53.59%20PM.png)


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

## Credits
   https://github.com/sahat/hackathon-starter
