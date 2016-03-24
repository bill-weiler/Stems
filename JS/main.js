//==Module Name==\\
angular.module('GreenSheets', [])
  .controller('MainController', MainController)

//==Controller as==\\
function MainController($stateParams, $location) {
  var mainCtrl = this


//==============================================\\
//==================VARIABLES===================\\
//==============================================\\

//==Clients==\\
mainCtrl.Smith        = new Client('Sarah',  'Smith',     '555-555-5555',  'ssmith@gmail.com',    '123 ABC Rd.', 'Denver', 'CO', '80218', '98765')
mainCtrl.Jones        = new Client('John',   'Jones' ,    '444-444-4444',  'jjones@gmail.com',    '456 DEF Rd.', 'Denver', 'CO', '80218', '54321')
mainCtrl.Anderson     = new Client('Alan',   'Anderson' , '333-333-3333',  'aanderson@gmail.com', '789 GHI Rd.', 'Denver', 'CO', '80218', '45678')
mainCtrl.clientsArray = [mainCtrl.Smith, mainCtrl.Jones, mainCtrl.Anderson]
mainCtrl.newClient    = {}

//==To-Dos==\\
mainCtrl.toDoItem1   = new ToDoItem('Sarah',  'Smith',   'Spring clean-up and annuals')
mainCtrl.toDoItem2   = new ToDoItem('John',  'Jones',    'Install new design')
mainCtrl.toDoItem3   = new ToDoItem('Alan',  'Anderson', 'Irrigation and watering')
mainCtrl.toDosArray  = [mainCtrl.toDoItem1, mainCtrl.toDoItem2, mainCtrl.toDoItem3]
mainCtrl.newToDoItem = ''

//==Property Notes==\\
// mainCtrl.propertyNote1   = new PropertyNote('Does not like rose bushes')
mainCtrl.newPropertyNote   = ''
mainCtrl.propertyNoteArray = []

//=================================================\\
//==============Controller Functions===============\\
//=================================================\\

mainCtrl.getClient = function(){
  var search = $stateParams.lname
  var pos = mainCtrl.clientsArray.map(function(e) {return e.lastName }).indexOf(search)
  mainCtrl.client = mainCtrl.clientsArray[pos]
}

mainCtrl.signIn = function(){
  $location.path('/clients')
}

mainCtrl.createNewClient = function(){
  mainCtrl.clientsArray.push(mainCtrl.newClient)
  mainCtrl.newClient = {}
}

mainCtrl.editClient = function(){
  mainCtrl.client.push()
}

mainCtrl.newToDo = function(){
  var myToDoItem = new ToDoItem(mainCtrl.client.firstName, mainCtrl.client.lastName, mainCtrl.newToDoItem)
  mainCtrl.toDosArray.push(myToDoItem)
  mainCtrl.newToDoItem = ''
}

mainCtrl.removeToDo = function(toDoItem) {
  var x = confirm("Delete this item permanently?");
  if (x == true) {
    mainCtrl.toDosArray.splice(mainCtrl.toDosArray.indexOf(toDoItem), 1)
  }
}

mainCtrl.removeClient = function() {
  var x = confirm("Delete this client permanently?");
  if (x == true) {
    console.log(mainCtrl.clientsArray.indexOf(mainCtrl.client))
    mainCtrl.clientsArray.splice(mainCtrl.clientsArray.indexOf(mainCtrl.client), 1)
  }
}

mainCtrl.addNote = function(){
  mainCtrl.client.notes.push(mainCtrl.newPropertyNote)
  mainCtrl.newPropertyNote = ''
}

//=================================================\\
//============Client Constructor Function==========\\
//=================================================\\
function Client(firstName, lastName, phoneNumber, email, address, city, state, zipCode, doorCode) {
this.firstName   = firstName
this.lastName    = lastName
this.phoneNumber = phoneNumber
this.email       = email
this.address     = address
this.city        = city
this.state       = state
this.zipCode     = zipCode
this.doorCode    = doorCode
this.notes       = []
}

//=================================================\\
//============To-Do Constructor Function==========\\
//=================================================\\
function ToDoItem(firstName, lastName, description){
this.firstName   = firstName
this.lastName    = lastName
this.description = description
}

} //End of controller
