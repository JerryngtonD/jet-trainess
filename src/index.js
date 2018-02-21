'use strict';
import getPersonals from './data';

let data = getPersonals();
let elem = document.querySelector('#entry-template');
let htmlFragment = '';
let tmpl = _.template(elem.innerHTML);
let _currentElemsOnPage;
let _currentPageNumber = parseInt(document.querySelector('.active').textContent, 10);

let orderTypeEnum = Object.freeze({
  directOrder: true,
  reverseOrder: false,
});

let dataTypeEnum = Object.freeze({
  text: 'text',
  number: 'number',
  date: 'date',
});

let sortElems = function(sortOrder, dataType, objects, sortField) {
  if (dataType === dataTypeEnum.text) {
    objects.sort(function(a, b) {
      return a[sortField + ''].localeCompare(b[sortField + ''], { caseFirst: 'upper' });
    });
    if (sortOrder === orderTypeEnum.directOrder) {
      return objects;
    } else if (sortOrder === orderTypeEnum.reverseOrder) {
      return objects.reverse();
    }
  } else if (dataType === dataTypeEnum.number) {
    objects.sort(function(a, b) {
      return a[sortField + ''] - b[sortField + ''];
    });
    if (sortOrder === orderTypeEnum.directOrder) {
      return objects;
    } else if (sortOrder === orderTypeEnum.reverseOrder) {
      return objects.reverse();
    }
  } else if (dataType === dataTypeEnum.date) {
    let sortFieldChunks = sortField.split(' ');
    sortField = sortFieldChunks[0] + sortFieldChunks[1].charAt(0).toUpperCase() + sortFieldChunks[1].slice(1);
    objects.sort(function(a, b) {
      return new Date(a[sortField + '']) - new Date(b[sortField + '']);
    });
    if (sortOrder === orderTypeEnum.directOrder) {
      return objects;
    } else if (sortOrder === orderTypeEnum.reverseOrder) {
      return objects.reverse();
    }
  }
};

function deleteElemsOnPage() {
  let needToDeleteElem = document.getElementsByTagName('td');
  for (let index = needToDeleteElem.length - 1; index >= 0; index--) {
    needToDeleteElem[index].parentNode.removeChild(needToDeleteElem[index]);
  }
}

function renderElemsByObj(obj) {
  _currentElemsOnPage = obj;
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
    let indexNode = document.querySelector('.data-table');
    indexNode.innerHTML += htmlFragment;
  }
  sortListener();
  searchByValue();
  searchIsEmpty();
}

renderElemsByObj(data['page0']);
paginationListener();

function paginationListener() {
  let paginationButtons = document.querySelectorAll('.pagination__button');
  for (let i = 0; i < paginationButtons.length; i++) {
    paginationButtons[i].addEventListener('click', function(event) {
      _currentPageNumber = parseInt(event.target.textContent, 10);
      let previousPage = document.querySelector('.active');
      previousPage.classList.remove('active');
      event.target.classList.add('active');
      deleteElemsOnPage();
      renderElemsByObj(data['page' + _currentPageNumber])
    });
  }
}

function renderFieldItems() {
  deleteElemsOnPage();
  renderElemsByObj(_currentElemsOnPage.reverse());
};

function reverseSortByField(indexField) {
  let titleFields = document.querySelectorAll('.column-name');
  titleFields[indexField].addEventListener('click', renderFieldItems);
}

function selectSortMode(nameTitle, sortType) {
  let textTitles = ['name', 'position', 'office'];
  let numberTitles = ['age', 'salary'];
  let dateTitles = ['start date'];
  if (textTitles.includes(nameTitle)) {
    let sortedObjects = sortElems( orderTypeEnum.directOrder, dataTypeEnum.text, _currentElemsOnPage, nameTitle);
    deleteElemsOnPage();
    if (sortType === orderTypeEnum.directOrder) {
      renderElemsByObj(sortedObjects);
    } else if (sortType === orderTypeEnum.reverseOrder) {
      renderElemsByObj(sortedObjects.reverse());
    }
  } else if (numberTitles.includes(nameTitle)) {
    let sortedObjects = sortElems( orderTypeEnum.directOrder, dataTypeEnum.number, _currentElemsOnPage, nameTitle);
    deleteElemsOnPage();
    if (sortType === orderTypeEnum.directOrder) {
      renderElemsByObj(sortedObjects);
    } else if (sortType === orderTypeEnum.reverseOrder) {
      renderElemsByObj(sortedObjects.reverse());
    }
  } else if (dateTitles.includes(nameTitle)) {
    let sortedObjects = sortElems( orderTypeEnum.directOrder, dataTypeEnum.date, _currentElemsOnPage, nameTitle);
    deleteElemsOnPage();
    if (sortType === orderTypeEnum.directOrder) {
      renderElemsByObj(sortedObjects);
    } else if (sortType === orderTypeEnum.reverseOrder) {
      renderElemsByObj(sortedObjects.reverse());
    }
  }
}

function sortListener() {
  let titleFields = document.querySelectorAll('.column-name');
  for (let i = 0; i < titleFields.length; i++) {
    titleFields[i].addEventListener('click', function(event) {
      let currentEventPlace = event.currentTarget;
      let nameTitle = event.target.textContent.toLowerCase();
      selectSortMode(nameTitle, orderTypeEnum.directOrder);
      reverseSortByField(i);
    })
  }
  let arrowsUp = document.querySelectorAll('.arrow-up');
  for (let i = 0; i < arrowsUp.length; i++) {
    arrowsUp[i].addEventListener('click', function(event) {
      let currentEventPlace = event.target.parentNode.parentNode;
      let currentTitle = currentEventPlace.querySelector('.column-name').textContent.toLowerCase();
      selectSortMode(currentTitle, orderTypeEnum.directOrder)
    })
  }
  let arrowsDown = document.querySelectorAll('.arrow-down');
  for (let i = 0; i < arrowsUp.length; i++) {
    let currentIndex = i;
    arrowsDown[i].addEventListener('click', function(event) {
      let currentEventPlace = event.target.parentNode.parentNode;
      let currentTitle = currentEventPlace.querySelector('.column-name').textContent.toLowerCase();
      selectSortMode(currentTitle, orderTypeEnum.reverseOrder);
    })
  }
}

function searchByValue() {
  let searchButton = document.querySelector('.search__button--active');
  searchButton.addEventListener('click', function() {
    console.log(_currentPageNumber);
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
    _currentElemsOnPage = resultList;
    renderElemsByObj(resultList);
  });
}

function searchIsEmpty() {
  let searchInput = document.querySelector('#search_id');
  searchInput.addEventListener('change', function() {
    let searchTextField = document.getElementById('search_id').value.toString();
    if (searchTextField == '') {
      deleteElemsOnPage();
      renderElemsByObj(data['page' + (_currentPageNumber - 1)])
    }
  });
}
