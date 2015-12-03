//all the API integrating for cart
uberWearModule.factory('Cart', function($resource){
  return $resource('/cart/:action',
    {action: '@action'},
    {
      'add': {method: 'POST', params: {action: ''}},
      'delete': {method: 'DELETE', params: {action: ''}},
      'get': {method: 'GET', params: {action: 'data'}}
    }
  )
});

//all the API integrating for cart
uberWearModule.factory('Order', function($resource){
  return $resource('/order/:id',
    {id: '@id'},
    {
      'add': {method: 'POST', params: {id: ''}}
    }
  )
});