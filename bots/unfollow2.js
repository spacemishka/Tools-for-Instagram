
require('../src/tools-for-instagram.js');

(async () => {
	let likesPerInterval = 12;
    let followsPerInterval = 2;
    let waitMinutesBetweenLikes = 2;
    let waitMinutesBetweenFollows = 3;
	let intervalsUnFollow = [
        ["7:45",    "8:20"],    // Wake up [10m]
		["12:48",    "13:20"],  // Back home from work [10m]
        ["13:30",    "13:41"],  // Back home from work [10m]
        ["16:40",    "17:10"],  // Launch [10m]
        ["16:45",    "16:56"],  // Go to work again [10m] || Job starts at 4pm
		["17:45",    "17:56"],
		["18:45",    "19:26"],  // Go to work again [10m] || Job starts at 4pm
        ["20:20",    "20:41"],  // In train to go home [10m]
        ["21:00",    "22:08"],  // After Dinner [10m]
    ];

	try {
	let ig = await login();
	//let a = await getFollowers(ig, 'spacemishkaphotography');
	//let b = await getFollowing(ig, 'spacemishkaphotography');
	let followers = await readFollowers(ig, 'spacemishkaphotography');
	let following = await readFollowing(ig, 'spacemishkaphotography');
	let notfollowing =[];
	for(var fi in followers){
		//console.log(fi+": "+following[fi].pk);
		var found = false;
		for(var fe in following){
			
			if(typeof followers[fe] !== 'undefined' && typeof following[fi] !== 'undefined'){
				if(followers[fe].pk == following[fi].pk){
					found = true;
					//console.log('found '+ following[fi].username);
					break;
				}

			}
			
		}
		if(found==false){
			//console.log('not found '+following[fi].username);
			notfollowing.push(following[fi]);
		}
	}
	let unfollowUser = unFollowUserByIntervall(
        ig,
        notfollowing,
        intervalsUnFollow,
        likesPerInterval,
        waitMinutesBetweenFollows
    )

	
    process.on('unhandledRejection', async function(err) {
        console.log(err.response.body);
        if(err.name == "IgActionSpamError") {
            console.log("Spam Error, trying to regenerate the cookie".red);
            await removeCookie(ig);
            ig = await login();
        }
    });

	
}
catch (err) {
    console.log("errrrrr ");
  }
})();
