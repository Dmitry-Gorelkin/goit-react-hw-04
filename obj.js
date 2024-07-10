const obg = {
  collections: 214,
  comments: 15,
  downloads: 49015,
  id: 1895260,
  imageHeight: 4167,

  imageSize: 542085,
  imageWidth: 4167,
  largeImageURL:
    'https://pixabay.com/get/g4986638e68bc903226379ee44f1914fe3e63ef9dc7739bd678c7461945e5df358ca9ceeaf289993f1d723c6fcdabe18842d404adce2c2018f0cca21f539d2faf_1280.png',
  likes: 162,
  pageURL: 'https://pixabay.com/illustrations/dog-illustration-pet-big-head-dog-1895260/',
  previewHeight: 150,

  previewURL: 'https://cdn.pixabay.com/photo/2016/12/09/16/31/dog-1895260_150.png',
  previewWidth: 150,
  tags: 'dog, illustration, animal',
  type: 'illustration',
  user: 'Ibu-1983',
  userImageURL: 'https://cdn.pixabay.com/user/2016/12/09/16-09-57-184_250x250.jpg',
  user_id: 2662225,
  views: 71861,
  webformatHeight: 640,
  webformatURL:
    'https://pixabay.com/get/gc382a14f47ad4478843e8edfec6ce2f50941daf375b38ab0f6e4767288025794aa5e072923159c2e902c57090aee807b4722e633527bdef2b62aa4159243ddf0_640.png',
  webformatWidth: 640,
};

function автоматическое_добавление_дат() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName('Доступность'); // Замените на реальное название вашего листа

  if (!sheet) {
    console.error('Лист не найден в документе.');
    return;
  }

  var today = new Date();
  var startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()); // Сегодняшняя дата без времени
  var endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000); // Дата через неделю

  var range = sheet.getDataRange();
  var values = range.getValues();
  var lastRow = range.getLastRow();

  // Находим последнюю дату в столбце A
  var lastDate = null;
  for (var i = lastRow - 1; i >= 0; i--) {
    var cell = sheet.getRange(i + 1, 1);
    var cellBackgroundColor = cell.getBackground();
    var cellValue = cell.getValue();

    if (cellBackgroundColor === '#ffff00' && cellValue instanceof Date) {
      lastDate = cellValue;
      break;
    }
  }

  // Проверяем, нужно ли добавлять даты на следующую неделю
  if (!lastDate || lastDate < endDate) {
    var nextDate = new Date();
    if (lastDate instanceof Date) {
      nextDate = new Date(lastDate.getTime() + 24 * 60 * 60 * 1000); // Следующий день после последней даты
    }

    while (nextDate <= endDate) {
      var employees = [
        'Denis Kucher',
        'Elena Balabanets',
        'Alena Varlik',
        'Iuliia Epishina',
        'Elena Bunchuk',
        'Alexander Yevsiukov',
        'Chepikov Vadym',
        'Nataliia Mekh',
        'Айгуль Магадова',
        'Анжелика Марутьянц',
        'Valeria Lavrenteva',
        'Sergii Sazonov',
        'Olga Dergunova',
        'Tattygul Abdimamatova',
        'Marina Shamova',
        'Mariam Ohanyan',
        'Nargiza Alinazarova',
      ];

      var dataToAdd = [];

      // Добавляем пустую строку перед новой датой, если последний блок не заканчивается пустой строкой
      if (lastRow > 0 && sheet.getRange(lastRow, 1).getValue() !== '') {
        lastRow++;
      }

      // Форматируем дату
      var dateFormatted = Utilities.formatDate(
        nextDate,
        spreadsheet.getSpreadsheetTimeZone(),
        'dd.MM.yyyy'
      );

      // Добавляем новую дату и выделяем её жирным и желтым цветом
      dataToAdd.push([dateFormatted]);

      // Добавляем список сотрудников в колонку A под каждой датой
      for (var j = 0; j < employees.length; j++) {
        dataToAdd.push([employees[j]]);
      }

      // Добавляем отступ одной строки в конце каждой группы
      dataToAdd.push(['']);

      // Вставляем данные одним блоком
      var numRows = dataToAdd.length;
      var rangeToAdd = sheet.getRange(lastRow + 1, 1, numRows, 1);
      rangeToAdd.setValues(dataToAdd);

      // Выделяем ячейку с датой желтым цветом и устанавливаем выравнивание и формат даты
      var dateCell = sheet.getRange(lastRow + 1, 1);
      dateCell.setBackground('#ffff00');
      dateCell.setFontWeight('bold');
      dateCell.setHorizontalAlignment('left'); // Выравнивание по левому краю

      // Выделяем сотрудников жирным шрифтом
      var employeeRange = sheet.getRange(lastRow + 2, 1, employees.length, 1);
      employeeRange.setFontWeight('bold');

      lastRow += numRows; // Увеличиваем lastRow на количество добавленных строк

      nextDate = new Date(nextDate.getTime() + 24 * 60 * 60 * 1000); // Переходим к следующему дню
    }
  }
}
