// Client ID and API key from the Developer Console
var API_KEY = 'AIzaSyAkUN2CKg03u9_0uHPE1EsVNy3a6MYXMVc';  // TODO: Update placeholder with desired API key.
    
var CLIENT_ID = '371620091946-ltc1vb3dp81hkk2pema5bmi6l1buahfa.apps.googleusercontent.com';  // TODO: Update placeholder with desired client ID.

// TODO: Authorize using one of the following scopes:
//   'https://www.googleapis.com/auth/drive'
//   'https://www.googleapis.com/auth/drive.file'
//   'https://www.googleapis.com/auth/drive.readonly'
//   'https://www.googleapis.com/auth/spreadsheets'
//   'https://www.googleapis.com/auth/spreadsheets.readonly'
var SCOPES = 'https://www.googleapis.com/auth/spreadsheets';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
  console.log('log fired')
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
    listMajors();
    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  }, function(error) {
    listMajors();
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (!isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    listMajors();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
function listMajors() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1QwXOfRzYK7XBfAZGsYHO2Nqk6_IfvEQQqULHt8dSeSM',
    range: 'Event!A1:G100',
  }).then(function(response) {
    getListEventsFromStatusEvent($('#exampleFormControlSelect1').val())
  }, function(response) {
    var range = response.result;
    appendPre('Error: ' + range.values.length);
  });
}

function renderListEvent(statusEvent) {
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '1QwXOfRzYK7XBfAZGsYHO2Nqk6_IfvEQQqULHt8dSeSM',
      range: statusEvent+'!A1:F100',
    }).then(function(response) {
        result = response.result.values;
        return result;
        getResult(response.result.values)
    }, function(response) {
        return result;
    });

  }

