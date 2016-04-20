app.controller('MainController', ['$scope', function($scope) {
  $scope.program = 
  	{ 
    	series: "Sherlock", 
    	series_img: "https://avatars.mds.yandex.net/get-ynews/28274/23752447c95440effeab745c9668fca4/380x214", 
    	genre: "Crime drama", 
    	season: 3, 
    	episode: "The Empty Hearse", 
      description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges 					against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a 								girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is 					rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of 					Parliament during an all night sitting on Guy Fawkes Night.", 
    	datetime: new Date(2014, 11, 31, 21, 00, 00, 00) 
    };
    
  $scope.movie =
    { 
    	series: "Broardwalk Empire", 
    	series_img: "http://ecx.images-amazon.com/images/I/514McPjkQNL._AC_UL320_SR240,320_.jpg", 
    	genre: "Crime drama", 
    	season: 5, 
    	episode: "Start", 
      description: "Boardwalk Empire is a period drama focusing on Enoch Nucky Thompson (based on the historical Enoch L. Johnson), a political figure who rose to prominence and controlled Atlantic City, New Jersey, during the Prohibition period of the 1920s and 1930s. Nucky acts with historical characters in both his personal and political life, including mobsters, politicians, government agents, and the common folk who look up to him. The federal government also takes an interest in the bootlegging and other illegal activities in the area, sending agents to investigate possible mob connections but also looking at Nucky's lifestyleexpensive and lavish for a county political figure. The final season jumps ahead seven years, to 1931, as Prohibition nears its end", 
    	datetime: new Date(2014, 10, 21, 20, 00, 00, 00) 
    };
    
  
}]);