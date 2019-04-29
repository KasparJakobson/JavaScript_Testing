describe('Address book', function () {

    // Muutujad loodud siin, et nad oleks testidele kätte saadavad
    var addressBook, thisContact;

    // Enne igat testi läheb käima beforeEach ja annab muutujatele uued väärtused
    beforeEach(function () {

        // Aadressiraamat, mille funktsioone hakkame testima
        addressBook = new AddressBook(),

            // Testkontakt mida proovime lisada aadressiraamatusse
            thisContact = new Contact();
    });

    // Kontakti lisamise test
    it('should be able to add a contact', function () {

        // Ürita kontakt lisada
        addressBook.addContact(thisContact);

        // Ürita kontakti leida ja tee kindlaks kas see on võrdne just lisatud kontaktiga
        expect(addressBook.getContact(0)).toBe(thisContact)
    });

    // Kontakti kustutamise test
    it('should be able to delete a contact', function () {

        // Ürita kontakt lisada
        addressBook.addContact(thisContact);

        // Ürita kontakt kustutada
        addressBook.deleteContact(thisContact);

        // Ürita kontakti leida ja tee kindlaks kas see ei eksisteeri, ehk kustutamine õnnestus
        expect(addressBook.getContact(0)).not.toBeDefined()
    })
});

describe('Async address book', function () {

    // Loo aadressiraamatu muutuja ja antud väärtuseks uus aadressiraamat
    var addressBook = new AddressBook();

    // Antud beforeEach'ile sisse done
    beforeEach(function (done) {

        // Käivita asünkroonne getInitialContacts funktsioon ja anna selle callback'i done() funktsioon
        addressBook.getInitialContacts(function () {
            done()
        });
    });

    // Antud testile sisse done, et see saaks aru, et on asünkroonne test
    it('should grab initial contacts', function (done) {

        // Testi kas beforeEach funktsioonis sai initialComplete muutuja väärtuseks true
        expect(addressBook.initialComplete).toBe(true);
        done()
    });
});