const drinks = [
	{
		id: 1,
		description: "Mineralwasser",
		superscriptText: "",
		prices: [
			{
				volume: 0.2,
				price: "1.50",
			},
			{
				volume: 0.4,
				price: "2.00",
			},
		],
	},
	{
		id: 2,
		description: "Cola",
		superscriptText: "3",
		prices: [
			{
				volume: 0.2,
				price: "1.50",
			},
			{
				volume: 0.4,
				price: "2.00",
			},
		],
	},
	{
		id: 3,
		description: "Fanta",
		superscriptText: "3",
		prices: [
			{
				volume: 0.2,
				price: "1.50",
			},
			{
				volume: 0.4,
				price: "2.00",
			},
		],
	},
	{
		id: 4,
		description: "Sprite",
		superscriptText: "3",
		prices: [
			{
				volume: 0.2,
				price: "1.50",
			},
			{
				volume: 0.4,
				price: "2.00",
			},
		],
	},
	{
		id: 5,
		description: "Mezzo Mix",
		superscriptText: "3",
		prices: [
			{
				volume: 0.2,
				price: "1.50",
			},
			{
				volume: 0.4,
				price: "2.00",
			},
		],
	},
	{
		id: 6,
		description: "Apfelsaft",
		superscriptText: "",
		prices: [
			{
				volume: 0.2,
				price: "2.00",
			},
			{
				volume: 0.4,
				price: "2.30",
			},
		],
	},
	{
		id: 7,
		description: "Apfelsaftschorle",
		superscriptText: "",
		prices: [
			{
				volume: 0.2,
				price: "2.00",
			},
			{
				volume: 0.4,
				price: "2.30",
			},
		],
	},
	{
		id: 8,
		description: "Mango-Nektar",
		superscriptText: "1",
		prices: [
			{
				volume: 0.25,
				price: "2.50",
			},
		],
	},
	{
		id: 9,
		description: "Lychee-Nektar",
		superscriptText: "1",
		prices: [
			{
				volume: 0.25,
				price: "2.50",
			},
		],
	},
	{
		id: 10,
		description: "Guaven-Nektar",
		superscriptText: "1",
		prices: [
			{
				volume: 0.25,
				price: "2.50",
			},
		],
	},
	{
		id: 11,
		description: "Nektarschorlen",
		superscriptText: "1",
		prices: [
			{
				volume: 0.4,
				price: "2.80",
			},
		],
	},
	{
		id: 12,
		description: "Asia Jasmin Tee",
		superscriptText: "",
		prices: [
			{
				price: "3.00",
			},
		],
	},
	{
		id: 13,
		description: "Asia Grüner Tee",
		superscriptText: "",
		prices: [
			{
				price: "3.00",
			},
		],
	},
	{
		id: 14,
		description: "Stuttgarter Pils",
		superscriptText: "",
		prices: [
			{
				volume: 0.5,
				price: "2.50",
			},
		],
	},
	{
		id: 15,
		description: "Erdinger Hefe Weizen",
		superscriptText: "",
		prices: [
			{
				volume: 0.5,
				price: "2.80",
			},
		],
	},
	{
		id: 16,
		description: "Erdinger Kristall Weizen",
		superscriptText: "",
		prices: [
			{
				volume: 0.5,
				price: "2.80",
			},
		],
	},
	{
		id: 17,
		description: "Riesling",
		superscriptText: "",
		prices: [
			{
				volume: 0.2,
				price: "2.80",
			},
		],
	},
	{
		id: 18,
		description: "Trollinger",
		superscriptText: "",
		prices: [
			{
				volume: 0.2,
				price: "2.80",
			},
		],
	},
	{
		id: 19,
		description: "Weinschorle",
		superscriptText: "",
		prices: [
			{
				volume: 0.2,
				price: "2.80",
			},
		],
	},
];

