Package.describe({
  name: 'dataflows:typescript-utils',
  summary: 'Typescript utils for core Meteor functionalities',
  version: '0.1.4',
  git: 'https://github.com/dataflows/meteor-meteor-typescript-utils.git'
});

Package.onUse(function (api) {
  api.export('meteorts', ['server', 'client']);

  api.use([
    'stevezhu:lodash@3.7.0'
  ], ['server', 'client']);

  api.addFiles('dist/meteor-typescript-utils.js', ['server', 'client']);

});
