Black Widow

Social hub and event finder for music lovers


React Components and state information for each page.

Home Page
Overall App - (Holds state for pop feed and new feed)
 - Popular Events Feed
 - New Events Feed
 - Side Bar (Side bar is a component that will be consistent in each page of the app.  The state 				may come from an alternate source compared to the other components)

Event Page
Overall page - (Holds state for all other components)
 - Event Description
 - Band Info
 - Location Info
 - Attendee list 
 - Google map view of the location

User Profile
Overall Page
 - Photo component
 - (I think everything else will just be part of the overall page component)



TWILIO
To use Twilio's API, you need the free account, an SMS capable phone number, and the Twilio Node helper library.

Example code using the Twilio helper library
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+15017122661',
     to: '+15558675310'
   })
  .then(message => console.log(message.sid))
  .done();










