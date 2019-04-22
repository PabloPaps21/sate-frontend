module.exports = {
  pluginOptions: {
    s3Deploy: {
      awsProfile: 'sate',
      region: 'us-east-1',
      bucket: 'sate-website',
      createBucket: false,
      staticHosting: false,
      staticIndexPage: 'index.html',
      staticErrorPage: 'error.html',
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: false,
      enableCloudfront: false,
      uploadConcurrency: 5,
      pluginVersion: '3.0.0',
    },
  },
};
