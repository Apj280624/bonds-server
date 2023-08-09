const fs = require('fs');

const securityOptions = {
    govtBonds: ["US Govt", "UK Govt", "Indian Govt", "German Govt"],
    corporateBonds: ["XYZ Holdings", "ABC Investments", "LMN Group", "PQR LLP"],
    foreignBonds: ["Yankee Bond", "Bulldog Bonds", "Samurai Bonds", "Matador Bonds"],
    treasuryBonds: ["UK", "US", "Indian", "Japanese"]
};

const fullNames = ["John Doe", "Jane Smith", "Michael Johnson", "Emily Brown", "Robert Davis", "Linda Wilson"];

const tradeData = [];

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

for (let i = 0; i < 1000; i++) {
    const buyer = getRandomElement(fullNames);
    const seller = getRandomElement(fullNames.filter(name => name !== buyer));
    const securityName = getRandomElement(Object.values(securityOptions).flat());
    const quantity = getRandomNumber(100, 1000);
    const price = getRandomNumber(10000, 10000000);
    const tradeDate = getRandomDate(new Date("2020-01-01"), new Date("2035-12-31"));
    const settlementDate = new Date(tradeDate);
    settlementDate.setDate(settlementDate.getDate() + 2);

    let status = "Pending";
    if (Math.random() < 0.3) { // 30% chance of being settled
        status = "Settled";
    }

    tradeData.push({
        buyer,
        seller,
        securityName,
        quantity,
        status,
        price,
        tradeDate,
        settlementDate,
    });
}

const jsonData = JSON.stringify(tradeData, null, 2);

fs.writeFile('tradeDummyData.json', jsonData, 'utf8', (err) => {
    if (err) {
        console.error('Error writing JSON file:', err);
    } else {
        console.log('Trade data has been written to tradeDummyData.json');
    }
});
