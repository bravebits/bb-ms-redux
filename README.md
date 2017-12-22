# BB Media Selector
## Introduction
A React media selector (mainly) for Joomla, especially for Pagebuilder 3 and JSN Media Selector
## How to use
Please check file `index.html` in `public` folder
NOTE: Sometimes, the `Joomla token checking` does not work, please turn it off so that the MS can get the data
## Tests
Your code need pass all tests to merge to master branch<br/>
Run `yarn test` for running tests
## Contributor's guide
### Development
To run project in development mode
- Run `yarn dev`, wait for webpack to build codes then go to `http://localhost:3000/` to see the result
### Production
- Run `yarn build`, get the built file in `lib` folder, do not forget to take the `bootstrapt4.css` file with you in case your project do not have JSN Extension Framework
That's it, have fun :D
