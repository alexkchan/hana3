Template.home.helpers({ 

    getABURL: function(){
    // return Posts.find().count();
    
    var randomNum = Math.random();

    if(randomNum > 0.5)
    {
      woopra.track("versionA");
      return "/best";
    }
    else
    {
	  woopra.track("versionB");
      return "/new";
    }
  }
});

