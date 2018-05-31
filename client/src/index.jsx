/*
let userLogin = function (user, password, boolMusician) {
	axios.post('/users', {
		user: user,
		password: password,
		musician: boolMusician,
	})
	.then( (response) => {
		// The response should indicate this is a valid user/pw
		// The response should include a token/cookie/session
		// that validates the user for a period of time (1 day?)
	})
	.catch( (err) => {
		// If this is not a valid user, we should redirect them to
		// the sign up page.  We should maybe console log an error.
	})
}

let newUserSignUp = function (newUserDataObj) {
	// The user data object should include:
	// username, password, email, and a boolean to indicate if they're a musician.
	// Other info such as avatar will probably
	// be added by the user in their profile
	// afterward.

	axios.post('/register', newUserDataObj)
			.then( (response) => {
				// The user was added successfully.
				// The user should be automatically logged in
				// Invoke userLogin(user, password);
			})
			.catch( (err) => {
				// There may be a user with that name already in db, etc.
				// Give an error message explaining what needs to be fixed.
				// Reload the page and ask them to try registering again.
			})
}


*/






/*
Below is stuff i was working on b4 standup meeting.


+let getEvents = function () {
+       axios.get('/events')
+               .then( (response) => {
+                       // Invoke a function to fill the
+                       // events feed on the homepage, etc.
+                       // with response.data
+               })
+}
+
+let postEvent = function (event) {
+       // The event object should include:
+       // title, date, time, and locationId
+
+       
+
+       axios.post('/events', event)
+               .then( (response) => {
+
+               })

		// Side Note:
+       // Should the event schema/object
+       // include a createdBy field?
}

*/