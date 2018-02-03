'use strict';
const data = {
  page0: [
    {
      name: 'Maribel Rutherford',
      position: 'Junior Java Script Developer',
      office: 'Delaware',
      age: 34,
      startDate: '1997/05/05',
      salary: '$359',
    },
    {
      name: 'Jeanne Thiel',
      position: 'Senior Marketing Designer',
      office: 'New Mexico',
      age: 39,
      startDate: '1972/07/19',
      salary: '$1286',
    },
    {
      name: 'Shaina Rutherford',
      position: 'Marketing Designer',
      office: 'Georgia',
      age: 41,
      startDate: '2014/12/10',
      salary: '$1247',
    },
    {
      name: 'Jorge Brakus',
      position: 'Personnel Lead',
      office: 'Florida',
      age: 34,
      startDate: '1989/01/22',
      salary: '$1205',
    },
    {
      name: 'Daron Walker',
      position: 'Junior Java Script Developer',
      office: 'West Virginia',
      age: 47,
      startDate: '2005/07/25',
      salary: '$536',
    },
    {
      name: 'Casey Crist',
      position: 'Support Lead',
      office: 'Mississippi',
      age: 46,
      startDate: '1979/04/28',
      salary: '$737',
    },
    {
      name: 'Jalyn McDermott',
      position: 'Sales Assistant',
      office: 'Washington',
      age: 36,
      startDate: '2005/10/23',
      salary: '$1438',
    },
    {
      name: 'Alysson Hayes',
      position: 'Sales Assistant',
      office: 'West Virginia',
      age: 48,
      startDate: '1975/03/02',
      salary: '$792',
    },
    {
      name: 'Felipa Jacobs',
      position: 'Support Lead',
      office: 'Minnesota',
      age: 39,
      startDate: '1970/03/24',
      salary: '$1214',
    },
    {
      name: 'Kailee Olson',
      position: 'Personnel Lead',
      office: 'Utah',
      age: 33,
      startDate: '2001/02/08',
      salary: '$1460',
    },
  ],
  page1: [
    {
      name: 'Mac Anderson',
      position: 'Marketing Designer',
      office: 'South Carolina',
      age: 35,
      startDate: '1994/10/26',
      salary: '$542',
    },
    {
      name: 'Lon Fay',
      position: 'Sales Assistant',
      office: 'Vermont',
      age: 32,
      startDate: '2015/11/29',
      salary: '$1467',
    },
    {
      name: 'Daryl Kulas',
      position: 'Senior Marketing Designer',
      office: 'Alabama',
      age: 42,
      startDate: '2001/02/28',
      salary: '$1277',
    },
    {
      name: 'Donald Schultz',
      position: 'Marketing Designer',
      office: 'Arizona',
      age: 35,
      startDate: '1971/11/16',
      salary: '$209',
    },
    {
      name: 'Furman Mraz',
      position: 'Software Engineer',
      office: 'Kansas',
      age: 42,
      startDate: '1986/02/09',
      salary: '$203',
    },
    {
      name: 'Harmon Hodkiewicz',
      position: 'Designer',
      office: 'Missouri',
      age: 39,
      startDate: '1984/03/25',
      salary: '$1105',
    },
    {
      name: 'Kyle Cronin',
      position: 'Designer',
      office: 'Mississippi',
      age: 42,
      startDate: '1984/09/01',
      salary: '$177',
    },
    {
      name: 'Stephany Conn',
      position: 'Designer',
      office: 'New Hampshire',
      age: 30,
      startDate: '1991/06/21',
      salary: '$340',
    },
    {
      name: 'Lazaro Nikolaus',
      position: 'Junior Java Script Developer',
      office: 'Montana',
      age: 45,
      startDate: '1999/09/28',
      salary: '$1085',
    },
    {
      name: 'Clay Sanford',
      position: 'Sales Assistant',
      office: 'Pennsylvania',
      age: 37,
      startDate: '1994/06/05',
      salary: '$167',
    },
  ],
  page2: [
    {
      name: 'Amira Herman',
      position: 'Personnel Lead',
      office: 'New York',
      age: 46,
      startDate: '1998/03/19',
      salary: '$814',
    },
    {
      name: 'Helene Kertzmann',
      position: 'Junior Java Script Developer',
      office: 'Virginia',
      age: 46,
      startDate: '1973/01/04',
      salary: '$849',
    },
    {
      name: 'Yoshiko Stehr',
      position: 'Junior Java Script Developer',
      office: 'Georgia',
      age: 38,
      startDate: '2001/06/07',
      salary: '$1128',
    },
    {
      name: 'Myah Nitzsche',
      position: 'Software Engineer',
      office: 'Alaska',
      age: 37,
      startDate: '1977/12/29',
      salary: '$1301',
    },
    {
      name: 'Dylan Aufderhar',
      position: 'Designer',
      office: 'Illinois',
      age: 37,
      startDate: '1986/03/19',
      salary: '$552',
    },
    {
      name: 'Cletus Kessler',
      position: 'Junior Java Script Developer',
      office: 'Nebraska',
      age: 40,
      startDate: '1990/05/09',
      salary: '$579',
    },
    {
      name: 'Norene Ernser',
      position: 'Designer',
      office: 'Mississippi',
      age: 46,
      startDate: '2011/03/11',
      salary: '$1299',
    },
    {
      name: 'Miles Vandervort',
      position: 'Junior Java Script Developer',
      office: 'Minnesota',
      age: 32,
      startDate: '1988/05/19',
      salary: '$682',
    },
    {
      name: 'Jessy Williamson',
      position: 'Marketing Designer',
      office: 'Utah',
      age: 34,
      startDate: '1993/03/27',
      salary: '$1287',
    },
    {
      name: 'Demetrius Crooks',
      position: 'Junior Java Script Developer',
      office: 'New Hampshire',
      age: 33,
      startDate: '2008/09/19',
      salary: '$1334',
    },
  ],
  page3: [
    {
      name: 'Watson Fahey',
      position: 'Support Lead',
      office: 'Kentucky',
      age: 41,
      startDate: '2005/03/28',
      salary: '$273',
    },
    {
      name: 'Niko Sauer',
      position: 'Marketing Designer',
      office: 'Delaware',
      age: 32,
      startDate: '2006/06/10',
      salary: '$283',
    },
    {
      name: 'Merlin Bosco',
      position: 'Junior Java Script Developer',
      office: 'Illinois',
      age: 49,
      startDate: '2001/02/27',
      salary: '$273',
    },
    {
      name: 'Gavin Tillman',
      position: 'Marketing Designer',
      office: 'Ohio',
      age: 33,
      startDate: '1988/06/19',
      salary: '$940',
    },
    {
      name: 'Ian Eichmann',
      position: 'Personnel Lead',
      office: 'New Mexico',
      age: 41,
      startDate: '1983/12/23',
      salary: '$397',
    },
    {
      name: 'Dayna Block',
      position: 'Designer',
      office: 'Utah',
      age: 36,
      startDate: '1975/10/25',
      salary: '$1203',
    },
    {
      name: 'Sylvia Ebert',
      position: 'Designer',
      office: 'Louisiana',
      age: 30,
      startDate: '2008/07/05',
      salary: '$1042',
    },
    {
      name: 'Margarita Altenwerth',
      position: 'Support Lead',
      office: 'Rhode Island',
      age: 49,
      startDate: '1993/08/14',
      salary: '$145',
    },
    {
      name: 'Elvis Bradtke',
      position: 'Sales Assistant',
      office: 'Arizona',
      age: 45,
      startDate: '2004/08/08',
      salary: '$690',
    },
    {
      name: 'Celia Leuschke',
      position: 'Marketing Designer',
      office: 'Missouri',
      age: 34,
      startDate: '1985/08/05',
      salary: '$678',
    },
  ],
  page4: [
    {
      name: 'Jerald Skiles',
      position: 'Senior Marketing Designer',
      office: 'Louisiana',
      age: 49,
      startDate: '2004/06/18',
      salary: '$1351',
    },
    {
      name: 'Francisco Stoltenberg',
      position: 'Marketing Designer',
      office: 'Idaho',
      age: 30,
      startDate: '2005/02/05',
      salary: '$537',
    },
    {
      name: 'Destin Cruickshank',
      position: 'Developer',
      office: 'Connecticut',
      age: 41,
      startDate: '2001/06/05',
      salary: '$1339',
    },
    {
      name: 'Claire Koch',
      position: 'Personnel Lead',
      office: 'Texas',
      age: 35,
      startDate: '1977/03/09',
      salary: '$1104',
    },
    {
      name: 'Abbie Hermann',
      position: 'Software Engineer',
      office: 'Wisconsin',
      age: 35,
      startDate: '1982/02/28',
      salary: '$647',
    },
    {
      name: 'Clovis Gutkowski',
      position: 'Software Engineer',
      office: 'New Mexico',
      age: 39,
      startDate: '2009/09/01',
      salary: '$1374',
    },
    {
      name: 'Novella Larkin',
      position: 'Designer',
      office: 'Oklahoma',
      age: 35,
      startDate: '2000/02/16',
      salary: '$1298',
    },
    {
      name: 'Hailie Upton',
      position: 'Marketing Designer',
      office: 'New York',
      age: 45,
      startDate: '1976/12/03',
      salary: '$884',
    },
    {
      name: 'Jaydon Rau',
      position: 'Software Engineer',
      office: 'Tennessee',
      age: 34,
      startDate: '1979/09/17',
      salary: '$303',
    },
    {
      name: 'Verla Skiles',
      position: 'Software Engineer',
      office: 'New Mexico',
      age: 37,
      startDate: '1984/01/05',
      salary: '$873',
    },
  ],
  page5: [
    {
      name: 'Rebecca Hegmann',
      position: 'Software Engineer',
      office: 'Alaska',
      age: 42,
      startDate: '1983/06/19',
      salary: '$200',
    },
    {
      name: 'Bradly Fay',
      position: 'Marketing Designer',
      office: 'Nevada',
      age: 33,
      startDate: '2006/05/10',
      salary: '$1029',
    },
    {
      name: 'Hazel Hyatt',
      position: 'Designer',
      office: 'Minnesota',
      age: 46,
      startDate: '1986/03/26',
      salary: '$799',
    },
    {
      name: 'Fidel Stroman',
      position: 'Designer',
      office: 'Georgia',
      age: 46,
      startDate: '2002/11/01',
      salary: '$1411',
    },
    {
      name: 'Zelda Roberts',
      position: 'Software Engineer',
      office: 'Michigan',
      age: 43,
      startDate: '2006/08/27',
      salary: '$697',
    },
    {
      name: 'Federico Rohan',
      position: 'Senior Marketing Designer',
      office: 'Wisconsin',
      age: 29,
      startDate: '1982/03/10',
      salary: '$1450',
    },
    {
      name: 'Bennie Schaden',
      position: 'Junior Java Script Developer',
      office: 'Pennsylvania',
      age: 47,
      startDate: '2014/04/19',
      salary: '$405',
    },
    {
      name: 'Samir Conroy',
      position: 'Marketing Designer',
      office: 'Georgia',
      age: 41,
      startDate: '1981/09/10',
      salary: '$918',
    },
    {
      name: 'Nolan Sporer',
      position: 'Software Engineer',
      office: 'North Carolina',
      age: 41,
      startDate: '1982/05/23',
      salary: '$1185',
    },
    {
      name: 'Mollie Gorczany',
      position: 'Software Engineer',
      office: 'Georgia',
      age: 30,
      startDate: '2015/11/15',
      salary: '$530',
    },
  ],
  page6: [
    {
      name: 'Jules Larkin',
      position: 'Support Lead',
      office: 'New York',
      age: 34,
      startDate: '2009/04/30',
      salary: '$899',
    },
    {
      name: 'Joan Toy',
      position: 'Personnel Lead',
      office: 'Louisiana',
      age: 49,
      startDate: '1995/08/19',
      salary: '$1415',
    },
    {
      name: 'Crystal Dooley',
      position: 'Senior Marketing Designer',
      office: 'Idaho',
      age: 39,
      startDate: '1983/05/24',
      salary: '$232',
    },
    {
      name: 'Santino Larson',
      position: 'Designer',
      office: 'West Virginia',
      age: 31,
      startDate: '1997/07/10',
      salary: '$721',
    },
    {
      name: 'Erich Rogahn',
      position: 'Senior Marketing Designer',
      office: 'Maine',
      age: 35,
      startDate: '1980/08/09',
      salary: '$143',
    },
    {
      name: 'Catharine Nader',
      position: 'Support Lead',
      office: 'North Carolina',
      age: 39,
      startDate: '1995/06/27',
      salary: '$356',
    },
    {
      name: 'Dante Moore',
      position: 'Senior Marketing Designer',
      office: 'Louisiana',
      age: 43,
      startDate: '2009/03/06',
      salary: '$1343',
    },
    {
      name: 'Destinee Brown',
      position: 'Software Engineer',
      office: 'Montana',
      age: 46,
      startDate: '2012/03/19',
      salary: '$1237',
    },
    {
      name: 'Kamryn Wintheiser',
      position: 'Designer',
      office: 'Wisconsin',
      age: 36,
      startDate: '1979/06/26',
      salary: '$218',
    },
    {
      name: 'Diamond Metz',
      position: 'Marketing Designer',
      office: 'Texas',
      age: 40,
      startDate: '1973/08/24',
      salary: '$865',
    },
  ],
  page7: [
    {
      name: 'Bret McDermott',
      position: 'Designer',
      office: 'Wyoming',
      age: 42,
      startDate: '1982/06/16',
      salary: '$1364',
    },
    {
      name: 'Solon Leuschke',
      position: 'Software Engineer',
      office: 'Colorado',
      age: 47,
      startDate: '1986/04/27',
      salary: '$282',
    },
    {
      name: 'Malcolm Kuhic',
      position: 'Developer',
      office: 'Oregon',
      age: 41,
      startDate: '1972/02/23',
      salary: '$338',
    },
    {
      name: 'Abelardo Schowalter',
      position: 'Software Engineer',
      office: 'Iowa',
      age: 46,
      startDate: '2010/02/02',
      salary: '$893',
    },
    {
      name: 'Weston Lang',
      position: 'Developer',
      office: 'Idaho',
      age: 31,
      startDate: '1986/10/08',
      salary: '$1274',
    },
    {
      name: 'Jayme Kunze',
      position: 'Personnel Lead',
      office: 'Rhode Island',
      age: 30,
      startDate: '1993/08/01',
      salary: '$660',
    },
    {
      name: 'Judah Blick',
      position: 'Personnel Lead',
      office: 'Vermont',
      age: 47,
      startDate: '1992/10/22',
      salary: '$1317',
    },
    {
      name: 'Guy Kuvalis',
      position: 'Developer',
      office: 'Massachusetts',
      age: 34,
      startDate: '2013/10/16',
      salary: '$799',
    },
    {
      name: 'Aliyah Yost',
      position: 'Support Lead',
      office: 'Alabama',
      age: 29,
      startDate: '2015/06/18',
      salary: '$1191',
    },
    {
      name: 'Rafaela Dibbert',
      position: 'Senior Marketing Designer',
      office: 'Nevada',
      age: 45,
      startDate: '1987/02/23',
      salary: '$831',
    },
  ],
  page8: [
    {
      name: 'Julien Swaniawski',
      position: 'Support Lead',
      office: 'Colorado',
      age: 34,
      startDate: '1991/02/12',
      salary: '$696',
    },
    {
      name: 'Jacey Bayer',
      position: 'Software Engineer',
      office: 'Missouri',
      age: 42,
      startDate: '1990/05/18',
      salary: '$416',
    },
    {
      name: 'Elroy Conroy',
      position: 'Personnel Lead',
      office: 'Mississippi',
      age: 32,
      startDate: '2007/04/22',
      salary: '$460',
    },
    {
      name: 'Rasheed McLaughlin',
      position: 'Sales Assistant',
      office: 'New York',
      age: 39,
      startDate: '1998/03/28',
      salary: '$660',
    },
    {
      name: 'Trevion Haag',
      position: 'Support Lead',
      office: 'Arkansas',
      age: 45,
      startDate: '1992/07/10',
      salary: '$320',
    },
    {
      name: 'Elian Casper',
      position: 'Software Engineer',
      office: 'Hawaii',
      age: 36,
      startDate: '2016/01/03',
      salary: '$980',
    },
    {
      name: 'Irwin Leffler',
      position: 'Support Lead',
      office: 'Wisconsin',
      age: 45,
      startDate: '1971/05/26',
      salary: '$708',
    },
    {
      name: 'Emilie Osinski',
      position: 'Developer',
      office: 'New York',
      age: 36,
      startDate: '1997/08/13',
      salary: '$375',
    },
    {
      name: 'Arlene Sanford',
      position: 'Sales Assistant',
      office: 'Connecticut',
      age: 40,
      startDate: '2015/12/05',
      salary: '$913',
    },
    {
      name: 'Linnea Parker',
      position: 'Software Engineer',
      office: 'North Dakota',
      age: 47,
      startDate: '1996/01/06',
      salary: '$921',
    },
  ],
  page9: [
    {
      name: 'Tracy Johnson',
      position: 'Support Lead',
      office: 'North Dakota',
      age: 49,
      startDate: '1975/04/27',
      salary: '$1261',
    },
    {
      name: 'Enola Bogisich',
      position: 'Developer',
      office: 'Hawaii',
      age: 35,
      startDate: '1986/02/10',
      salary: '$686',
    },
    {
      name: 'Jaren Monahan',
      position: 'Developer',
      office: 'Pennsylvania',
      age: 32,
      startDate: '2002/08/19',
      salary: '$310',
    },
    {
      name: 'Johathan Yundt',
      position: 'Designer',
      office: 'Nebraska',
      age: 35,
      startDate: '1991/11/21',
      salary: '$972',
    },
    {
      name: 'Minnie Lang',
      position: 'Junior Java Script Developer',
      office: 'Vermont',
      age: 44,
      startDate: '1974/02/03',
      salary: '$714',
    },
    {
      name: 'Kathleen Stroman',
      position: 'Designer',
      office: 'Nevada',
      age: 36,
      startDate: '1975/04/27',
      salary: '$96',
    },
    {
      name: 'Laurianne Swaniawski',
      position: 'Designer',
      office: 'Michigan',
      age: 48,
      startDate: '1997/06/28',
      salary: '$573',
    },
    {
      name: 'Lia Dickens',
      position: 'Personnel Lead',
      office: 'New Hampshire',
      age: 36,
      startDate: '2013/06/14',
      salary: '$799',
    },
    {
      name: 'Aiyana Mueller',
      position: 'Marketing Designer',
      office: 'Maryland',
      age: 49,
      startDate: '2003/11/18',
      salary: '$440',
    },
    {
      name: 'Kobe Lesch',
      position: 'Software Engineer',
      office: 'Mississippi',
      age: 30,
      startDate: '2001/05/31',
      salary: '$1082',
    },
  ],
};

