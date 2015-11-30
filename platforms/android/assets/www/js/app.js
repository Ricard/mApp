angular.module('mApp', ['ionic', 'backand', 'mAppControllers', 'mAppServices'])

.run(function($ionicPlatform) {
  // $ionicPlatform.ready(function() {
  //   // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
  //   // for form inputs)
  //   if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
  //     cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
  //     cordova.plugins.Keyboard.disableScroll(true);
  //
  //   }
  //   if (window.StatusBar) {
  //     // org.apache.cordova.statusbar required
  //     StatusBar.styleDefault();
  //   }
  // });
})

.config(function($stateProvider, $urlRouterProvider, BackandProvider) {

  // Backand authentification
  BackandProvider.setAppName('mapp');
  BackandProvider.setSignUpToken('90bd3bc8-d123-4d06-9c57-38e0f24414f0');
  BackandProvider.setAnonymousToken('20bbd01c-0dff-43db-bcf1-a0d7e88f3692');

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
    // templateUrl: 'templates/blank2.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.map', {
    url: '/map',
    views: {
      'tab-map': {
        // templateUrl: 'templates/tab-dash.html',
        templateUrl: 'templates/map.html',
        // controller: 'DashCtrl'
        controller: 'MapCtrl'
      }
    }
  })

  .state('tab.colleagues', {
      url: '/colleagues',
      views: {
        'tab-colleagues': {
          templateUrl: 'templates/tab-colleagues.html',
          controller: 'ColleaguesCtrl'
        }
      }
    })
    // .state('tab.chat-detail', {
    //   url: '/chats/:chatId',
    //   views: {
    //     'tab-chats': {
    //       templateUrl: 'templates/chat-detail.html',
    //       controller: 'ChatDetailCtrl'
    //     }
    //   }
    // })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html'
        // ,controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/map');

});
