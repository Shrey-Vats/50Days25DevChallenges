import { faker } from '@faker-js/faker';
import fs from 'fs';

console.log("🚀 Generating random data...");

function generateAdvancedPersonData(numObjects) {
  const data = [];

  const eyeColors = ["Blue", "Brown", "Green", "Hazel", "Gray"];
  const fruits = ["Apple", "Banana", "Orange", "Strawberry", "Mango", "Grape", "Pineapple"];

  const tagCategories = {
    Technology: ["software engineering", "data science", "AI/ML", "cyber security", "web development", "cloud computing"],
    Business: ["finance", "marketing", "project management", "consulting", "HR", "sales"],
    Creative: ["graphic design", "UI/UX", "content creation", "photography", "writing", "videography"],
    Healthcare: ["biotechnology", "medical research", "pharmacology", "public health"],
    Environmental: ["sustainability", "environmental policy", "conservation", "renewable energy"]
  };

  const hobbies = ["reading", "hiking", "cooking", "gaming", "travel", "sports", "music", "art"];

  for (let i = 0; i < numObjects; i++) {
    const gender = faker.person.gender();
    const firstName = gender === 'male' ? faker.person.firstName('male') : faker.person.firstName('female');
    const lastName = faker.person.lastName();
    const fullName = `${firstName} ${lastName}`;

    const registerDate = faker.date.past({ years: 5, refDate: new Date() });
    const companyTitle = faker.company.name();

    const emailDomain = companyTitle.toLowerCase()
      .replace(/[^a-z0-9]/g, '')
      .replace(/\b(inc|ltd|corp|group)\b/g, '')
      .slice(0, 15) + faker.internet.domainSuffix();

    const primaryTags = faker.helpers.arrayElement(Object.values(tagCategories));
    const secondaryTags = faker.helpers.arrayElements(hobbies, faker.number.int({ min: 1, max: 3 }));
    const finalTags = [...new Set([...primaryTags, ...secondaryTags])];

    // Generate a short bio and social handles
    const bio = faker.person.bio();
    const twitter = `https://twitter.com/${faker.internet.userName({ firstName, lastName })}`;
    const linkedin = `https://linkedin.com/in/${faker.internet.userName({ firstName, lastName })}`;

    data.push({
      index: 949 + i ,
      name: fullName,
      isactive: faker.datatype.boolean(0.65),
      registerdate: registerDate.toISOString(),
      age: faker.number.int({ min: 22, max: 60 }),
      gender: gender.charAt(0).toUpperCase() + gender.slice(1),
      eyecolor: faker.helpers.arrayElement(eyeColors),
      favfruit: faker.helpers.arrayElements(fruits, 3), // exactly 3 fruits
      isVerified: faker.datatype.boolean(0.60),
      bio,
      company: {
        title: companyTitle,
        email: faker.internet.email({
          firstName: firstName,
          lastName: lastName,
          provider: emailDomain
        }),
        phone: faker.phone.number(),
        location: faker.location.city(),
        country: faker.location.country(),
        address: faker.location.streetAddress()
      },
      tags: finalTags,
      social: {
        twitter,
        linkedin
      }
    });
  }

  return data;
}

// --- Generate & Save Data ---
const numberOfRecords = 1000;
const generatedData = generateAdvancedPersonData(numberOfRecords);

// Output to console (optional – may be long!)
console.log(`✅ ${numberOfRecords} records generated. Example:`);
console.log(JSON.stringify(generatedData.slice(0, 3), null, 2)); // Show first 3 records

// Save to JSON file
const fileName = "advanced_demo_data.json";
try {
  fs.writeFileSync(fileName, JSON.stringify(generatedData, null, 2), 'utf-8');
  console.log(`📁 Saved all ${numberOfRecords} records to '${fileName}'`);
} catch (error) {
  console.error(`❌ Error writing file ${fileName}:`, error);
}
