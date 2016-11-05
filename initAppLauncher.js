var activateApp = function (appName) {
  try {
    Application(appName).activate();
  } catch (e) {
    console.log(e);
  }
};

var getApplicationList = function () {
  var currentApp = Application.currentApplication();
  currentApp.includeStandardAdditions = true;

  var initAppText = currentApp.doShellScript('cat $HOME/.initapp');
  return initAppText.split(/\r\n|\r|\n/);
};

function run(argv) {
  getApplicationList().forEach(function (appName) {
    activateApp(appName)
  });
  console.log('done!');
}
