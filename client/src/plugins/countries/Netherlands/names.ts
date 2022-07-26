import { CountryNames } from '~types/countries';

const femaleNames = [
	'Lara', 'Aaltje', 'Saar', 'Tess', 'Iris', 'Anne', 'Eline', 'Elisabeth', 'Nora', 'Jill', 'Fleur', 'Anne',
	'Jannetje', 'Iris', 'Laura', 'Lily', 'Romy', 'Noëlle', 'Yara', 'Tessa', 'Lina', 'Amira', 'Kaylee', 'Amy',
	'Isabella', 'Indy', 'Isabel', 'Elijah', 'Anouk', 'Dewi', 'Roos', 'Sophia', 'Quinty', 'Jamie', 'Lotte', 'Hailey',
	'Evi', 'Dewi', 'Elin', 'Loïs', 'Olivia', 'Elin', 'Jasmijn', 'Feline', 'Sanne', 'Lisa', 'Eline', 'Sem', 'Lana',
	'Amira', 'Dani', 'Ashley', 'Isabella', 'Lina', 'Samuel', 'Luna', 'Marretje', 'Alyssa', 'Emma', 'Johanna', 'Floor',
	'Aaltje', 'Ashley', 'Emily', 'Lily', 'Elise', 'Sofia', 'Fleur', 'Zoë', 'Evi', 'Faye', 'Jannetje', 'Lynn',
	'Charlotte', 'Anna', 'Megan', 'Jaylinn', 'Mason', 'Nikki', 'Julia', 'Johanna', 'Floor', 'Alyssa', 'Isa', 'Elise',
	'Lizzy', 'Jaylinn', 'Indy', 'Fenna', 'Femke', 'Luna', 'Lotte', 'Marit', 'Demi', 'Esmee', 'Elena', 'Norah', 'Isabel',
	'Vera', 'Lana', 'Lieke', 'Naomi', 'Elisa', 'Rosalie', 'Demi', 'Esmee', 'Elena', 'Amber', 'Nina', 'Liv', 'Elisabeth',
	'Kaylee', 'Jamie', 'Charlotte', 'Feline', 'Senna', 'Noa', 'Maria', 'Laura', 'Elisa', 'Nienke', 'Anouk', 'Sofie',
	'Mila', 'Lieke', 'Amy', 'Eva', 'Liv', 'Jill', 'Faye', 'Elize', 'Julia', 'Loïs', 'Lynn', 'Sara', 'Nova', 'Jasmijn',
	'Fay', 'Noor', 'Lara', 'Sterre', 'Eva', 'Hailey', 'Anna', 'Isa', 'Evy', 'Femke', 'Emma', 'Emily', 'Sophie',
	'Elize', 'Fay', 'Lizzy', 'Fenna', 'Amber', 'Maud', 'Evy', 'Lisa', 'Milou', 'Sarah'
];

const maleNames = [
	'Pieter', 'Damian', 'Sven', 'Floris', 'Timo', 'Jasper', 'Jay', 'David', 'Tim', 'Albert', 'Julian', 'Daan',
	'Quinten', 'Nathan', 'Luuk', 'Mika', 'Luuk', 'Thijmen', 'Hugo', 'Elijah', 'Kyan', 'Julian', 'Jacob', 'Thijs',
	'Aron', 'Jack', 'Benjamin', 'Liam', 'Robin', 'Jack', 'Niels', 'Ruben', 'Aiden', 'Daan', 'Daley', 'Dex', 'Dion',
	'Adam', 'Quinn', 'Jacob', 'Rayan', 'Amir', 'Lucas', 'Finn', 'Max', 'Alexander', 'Justin', 'Tygo', 'Lars', 'Jelle',
	'Johannes', 'Justin', 'Levi', 'Jayden', 'Dylan', 'Jan', 'Jesse', 'Jason', 'David', 'Noah', 'Gerrit', 'Stijn',
	'Jason', 'Roan', 'Hendrik', 'Vince', 'Owen', 'Floris', 'Klaas', 'Alexander', 'Levi', 'Boaz', 'Dani', 'Aiden',
	'Johannes', 'Jesse', 'Daniël', 'Riley', 'Bram', 'Damian', 'Cornelis', 'Jayson', 'Kyan', 'Jayden', 'Joey',
	'Lucas', 'Hugo', 'Dean', 'Amir', 'Joey', 'Dex', 'Klaas', 'Joshua', 'Lars', 'Jelle', 'Daley', 'Wesley', 'Daniël',
	'Dylan', 'Maarten', 'Boaz', 'Luca', 'Milan', 'Dean', 'Bram', 'Jasper', 'Cornelis', 'Mohammed', 'Luca', 'Liam',
	'Hendrik', 'Jan', 'Aron', 'Gerrit', 'Thomas', 'Ryan', 'Finn', 'Sam', 'Bas', 'Willem', 'Jayson', 'Kyano', 'Joshua',
	'Casper', 'Sander', 'Mohamed', 'Jens', 'Sami', 'Bas', 'Albert', 'Nick', 'Casper', 'Adam', 'Jens', 'Kyano', 'Shane',
	'Benjamin', 'Jay', 'Dion', 'Mees'
];

