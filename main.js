angular.module('GreenSheets', [])
  .controller('MainController', MainController)

//Controller As
function MainController() {
  var mainCtrl = this


//==================VARIABLES===================\\

//==Clients==\\
mainCtrl.Smith = new Client('Sarah Smith', '555-555-5555', 'ssmith@gmail.com', '123 ABC Rd.', 'Denver', 'CO', '80218')
mainCtrl.Jones = new Client('John Jones' , '555-555-5555', 'jjones@gmail.com', '456 DEF Rd.', 'Denver', 'CO', '80218')
mainCtrl.Anderson = new Client('Alan Anderson' , '555-555-5555', 'aanderson@gmail.com', '789 GHI Rd.', 'Denver', 'CO', '80218')

//==Client Array==\\
var clientArray = [this.Smith, this.Jones, this.Anderson]

//==========Client Constructor Function==========\\
function Client(name, phoneNumber, email, address, city, state, zipCode) {
this.name = name
this.phoneNumber = phoneNumber
this.email = email
this.address = address
this.city = city
this.state = state
this.zipCode = zipCode
}

} //End of controller