let elem = document.querySelector('#entry-template');
let htmlFragment = '';
let tmpl = _.template(elem.innerHTML);
let _currentElemsOnPage;

function renderElems(pageNumber) {
  deleteElemsOnPage();
  _currentElemsOnPage = data['page' + (pageNumber - 1)];
  for (let i = 0; i < data['page' + (pageNumber - 1)].length; i++) {
    let rowData = {
      name: data['page' + (pageNumber - 1)][i]['name'],
      position: data['page' + (pageNumber - 1)][i]['position'],
      office: data['page' + (pageNumber - 1)][i]['office'],
      age: data['page' + (pageNumber - 1)][i]['age'],
      start_date: data['page' + (pageNumber - 1)][i]['startDate'],
      salary: data['page' + (pageNumber - 1)][i]['salary'],
    };

    htmlFragment = tmpl(rowData);
    var indexNode = document.querySelector('.data-table');
    indexNode.innerHTML += htmlFragment;
  }
  sortUpNameListener();
  sortDownNameListener();
  sortUpPositionListener();
  sortDownPositionListener();
  sortUpOfficeListener();
  sortDownOfficeListener();
  sortUpAgeListener();
  sortDownAgeListener();
  sortUpDateListener();
  sortDownDateListener();
  sortUpSalaryListener();
  sortDownSalaryListener();
  sortColumnText();
  sortColumnAge();
  sortColumnDate();
  sortColumnSalary();
  searchByValue();
  searchIsEmpty();
}

