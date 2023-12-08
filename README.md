# Project 11 - Airbnb App
<span style="font-size: smaller;"><strong>Ashley Steitz and Jacob Fritz worked on this as partners</strong></span>

---
<span style="font-size: smaller;"><strong> Description </strong> </span>
In Project 11 we utilized React to create a cross-platform app that functions like  AirBnB and adopts similar functions. We utilized Expo to run our app and this will be demonstrated in the recording. 

We Addressed the following Functionality:
- The main layout of the app has five tabs
- The profile tab only has a Log in button.
- Clicking the Log in button opens an overlay page presenting several login/signup options.
- After entering the email and clicking continue, you will navigate to another overlay page where you can enter your password and either login or create an account.
- Use Firebase authentication for sign up, login, and logout functionalities.
- The profile page displays the customer’s name, email, profile picture, and registration date.
- The profile page also has a logout button
- Clicking a title navigates to a page displaying the details of the property with a button to reserve the property.
- Clicking the reserve button saves an entry in the Firebase store.
- The trip tab displays the list of reserved places.

<br>
<br>
When taken to the main page, we allow for our users to navigate between rental reservation types, check their reservations/trips, and view their profile.




## Functionality
'*' indicates tested in GIF  
The following **required** functionality is completed:
<br>
**Demonstrated**
<br>
**START**
* [SEARCH] [Titanic] -> [EVERYTHING WAS POPULATED] -> [Clicked Share and the options came up] -> [Link was followed to IMDB page] -> [SEND FEEBACK was pressed] -> [Opened GMAIL and sent off a message] -> [Great work! sent to jamfritz@iu.edu] -> [Brought back to movie screen] -> [back to main screen]
* [SEARCH] [Parent Trap] -> [No photo for this movie] -> [All stats came up] -> [back to main page]
* [SEARCH] [Pulp Fiction] -> [ALL ITEMS CAME UP]
<br>

**END**


---
## Video Walkthrough
Watch a demonstration of the different options when working with the notes app in the gif available on Github
Here's a walkthrough of a few translations:
<br>
![Recording in GIF of Walk Through](https://github.com/jfritz25/Project8ThisIsTheOne/blob/master/app/src/main/java/com/example/project8/convert.gif)

GIF created with [CloudConvert](https://cloudconvert.com/).

UI Challenges:
- Connecting the link as clickable passing the data in from the JSON file and handling it correctly
- UI was relatively simple so not many errors followed

Backend Challenges:
- Calling the API point
- Data Binding stopped working when we attempted the recycler view
- Working with the format through indexing was more of a learning curve but easy once we got it down

## License

    Copyright [2023] [Ashley Steitz, Jacob Fritz]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
