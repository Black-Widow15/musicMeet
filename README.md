
--- REACT DOM ROUTER ---
React DOM Router is used by the app to switch between different routes for rendering different components to index.html   You can find the documentation here: https://reacttraining.com/react-router/web/guides/philosophy.

To utilize, you will need to 'npm install react-router-dom', then import from react-router-dom as you would with any other dependency.

At the time of this writing (June 10, 2018), React Router code is found in the following files:

index.jsx - Router (BrowserRouter), Switch and Route components
AttendeeList.jsx - Navlink component
EventsAttending.jsx - Navlink component
EventSumary.jsx - Navlink component
Navbar.jsx - Navlink component

BrowserRouter / Router - In our application, this is primarily a container in which the other Routes and Switch are situated.  

Switch - https://reacttraining.com/react-router/web/api/Switch
The switch component wraps around several Route components.  is used to render only one of its routes exclusively, based on the path.  


Route - https://reacttraining.com/react-router/web/api/Route
The individual routes, there's quite a bit going on here:
 a) Each route has an 'exact path' property, it will render when user is linked to this path.
 b) Some routes have a component property which simply calls the component to be rendered.
 c) Other routes have a render property.  This is used when we need to pass in props and state information to the component.  In both cases we are passing the information for the logged in user from the state, and passing in the parameter of the state as a prop.  (/:number will be recognized as this.props.match.params.number within the EventPage as one example).


Navlink - https://reacttraining.com/react-router/web/api/NavLink
It is not possible to link to the various paths within <Switch> with a normal link.  You will have to utilize a Navlink for the routes to render properly.  You will use the 'to' property  (to="pathString") to link to the path and render it to index.html



--- BULMA ---
This app uses the Bulma open source framework.
You can find documentation of all features utilized at: https://bulma.io/documentation/

To utilize Bulma, follow the 'Getting Started' instructions here: https://bulma.io/documentation/overview/start/
We utilized the 'bulma-start' npm package as well.  Importing of the Bulma components is actually not required.

At the time of this writing (June 10, 2018), Bulma components can be found in these files:

CreateEvent.jsx - Form elements like Field
EventPage.jsx - Bulma Hero Element, Bulma Columns
Events.jsx - Bulma Columns
EventsAttending.jsx - Bulma Columns
EventSummary.jsx - Bulma Card element, Media
Login.jsx - Bulma Modal, form elements
Messages.jsx - Bulma column, field, control
navbar.jsx - Bulma Navbar component, and modals
Signup.jsx - Bulma Modal
User.jsx - Bulma Hero component


Navbar - https://bulma.io/documentation/components/navbar/
A bar that sits at the top of our page and is rendered consistently for every path.  Contained within this element, you can see divs with classes navbar-start and navbar-end.  These represent the far left and far right sides of the bar, respectively.  Within the start div, we have a navlink to the home page, and a dropdown menu to select other sections.  Within the end div, we have links to the login and signup modals.  Once the user logs in, this will change to their username and a logout modal.


Columns - https://bulma.io/documentation/columns/basics/
	Fairly straightfoward.  There will be one 'columns' container element to contain all the 'column' elements.  Each column will have equal width within the columns container.


Modal - https://bulma.io/documentation/components/modal/
	All data contained in the modal element is invisible until the modal is triggered.  To present the modal, your javascript code must add the "is-active" modifier to the modal class. (Like this: class="modal is-active")	
	Within the modal element you will have a 'modal-background', 'modal-content' and a 'modal-close' button.  This is all documented in the link above.	
	However, Bulma's documentation does not indicate the appropriate Javascript needed to turn your modal on and off.  You can see most of our scripts for this in the Login.jsx file.  Here's one example: 
			launchLoginModal () {
		      let modal = document.getElementById('Login');
		      modal.classList.add('is-active');
		    }

Hero - https://bulma.io/documentation/layout/hero/
The hero component is used to create simple, elegant banners for the page.

Level - https://bulma.io/documentation/layout/level/
A horizontal level container which contains level-left, level-right and level-item components.  Within those inner components you can use just about anything.

Media - https://bulma.io/documentation/layout/media-object/
	This object is meant to mimic the format of popular social media websites.  There will be an overall 'media' container element, with 'media-left', 'media-content' and 'media-right' elements inside.

Card - https://bulma.io/documentation/components/card/
	A good easy-to-use component with a lot of options.  We used this to summarize the information of our events in a clean, presentable format.


Forms(field, control) - https://bulma.io/documentation/form/general/
    A field element is a simple container for text labels and 'control' elements.
Control elements should be used to contain most other elements of a form in the Bulma framework.
The other form elements we used are fairly similar to things you'd see in basic HTML.