const extraItems = [
	{
		id: 1,
		"primary-description": "Dip nach Wahl ",
		"secondary-description": "Sweet-Chili-Dip, Sojasoße, Sambal Oelek (scharf)",
		preis: "0,50",
	},
	{
		id: 2,
		"primary-description": "gekochte Soßen",
		"secondary-description": "Soßenarten",
		preis: "2.00",
	},
	{
		id: 3,
		"primary-description": "Portion gekochter Reis",
		"secondary-description": "",
		preis: "1.50",
	},
	{
		id: 4,
		"primary-description":
			"Zu den Gerichten 39 bis 86 kann gebratener Reis oder gebratene Nudeln anstatt gekochtem Reis als Beilage bestellt werden",
		"secondary-description": "",
		preis: "2.00",
	},
	{
		id: 5,
		"primary-description":
			"Liebe Gäste, wir verpacken Ihre nichtverzehren Speisen gerne ein. Für die Verpackung berechnen wir",
		"secondary-description": "",
		preis: "1,00",
	},
];

const footer = [
	{
		id: 1,
		description:
			"Gebratener Reis/Nudeln anstatt gekocktem Reis nur für die Gerichte 39 bis 86",
		preis: "2.00",
	},
	{
		id: 2,
		description:
			"Sweet-Chili-Sauce (Flasche), Sojasauce (Flasche) oder Sambal Oelek (scharf)",
		preis: "0.50",
	},
	{
		id: 3,
		description:
			'Jede weitere gekochte Soße Soßenarten auf der Rückseite bei "Extras"',
		preis: "2.00",
	},
];

const categories = [
	{
		id: 1,
		"primary-description": "VORSPEISE",
		"secondary-description": "",
		"terinaty-description": "",
	},
	{
		id: 2,
		"primary-description": "GEBRATEN NUDELN",
		"secondary-description": "MIT EI UND GEMÜSE",
		"terinaty-description": "",
	},
	{
		id: 3,
		"primary-description": "GEBRATENER REIS",
		"secondary-description": "MIT EI UND GEMÜSE",
		"terinaty-description": "",
	},
	{
		id: 4,
		"primary-description": "HÄHNCHEN-GERICHTE",
		"secondary-description": "ALLE GERICHTE MIT GEMÜSE UND REIS",
		"terinaty-description":
			"AUCH MIT PANIERTEN HÄHNCHEN MÖGLICH (BITTE ERWÄHNEN)",
	},
	{
		id: 5,
		"primary-description": "RINDFLEISCH-GERICHTE",
		"secondary-description": "ALLE GERICHTE MIT GEMÜSE UND REIS",
		"terinaty-description": "",
	},
	{
		id: 6,
		"primary-description": "ENTENFLEISCH-GERICHTE",
		"secondary-description": "ALLE GERICHTE MIT GEMÜSE UND REIS",
		"terinaty-description": "",
	},
	{
		id: 7,
		"primary-description": "SPEZIALITÄTEN",
		"secondary-description": "ALLE GERICHTE MIT GEMÜSE UND REIS",
		"terinaty-description": "",
	},
	{
		id: 8,
		"primary-description": "LACHS-GERICHTE",
		"secondary-description": "ALLE GERICHTE MIT GEMÜSE UND REIS",
		"terinaty-description": "",
	},
	{
		id: 9,
		"primary-description": "VEGETARISCHE GERICHTE",
		"secondary-description": "ALLE GERICHTE MIT GEMÜSE UND REIS",
		"terinaty-description": "",
	},
	{
		id: 10,
		"primary-description": "NACHTISCH",
		"secondary-description": "",
		"terinaty-description": "",
	},
	{
		id: 11,
		"primary-description": "EXTRAS",
		"secondary-description": "",
		"terinaty-description": "",
	},
	{
		id: 12,
		"primary-description": "PHO XAO (GEBRATENE BANDNUDELN)",
		"secondary-description": "MIT EI UND GEMÜSE",
		"terinaty-description": "",
	},
	{
		id: 13,
		"primary-description": "ALKOHOLFREIE GETRÄNKE",
		"secondary-description": "",
		"terinaty-description": "",
	},
	{
		id: 14,
		"primary-description": "ALKOHOLISCHE GETRÄNKE",
		"secondary-description": "",
		"terinaty-description": "",
	},
];

