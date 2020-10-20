"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// import Mock from 'mockjs'
var Mock = require('mockjs');

var data = Mock.mock([{
  time: '1 неделю назад',
  data: [{
    status: 'новое',
    info: 'Добавлен блок достижений на страницу проекта и в личный профиль студентов. По скнопке “смотреть полный список” можно перейти на страницу со всеми возможными достижениями и увидеть условия их получения'
  }, {
    status: 'улучшено',
    info: 'Мы переехали на новые сервера! Теперь скорость работы сайта стала выше. '
  }]
}, {
  time: '2 недели назад',
  data: [{
    status: 'исправлено',
    info: 'Починили удаление студентов из проектов. Руководители могут смело распрощаться с неактивными участниками.'
  }]
}]);
var _default = [{
  type: 'get',
  response: function response(config) {
    return {
      code: 20000,
      data: data
    };
  }
}];
exports["default"] = _default;