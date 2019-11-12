# Usage



1. Clone the repository.

2. Run `yarn install` to install packages.

3. Run `yarn start` to start the client in development mode

4. Run `yarn test` to run test cases


# Design

1. A folder structuring pattern which I have been using for quite sometime is followed here. More details regarding the same can be found  [here](https://github.com/jinxac/flutter-folder-structure)
2. The `screens` folder contains the list of all the screens in the application. In this case we only have a single screen, which I have named as `Home`.
3. The `components` folder contains the list of common components which will be used across the entire project(In our case, we have AddOrEditMarker component)
4. The `api` folder contains all the information related to API(Endpoints, custom configurations for api calls)
5. The `data` folders contains all the redux related information(actions, reducers etc.)
6. The `store` folder configures store based on environment
7. The `css` folder contains global styles
8. The `models` folder has custom model for marker. It translates the structure of data from the API's to a shape which can be used by the views. This keeps UI safe from the major changes which might take place in backend. While working on few of my projects, I observed that backend changes were directly breaking the UI. The reason for introducing models was to handle such scenarios and render empty UI in case the information format from apis change or UI is not able to parse data. Also, if any of changes occur in the APIS (field names, api structure), we only need our models and our views are safe from those changes.
9.  The `wutils` folder contains utility functions. In this case, we show custom toast message functions there.

# Things covered

1. The left panel of UI shows the map and right panel shows detail related to the markers with an option to add marker
2. `Add Marker` opens a modal with an empty form view to save the marker details. Initially, the add button is disabled. Once all the fields are filled the button gets enabled and on pressing add button the data is saved.
3. `Edit Marker` opens a modal with a filled form view to edit the marker details. On changing info and pressing on save button the api data is saved.
4. For both edit and add, on changing address location (entering more than 3 characters) the results are shown from google place API and user can select that. Once the location is selected, the disabled longitude and latitude are filled automatically.
5. `Delete Marker` opens a modal which asks for confirmation. YES deletes the marker from map as well as content, NO just toggles the modal.
6. If there is no internet connection , a no- internet message is shown, once the internet becomes available the page is shown again.

# Questions

1. ***How do you handle configuration values? What if those values change?***

	The environment configuration variables are store in file called `env.js`. If we need to make any changes we just need change this file.

2. ***What happens if we encounter an error with the third-party API integration?***

   In case there is any error with third-party API integration, I show appropriate messages as toast messages to help user understand what is going wrong. In this project, I faced following errors:-

	1.  The api key is invalid and returns an error.
	2.  The required query parameters were not sent in the get requests.

	Along with this, at my company we are working on financial services platform which connects to few third party government APIS to extract user information. Though I have never worked on it, my CTO was sharing his experience that sometimes he calls the same API twice or thrice as at the first time the response does not come. Also, he caches a lot of information as government APIS are paid.

3. ***Will it also break our application, or are they handled accordingly?***

	In our project, it is handled accordingly and will not break our application. In case the google api(autocomplete and search) returns some error or empty result, we show message to user to search again inside the input box itself. Also, we have a *Marker* model which takes care shaping the information. Empty UI is rendered in case the data is not parsed properly.

4. ***Now we will need to change the third-party geocoder API to another one. How can we change our current solution so that we can make this change as seamless as possible? Or how will we change (or refactor) our solution so that any future changes with the third-party integration is only done in isolation?***


	If we need to change the third party geocoder api to another one, we need to make following changes : -

	1.  `AddOrEditMarker.container.js`.
		1. `onLocationChange`  - This calls the autocomplete API. We can change the endpoint and pass the data object to `updateSearchResults`. Here we use `Marker` model  which restructures the information for the views. So, all necessary changes can be done inside `Marker` model.
		2. `onLocationSelected` - This calls the select location API. For this, I have created a function inside `Marker` model called as `initPlace` to make the data flat and really usable by the component.

	2. `.env.js`
		Change the API endPoints to new third party geocoder API



# Test Cases

I have tried to write all basic test cases for this project in an isolated way. The test cases have been divided into:-

1. redux-actions
2. redux-reducers
3. containers
4. components
5. CRUD operations
6. Input changes
7. Button Clicks


# Points to take care of

1. Google apis do not work with localhost. It gives CORB error. To get that working I used [this](https://alfilatov.com/posts/run-chrome-without-cors/)

