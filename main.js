// Module Name
angular.module('GreenSheets', [])
  .controller('MainController', MainController)

//Controller as
function MainController($stateParams, $location) {
  var mainCtrl = this


//==============================================\\
//==================VARIABLES===================\\
//==============================================\\

//==Clients==\\
mainCtrl.Smith        = new Client('Sarah',  'Smith',    '555-555-5555', 'ssmith@gmail.com',    '123 ABC Rd.', 'Denver', 'CO', '80218')
mainCtrl.Jones        = new Client('John',  'Jones' ,    '444-444-4444',  'jjones@gmail.com',    '456 DEF Rd.', 'Denver', 'CO', '80218')
mainCtrl.Anderson     = new Client('Alan',  'Anderson' , '333-333-3333', 'aanderson@gmail.com', '789 GHI Rd.', 'Denver', 'CO', '80218')
mainCtrl.clientsArray = [mainCtrl.Smith, mainCtrl.Jones, mainCtrl.Anderson]
mainCtrl.newClient    = {}

//==To-Dos==\\
mainCtrl.toDoItem1   = new toDoItem('Sarah',  'Smith',   'Spring clean-up and annuals')
mainCtrl.toDoItem2   = new toDoItem('John',  'Jones',    'Watering only')
mainCtrl.toDoItem3   = new toDoItem('Alan',  'Anderson', 'Irrigation and watering')
mainCtrl.toDosArray  = [mainCtrl.toDoItem1, mainCtrl.toDoItem2, mainCtrl.toDoItem3]
mainCtrl.newToDoItem = ''


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

mainCtrl.newToDo = function(){
  var myToDoItem = new toDoItem(mainCtrl.client.firstName, mainCtrl.client.lastName, mainCtrl.newToDoItem)
  mainCtrl.toDosArray.push(myToDoItem)
  mainCtrl.newToDoItem = ''
}

//=================================================\\
//============Client Constructor Function==========\\
//=================================================\\
function Client(firstName, lastName, phoneNumber, email, address, city, state, zipCode) {
this.firstName = firstName
this.lastName = lastName
this.phoneNumber = phoneNumber
this.email = email
this.address = address
this.city = city
this.state = state
this.zipCode = zipCode
}

//=================================================\\
//============To-Do Constructor Function==========\\
//=================================================\\
function toDoItem(firstName, lastName, description){
this.firstName = firstName
this.lastName = lastName
this.description = description
}

} //End of controller
