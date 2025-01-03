// how to call Bernard
const phoneNumbers = [
    {
        country: "Belgium",
        number: "+32 496 95 10 30",
        whatsapp: true
    },
    {
        country: "France",
        number: "+33 668 75 10 30",
        whatsapp: false
    }
];

function telBernard() {
    for (let index = 0; index < phoneNumbers.length; index++) {
        const phoneNumber = phoneNumbers[index];
        console.info(
            "\nIn " +
            phoneNumber.country +
            ", pick up your phone and dial: " +
            phoneNumber.number
        );
        if (phoneNumber.whatsapp) console.info("...or leave a message via WhatsApp !");
    }
}

//#main
telBernard();