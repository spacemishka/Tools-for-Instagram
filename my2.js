
require('./src/tools-for-instagram.js');

(async () => {

    console.log("\n1 -- LOGIN --\n".bold.underline);
    let ig = await login();
	await setAntiBanMode(ig);
    console.log("\n2 -- Get User Info -- \n".bold.underline);
    let info = await getUserInfo(ig, "spacemishkaphotography");
    console.log("User information, username: " + info.username);

    
    console.log("\n3 -- Get Followers in .json file -- \n".bold.underline);
    console.log("You can specify a max of iterations, like getFollowers(ig, Instargram, iterations = 2)\nEach iteration gets around 10.000 accounts".yellow);
    let userlist = await getFollowers(ig, 'spacemishkaphotography');
	//console.log(userlist.length);
	

    
    console.log("\n4 -- Trying to like URL --\n".bold.underline);
    //await likeUrl(ig, 'www.instagram.com/p/B1Jqqc3AS_0/');
    //await likeUrl(ig, 'https://www.instagram.com/p/B1Ele5pAHmg/');
	let post = getMediaUrlInfo(ig, 'https://www.instagram.com/p/B1Ele5pAHmg/')
	let mediaId = await urlToMediaId(ig, 'https://www.instagram.com/p/B1Ele5pAHmg/');
	await sleep(3);
	console.log(mediaId);
	let mediaInfo = await getMediaIdInfo(ig, mediaId);
	await sleep(2);
	;
	//console.log(post.username);
	let items = mediaInfo.items;
	//console.log(items[0]);
	let user = items[0]['user'];
	console.log(user.pk);
	await followById(ig, user.pk)
    //await likeUrl(ig, 'https://www.instagram.com/p/B1CZhsqgS1Y');
	
    process.exit();
    
})();