const dishesText = `
01. 
Pekingsuppe 
2.50€

02. 
Gemüsesuppe mit Glasnudeln2
2.50€

03. 
Tom Yam Gung (scharf)2
3.50€

04. 
Tom Kha Gai (scharf)2 
Thailändische Hühnersuppe
3.00€

05. 
Gemüsefrühlingsrollen2 
6 Stück
2.00€

06. 
Krabbenchips
2.50€

07. 
Gebackene Wan-Tans2 
4 Stück
3.00€

08. 
Hähnchenspieße2 
2 Stück mit Gemüse und Erdnusssoße
4.00€

09. 
gemischter Salat mit Dressing1
3.00€

10. 
Wan-Tan Suppe2
3.00€

11. 
Gyoza2
4 Stück befüllt mit Huhn und Gemüse
3.00€

20.
 Gemüse2
6.50€

21.
paniertes Hähnchen2
7.00€

22.
gebratenes Hähnchen2
7.00€

23. 
knusprige Ente2
9.50€

24. 
knusprige Hähnchenschenkel2 
(ohne Knochen)
7.50€

25. 
Bami Goreng mit Hähnchenfleisch2
7.00€

26.
Garnelen2
8.50€

27. 
Rindfleisch2
8.00€

30.
Gemüse2
6.50€

31. 
paniertes Hähnchen2
7.00€

32. 
gebratenes Hähnchen2
7.00€

33. 
knusprige Ente2
9.50€

34. 
knusprige Hähnchenschenkel2 
(ohne Knochen)
7.50€

35. 
Nasi Goreng mit Hähnchenfleisch2
7.00€

36. 
Garnelen2
8.50€

37. 
Rindfleisch2
8.00€

39.
nach vietnamesischer Art (leicht scharf)2
8.00€

40. 
Chop Suey2
7.00€

41. 
Gong Pao (scharf)2
7.00€

42. 
in Curry-Soße (leicht scharf)2
7.00€

43. 
paniertes Hähnchen2 
EINE SOSSE AUSWÄHLEN 
mit süß-sauer ODER Erdnuss-Soße
7.00€

44. 
in Thai-Curry-Soße mit Kokosmilch (scharf)2 
"OHNE SCHARF" geht nicht
7.50€ 

45. 
mit speziellen Thai-Gewürzen (scharf)2 
"OHNE SCHARF" geht nicht
7.50€

46. 
mit grünen Bohnen, Paprika und Zwiebeln2 
(vietnamesische Spezialität)
8.00€

47. 
Ga Xao Sa Ot (scharf)2 
mit Zitronengras und Ingwer (vietnamesische Spezialität) 
8.00€

48. 
nach Szechuan-Art (scharf)2 
pikante Knoblauchsoße
7.50€

49. 
knusprige Hähnchenschenkel2 
mit Auswahl einer Soße (Soßenarten: siehe Rückseite bei "Extras")
8.50€

50. 
Chop Suey2
8.00€

51. 
Gong Pao (scharf)2
8.00€

52. 
in Curry-Soße (leicht scharf)2
8.00€

53. 
mit Zwiebeln2
8.00€

54. 
in Thai-Curry-Soße mit Kokosmilch (scharf)2 
"OHNE SCHARF" geht nicht
8.50€

55. 
mit speziellen Thai-Gewürzen (scharf)2 
"OHNE SCHARF" geht nicht
8.50€

56. 
mit grünen Bohnen, Paprika und Zwiebeln2 
(vietnamesische Spezialität)
9.00€

57. 
Bo Xao Sa Ot (scharf)2 
mit Zitronengras und Ingwer (vietnamesische Spezialität)
9.00€

58. 
nach Szechuan-Art (scharf)2 
pikante Knoblauchsoße
8.50€

59. 
nach vietnamesischer Art (leicht scharf)2 
9.00€ 

60. 
Chop Suey2
9.50€

61. 
Gong Pao (scharf)2
9.50€

62. 
in Curry-Soße (leicht scharf)2
9.50€

63. 
mit süß-sauer2
9.50€

65. 
in Thai-Curry-Soße mit Kokosmilch (scharf)2  
"OHNE SCHARF" geht nicht
9.80€

66. 
mit speziellen Thai-Gewürzen (scharf)2 
"OHNE SCHARF" geht nicht
9.80€

67. 
nach Szechuan-Art (scharf)2
9.80€

68. 
in Cantonsoße (scharf)2
9.80€

69. 
nach vietnamesischer Art (leicht scharf)2 
9.80€

70. 
gebratene Garnelen in Thai-Curry-Soße mit Kokosmilch (scharf)2 
"OHNE SCHARF" geht nicht
10.00€

71. 
Bangkok-Teller (scharf)2 
"OHNE SCHARF" geht nicht 
mit Hähnchenfleisch und Garnelen
10.00€

72. 
knusprige Ente mit acht Kostbarkeiten (scharf)2
10.00€

73. 
Tom Xao Sa Ot (scharf)2 
mit Zitronengras, Ingwer und grünen Bohnen
10.50€

74. 
gebratene Garnelen nach Gong Pao-Art (scharf)2
10.00€

75. 
in Curry-Soße (leicht scharf)2
10.50€

76. 
in süß-sauer Soße2
10.50€

77. 
in Thai-Curry-Soße mit Kokosmilch (scharf)2 
"OHNE SCHARF" geht nicht
11.00€

78. 
nach vietnamesischer Art (leicht scharf)2 
11.00€

80. 
Chop Suey mit Glasnudeln2
6.50€

81. 
Gong Pao mit Tofu (scharf)2
7.00€

82. 
in Curry-Soße (leicht scharf)2
6.50€

83. 
gebratene Sojasprossen2
6.50€

84. 
Tofu in Thai-Curry-Soße mit Kokosmilch2 (scharf) 
"OHNE SCHARF" geht nicht
7.50€

85. 
in süß-sauer-Soße2
6.50€

86. 
nach vietnamesischer Art (leicht scharf)2 
8.00€

90. 
gebackene Banane mit Honig
3.00€

91. 
gebackene Ananas mit Honig
3.00€

100. 
Gemüse2
8.50€

101. 
paniertes Hähnchen2
9.00€

102. 
gebratenes Hähnchen2
9.00€

103. 
knusprige Ente2
11.50€

104. 
knusprige Hähnchenschenkel2 
(ohne Knochen)
9.50€

105. 
Garnelen2
10.50€

106. 
Rindfleisch2
10.00€
`;

