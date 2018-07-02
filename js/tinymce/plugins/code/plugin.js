(function () {
var code = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var global$1 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var getMinWidth = function (editor) {
    return editor.getParam('code_dialog_width', 600);
  };
  var getMinHeight = function (editor) {
    return editor.getParam('code_dialog_height', Math.min(global$1.DOM.getViewPort().h - 200, 500));
  };
  var $_59hshxa2jj4oktrr = {
    getMinWidth: getMinWidth,
    getMinHeight: getMinHeight
  };

  var setContent = function (editor, html) {
    editor.focus();
    editor.undoManager.transact(function () {
      editor.setContent(html);
    });
    editor.selection.setCursorLocation();
    editor.nodeChanged();
  };
  var getContent = function (editor) {
    return editor.getContent({ source_view: true });
  };
  var $_bhfweqa4jj4oktrt = {
    setContent: setContent,
    getContent: getContent
  };

  var open = function (editor) {
    var minWidth = $_59hshxa2jj4oktrr.getMinWidth(editor);
    var minHeight = $_59hshxa2jj4oktrr.getMinHeight(editor);
    var win = editor.windowManager.open({
      title: 'Source code',
      body: {
        type: 'textbox',
        name: 'code',
        multiline: true,
        minWidth: minWidth,
        minHeight: minHeight,
        spellcheck: false,
        style: 'direction: ltr; text-align: left'
      },
      onSubmit: function (e) {
        $_bhfweqa4jj4oktrt.setContent(editor, e.data.code);
      }
    });
    win.find('#code').value($_bhfweqa4jj4oktrt.getContent(editor));
  };
  var $_4iclpca1jj4oktrp = { open: open };

  var register = function (editor) {
    editor.addCommand('mceCodeEditor', function () {
      $_4iclpca1jj4oktrp.open(editor);
    });
  };
  var $_3fr7zha0jj4oktro = { register: register };

  var register$1 = function (editor) {
    editor.addButton('code', {
      icon: 'code',
      tooltip: 'Source code',
      onclick: function () {
        $_4iclpca1jj4oktrp.open(editor);
      }
    });
    editor.addMenuItem('code', {
      icon: 'code',
      text: 'Source code',
      onclick: function () {
        $_4iclpca1jj4oktrp.open(editor);
      }
    });
  };
  var $_5pgodea5jj4oktru = { register: register$1 };

  global.add('code', function (editor) {
    $_3fr7zha0jj4oktro.register(editor);
    $_5pgodea5jj4oktru.register(editor);
    return {};
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
