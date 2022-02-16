'use strict';

module.exports = function (nodecg) {
	// nodecg.log.info('Hello, from your bundle\'s extension!');
	// nodecg.log.info('I\'m where you put all your server-side code.');
	// nodecg.log.info(`To edit me, open "${__filename}" in your favorite text editor or IDE.`);
	// nodecg.log.info('You can use any libraries, frameworks, and tools you want. There are no limits.');
	// nodecg.log.info('Visit https://nodecg.com for full documentation.');
	// nodecg.log.info('Good luck!');
	
	nodecg.Replicant('boxleft', { defaultValue: {"src": "", "type": ""}});
	nodecg.Replicant('leftsuper', { defaultValue: {"title": "", "name": "", "position": "", "phone": false}});

	nodecg.Replicant('rightsuper', { defaultValue: {"title": "", "name": "", "position": "", "phone": false}});
	nodecg.Replicant('promoleft', { defaultValue: {"src": "", "type": "", "text": ""}});
	nodecg.Replicant('promoright', { defaultValue: {"src": "", "type": "", "text": ""}});

	nodecg.Replicant('cg', { defaultValue: {"assetType": "", "src": ""}});

	nodecg.Replicant('topleftfinger', { defaultValue: {"main": "", "sub": ""}});
	nodecg.Replicant('bottomleftfinger', { defaultValue: {"main": "", "sub": ""}});
	nodecg.Replicant('toprightfinger', { defaultValue: {"main": "", "sub": ""}});
	nodecg.Replicant('bottomrightfinger', { defaultValue: {"main": "", "sub": ""}});

	nodecg.Replicant('live', { defaultValue: {"main": "", "sub": "", "color": "red"}});

	nodecg.Replicant('clearall', { defaultValue: {"clear": false}});

	// LEFT TO RIGHT
	
	nodecg.Replicant('stripeleft', { defaultValue: {"main": "", "sub": "", "titleSize": "Big"}});

	nodecg.Replicant('counterleft', { defaultValue: {"amount": "", "text": ""}});
	
	

	nodecg.Replicant('tickerleft', { defaultValue: {"main": "", "sub": ""}});
	
	// RIGHT TO LEFT
	nodecg.Replicant('boxright', { defaultValue: {"src": "", "type": ""}});
	nodecg.Replicant('striperight', { defaultValue: {"main": "", "sub": ""}});

	nodecg.Replicant('counterright', { defaultValue: {"amount": "", "text": ""}});
	
	

	nodecg.Replicant('tickerright', { defaultValue: {"main": "", "sub": ""}});

	nodecg.Replicant('leftroller', { defaultValue: {"page": ""}});
	nodecg.Replicant('centerroller', { defaultValue: {"page": ""}});
	nodecg.Replicant('rightroller', { defaultValue: {"page": ""}});
	
	// nodecg.Replicant('textReplicant'/*, { defaultValue: "Welcome To This Stream!"}*/)
	// nodecg.Replicant('titleSuper'/*, { defaultValue: "Welcome To This Stream!"}*/)
	// console.log("Replicant is: ", nodecg.Replicant('titleSuper'))
};




