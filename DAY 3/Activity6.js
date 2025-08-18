var record = [
  {
    "Name": "Gibo",
    "Age": 16,
    "SkillSet": [
      { "Skill": "SAP UI5" },
      { "Skill": "SAP HANA" }
    ]
  },
  {
    "Name": "Patrick",
    "Age": 22,
    "SkillSet": [
      { "Skill": "SAP UI5" },
      { "Skill": "SAP HANA" },
      { "Skill": "SAP ABAP" }
    ]
  },
  {
    "Name": "MJ",
    "Age": 24,
    "SkillSet": [
      { "Skill": "SAP HANA" }
    ]
  }
];
 
// Initialize variables to track the person with the most skills
let maxSkills = 0;
let topPerson = null;
 
// Loop through each record
for (let person of record) {
  let skillCount = person.SkillSet.length;
  if (skillCount > maxSkills) {
    maxSkills = skillCount;
    topPerson = person;
  }
}
 
// Output the result
if (topPerson) {
  console.log(`Name: ${topPerson.Name}`);
  console.log(`Age: ${topPerson.Age}`);
}