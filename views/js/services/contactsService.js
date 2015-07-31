var app = angular.module('apndr');

app.service('contactsService', function($http, $q){
  // var userContactList = [];
	this.getContacts = function(){
		var dfd = $q.defer();
		console.log('getting contacts')
		$http({
			method: 'GET',
			url: 'http://localhost:9999/api/contacts'
		})
    .then(function(data){
			console.log(data)
			var contacts = makeContactList(data);
			dfd.resolve(contacts);
    })
    // userContactList = dfd.promise;
	  return dfd.promise;
	};

  this.postContacts = function(data){
    return $http({
      method: 'POST',
      url: 'http://localhost:9999/api/postcontacts',
      data: data
    })
  }

	this.requestAddress = function(x){
		// console.log(x);
    return $http({
    	method: 'POST',
    	url: 'http://localhost:9999/api/addressreq',
    	data: x
    });
	};

  this.updateContact = function(x){
     return $http({
      method: 'POST',
      url: 'http://localhost:9999/api/updatecontact',
      data: {entry: x}
    });
  };

  this.getRequests = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:9999/api/getrequests'
    });
  };
  
  this.getRequestInfo = function(id){
    console.log('this is something.... 000eee', id)
    return $http({
      method: 'POST',
      url: 'http://localhost:9999/api/getrequestinfo',
      data: id
    })
  };
  // this.gapiUpdateContact = function(data){
  //   return gapi.client.request({
  //     method: 'PUT',
  //     path: 'http://www.google.com/m8/feeds/contacts/andykj%40gmail.com/base/1',
  //     headers: {
  //       'If-Match': '"R3g4fzVSLit7I2A9XRVWF0UKTwM."',
  //       'version': '1.0'
  //     },
  //     body: data
  //   })
  // }

  // this.removeContact = function(x){
  //   return $http({
  //     method: 'DELETE',
  //     url: 'http://localhost:9999/api/deletecontact',
  //     data: x
  //   })
  // }

  this.updateaddress = function(address, contactid, requestid){
    return $http({
      method: 'PUT',
      url: 'http://localhost:9999/api/updateaddress',
      data: {contactid, requestid, address: address}
    })
  }

  this.contactsToMongoose = function(data){
    var contactsList = data.data.data.entry;
    var contactsCompiledForMongoose = [];
    if(contactList && contactList.length > 0){
      for(var i = 0; i < contactList.length; i++){
        if(contactList.gd$name && contactList.gd$email){
          contactsCompiledForMongoose.push(gd$name, gd$email, gd$phoneNumber, gd$structuredPostalAddress, id)
        }
      }
      return contactsCompiledForMongoose;
    }
  }

  this.getMongooseContacts = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:9999/api/mongoosecontacts/',
    })
  }

	var makeContactList = function(data){
		var plist = [];
        var contactsList = data.data.feed.entry;
        console.log(contactsList.length)  
        if (contactsList && contactsList.length > 0) {
            for (var i = 0; i < contactsList.length; i++) {
              if(contactsList[i].gd$email && contactsList[i].gd$name){
                    var contact = contactsList[i];
                    var email = contact.gd$email;
                    var phone = contact.gd$phoneNumber;
                    var address = null;
                    var phoneNumber = null;
                    var mailingAddress = contact.gd$structuredPostalAddress;
                    var street = "";
                    var city = "";
                    var state = "";
                    var zip = "";
                    var emailArr = [];
                    var phoneArr = [];
                    if (email && email.length > 0) {
                        var el = email[0];
                        if (el) {
                            address = el.address;
                        }
                        if (email.length > 1) {
                            for (var k = 1; k < email.length; k++) {
                                var e = email[k];
                                if (e != null) {
                                    emailArr[k - 1] = e.address;
                                }
                            }
                        }
                    }
                    if (phone && phone.length > 0) {
                        phoneNumber = phone[0].$t;
                        if (phone.length > 1) {
                            for (var j = 1; j < phone.length; j++) {
                                var additionalPhoneNumber = phone[j];
                                if (additionalPhoneNumber) {
                                    phoneArr[j - 1] = additionalPhoneNumber.$t;
                                }
                            }
                        }
                    }
                    if(mailingAddress){ 
                    	  if(mailingAddress[0].gd$street){
                          street = mailingAddress[0].gd$street.$t;
                        }
                        if(mailingAddress[0].gd$city){
                          city = mailingAddress[0].gd$city.$t; 
                        }
                        if(mailingAddress[0].gd$region){
                          state = mailingAddress[0].gd$region.$t;
                        }
                        if(mailingAddress[0].gd$postcode){
                          zip = mailingAddress[0].gd$postcode.$t;
                        }
                    } else {
                      street = null;
                      city = null;
                      state = null;
                      zip = null;  
                    };
                    if(contact.gd$name) {
                    if(contact.gd$name.gd$familyName) {
                        var lastName = contact.gd$name.gd$familyName.$t;
                      } else {
                        var lastName = null;
                      }
                    if(contact.gd$name.gd$givenName) {
                        var firstName = contact.gd$name.gd$givenName.$t;
                      } else {
                        var firstName = null;
                      }
                    if(contact.gd$name.gd$fullName) {
                        var dispName = contact.gd$name.gd$fullName.$t;
                      } else {
                        var dispName = null;
                      }
                    }
                    var eid = contact.gd$etag.replace(/[\.\"]/g, '');
                    var id = contact.id.$t;
                    var updateUrl = id.replace(/\/base/g, '\/full');
                    // var bid = aid.replace(/"/g, "");
                    // var id = bid.replace(/"/g, "");

                    if (address != null && address.length > 0) {
                        var a = {
                            street: "",
                            city: "",
                            state: "",
                            zip: "",
                        }
                        a.street = street;
                        a.city = city;
                        a.state = state;
                        a.zip = zip;
                        var p = {
                                firstName : "",
                                lastName : "",
                                address: {},
                                email : "",
                                displayName : "",
                                otherEmails : [],
                                eid : "",
                                id: "",
                                updateUrl: ""
                        }
                        p.firstName = firstName;
                        p.lastName = lastName;
                        p.address = a;
                        p.email = address;
                        p.displayName = dispName;
                        p.otherEmails = emailArr;
                        p.phoneNumber = phoneNumber;
                        p.otherPhoneNumbers = phoneArr;
                        p.id = id;
                        p.eid = eid;
                        p.updateUrl = updateUrl;
                        if(p.email && p.firstName || p.lastName) {
                          plist.push(p);
                        }
                    }
                }
              }
        } else {
            console.log("No contacts");
        }
        console.log(plist);
        return plist;
    	};
})