const lastNames = [
	'Aarts', 'van den Akker', 'Albers', 'Arends', 'Arts', 'Baars', 'Baas', 'Bakker', 'Beckers', 'van Beek', 'Berends',
	'Berg', 'van den Berg', 'van der Berg', 'Bergsma', 'van Berkel', 'Bijl', 'Blok', 'Blom', 'de Boer', 'Boer', 'Boers',
	'Boersma', 'Boom', 'Boon', 'Boonstra', 'Boot', 'Bos', 'Bosch', 'van den Bosch', 'van der Bosch', 'Bosma', 'Bosman',
	'Bouma', 'Bouman', 'Bouwman', 'Bouwmeester', 'Brand', 'Brands', 'Brink', 'van den Brink', 'van der Brink',
	'Brinkman', 'van der Broek', 'van den Broek', 'Brouwer', 'Brouwers', 'de Bruijn', 'de Bruin', 'Bruin', 'Bruinsma',
	'Buijs', 'van der Burg', 'Burger', 'Coenen', 'Cornelissen', 'van Dalen', 'van Dam', 'Dam', 'Damen', 'Dekker',
	'Dekkers', 'Derks', 'Derksen', 'van Dijk', 'Dijk', 'Dijkstra', 'van Dongen', 'van Doorn', 'van Driel', 'Driessen',
	'Drost', 'van Eck', 'van Egmond', 'van Eijk', 'van Essen', 'Evers', 'Faber', 'Feenstra', 'Franken', 'Fransen',
	'Franssen', 'Geerts', 'van Gelder', 'Gerrits', 'Gerritsen', 'Geurts', 'van Gils', 'Goossens', 'de Graaf',
	'van der Graaf', 'de Graaff', 'Groen', 'Groeneveld', 'de Groot', 'Groot', 'de Haan', 'de Haas', 'Hartman',
	'Heemskerk', 'van der Heide', 'van der Heijden', 'Hendriks', 'Hermans', 'van der Heuvel', 'van den Heuvel',
	'Hoek', 'van dn Hoek', 'Hoekstra', 'van den Hoeven', 'Hof', 'Hofman', 'Hoogendoorn', 'Hoogeveen', 'van der Horst',
	'Houben', 'Huisman', 'Jacobs', 'de Jager', 'Jager', 'Jansen', 'Janssen', 'de Jong', 'Jong', 'de Jonge', 'de Jongh',
	'Jonker', 'Jonkers', 'Joosten', 'Kamp', 'Kamphuis', 'Keijzer', 'Keizer', 'van Kempen', 'Kersten', 'Klaassen',
	'Klaver', 'Klein', 'Klomp', 'Knol', 'de Kok', 'Kok', 'van de Kolk', 'de Koning', 'Koning', 'Konings', 'Kooistra',
	'Kool', 'Koopman', 'Koopmans', 'Koster', 'Kramer', 'Kroon', 'Kuijpers', 'Kuiper', 'Kuipers', 'van der Laan',
	'Lamers', 'Lammers', 'de Lange', 'Leenders', 'de Leeuw', 'van Leeuwen', 'Lemmens', 'van Lieshout', 'van den Linde',
	'van der Linden', 'van Loon', 'Maas', 'Martens', 'van der Meer', 'Meijer', 'Meijers', 'van der Meulen', 'Meyer',
	'Mol', 'van der Molen', 'Molenaar', 'Mulder', 'Mulders', 'Muller', 'Nieuwenhuis', 'Nijenhuis', 'Nijhuis', 'Nijland',
	'Otten', 'Peeters', 'Peters', 'Pieters', 'van der Plas', 'van der Ploeg', 'Pol', 'van den Pol', 'Post', 'Postma',
	'Prins', 'Pronk', 'Reinders', 'de Ridder', 'Rietveld', 'van Rijn', 'Roelofs', 'de Rooij', 'van Rooij',
	'van Rooijen', 'Roos', 'van Rossum', 'de Ruiter', 'Ruiter', 'Rutten', 'Sanders', 'Schaap', 'van Schaik', 'Schepers',
	'Schipper', 'Schippers', 'Scholten', 'Schouten', 'Schreuder', 'Schreurs', 'Schut', 'Schutte', 'Schuurman', 'Simons',
	'van de Sluis', 'Smeets', 'Smit', 'Smits', 'Smulders', 'Snijders', 'Stam', 'van den Steen', 'Steenbergen',
	'Stevens', 'Stolk', 'Swart', 'Terpstra', 'Teunissen', 'Theunissen', 'Thijssen', 'Timmer', 'Timmerman', 'Timmermans',
	'Tromp', 'Valk', 'van Veen', 'Veen', 'van der Veen', 'Veenstra', 'van der Veer', 'van der Velde', 'van der Velden',
	'Veldhuis', 'Veldman', 'van Velzen', 'van der Ven', 'van de Ven', 'Venema', 'Verbeek', 'Verhagen', 'Verhoef',
	'Verhoeven', 'Vermeer', 'Vermeulen', 'Verschoor', 'Versteeg', 'Verweij', 'Vink', 'Vis', 'Visscher', 'de Visser',
	'Visser', 'Vissers', 'van Vliet', 'Vonk', 'de Vos', 'Vos', 'de Vries', 'Vries', 'van Vugt', 'de Waal', 'Wagenaar',
	'van der Wal', 'van den Werf', 'Wessels', 'Wiersma', 'van Wijk', 'Wijnen', 'de Wilde', 'Willems', 'Willemse',
	'Willemsen', 'de Winter', 'de Wit', 'Wolters', 'Wouters', 'van Zanten', 'van der Zee', 'Zijlstra', 'Zwart'
];

const namesData: CountryNames = {
	femaleNames,
	maleNames,
	lastNames
};

export default namesData;
