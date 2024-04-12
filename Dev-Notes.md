# 2024-04-12

Currently, we have 31 hours of work to pay Philip remaining.

Prioritize: React-Native/Front End Development, setting up Screens & Survey Features

After that, can move on to Django Back End.

## Screens/Stages
- Home page
    - Login 
        - Account Button
        - Survey Button
- Account Page
    - Account Info
    - Survey History
    - Withdraw Button
- Survey Page (Should be toggleable in terms of their access - controlled externally, this doesn't matter to start with but its something to think about in the long term)
    - happy/neutral/sad buttons
    - happy/neutral/sad dot drag-and-drop
    - text box input (open-ended "how are you" question)
    - image input (upload a photo of your current location)
    - (under the hood) store geo-location data (<- participants will be aware of this)
- Withdraw Page
    - Withdraw Form (I'll have Jacquana write this up)
    - Withdraw Submission button that removes their data/account from the study

## Survey Features
- Happy Neutral Sad buttons (to store: choice)
    - *Think about this as a push-notification as well... faster/easier data collection for when folks are busy*
    - *Think about a 1-5 scale*
- Text input (to store: text)
- Image input (to store: image)
    - TODO: **figure out best way to store/send images**
- (unseen) Geo-location data (to store: location)
- Happy Neutral Sad dot drag-and-drop (to store: pixel locations) [*lowest priority; says Trent*]

## Outcome Goals:
- Intuitively navigable app with buttons that work as expected
- JSON (or some other data container) builds from Survey interaction
    - image can be encoded into base64 and stored as a string
- determine if we need a database for front end testing

## Questions:
- Figure out data engineering/hosting
    - figure out potential costs of things
    - figure out security concerns - both ethically & for IRB sub  
- Check in with Jacquana to make sure we have everything in the survey that is needed for her project.
    - TODO: **Set up a 3-way meeting**
___
