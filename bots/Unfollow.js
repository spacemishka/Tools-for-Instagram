
require('../src/tools-for-instagram.js');


(async () => {
    //WARNING --- THIS BOT IS CURRENTLY an idea in progress
    // https://github.com/linkfy/Tools-for-Instagram/wiki/Bot-1-%5BDoing%5D

    // 81 likes per day
    // 45 Follows per day
	
    let likesPerInterval = 12;
    let followsPerInterval = 2;
    let waitMinutesBetweenLikes = 2;
    let waitMinutesBetweenFollows = 3;
    
    //9 Intervals
    let intervals = [
        ["7:05",    "7:16"],    // Wake up [10m]
        ["7:40",    "7:51"],    // Breakfast [10m]
        ["8:30",    "8:41"],    // In the train [10m] || Job starts at 9am
		["12:48",    "13:20"],  // Back home from work [10m]
        ["13:30",    "13:41"],  // Back home from work [10m]
        ["14:40",    "14:51"],  // Launch [10m]
        ["16:45",    "16:56"],  // Go to work again [10m] || Job starts at 4pm
		["18:45",    "19:56"],  // Go to work again [10m] || Job starts at 4pm
        ["20:20",    "20:41"],  // In train to go home [10m]
        ["21:45",    "21:56"],  // After Dinner [10m]
        ["23:10",    "23:21"],  // Go to Sleep [10m]
		["00:15",    "00:31"],  // Go to Sleep [10m]
		["02:40",    "03:10"],  // Go to Sleep [10m]
		["05:20",    "05:35"],  // Go to Sleep [10m]
    ];

    //let hashtagArray = ["pinhole", "landscapephotography","blackandwhitephotography" ,"yashicaelectro35", "canonetql17giii", "balticsea", "ruhrgebiet", "sunrise", "photography", "architecture", "garden", "architecturelovers", "instagoodmyphoto", "berlinphotography", "Berlin", "visit_berlin", "Toronto"];
    let hashtagArray = ["silberrafilm","silberra","silberracinema52xx","kodakdoublex","olympusxa","olympus","stayclassy","stayclassic","shootmorefilm","ishootfilm","analogphotography","istillshootfilm","analogphotography","grainisgood","filmisnotdead","filmisalive","blackandwhite","blackandwhitephotography","prague","praha","travel","nature","naturelover","naturephotograpy","wanderlust","streetphotography"];
    let ig = await login();
	//await removeCookie(ig);
	//await setAntiBanMode(ig);
	let a = await getFollowers(ig, 'spacemishkaphotography');
	let b = await getFollowing(ig, 'spacemishkaphotography');
	//let followers = await readFollowers(ig, 'spacemishkaphotography');
	//let following = await readFollowing(ig, 'spacemishkaphotography');
	function compare(a, b) {
	  return $.grep(b, function(el) {
		  return !data1.some(function(elToCompare) {
				return elToCompare.pk === el.pk && elToCompare.username === el.username;
			});
	  });
	}
    process.on('unhandledRejection', async function(err) {
        console.log(err.response.body);
        if(err.name == "IgActionSpamError") {
            console.log("Spam Error, trying to regenerate the cookie".red);
            await removeCookie(ig);
            ig = await login();
        }
    });
})();