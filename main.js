angular.module('GreenSheets', [])
  .controller('MainController', MainController)

//Controller As
function MainController($stateParams) {
  var mainCtrl = this

//==============================================\\
//==================VARIABLES===================\\
//==============================================\\

//==Clients==\\
mainCtrl.Smith = new Client('Sarah Smith', '555-555-5555', 'ssmith@gmail.com', '123 ABC Rd.', 'Denver', 'CO', '80218')
mainCtrl.Jones = new Client('John Jones' , '555-555-5555', 'jjones@gmail.com', '456 DEF Rd.', 'Denver', 'CO', '80218')
mainCtrl.Anderson = new Client('Alan Anderson' , '555-555-5555', 'aanderson@gmail.com', '789 GHI Rd.', 'Denver', 'CO', '80218')

//==To-Dos==\\
mainCtrl.toDoItem1 = new toDoItem('Sarah Smith', 'Spring clean-up and annuals')
mainCtrl.toDoItem2 = new toDoItem('John Jones', 'Watering only')
mainCtrl.toDoItem3 = new toDoItem('Alan Anderson', 'Irrigation and watering')

//==Clients Array==\\
mainCtrl.clientsArray = [mainCtrl.Smith, mainCtrl.Jones, mainCtrl.Anderson]

//==To-Dos Array==\\
mainCtrl.toDosArray = [mainCtrl.toDoItem1, mainCtrl.toDoItem2, mainCtrl.toDoItem3]

//=================================================\\
//==============Controller Functions===============\\
//=================================================\\
mainCtrl.getClient = function(){
  mainCtrl.client = mainCtrl.clientsArray[$stateParams.index]
  //indexOf , splice, filter "look up array methods"
  console.log(mainCtrl.client)
}


//=================================================\\
//============Client Constructor Function==========\\
//=================================================\\
function Client(name, phoneNumber, email, address, city, state, zipCode) {
this.name = name
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
function toDoItem(name, description){
this.name = name
this.description = description
}

} //End of controller
