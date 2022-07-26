import { CountryNames } from '~types/countries';

const femaleNames = [
	'Alexa', 'Alexandra', 'Angela', 'Angelika', 'Anita', 'Anja', 'Anke', 'Anna', 'Anne', 'Annette',
	'Annika', 'Astrid', 'Barbara', 'Beate', 'Beatrice', 'Bettina', 'Bianca', 'Birgit', 'Brigitte', 'Britta', 'Bärbel',
	'Carmen', 'Carolin', 'Chantal', 'Charlotte', 'Christiane', 'Christina', 'Cindy', 'Conny', 'Cordula', 'Cornelia',
	'Dagmar', 'Deborah', 'Denise', 'Diana', 'Dora', 'Doris', 'Dorothea', 'Edeltraud', 'Eleonor', 'Elfriede',
	'Elisabeth', 'Elsa', 'Else', 'Elvira', 'Emma', 'Erika', 'Erna', 'Esther', 'Eva', 'Evelyn', 'Felicia', 'Flora',
	'Franzi', 'Franziska', 'Frauke', 'Frieda', 'Gabi', 'Gabriele', 'Gerda', 'Gerlinde', 'Gertrud', 'Gisela', 'Greta',
	'Gudrun', 'Hanna', 'Hannelore', 'Hedwig', 'Heidi', 'Heike', 'Helga', 'Herta', 'Hildegard', 'Ida', 'Ilse', 'Ina',
	'Inge', 'Ingeborg', 'Ingrid', 'Irene', 'Irma', 'Isa', 'Isabell', 'Isolde', 'Ivonne', 'Jacqueline', 'Jana',
	'Janette', 'Jasmin', 'Jeanette', 'Jennifer', 'Jenny', 'Jessica', 'Judith', 'Julia', 'Juliane', 'Jutta', 'Karen',
	'Karin', 'Karla', 'Karola', 'Karolin', 'Kassandra', 'Katharina', 'Kathi', 'Kathrin', 'Kati', 'Katja', 'Kerstin',
	'Kristin', 'Larissa', 'Laura', 'Lena', 'Leonie', 'Liane', 'Lili', 'Lily', 'Lina', 'Liselotte', 'Louise', 'Luise',
	'Magda', 'Magdalena', 'Maja', 'Maria', 'Marlene', 'Martina', 'Mechthild', 'Meike', 'Melanie', 'Miriam', 'Mona',
	'Monika', 'Nadine', 'Nadja', 'Nancy', 'Nicole', 'Olga', 'Olivia', 'Patricia', 'Paula', 'Pauline', 'Petra', 'Pia',
	'Ramona', 'Rebekka', 'Regina', 'Regine', 'Renate', 'Ricarda', 'Rita', 'Rosa', 'Rosemarie', 'Sabine', 'Sabrina',
	'Sally', 'Sarah', 'Sibylle', 'Siggi', 'Sofia', 'Sophie', 'Stefanie', 'Steffi', 'Susanne', 'Susi', 'Sylvia', 'Thea',
	'Theresa', 'Tina', 'Trude', 'Ursel', 'Ursula', 'Uschi', 'Uta', 'Ute', 'Valerie', 'Vanessa', 'Verena', 'Vreni',
	'Vroni', 'Waltraud', 'Wiebke', 'Yvonne', 'Zara'
];

