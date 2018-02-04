let casual = require('casual');

casual.define('user', function() {
  return {
    name: casual.first_name + ' ' + casual.last_name,
    position: '',
    office: casual.state,
    age: casual.integer(29, 49),
    startDate: casual.date('YYYY/MM/DD'),
    salary: '$' + casual.integer(75, 1500),
  };
});

// Generate object with randomly generated fields
let users = [];
let paginations = {};
let jobs = [
  'Developer',
  'Support Lead',
  'Junior Java Script Developer',
  'Designer',
  'Senior Marketing Designer',
  'Software Engineer',
  'Personnel Lead',
  'Sales Assistant',
  'Marketing Designer',
];

function getList() {
  for (let i = 0; i < 10; i++) {
    users.push(casual.user);
  }
  return users;
}

for (let j = 0; j < 10; j++) {
  paginations['page' + `${j}`] = getList();
  users = [];
}

let fs = require('fs');

let fileContent = paginations;

for (let propt in fileContent) {
  for (let ex in fileContent[propt])
    fileContent[propt][ex]['position'] =
      jobs[Math.floor(Math.random() * jobs.length)];
}

fs.writeFileSync('./data.json', JSON.stringify(fileContent, null, 4), 'utf-8');
