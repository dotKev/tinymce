(function () {
var print = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var register = function (editor) {
    editor.addCommand('mcePrint', function () {
      editor.getWin().print();
    });
  };
  var $_fm2fpdjljj4okv35 = { register: register };

  var register$1 = function (editor) {
    editor.addButton('print', {
      title: 'Print',
      cmd: 'mcePrint'
    });
    editor.addMenuItem('print', {
      text: 'Print',
      cmd: 'mcePrint',
      icon: 'print'
    });
  };
  var $_l16jhjmjj4okv36 = { register: register$1 };

  global.add('print', function (editor) {
    $_fm2fpdjljj4okv35.register(editor);
    $_l16jhjmjj4okv36.register(editor);
    editor.addShortcut('Meta+P', '', 'mcePrint');
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
