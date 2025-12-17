let randNumber = Math.floor(Math.random() * 14);

if (randNumber == 0) {
    message = "Poco Loco";
}
else if (randNumber == 1) {
    message = "Mandu";
}
else if (randNumber == 2) {
    message = "Vegan AF Ramen";
}
else if (randNumber == 3) {
    message = "HEVRE";
}
else if (randNumber == 4) {
    message = "Roll & Go Sushi";
}
else if (randNumber == 5) {
    message = "Miski na Lea";
}
else if (randNumber == 6) {
    message = "Miso Place";
}
else if (randNumber == 7) {
    message = "Mazaya";
}
else if (randNumber == 8) {
    message = "Hanguk Bistro Korean Bowl";
}
else if (randNumber == 9) {
    message = "Italo";
}
else if (randNumber == 10) {
    message = "Zapiekanki Krakowski Piecyk";
}
else if (randNumber == 11 {
    message = "Kinki Ramen";
}
else if (randNumber == 12) {
    message = "Restauracja #12";
}
else {
    message = "Restauracja #13";
}

console.log(typeof randNumber);
document.write(`<br>Wylosowałeś restuaracje: ${message}`);