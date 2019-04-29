// Funktsioon, mis aadressiraamatu loob
function AddressBook() {

    // Kontaktide massiiv, mis on esialgu tühi
    this.contacts = [];

    // InitialComplete esialgse väärtusega false, mida testime getInitialContacts funkstioonis
    this.initialComplete = false;
}

// Funkstioon, mis lisab aadressiraamatu massiivi sisse ühe kontakti
AddressBook.prototype.addContact = function (contact) {
    this.contacts.push(contact)
};

// Funkstioon, mis kustutab aadressiraamatu massiivi seest ühe kontakti
AddressBook.prototype.deleteContact = function (id) {
    this.contacts.splice(id, 1)
};

// Funkstioon, mis tagastab aadressiraamatu massiivi seest ühe kontakti
AddressBook.prototype.getContact = function (id) {
    return this.contacts[id]
};


AddressBook.prototype.getInitialContacts = function (cb) {

    // Muutuja, et this väärtust saaks kasutada ka setTimeout funkstiooni sees
    var self = this;

    // SetTimeout funktsioon, mis ootab 3 millisekundit, et teeselda, et on asünkroonne
    setTimeout(function () {

        // Anna initialComplete muutujale väärtus true
        self.initialComplete = true;
        if (cb) {
            return cb();
        }
    }, 3)
};