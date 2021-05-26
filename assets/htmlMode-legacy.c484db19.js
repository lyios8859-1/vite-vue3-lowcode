System.register(["./index-legacy.25c6d489.js","./htmlWorker-legacy.b323ca5b.js","./preload-helper-legacy.bf0927b3.js","./main-legacy.bd5c1cf1.js","./visual.config-legacy.c3b2d620.js","./editorWorker-legacy.be8094e7.js"],(function(e){"use strict";var t,n,r,i,o,u,a,s,c,d,l;return{setters:[function(e){t=e.e,n=e.R,r=e.l,i=e.a,o=e.U},function(e){u=e.I,a=e.C,s=e.D,c=e.F,d=e.a,l=e.S},function(){},function(){},function(){},function(){}],execute:function(){e({setupMode:function(e){var t=[],n=[],i=new g(e);t.push(i);var o=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i.getLanguageServiceWorker.apply(i,e)};return function(){var t=e.languageId,i=e.modeConfiguration;L(n),i.completionItems&&n.push(r.registerCompletionItemProvider(t,new w(o)));i.hovers&&n.push(r.registerHoverProvider(t,new b(o)));i.documentHighlights&&n.push(r.registerDocumentHighlightProvider(t,new I(o)));i.links&&n.push(r.registerLinkProvider(t,new P(o)));i.documentSymbols&&n.push(r.registerDocumentSymbolProvider(t,new x(o)));i.rename&&n.push(r.registerRenameProvider(t,new D(o)));i.foldingRanges&&n.push(r.registerFoldingRangeProvider(t,new T(o)));i.selectionRanges&&n.push(r.registerSelectionRangeProvider(t,new M(o)));i.documentFormattingEdits&&n.push(r.registerDocumentFormattingEditProvider(t,new F(o)));i.documentRangeFormattingEdits&&n.push(r.registerDocumentRangeFormattingEditProvider(t,new E(o)));i.diagnostics&&n.push(new f(t,o,e))}(),t.push(W(n)),W(t)},setupMode1:function(e){var t=new g(e),n=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.getLanguageServiceWorker.apply(t,e)},i=e.languageId;r.registerCompletionItemProvider(i,new w(n)),r.registerHoverProvider(i,new b(n)),r.registerDocumentHighlightProvider(i,new I(n)),r.registerLinkProvider(i,new P(n)),r.registerFoldingRangeProvider(i,new T(n)),r.registerDocumentSymbolProvider(i,new x(n)),r.registerSelectionRangeProvider(i,new M(n)),r.registerRenameProvider(i,new D(n)),"html"===i&&(r.registerDocumentFormattingEditProvider(i,new F(n)),r.registerDocumentRangeFormattingEditProvider(i,new E(n)),new f(i,n,e))}});var g=function(){function e(e){var t=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval((function(){return t._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return t._stopWorker()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){this._worker&&(Date.now()-this._lastUsedTime>12e4&&this._stopWorker())},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=t.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then((function(t){e=t})).then((function(e){return t._worker.withSyncedResources(n)})).then((function(t){return e}))},e}(),f=function(){function e(e,n,r){var i=this;this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null);var o=function(e){var t,n=e.getModeId();n===i._languageId&&(i._listener[e.uri.toString()]=e.onDidChangeContent((function(){clearTimeout(t),t=setTimeout((function(){return i._doValidate(e.uri,n)}),500)})),i._doValidate(e.uri,n))},u=function(e){t.setModelMarkers(e,i._languageId,[]);var n=e.uri.toString(),r=i._listener[n];r&&(r.dispose(),delete i._listener[n])};this._disposables.push(t.onDidCreateModel(o)),this._disposables.push(t.onWillDisposeModel((function(e){u(e)}))),this._disposables.push(t.onDidChangeModelLanguage((function(e){u(e.model),o(e.model)}))),this._disposables.push(r.onDidChange((function(e){t.getModels().forEach((function(e){e.getModeId()===i._languageId&&(u(e),o(e))}))}))),this._disposables.push({dispose:function(){for(var e in i._listener)i._listener[e].dispose()}}),t.getModels().forEach(o)}return e.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},e.prototype._doValidate=function(e,n){this._worker(e).then((function(r){return r.doValidation(e.toString()).then((function(r){var i=r.map((function(e){return n="number"==typeof(t=e).code?String(t.code):t.code,{severity:h(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source};var t,n})),o=t.getModel(e);o&&o.getModeId()===n&&t.setModelMarkers(o,n,i)}))})).then(void 0,(function(e){console.error(e)}))},e}();function h(e){switch(e){case s.Error:return i.Error;case s.Warning:return i.Warning;case s.Information:return i.Info;case s.Hint:return i.Hint;default:return i.Info}}function p(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function m(e){if(e)return new n(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function v(e){var t=r.CompletionItemKind;switch(e){case a.Text:return t.Text;case a.Method:return t.Method;case a.Function:return t.Function;case a.Constructor:return t.Constructor;case a.Field:return t.Field;case a.Variable:return t.Variable;case a.Class:return t.Class;case a.Interface:return t.Interface;case a.Module:return t.Module;case a.Property:return t.Property;case a.Unit:return t.Unit;case a.Value:return t.Value;case a.Enum:return t.Enum;case a.Keyword:return t.Keyword;case a.Snippet:return t.Snippet;case a.Color:return t.Color;case a.File:return t.File;case a.Reference:return t.Reference}return t.Property}function _(e){if(e)return{range:m(e.range),text:e.newText}}var w=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[".",":","<",'"',"=","/"]},enumerable:!1,configurable:!0}),e.prototype.provideCompletionItems=function(e,t,i,o){var a=e.uri;return this._worker(a).then((function(e){return e.doComplete(a.toString(),p(t))})).then((function(i){if(i){var o=e.getWordUntilPosition(t),a=new n(t.lineNumber,o.startColumn,t.lineNumber,o.endColumn),s=i.items.map((function(e){var t,n={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,range:a,kind:v(e.kind)};return e.textEdit&&(void 0!==(t=e.textEdit).insert&&void 0!==t.replace?n.range={insert:m(e.textEdit.insert),replace:m(e.textEdit.replace)}:n.range=m(e.textEdit.range),n.insertText=e.textEdit.newText),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(_)),e.insertTextFormat===u.Snippet&&(n.insertTextRules=r.CompletionItemInsertTextRule.InsertAsSnippet),n}));return{isIncomplete:i.isIncomplete,suggestions:s}}}))},e}();function k(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function y(e){if(e)return Array.isArray(e)?e.map(k):[k(e)]}var b=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.doHover(r.toString(),p(t))})).then((function(e){if(e)return{range:m(e.range),contents:y(e.contents)}}))},e}();function S(e){var t=r.DocumentHighlightKind;switch(e){case d.Read:return t.Read;case d.Write:return t.Write;case d.Text:return t.Text}return t.Text}var I=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.findDocumentHighlights(r.toString(),p(t))})).then((function(e){if(e)return e.map((function(e){return{range:m(e.range),kind:S(e.kind)}}))}))},e}();function C(e){var t=r.SymbolKind;switch(e){case l.File:return t.Array;case l.Module:return t.Module;case l.Namespace:return t.Namespace;case l.Package:return t.Package;case l.Class:return t.Class;case l.Method:return t.Method;case l.Property:return t.Property;case l.Field:return t.Field;case l.Constructor:return t.Constructor;case l.Enum:return t.Enum;case l.Interface:return t.Interface;case l.Function:return t.Function;case l.Variable:return t.Variable;case l.Constant:return t.Constant;case l.String:return t.String;case l.Number:return t.Number;case l.Boolean:return t.Boolean;case l.Array:return t.Array}return t.Function}var x=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,t){var n=e.uri;return this._worker(n).then((function(e){return e.findDocumentSymbols(n.toString())})).then((function(e){if(e)return e.map((function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:C(e.kind),tags:[],range:m(e.location.range),selectionRange:m(e.location.range)}}))}))},e}(),P=function(){function e(e){this._worker=e}return e.prototype.provideLinks=function(e,t){var n=e.uri;return this._worker(n).then((function(e){return e.findDocumentLinks(n.toString())})).then((function(e){if(e)return{links:e.map((function(e){return{range:m(e.range),url:e.target}}))}}))},e}();function R(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var F=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.format(r.toString(),null,R(t)).then((function(e){if(e&&0!==e.length)return e.map(_)}))}))},e}(),E=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){var i=e.uri;return this._worker(i).then((function(e){return e.format(i.toString(),function(e){if(e)return{start:p(e.getStartPosition()),end:p(e.getEndPosition())}}(t),R(n)).then((function(e){if(e&&0!==e.length)return e.map(_)}))}))},e}(),D=function(){function e(e){this._worker=e}return e.prototype.provideRenameEdits=function(e,t,n,r){var i=e.uri;return this._worker(i).then((function(e){return e.doRename(i.toString(),p(t),n)})).then((function(e){return function(e){if(!e||!e.changes)return;var t=[];for(var n in e.changes)for(var r=o.parse(n),i=0,u=e.changes[n];i<u.length;i++){var a=u[i];t.push({resource:r,edit:{range:m(a.range),text:a.newText}})}return{edits:t}}(e)}))},e}();var T=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,t,n){var i=e.uri;return this._worker(i).then((function(e){return e.getFoldingRanges(i.toString(),t)})).then((function(e){if(e)return e.map((function(e){var t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case c.Comment:return r.FoldingRangeKind.Comment;case c.Imports:return r.FoldingRangeKind.Imports;case c.Region:return r.FoldingRangeKind.Region}}(e.kind)),t}))}))},e}();var M=function(){function e(e){this._worker=e}return e.prototype.provideSelectionRanges=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.getSelectionRanges(r.toString(),t.map(p))})).then((function(e){if(e)return e.map((function(e){for(var t=[];e;)t.push({range:m(e.range)}),e=e.parent;return t}))}))},e}();function W(e){return{dispose:function(){return L(e)}}}function L(e){for(;e.length;)e.pop().dispose()}}}}));
