
require('../src/tools-for-instagram.js');


(async () => {
    //WARNING --- THIS BOT IS CURRENTLY an idea in progress
    // https://github.com/linkfy/Tools-for-Instagram/wiki/Bot-1-%5BDoing%5D

    // 81 likes per day
    // 45 Follows per day
    try {	
    let likesPerInterval = 12;
    let followsPerInterval = 2;
    let waitMinutesBetweenLikes = 2;
    let waitMinutesBetweenFollows = 3;


    
    //9 Intervals
    let intervals = [
        ["7:05",    "7:16"],    // Wake up [10m]
        ["7:40",    "7:51"],    // Breakfast [10m]
        ["8:30",    "8:41"],    // In the train [10m] || Job starts at 9am
		["10:36",    "10:51"],  // Breakfast break
		["12:48",    "13:20"],  // Back home from work [10m]
        ["13:30",    "13:41"],  // Back home from work [10m]
        ["14:40",    "14:51"],  // Launch [10m]
        ["16:45",    "16:56"],  // Go to work again [10m] || Job starts at 4pm
		["17:45",    "17:56"],
		["18:45",    "19:26"],  // Go to work again [10m] || Job starts at 4pm
        ["20:20",    "20:41"],  // In train to go home [10m]
        ["21:45",    "21:56"],  // After Dinner [10m]
        ["23:10",    "23:51"],  // Go to Sleep [10m]
		["00:15",    "00:31"],  // Go to Sleep [10m]
		["02:40",    "03:10"],  // Go to Sleep [10m]
		["05:20",    "05:35"],  // Go to Sleep [10m]
    ];

    let intervalsUnFollow = [
        ["7:45",    "8:20"],    // Wake up [10m]
		["12:48",    "13:20"],  // Back home from work [10m]
        ["13:30",    "13:41"],  // Back home from work [10m]
        ["16:40",    "17:10"],  // Launch [10m]
        ["16:45",    "16:56"],  // Go to work again [10m] || Job starts at 4pm
		["17:45",    "17:56"],
		["18:45",    "19:26"],  // Go to work again [10m] || Job starts at 4pm
        ["20:20",    "20:41"],  // In train to go home [10m]
        ["21:45",    "22:08"],  // After Dinner [10m]
    ];

    //let hashtagArray = ["pinhole", "landscapephotography","blackandwhitephotography" ,"yashicaelectro35", "canonetql17giii", "balticsea", "ruhrgebiet", "sunrise", "photography", "architecture", "garden", "architecturelovers", "instagoodmyphoto", "berlinphotography", "Berlin", "visit_berlin", "Toronto"];
    /*let hashtagArray = ["filmisnotdead ","filmisalive ","fujiextra400 ","shotonfilm ","shotfilm ","ishootfilm ","grainisgood ","fujifilm ","graffiti ","berlinstreetart ","streetart ","streetartphotography ","streetarteverywhere ","graffiti ","graffitiart ","urbanphotography ","urbanphotographer ","wanderlust ","berlin ","instagoodmyphoto ","berlinphotography ","visit_berlin ","officialfanofberlin ","lostplaces ","modernart ","coronatime ","abandonedplaces","silberrafilm","silberra","silberracinema52xx","kodakdoublex","olympusxa","olympus","stayclassy","stayclassic","shootmorefilm","ishootfilm","analogphotography","istillshootfilm","analogphotography","grainisgood","filmisnotdead","filmisalive","blackandwhite","blackandwhitephotography","prague","praha","travel","nature","naturelover","naturephotograpy","wanderlust","streetphotography"];
	
	let hashtagArray = [
	"lostplaces","nikonf90x","ilforddelta100", "ilfordddx","ilfordfp4","pinholephotography","goodmanzone","pinhole","lomography","analogphotography","blackandwhitephotography","apx100","berlinsky","ilford","skyphotography","grainisgood","ishootfilm","stayclassy","stayclassic","believeinfilm","casualphotography","minimalism"
	
	]*/
	let hashtagArray = [
	"ruegen","nikonf100","nikonf3","nikonfm","nikonem","canont90","nikonf4", "cameraobscura"
	
	]

	let hashtagToppics = [
	"rottenplaces","lostplaces", "pinhole", "casualphotography", "naturephotograpy", "streetart", "blackandwhitephotography", "landscapephotography", "urbanphotography"
	
	]
	
	let hashtagPlaces = [
	"smolensk","moscow","berlin","barcelona","marbella", "rome", "roma", "paris", "prague","praha"
]
	let hashtagTec = [
	"nikonf100", "nikonf3", "nikonf4", "nikonf2", "nikonf90x", "yashicaelectro35", "prakticamtl5b", "prakticab200", "prakticabc1", "canonetql17giii"
	]
	
	let hasttagFilm = [
	"kodachrome", "fujiextra400", "fujivelvia", "agfavista200", "kodakgold200", "silberrau200", "ilfordfp4", "apx100", "ilforddelta100", "kodaktrix", "kodakdoublex", "adoxsilvermax100", "kodakvision3", "fomapan", "ilfordhp5"
	
	]
	
	
    let ig = await login();

    let a = await getFollowers(ig, 'spacemishkaphotography');
	let b = await getFollowing(ig, 'spacemishkaphotography');
	let followers = await readFollowers(ig, 'spacemishkaphotography');
	let following = await readFollowing(ig, 'spacemishkaphotography');
    let notfollowing =[];

	for(var fi in b){
		//console.log(fi+": "+following[fi].pk);
		var found = false;
		for(var fe in a){
			if(followers[fe].pk == following[fi].pk){
				found = true;
				console.log('found '+ following[fi].username);
				break;
			}
			
		}
		if(found==false){
			console.log('not found '+following[fi].username);
			notfollowing.push(following[fi].pk);
		}
    
    }
	//await removeCookie(ig);
	//await setAntiBanMode(ig);
    let likeInterval = likeRecentHashtagsByIntervals(
        ig,
        hashtagTec,
        intervals, 
        likesPerInterval, 
        waitMinutesBetweenLikes);

    let followInterval = followRecentHashtagsByIntervals(
        ig,
        hashtagTec,
        intervals, 
        followsPerInterval, 
        waitMinutesBetweenFollows);

    let unfollowUser = unFollowUserByIntervall(
        ig,
        notfollowing,
        intervalsUnFollow,
        followsPerInterval,
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
    console.log()
  }
})();