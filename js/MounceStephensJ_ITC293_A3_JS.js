/**
 * ITC293 - Introduction to the web
 * Assessment 4 - HTML, CSS, Design and Java Script
 * 
 * Jacob Mounce-Stephens
 * 1/6/2024
 * 
 * This file contains all JavaScript that is used for the website form.
 */

// Setup an onLoad event to display an alert when the page
// has finished loading
function pageLoaded() {
	alert("Welcome to the VeryReal Corporation/Ltd. - Newsletter Signup");
}

// Validate the form when the 'submit' button is pressed
function validateForm() {
	var form = document.forms["email-form"]; // Store a reference to the form

	// Check if both first and last name are not empty
	if (!form.elements["input-text-first-name"].value & !form.elements["input-text-last-name"].value) {
		alert("The first name and last name fields cannot be empty!");
		return false; // Return false validation
	}

	// Check if just first name isn't empty
	else if (!form.elements["input-text-first-name"].value) {
		alert("The first name field cannot be empty!");
		return false; // Return false validation
	}

	// Check if just last name isn't empty
	else if (!form.elements["input-text-last-name"].value) {
		alert("The last name field cannot be empty!");
		return false; // Return false validation
	}

	// No issues found, return true
	return true;
}