const maleNames = [
	'Aaron', 'Adam', 'Albrecht', 'Alex', 'Alexander', 'Andreas', 'Anselm', 'Ansgar', 'Anton', 'Armin',
	'Arnold', 'Bastian', 'Benedikt', 'Bernd', 'Bernhard', 'Bert', 'Berthold', 'Bertram', 'Björn', 'Bodo', 'Boris',
	'Bruno', 'Burkhardt', 'Christian', 'Christoph', 'Christopher', 'Claudius', 'Clemens', 'Conrad', 'Corbinian',
	'Damian', 'Daniel', 'David', 'Dennis', 'Detlef', 'Dieter', 'Dietrich', 'Dimitri', 'Dirk', 'Dominik', 'Dustin',
	'Eberhard', 'Eckart', 'Edgar', 'Eike', 'Emil', 'Ernst', 'Erwin', 'Eugen', 'Fabian', 'Ferdinand', 'Florian',
	'Franz', 'Friedrich', 'Fritz', 'Geralt', 'Gerd', 'Gerhard', 'Gernot', 'Gisbert', 'Gregor', 'Guido', 'Gunnar',
	'Gustav', 'Günther', 'Hannes', 'Hans', 'Harald', 'Heinz', 'Helmut', 'Hermann', 'Horst', 'Ingo', 'Jan', 'Joachim',
	'Johannes', 'Jonas', 'Josef', 'Julian', 'Kai', 'Karl', 'Klaus', 'Konrad', 'Kurt', 'Lars', 'Leo', 'Leonard',
	'Lorenz', 'Lothar', 'Lukas', 'Manfred', 'Manuel', 'Mark', 'Martin', 'Matthias', 'Max', 'Maximilian', 'Michael',
	'Moritz', 'Nico', 'Nicolas', 'Niko', 'Nils', 'Norbert', 'Olaf', 'Oliver', 'Oswald', 'Otto', 'Pascal', 'Patrick',
	'Paul', 'Peter', 'Philipp', 'Pierre', 'Raimund', 'Rainer', 'Reiner', 'Reinhard', 'Richard', 'Robert', 'Rolf',
	'Roman', 'Rudolf', 'Rupert', 'Samuel', 'Sascha', 'Sebastian', 'Sepp', 'Siegfried', 'Simon', 'Stefan', 'Stephan',
	'Sven', 'Sören', 'Thilo', 'Thorsten', 'Till', 'Timo', 'Ulf', 'Ulrich', 'Uwe', 'Valentin', 'Viktor', 'Volker',
	'Waldemar', 'Walther', 'Wendelin', 'Wilhelm', 'Willi', 'Xaver', 'Zacharias'
];

const lastNames = [
	'Arnold', 'Bachmann', 'Bauer', 'Becker', 'Beyer', 'Boger', 'Bogner', 'Braun', 'Bruckmann', 'Brugger', 'Bäcker',
	'Böhm', 'Claßen', 'Diener', 'Dietrich', 'Dittrich', 'Dreher', 'Fiedler', 'Fink', 'Fischer', 'Frank', 'Frick',
	'Friedmann', 'Fuchs', 'Graf', 'Grün', 'Hahn', 'Hartmann', 'Hausmann', 'Jacobi', 'Jansen', 'Jung', 'Jäger',
	'Kaiser', 'Karlmann', 'Kienzle', 'Kirch', 'Koch', 'Kowalski', 'Kraus', 'Krämer', 'Köhler', 'Lehmann', 'Maier',
	'Maler', 'Martin', 'Meier', 'Merkle', 'Meyer', 'Michaelis', 'Möller', 'Müller', 'Neumann', 'Noack', 'Nowak',
	'Obermeyer', 'Perlmann', 'Peters', 'Pfarrer', 'Pfeifer', 'Pfeiffer', 'Pietsch', 'Pohl', 'Prinz', 'Raab',
	'Richter', 'Roßmann', 'Ruf', 'Sauer', 'Schinacher', 'Schmid', 'Schmidt', 'Schmitt', 'Schneider', 'Scholz',
	'Schröder', 'Schubert', 'Schulz', 'Schulze', 'Schumann', 'Schuster', 'Schwarz', 'Schäfer', 'Seidel', 'Simon',
	'Singer', 'Specht', 'Strauss', 'Strauß', 'Vogel', 'Vogt', 'Wagner', 'Weber', 'Weiß', 'Wenzler', 'Werner', 'Winkler',
	'Winter', 'Wolf', 'Wolff', 'Zimmermann'
];

const namesData: CountryNames = {
	femaleNames,
	maleNames,
	lastNames
};

export default namesData;
