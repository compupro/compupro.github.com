var header_blurbs = [
    "Programming projects related to linguistics, gaming, and anime.",
    "Wired projects for wired people",
    "By Compupro",
    "All written Compuprofessionally",
    "Why is six afraid of seven?",
    "SUPAAH HACKA, COMPUPRO",
    "Say that five times fast",
    "Turn that non-orientable shape upside down!",
    "blurb') DROP TABLE header_blurbs;-- Oh wait- it's JavaScript",
    "I learned how to use cookies for the express purpose of changing this text",
    "Test blurb please ignore",
    "Because seven ate nine!",
    "Make sure you allow 4th, 5th, and 6th party cookies.",
    "I made this webpage while listening to music from the 90s Weather Channel",
    "Next project: a neural network that sorts pictures of Waldo and barber shop poles.",
    "Now with more anime!",
    "I'm trying to think of witty things to say here but it's hard!",
    "You've reached the last blurb! You must really like my webpage!",
];
var visits = parseInt(document.cookie.replace(/(?:(?:^|.*;\s*)visits\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
if (isNaN(visits)){
    document.cookie = "visits=0"
} else { 
    visits++;
    document.cookie = "visits=" + (visits % header_blurbs.length);
}
visits = parseInt(document.cookie.replace(/(?:(?:^|.*;\s*)visits\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
document.getElementById("header-blurb").innerHTML = header_blurbs[visits];