// Split the text into paragraphs
const paragraphs = dishesText.trim().split("\n\n");

// Array to store the parsed items
const dishes = [];

// Regex patterns for each line structure
const patterns = [
	[/^(\d+)\.\s*(.*?)\s*(\d+\.\d{2})€$/, 3], // order, primary-description, preis
	[/^(\d+)\.\s*(.*?)\s*(.*?)\s*(\d+\.\d{2})€$/, 4], // order, primary-description, secondary-description or warning, preis
	[
		/^(\d+)\.\s*(.*?)\s*(EINE SOSSE AUSWÄHLEN|"OHNE SCHARF" geht nicht|GLASNUDELN SIND IN DER SOSSE)\s*(.*?)\s*(\d+\.\d{2})€$/,
		5,
	], // order, primary-description, warning, secondary-description, preis
];

// Iterate over the paragraphs and extract the item details
for (const paragraph of paragraphs) {
	const lines = paragraph.trim().split("\n");
	const numLines = lines.length;

	// Find the appropriate pattern for the number of lines in the paragraph
	const [pattern, count] = patterns.find(([p, c]) => c === numLines);

	if (pattern) {
		const match = paragraph.match(pattern);
		if (match) {
			const id = match[1];
			const primaryDescription = match[2].trim();
			const primaryDescriptionWithSuperscript =
				primaryDescription.match(/^(.*?)\s*(\d{1,3})$/);
			const superscriptText = primaryDescriptionWithSuperscript
				? primaryDescriptionWithSuperscript[2]
				: "";

			let warning = "";
			let secondaryDescription = "";
			let preis = "";

			if (numLines === 4) {
				if (
					match[3].includes("EINE SOSSE AUSWÄHLEN") ||
					match[3].includes('"OHNE SCHARF" geht nicht') ||
					match[3].includes("GLASNUDELN SIND IN DER SOSSE")
				) {
					warning = match[3].trim();
					preis = match[4].trim();
				} else {
					secondaryDescription = match[3].trim();
					preis = match[4].trim();
				}
			} else if (numLines === 5) {
				warning = match[3].trim();
				secondaryDescription = match[4].trim();
				preis = match[5].trim();
			} else {
				preis = match[3].trim();
			}

			const item = {
				id,
				"primary-description": primaryDescriptionWithSuperscript
					? primaryDescriptionWithSuperscript[1].trim()
					: primaryDescription,
				"superscript-text": superscriptText,

				warning,
				"secondary-description": secondaryDescription,
				preis,
			};

			dishes.push(item);
		}
	}
}

// Print the array of items
console.log(dishes);
