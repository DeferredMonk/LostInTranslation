# Lost in translation

Lost in translation is project for sign language translation. In this project we used React.js.
The purpose of this project was to master our react knowledge. We made use of the following technologies:

- Redux
- React-router-dom
- React-hook-form

Our goal was

- master API-requests
- and make our userinterface look professional.

## Component tree

![alt text](/src/Assets/treeStructure.png)

## Folder structure

```
.
│   .gitignore
│   package-lock.json
│   package.json
│   README.md
│           
├───public                                                      #
│       index.html
│       manifest.json
│       robots.txt
│       
└───src
    │   App.js                                                  #Connects page files
    │   index.js                                                #Contains root elements
    │   
    ├───Assets                                                  #Contains projects assets
    │   │   FONTS_AND_COLOURS.txt
    │   │   Logo-Hello.png
    │   │   Logo.png
    │   │   sign-spritesheet-1200.png
    │   │   Splash.svg
    │   │   treeStructure.pdf
    │   │   treeStructure.png
    │   │   
    │   └───individial_signs                                    #Contains sign images
    │           
    ├───js
    │   ├───components
    │   │   │   frontPageHeader.js                              #Renders background images during sign in
    │   │   │   NavBar.js                                       #Renders navigation bar after sign in
    │   │   │   
    │   │   ├───profile
    │   │   │       avatarCard.js                               #Renders a card with profile information
    │   │   │       historyCards.js                             #Renders last ten translations of logged user
    │   │   │       profile.js                                  #Renders the combination of avatarCard & historyCards
    │   │   │       
    │   │   └───translations
    │   │           frontPage.js                                #Renders the combination of inputForm & translatedSign
    │   │           inputForm.js                                #Renders sign in input. If signed renders translation input
    │   │           translatedSign.js                           #Renders translation of user input.
    │   │           
    │   ├───reducers                                            #Contains reducers for project
    │   │       translationSlice.js
    │   │       userListSlice.js
    │   │       userSlice.js
    │   │       
    │   └───store
    │           store.js                                        #Storage for reducers
    │           
    └───sass                                                    #Contains style for components
            app.sass
            avatar.sass
            frontPageHeader.sass
            historyCards.sass
            inputForm.sass
            profile.sass
            translatedSign.sass
            utils.sass
            _NavBar.sass
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Link to deployed site
https://lost1ntr4nslation.netlify.app/
