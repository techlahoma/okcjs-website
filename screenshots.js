var system = require("system");
var async = require("async");
var webpage = require("webpage");

var destination = system.env["CIRCLE_ARTIFACTS"] || "screenshots";
var sizes = [
	{ width: 1024, height: 768 }, // Desktop
	{ width: 750,  height: 1334}  // iPhone 6
];

var queue = async.queue(handle);
queue.drain = done;
queue.pause();
primeTheQueue();

function primeTheQueue() {
	queue.push({name: "home", url: "http://localhost:4000/"}, errorOut);
	
	var home = webpage.create();
	home.open("http://localhost:4000/", function() {
		var firstPost = this.evaluate(function() {
			console.log("Getting first article");
			return document.querySelector("section#main article:first-child a.article-title");
		});
		
		queue.push({name: "post", url: firstPost.href}, errorOut);
		queue.resume();
	});
}

function open(task, callback) {
	console.log("Opening " + task.name);
	var page = webpage.create();
	
	page.open(task.url, function() {
		for(var i = 0; i < sizes.length; i++) {
			queue.push({name: task.name, size: sizes[i], page: this});
		}
		callback();
	});
}

function renderPage(task, callback) {
	console.log("Rendering " + task.name + " at " + task.size.width + "x" + task.size.height);
	var page = task.page;
	page.viewportSize = task.size;
	page.clipRect = { top: 0, left: 0, width: task.size.width, height: (task.size.height * 2) };
	
	var renderPath = destination + "/" + task.name + "-" + page.clipRect.width + "x" + page.clipRect.height + ".png"
	page.render(renderPath);
	
	callback();
}

function handle(task, callback) {
	if(task.page === undefined) {
		open(task, callback);
	} else {
		renderPage(task, callback);
	}
}

function done() {
	console.log("Done");
	phantom.exit();
}

function errorOut(ex) {
	if(ex !== undefined) {
		console.log("ERROR on task " + ex);
		phantom.exit();
	}
}