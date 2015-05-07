var name = "Samarth Paboowal";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Front-End Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name": "Samarth Paboowal",
	"role": "Front-End Developer",
	"image": "images/fry.jpg",
	"contacts": {
		"mobile": "+91-7727864393",
		"email": "samarthpaboowal@yahoo.co.in",
		"github": "samarth4487",
		"facebook": "samarth paboowal",
		"linkedin": "samarth paboowal",
		"location": "Jaipur, Rajasthan"
	},
	"welcomemessage": "Welcome to the frone end world",
	"skills": ["programming", "everything"]
}

// var work = {
// 	"jobs": [
// 	]
// }

// var education = {
// 	"schools": [
// 	{
// 		"name": "",
// 		"location": "",
// 		"degree": "",
// 		"majors": "",
// 		"dates": ""
// 	},
// 	{
// 		"name": "",
// 		"location": "",
// 		"degree": "",
// 		"majors": "",
// 		"dates": ""		
// 	}
// 	]

// 	"online courses": [
// 	{
// 		"name": "",
// 		"location": "",
// 		"degree": "",
// 		"majors": "",
// 		"dates": ""
// 	}
// 	]
// }

// var projects = {
// 	"projects": [
// 	{
// 		"title": "",
// 		"dates": "",
// 		"description": "",
// 		"images": []
// 	},

// 	{
// 		"title": "",
// 		"dates": "",
// 		"description": "",
// 		"images": []	
// 	}
// 	]	
// }

var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedmobile);
var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedemail);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedgithub);
var formattedlinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
$("#topContacts").append(formattedlinkedin);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedlocation);

var formattedimage = HTMLbioPic.replace("%data%", bio.image);
$("#header").append(formattedimage);

var formattedline = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);
$("#header").append(formattedline);

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	var formattedskills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedskills);
	var formattedskills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedskills);

}