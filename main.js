/********************
 * YOUR CODE BELOW! *
 ********************/
function moreThan5 (num) {
  return num > 5;
}

function topScore (topScore, score) {
  return topScore > score;
}

function isInDanger (grade) {
  return grade >= 60 && grade <= 71;
}

function isCoasting (grade) {
  return grade >=72 && grade <= 83;
}

function isSucceeding (grade) {
  return grade >=84 && grade <=92;
}

function isFailing (grade) {
  return grade < 60;
}

function isAcing (grade) {
  return grade > 92;
}

function isStudent (strStudentRole) {
  return strStudentRole === 'student';
}

function isTeacher (strTeacherRole) {
  return strTeacherRole === 'teacher';
}

function isAdmin (strAdminRole) {
  return strAdminRole === 'admin';
}

function isElementary (strElementaryLevel) {
  return strElementaryLevel === 'elementary';
}

function isMiddleSchoolTeacher (strMiddleSchoolLevel, numLevel) {
  return strMiddleSchoolLevel === 'teacher' && numLevel >= 6 && numLevel <= 8;
}

function notAnElementarySchoolAdministrator (notElementary, notSchoolAdministrator) {
  return notElementary !== 'elementary' || notSchoolAdministrator !== 'admin';
}

function differentPeople (name1, name2) {
  return name1 !== name2;
}
/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof topScore === 'undefined') {
  topScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}

if (typeof differentPeople === 'undefined') {
  differentPeople = undefined;
}


module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
  differentPeople,
}