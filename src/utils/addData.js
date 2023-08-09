// const fs = require('fs');

// const securityOptions = {
//     govtBonds: ["US Govt", "UK Govt", "Indian Govt", "German Govt"],
//     corporateBonds: ["XYZ Holdings", "ABC Investments", "LMN Group", "PQR LLP"],
//     foreignBonds: ["Yankee Bond", "Bulldog Bonds", "Samurai Bonds", "Matador Bonds"],
//     treasuryBonds: ["UK", "US", "Indian", "Japanese"]
// };

// const fullNames = ["John Doe", "Jane Smith", "Michael Johnson", "Emily Brown", "Robert Davis", "Linda Wilson"];

// const tradeData = [];

// function getRandomElement(array) {
//     const randomIndex = Math.floor(Math.random() * array.length);
//     return array[randomIndex];
// }

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getRandomDate(start, end) {
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
//   }

// for (let i = 0; i < 1000; i++) {
//     const buyer = getRandomElement(fullNames);
//     const seller = getRandomElement(fullNames.filter(name => name !== buyer));
//     const securityName = getRandomElement(Object.values(securityOptions).flat());
//     const quantity = getRandomNumber(100, 1000);
//     const price = getRandomNumber(10000, 10000000);
//     const tradeDate = getRandomDate(new Date("2020-01-01"), new Date("2035-12-31"));
//     const settlementDate = new Date(tradeDate);
//     settlementDate.setDate(settlementDate.getDate() + 2);

//     let status = "Pending";
//     if (Math.random() < 0.3) { // 30% chance of being settled
//         status = "Settled";
//     }

//     tradeData.push({
//         buyer,
//         seller,
//         securityName,
//         quantity,
//         status,
//         price,
//         tradeDate,
//         settlementDate,
//     });
// }

// const jsonData = JSON.stringify(tradeData, null, 2);

// fs.writeFile('tradeDummyData.json', jsonData, 'utf8', (err) => {
//     if (err) {
//         console.error('Error writing JSON file:', err);
//     } else {
//         console.log('Trade data has been written to tradeDummyData.json');
//     }
// });

const fs = require("fs");

let rawdata = fs.readFileSync("securityDummyData.json");
let securities = JSON.parse(rawdata);

const issues = [
  "Company Financial Distress: The issuing company's financial instability or bankruptcy prevents it from fulfilling bond obligations.",
  "Lack of Funds: Insufficient funds or cash flow challenges prevent the issuer from making redemption payments.",
  "Legal Disputes: Legal conflicts or disputes can lead to delays or blockage in the redemption process.",
  "Market Volatility: Unpredictable market fluctuations may affect the issuer's ability to generate funds for redemptions.",
  "Economic Recession: Economic downturns can impact the issuer's financial health, leading to redemption difficulties.",
  "Incorrect Bondholder Information: Errors in bondholder records may hinder communication and redemption coordination.",
  "Failure to Communicate with Bondholders: Lack of communication with bondholders about redemption details can lead to confusion.",
  "Change in Regulations: Regulatory changes may impose new requirements that affect the issuer's redemption plans.",
  "Management Changes: Leadership transitions within the company could disrupt redemption plans and communication.",
  "Bankruptcy: The issuer's bankruptcy status could result in bondholders facing challenges in receiving redemption payments.",
  "Interest Rate Changes: Fluctuations in interest rates might affect the issuer's ability to meet redemption obligations.",
  "Currency Devaluation: Devaluation of the currency can impact the value of redemption payments for foreign bondholders.",
  "Default by Issuer: The issuer's failure to meet obligations due to financial distress or other reasons.",
  "Operational Disruptions: Operational issues or disruptions can prevent timely execution of redemption processes.",
  "Lack of Liquidity: Insufficient liquidity could hinder the issuer from fulfilling redemption obligations.",
  "Political Instability: Political unrest or instability in the issuer's country can impact its ability to make payments.",
  "Natural Disasters: Natural disasters can disrupt operations and impact the issuer's financial capacity.",
  "Force Majeure Events: Unforeseen events beyond the issuer's control may prevent them from making redemptions.",
  "Fraudulent Activities: Fraud or mismanagement within the issuer can lead to redemption challenges.",
  "Technical Glitches: Technical failures or glitches can disrupt the redemption process and communication.",
  "Bondholder Negligence: Bondholders not following proper procedures may lead to redemption delays.",
  "Lack of Investor Confidence: Low investor confidence can result in difficulty raising funds for redemptions.",
  "Taxation Issues: Tax-related complications can affect the issuer's ability to fulfill redemption payments.",
  "Accounting Errors: Errors in financial reporting may impact the issuer's ability to redeem bonds.",
  "Rating Downgrades: Downgrades in credit ratings can affect the issuer's credibility and ability to raise funds.",
  "Miscommunication: Poor communication between issuer and bondholders can lead to confusion about redemption details.",
  "Maturity Extension: The issuer might extend bond maturity dates, delaying redemption.",
  "Delay in Administrative Processes: Administrative delays can hinder the execution of redemption payments.",
  "Covenant Violations: Breach of bond covenants can result in restrictions on redemption activities.",
];

const newSecurities = securities.map((security) => {
  const newSecurity = { ...security };
  if (newSecurity.status === "Matured") {
    const randomIndex = Math.floor(Math.random() * issues.length);
    newSecurity.report = issues[randomIndex];
  }
  return newSecurity;
});

const jsonData = JSON.stringify(newSecurities, null, 2);

fs.writeFile("securityDummyData.json", jsonData, "utf8", (err) => {
  if (err) {
    console.error("Error writing JSON file:", err);
  } else {
    console.log("Security data has been written to securityDummyData.json");
  }
});
