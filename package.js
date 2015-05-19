Package.describe({
  name: 'hiukim:slack-client',
  version: '1.0.2',
  // Brief, one-line summary of the package.
  summary: 'Slack Real Time Messaging API',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/clionelabs/slack-client.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('slack-client.js', 'server');
  api.export('Slack', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('hiukim:slack-client');
  api.addFiles('slack-client-tests.js');
});

Npm.depends({
  'slack-client': '1.4.0'
});