function deleteElemsOnPage() {
  let needToDeleteElem = document.getElementsByTagName('td');
  for (let index = needToDeleteElem.length - 1; index >= 0; index--) {
    needToDeleteElem[index].parentNode.removeChild(needToDeleteElem[index]);
  }
}

function renderElemsByObj(obj) {
  for (let i = 0; i < obj.length; i++) {
    let rowData = {
      name: obj[i]['name'],
      position: obj[i]['position'],
      office: obj[i]['office'],
      age: obj[i]['age'],
      start_date: obj[i]['startDate'],
      salary: obj[i]['salary'],
    };

    htmlFragment = tmpl(rowData);
    var indexNode = document.querySelector('.data-table');
    indexNode.innerHTML += htmlFragment;
  }
  sortUpNameListener();
  sortDownNameListener();
  sortUpPositionListener();
  sortDownPositionListener();
  sortUpOfficeListener();
  sortDownOfficeListener();
  sortUpAgeListener();
  sortDownAgeListener();
  sortUpDateListener();
  sortDownDateListener();
  sortUpSalaryListener();
  sortDownSalaryListener();
  sortColumnText();
  sortColumnAge();
  sortColumnDate();
  sortColumnSalary();
  searchByValue();
  searchIsEmpty();
}
renderElems(1);

