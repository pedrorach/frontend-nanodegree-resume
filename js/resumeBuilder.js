var bio = {
    "name": "John Doe",
    "role": "Web Developer",
    "contacts": {
        "mobile": "(999)555-3322",
        "email": "johndoe@hotmail.com",
        "github": "johndoe",
        "twitter": "@johndoe",
        "location": "Porto Alegre, Brazil"
    },
    "welcomeMessage": "Lorem ipsum dolor etc etc etc",
    "skills": ["HTML", "CSS", "Javascript", "Node.js", "D3", "MongoDB"],
    "biopic": "images/fry.jpg",
    "display": function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);
        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGitHub);
        $("#footerContacts").append(formattedGitHub);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedTwitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedMessage);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (skill in bio.skills) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkill);
            };
        };
    }
};

var work = {
    "jobs": [{
        "employer": "Acme, Inc.",
        "title": "Web Developer",
        "dates": "2011-2014",
        "location": "Mountain View, CA",
        "description": "Build awesome websites."
    }, {
        "employer": "Beta, Corp.",
        "title": "Full stack developer",
        "dates": "2015-present",
        "location": "Mountain View, CA",
        "description": "Build amazing web apps."
    }],
    "display": function() {
        if (work.jobs.length > 0) {
            $("#workExperience").append(HTMLworkStart);
            for (job in work.jobs) {
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                $(".work-entry:last").append(formattedEmployer + formattedTitle);
                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                $(".work-entry:last").append(formattedDates);
                var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
                $(".work-entry:last").append(formattedLocation);
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                $(".work-entry:last").append(formattedDescription);
            };
        };
    }
};

var projects = {
    "project": [{
        "title": "Classic Arcade Game Clone",
        "dates": "10/10/12 - 20/11/12",
        "description": "Frog game",
        "images": ["images/197x148.gif", "images/197x148.gif"]
    }, {
        "title": "Neighborhood Map",
        "dates": "01/01/13 - 20/01/13",
        "description": "Map with cool places in the Neighborhood",
        "images": ["images/197x148.gif", "images/197x148.gif"]
    }],
    "display": function() {
        if (projects.project.length > 0) {
            $("#projects").append(HTMLprojectStart);
            for (proj in projects.project) {
                var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
                $(".project-entry:last").append(formattedTitle);
                var formattedDates = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
                $(".project-entry:last").append(formattedDates);
                var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
                $(".project-entry:last").append(formattedDescription);
                if (projects.project[proj].images.lenght > 0) {
                    for (image in projects.project[proj].images) {
                        var formattedImage = HTMLprojectImage.replace("%data%", projects.project[proj].images[image]);
                        $(".project-entry:last").append(formattedImage);
                    }
                }
            };
        };
    }
};

var education = {
    "schools": [{
        "name": "Udacity",
        "degree": "Front End Nano Degree",
        "dates": 2012,
        "location": "Mountain View, CA",
        "major": "Javascript"
    }, {
        "name": "Udacity",
        "degree": "Full Stack Nano Degree",
        "dates": 2014,
        "location": "Mountain View, CA",
        "major": "Node.js"
    }],
    "onlineClasses": [{
        "title": "Javascript Basics",
        "school": "Udacity",
        "dates": 2015,
        "url": "http://www.udacity.com"
    }, {
        "title": "Jquery",
        "school": "Udacity",
        "dates": 2015,
        "url": "http://www.udacity.com"
    }],
    "display": function() {
        if (education.schools.length > 0) {
            $("#education").append(HTMLschoolStart);
            for (school in education.schools) {
                var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
                $(".education-entry:last").append(formattedName);
                var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                $(".education-entry:last").append(formattedDegree);
                var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
                $(".education-entry:last").append(formattedDates);
                var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                $(".education-entry:last").append(formattedLocation);
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
                $(".education-entry:last").append(formattedMajor);
            };
        };
        if (education.onlineClasses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLonlineStart);
            for (onlineClass in education.onlineClasses) {
                var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClass].title);
                $(".education-online-entry:last").append(formattedTitle);
                var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClass].school);
                $(".education-online-entry:last").append(formattedSchool);
                var formattedDates = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineClass].dates);
                $(".education-online-entry:last").append(formattedDates);
                var formattedURL = HTMLonlineURL.replace("%data%", education.onlineClasses[onlineClass].url);
                $(".education-online-entry:last").append(formattedURL);
            };
        };
    }
};

bio.display();
work.display();
projects.display();
education.display();
$("#map-div-map").append(googleMap);