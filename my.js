
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
    //await likeUrl(ig, 'https://www.instagram.com/p/B1CZhsqgS1Y');

    
    console.log("\n5 -- Trying to get recent hashtag list and like the first item -- \n".bold.underline);
	var hashtags = ["officialfanofberlin", "potsdam", "ruhrgebiet", "sunrise", "photography", "architecture","canont90", "canona1","canonae1" ,"prakticab200","yourshotphotographer", "japangram", "japanlife", "visitjapanjp", "bestjapanpics", "newyorkcity", "berlinpage", "ptk_japan", "iceland", "garden", "architecturelovers", "instagoodmyphoto", "berlinphotography", "Berlin", "visit_berlin", "Toronto"];
	hashtags.forEach(myRecentHashtagList);
	let posts = await recentHashtagList(ig, "nikon");
	await likePost(ig, posts[0]);
	async function myRecentHashtagList(value, index, array) {
		let posts = await recentHashtagList(ig, value, true);
		console.log('###RECENT recentHashtagList####'+posts.length);
		for(var i = 0; i < 3; i++){
			console.log('###RECENT recentHashtagList#### '+posts[i]);
			await likePost(ig, posts[i], 6, 3, 2);
			//await sleep(Math.floor((Math.random() * 400) + 190) );
		}
		//await sleep(Math.floor((Math.random() * 400) + 190) );
	}
    
	
    
    console.log("\n6 -- Trying to get top hashtag list and like the first item -- \n".bold.underline);
	//hashtags.forEach(myTopHashtagList);
	async function myTopHashtagList(value, index, array) {
		posts = await topHashtagList(ig, value, true);
		console.log('###TOP topHashtagList####'+posts.length);
		for(var i = 0; i < 3; i++){
			console.log('###TOP topHashtagList#### '+posts[i]);
			await likePost(ig, posts[i], 6, 3, 2);
			//await sleep(Math.floor((Math.random() * 600) + 190));
		}
		//await sleep(Math.floor((Math.random() * 600) + 190) );
	}



    
    console.log("\n7 -- Trying to get recent location list and like the first item -- \n".bold.underline);
    console.log("Getting the most accurated Location...\n[To get a randomized location of the search result specify 'true' at the end of function]\n- Example: recentLocationList(ig, 'Spain', true);".yellow);
	let loctags = ["Oslo","London","Rome","Madrid"]
	loctags.forEach(myRecentLocationList);
	async function myRecentLocationList(value, index, array) {
		posts = await recentLocationList(ig, value);
		console.log('###RECENT recentLocationList####'+posts.length);
		for(var i = 0; i < 3; i++){
			console.log('###RECENT recentLocationList#### '+ typeof posts[i]);
			await likePost(ig, posts[i], 6, 3, 2);
			//await sleep(Math.floor((Math.random() * 500) + 200));
		}
		//await sleep(Math.floor((Math.random() * 500) + 200));
	}
	await sleep(5);

    
    console.log("\n8 -- Trying to get top location list and like the first item -- \n".bold.underline);
    console.log("Getting the most accurated Location...\n[To get a randomized location of the search result specify 'true' at the end of function]\n- Example: topLocationList(ig, 'Spain', true);".yellow);
	loctags.forEach(myTopLocationList);
	async function myTopLocationList(value, index, array) {
		let posts = await topLocationList(ig, value);
		console.log('###TOP topLocationList####'+posts.length);
		for(var i = 0; i < 3; i++){
			console.log('###RECENT recentLocationList#### '+typeof posts[i]);
			await likePost(ig, posts[i], 6, 3, 2);
			//await sleep(Math.floor((Math.random() * 800) + 300));
		}
		//await sleep(Math.floor((Math.random() * 800) + 300));
	}
	


    
    console.log("\n-- 9: Saving posts into a file \n".bold.underline);
    //posts = await recentHashtagList(ig, "nikonf2,analogphotography");
    //await savePosts(ig, posts, "dogs_posts");
    //posts = await recentHashtagList(ig, "nikonf2,analogphotography");
    //await savePosts(ig, posts, "cats_posts");
	
    
    console.log("\n-- 10: Follow User by username--\n".bold.underline);
    //await followUser(ig, 'Instagram');
    await sleep(5);

    
    console.log("\n-- 11: Unfollow User by username --\n".bold.underline);
    //await unfollowUser(ig, 'Instagram');
    

    console.log("\nProcess done!\n".green);

    // If ONLINE_MODE is enabled, this example will run until we send an exit signal
    process.exit();
    
})();