let paginationButtons = document.querySelectorAll('.pagination__button');
for (let i = 0; i < paginationButtons.length; i++) {
  paginationButtons[i].addEventListener('click', function(event) {
    let previousPage = document.querySelector('.active');
    previousPage.classList.remove('active');
    let currentPage = event.target;
    currentPage.classList.add('active');
    let pageNumber = Number(event.target.textContent);
    renderElems(pageNumber);
  });
}

function sortUpNameListener() {
  let upSortByName = document.querySelector('.up-sort-by-name');
  upSortByName.addEventListener('click', function() {
    deleteElemsOnPage();
    _currentElemsOnPage.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    renderElemsByObj(_currentElemsOnPage);
  });
}

function sortDownNameListener() {
  let downSortByName = document.querySelector('.down-sort-by-name');
  downSortByName.addEventListener('click', function() {
    deleteElemsOnPage();
    _currentElemsOnPage.sort(function(a, b) {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
    renderElemsByObj(_currentElemsOnPage);
  });
}

function sortUpPositionListener() {
  let upSortByName = document.querySelector('.up-sort-by-job');
  upSortByName.addEventListener('click', function() {
    deleteElemsOnPage();
    _currentElemsOnPage.sort(function(a, b) {
      if (a.position > b.position) {
        return 1;
      }
      if (a.position < b.position) {
        return -1;
      }
      return 0;
    });
    renderElemsByObj(_currentElemsOnPage);
  });
}

function sortDownPositionListener() {
  let downSortByName = document.querySelector('.down-sort-by-job');
  downSortByName.addEventListener('click', function() {
    deleteElemsOnPage();
    _currentElemsOnPage.sort(function(a, b) {
      if (a.position > b.position) {
        return -1;
      }
      if (a.position < b.position) {
        return 1;
      }
      return 0;
    });
    renderElemsByObj(_currentElemsOnPage);
  });
}

function sortUpOfficeListener() {
  let upSortByName = document.querySelector('.up-sort-by-city');
  upSortByName.addEventListener('click', function() {
    deleteElemsOnPage();
    _currentElemsOnPage.sort(function(a, b) {
      if (a.office > b.office) {
        return 1;
      }
      if (a.office < b.office) {
        return -1;
      }
      return 0;
    });
    renderElemsByObj(_currentElemsOnPage);
  });
}

function sortDownOfficeListener() {
  let downSortByName = document.querySelector('.down-sort-by-city');
  downSortByName.addEventListener('click', function() {
    deleteElemsOnPage();
    _currentElemsOnPage.sort(function(a, b) {
      if (a.office > b.office) {
        return -1;
      }
      if (a.office < b.office) {
        return 1;
      }
      return 0;
    });
    renderElemsByObj(_currentElemsOnPage);
  });
}

function sortUpAgeListener() {
  let upSortByName = document.querySelector('.up-sort-by-age');
  upSortByName.addEventListener('click', function() {
    deleteElemsOnPage();
    _currentElemsOnPage.sort(function(a, b) {
      if (a.age > b.age) {
        return 1;
      }
      if (a.age < b.age) {
        return -1;
      }
      return 0;
    });
    renderElemsByObj(_currentElemsOnPage);
  });
}

function sortDownAgeListener() {
  let downSortByName = document.querySelector('.down-sort-by-age');
  downSortByName.addEventListener('click', function() {
    deleteElemsOnPage();
    _currentElemsOnPage.sort(function(a, b) {
      if (a.age > b.age) {
        return -1;
      }
      if (a.age < b.age) {
        return 1;
      }
      return 0;
    });
    renderElemsByObj(_currentElemsOnPage);
  });
}

function sortUpDateListener() {
  let upSortByName = document.querySelector('.up-sort-by-date');
  upSortByName.addEventListener('click', function() {
    deleteElemsOnPage();
    _currentElemsOnPage.sort(function(a, b) {
      return new Date(a.startDate) - new Date(b.startDate);
    });
    renderElemsByObj(_currentElemsOnPage);
  });
}

function sortDownDateListener() {
  let upSortByName = document.querySelector('.down-sort-by-date');
  upSortByName.addEventListener('click', function() {
    deleteElemsOnPage();
    _currentElemsOnPage.sort(function(a, b) {
      return new Date(a.startDate) - new Date(b.startDate);
    });
    renderElemsByObj(_currentElemsOnPage.reverse());
  });
}

function sortUpSalaryListener() {
  let upSortByName = document.querySelector('.up-sort-by-salary');
  upSortByName.addEventListener('click', function() {
    deleteElemsOnPage();
    _currentElemsOnPage.sort(function(a, b) {
      return (
        parseInt(a.salary.slice(1, a.salary.length), 10) -
        parseInt(b.salary.slice(1, b.salary.length), 10)
      );
    });
    renderElemsByObj(_currentElemsOnPage);
  });
}

function sortDownSalaryListener() {
  let upSortByName = document.querySelector('.down-sort-by-salary');
  upSortByName.addEventListener('click', function() {
    deleteElemsOnPage();
    _currentElemsOnPage.sort(function(a, b) {
      return (
        parseInt(a.salary.slice(1, a.salary.length), 10) -
        parseInt(b.salary.slice(1, b.salary.length), 10)
      );
    });
    renderElemsByObj(_currentElemsOnPage.reverse());
  });
}

function sortColumnText() {
  let textFields = document.querySelectorAll('.column-name--text');
  for (let i = 0; i < textFields.length; i++) {
    textFields[i].addEventListener('click', function() {
      deleteElemsOnPage();
      let textProperty = event.target.textContent.toString().toLowerCase();
      _currentElemsOnPage.sort(function(a, b) {
        return a[textProperty].localeCompare(b[textProperty]);
      });
      renderElemsByObj(_currentElemsOnPage);
      let textFields = document.querySelectorAll('.column-name--text');
      for (let i = 0; i < textFields.length; i++) {
        textFields[i].addEventListener('click', function() {
          deleteElemsOnPage();
          renderElemsByObj(_currentElemsOnPage.reverse());
        });
      }
    });
  }
}

function sortColumnAge() {
  let ageField = document.querySelector('.column-name--age');
  ageField.addEventListener('click', function() {
    deleteElemsOnPage();
    let textProperty = event.target.textContent.toString().toLowerCase();
    _currentElemsOnPage.sort(function(a, b) {
      return parseInt(a[textProperty], 10) - parseInt(b[textProperty], 10);
    });
    renderElemsByObj(_currentElemsOnPage);
    let ageField = document.querySelector('.column-name--age');
    ageField.addEventListener('click', function() {
      deleteElemsOnPage();
      renderElemsByObj(_currentElemsOnPage.reverse());
    });
  });
}

function sortColumnDate() {
  let dateField = document.querySelector('.column-name--date');
  dateField.addEventListener('click', function() {
    deleteElemsOnPage();
    let textPropertyList = event.target.textContent
      .toString()
      .toLowerCase()
      .split(' ');
    textPropertyList[1].charAt(0).toUpperCase();
    let resultProperty =
      textPropertyList[0] +
      textPropertyList[1].charAt(0).toUpperCase() +
      textPropertyList[1].slice(1);
    _currentElemsOnPage.sort(function(a, b) {
      return new Date(a[resultProperty]) - new Date(b[resultProperty]);
    });
    renderElemsByObj(_currentElemsOnPage.reverse());
    let dateField = document.querySelector('.column-name--date');
    dateField.addEventListener('click', function() {
      deleteElemsOnPage();
      renderElemsByObj(_currentElemsOnPage.reverse());
    });
  });
}

function sortColumnSalary() {
  let salaryField = document.querySelector('.column-name--salary');
  salaryField.addEventListener('click', function() {
    deleteElemsOnPage();
    let textProperty = event.target.textContent.toString().toLowerCase();
    _currentElemsOnPage.sort(function(a, b) {
      return (
        parseInt(a[textProperty].slice(1, a[textProperty].length), 10) -
        parseInt(b[textProperty].slice(1, b[textProperty].length), 10)
      );
    });
    renderElemsByObj(_currentElemsOnPage);
    let salaryField = document.querySelector('.column-name--salary');
    salaryField.addEventListener('click', function() {
      deleteElemsOnPage();
      renderElemsByObj(_currentElemsOnPage.reverse());
    });
  });
}

function searchByValue() {
  let searchButton = document.querySelector('.search__button--active');
  searchButton.addEventListener('click', function() {
    let searchTextField = document.getElementById('search_id').value.toString();
    let resultList = [];
    for (let decadeObjects in data) {
      for (
        let indexObj = 0;
        indexObj < data[decadeObjects].length;
        indexObj++
      ) {
        if (resultList.length > 10) {
          break;
        }
        if (
          data[decadeObjects][indexObj].name
            .toLowerCase()
            .indexOf(searchTextField.toLowerCase()) == 0
        ) {
          resultList.push(data[decadeObjects][indexObj]);
        }
      }
    }
    deleteElemsOnPage();
    renderElemsByObj(resultList);
  });
}

function searchIsEmpty() {
  let searchInput = document.querySelector('#search_id');
  searchInput.addEventListener('change', function() {
    let searchTextField = document.getElementById('search_id').value.toString();
    if (searchTextField == '') {
      let currentNumberPage = parseInt(
        document.querySelector('.active').textContent,
        10,
      );
      deleteElemsOnPage();
      renderElems(currentNumberPage);
    }
  });
}
