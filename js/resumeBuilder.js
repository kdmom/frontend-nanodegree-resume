var work = {
	"jobs": [
		{"employer" : "ATT",
		 "title": "Technical Architect",
		 "location" : "St. Louis, Mo",
		 "dates": "1996-Present",
		 "description": "FIRST design Team"
		},
		{"employer" : "CSC",
		 "title": "Programmer",
		 "location" : "OFallon, Illinois",
		 "dates": "1992-1996",
		 "description": "C Programmer"
		}
	],
	"display" : function() {
		for (j in work.jobs)
		{
			$("#workExperience").append (HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[j].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[j].title);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[j].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[j].description);
			var formattedEmpTitle = formattedEmployer + formattedTitle;
			var formattedWork = formattedEmpTitle + formattedDates + formattedLocation + formattedDescription;

			$(".work-entry:last").append(formattedWork);
		}

	}
};

var projects = {
	"projects" : [
		{"title": "RCMAC Gateway",
		 "dates": "1996-2014",
		 "description": "Automate RCMAC fallout",
		 "images": ["images/rg.jpg"]
		},
		{"title": "FIRST",
		 "dates": "2014-Present",
		 "description": "Improve error fallout for multiple apps",
		 "images": ["images/first.jpg"]
		}
	],
	"display" : function () {
		$("#projects").append(HTMLprojectStart);

		for (proj in projects.projects){
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[proj].title);
			$(".project-entry:last").append(formattedProjectTitle);

			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
			$(".project-entry:last").append(formattedProjectDates);

			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
			$(".project-entry:last").append(formattedProjectDescription);

			if (projects.projects[proj].images.length > 0){
				for (image in projects.projects[proj].images){
					var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]);
					$(".project-entry:last").append(formattedProjectImages);
				}
			}
		}
	}
};

var bio = {
	"name": "Julie DeConcini",
	"role": "Web Developer",
	"contacts": {
		"mobile" : "618-550-8058",
		"email": "jdeconcini@sbcglobal.com",
		"github" : "kdmom",
		"twitter": "@jddd",
		"location": "Glen Carbon, Il"},
		"welcomeMessage": "welcome to my page",
	"skills": ["web design", "c programming", "client server design"],
	"bioPic" : "images/fry.jpg",
	"display" : function() {
		$("#header").append(HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage));

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedTwitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);

		$("#header").append(HTMLskillsStart);
		for(i in bio.skills){
			$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
		}

		$("#header").prepend(HTMLbioPic.replace("%data%",bio.bioPic));
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole =  HTMLheaderRole.replace("%data%", bio.role);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#main").append(internationalizeButton);
	}
};

var education = {
	"schools" : [{
		"name" : "SIUE",
		"location" : "Edwardsville, Il",
		"degree" : "BS",
		"majors"  : ["ComputerScience"],
		"dates" :"1988-1992",
		"url": "www.siue.edu"
		},
		{
		"name" : "Collinsville High School",
		"location" : "Collinsville, Il",
		"degree": "HS",
		"majors"  : ["GeneralEducation"],
		"dates" :"1984-1988",
		"url" : "www.kahoks.org"
		}	
	],
	"onlineCourses" : [{
		"title" : "Web Design NanoDegree",
		"school" : "Udacity",
		"dates" : "2014-2015",
		"url" : "www.udacity.com"
	}
	],
	"display" : function () {
			for (i in education.schools)
			{
				$("#education").append (HTMLschoolStart);
				
				var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
				var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
				var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
				var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
				var formattedSchoolUrl = HTMLschoolURL.replace("%data%", education.schools[i].url);
				var formattedEducation = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor + formattedSchoolUrl;

				$(".education-entry:last").append(formattedEducation);
			}

			for (j in education.onlineCourses)
			{
				$("#education").append(HTMLonlineClasses);
				$("#education").append (HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
				var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
				var formattedOnlineEducation = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineUrl;
				$(".education-entry:last").append(formattedOnlineEducation);
			}
	}
};


bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

var name = bio.name;

function inName(name)
{
	var nameArray = name.trim().split(" ");
	var firstName = nameArray[0];
	var lastName = nameArray[1];

	firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
	lastName = lastName.toUpperCase();
	var internName = firstName + " " + lastName;

	return (internName);
}

$("#mapDiv").append(googleMap);
