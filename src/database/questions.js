const Backend = {
    triviaData: [
      { id: 1, category: "A Criminal's Dictionary", question1: "It's not a novel builder, it's a person accepting bets", answer1: "Bookmaker/bookie", question2: "A person confessing info to police is known as one of these yellow songbirds", answer2: "Canary", question3: "It's the 2-word slang term for the photograph taken of a suspect in custody", answer3: "Mug shot", question4: "From Latin for \"elsewhere\", it's the claim to have been somewhere else when a crime was committed", answer4: "Alibi", question5: "This term for a gangster's girlfriend sounds like where she might spend all his money", answer5: "Moll" },

      { id: 2, category: "American History", question1: "You're in the Army now--in 1940 FDR instituted the first peacetime one of these in U.S. history", answer1: "the draft", question2: "John O'Sullivan, who later became a diplomat, coined this term for the USA's right to cover the continent", answer2: "Manifest Destiny", question3: "Witchcraft trials held in this town in 1692 led to the hangings of 19 people", answer3: "Salem", question4: "Remarkably, there were more than 60 survivors when this Zeppelin crashed in New Jersey in 1937", answer4: "the Hindenburg", question5: "In May 1980 at least 26 people were killed when this volcano in Washington erupted", answer5: "Mt. St. Helens"},

      {id: 3, category: "Beer me!", question1: "Commemorative cans of Coors say it's brewed with water from these mountains", answer1: "The Rocky Mountains", question2: "This ale with a lunar name was created in 1995 by Keith Villa, who suggested serving it with an orange slice", answer2: "Blue Moon", question3: "Back in 1882 blue silk ribbons were tied by hand on the necks of bottles of this beer", answer3: "Pabst Blue Ribbon", question4: "In 2014 Lakemaid Brewery delivered beer to ice fishers using this type unmanned vehicle; the FAA was not amused", answer4: "a drone", question5: "In 1968, this company acquired Amstel, its major rival in the Netherlands", answer5: "Heineken"},

      {id: 4, category: "Classic Rock Lyrics", question1: "About her, Simon & Garfunkel said, \"Jesus loves you more than you will know, wo, wo, wo\"", answer1: "Mrs. Robinson", question2: "The Beatles told this title guy to \"Take a sad song and make it better\"", answer2: "Jude", question3: "He \"was a bullfrog, was a good friend of mine\"", answer3: "Jeremiah", question4: "\"Everybody's talkin' 'bout the new sound, funny, but it's still\" ____ __ ____ to Billy Joel", answer4: "rock and roll (rock n' roll)", question5: "In 1968 Blood, Sweat & Tears said \"What goes up must come down, ____ ____ got to go round\"", answer5: "Spinning Wheel"},

      {id: 5, category: "College Towns", question1: "Waco, Texas is home to this university, the largest Baptist university in the world", answer1: "Baylor", question2: "Georgia's Bulldogs are top dogs in this city that was named for an ancient center of culture & learning", answer2: "Athens", question3: "It's home to Concordia College as well as the University of Michigan", answer3: "Ann Arbor", question4: "Even if Gallaudet weren't here, it's still quite the party town...a 2-party town mainly", answer4: "Washington D.C.", question5: "In 1942 the University of this city was the site of the first controlled nuclear chain reaction", answer5: "Chicago"},

      {id: 6, category: "Computer Lingo", question1: "Apple's Leopard is a type of OS, one of these", answer1: "an operating system", question2: "The \"HT\" in both HTTP & HTML stands for this", answer2: "hypertext", question3: "If your machine is being controlled by someone else, it may have been taken over by this 3-letter piece of malware", answer3: "a bot", question4: "To set up the pictures & clips on my blog, I might need a VGA, this \"array\"", answer4: "video graphics", question5: "Send me that report as a PDF, this \"format\"", answer5: "portable document format"},

      {id: 7, category: "\"D\" in math", question1: "Pi is the ratio of the circle's circumference to this", answer1: "diameter", question2: "In a fraction, the numerator is the dividend & this is the divisor", answer2: "the denominator", question3: "Angles & compass readings are measured in these", answer3: "degrees", question4: "Term for the line that cuts a square into 2 triangles", answer4: "a diagonal", question5: "A binary system is based on 2; this is a system based on 10", answer5: "a decimal system"},

      {id: 8, category: "Drinks are on me!", question1: "There's something about this vodka, salt, tomato juice, Tobasco, pepper, lemon juice & Worcestershire elixir", answer1: "a Bloody Mary", question2: "Ginger ale, grenadine & a cherry... there's no alcohol in this child star's drink!", answer2: "a Shirley Temple", question3: "Hold on... ginger ale or cola, grenadine & a cherry... there's no alcohol in this \"Cowboy King's\" drink!", answer3: "Roy Rodgers", question4: "Mr. Keitel could appreciate this vodka, O.J. & Galiano concoction", answer4: "a Harvey Wallbanger", question5: "\"Tom\" will pick up the check for this combo of gin, lemon juice, sugar, club soda, an orange slice & a cherry", answer5: "a Tom Collins"},

      {id: 9, category: "Eeuuw... Gross!", question1: "Kitty coughs up these somewhat spherical masses because she licks herself a lot (hey, try combing her more often!)", answer1: "hairballs", question2: "When these medicinal worms finish sucking your blood, they drop off; alert your nurse when this happens", answer2: "leeches", question3: "In 2008, 2 teens from this Mass. cape went a little buggy & sold jewelry made from dead cicadas", answer3: "Cape Cod", question4: "Some acne creams contain the slime of these coil-shelled gastropods", answer4: "snails",question5: "A tick bit me! I've got a blotchy rash! I'm vomiting! I may have this disease..", answer5: "Rocky Mountain (spotted) fever"},

      {id: 10, category: "Famous Firsts", question1: "In 1951 the Univac I became the USA's first commercially available one of these", answer1: "a computer", question2: "Starting an annual tradition, Calvin Coolidge lit the first national one of these in 1923 south of the White House", answer2: "a Christmas tree", question3: "Hello out there...in 1969 this president placed the first telephone call to the moon", answer3: "Richard Nixon", question4: "At the Columbian Exposition in 1893, this tall amusement park ride had everyone going in circles", answer4: "the Ferris Wheel", question5: "This game came out in 1948 after being developed from a spelling game called \"Criss Cross\"", answer5: "Scrabble"},

      {id: 11, category: "Fashion", question1: "Write it down--a very narrow straight skirt popular in the 1950s is named for this implement", answer1: "a pencil", question2: "Spanish name for what's basically a blanket with a hole in the center for the head", answer2: "a poncho", question3: "He began printing his double-G motif on luggage & purses after WWII; his famous loafers came later", answer3: "(Guccio) Gucci", question4: "Some people mentally add \"l-y\" to this brand of super-comfy Australian sheepskin boots", answer4: "Ugg", question5: "People magazine said this rock star's daughter Jade launched her line of jewelry in a see-through dress", answer5: "Mick Jagger"},

      {id: 12, category: "Finish the Seuss Line", question1: "I do not like them here or there. I do not like them anywhere. I do not like green eggs and ham. I do not like them...", answer1: "Sam-I-am", question2: "I'll just have to save him, because, after all, a person's a person, no matter...", answer2: "how small", question3: "And he brought back the toys! And the food for the feast! And he... he himself...! The Grinch carved...", answer3: "the roast beast", question4: "Say! That makes a story that no one can beat, when I say that I saw it on...", answer4: "Mulberry Street", question5: "\"Yes... that's what I'd do,\" said young Gerald McGrew. \"I'd make a few changes if...\"", answer5: "I ran the zoo"},

      {id: 13, category: "Food For Thought", question1: "This nationwide restaurant chain began in 1965 with just one restaurant called \"Pete's Super Submarines\"", answer1: "Subway", question2: "Whether laksa or soba, to use this is to think", answer2: "your noodle", question3: "One of the classic sketches featured in Monty Python, there is a restaurant in which almost every menu item included this meat product", answer3: "Spam", question4: "These, from the state flower of Kansas, are a natural way to relieve insomnia", answer4: "sunflower seeds", question5: "The oldest known recipe in existence is for this potent potable", answer5: "Beer"},

      {id: 14, category: "Harry Potter & The Chapter Titles", question1: "In book 1,\"The Boy Who ____\"", answer1: "Lived", question2: "In book 4, \"Flesh, ____, and Bone\"", answer2: "Blood", question3: "In book 6, \"____'s Helping Hand\"", answer3: "Hermione", question4: "In book 7,\"The Battle of ____\"", answer4: "Hogwarts", question5: "In book 2, \"The ____ Potion\"", answer5: "Polyjuice"},

      {id: 15, category: "Hodge Podge", question1: "It \"makes the man\", \"makes the pot boil\", and love of it is also \"the root of all evil\"", answer1: "money", question2: "A shiro-maku is a simple, white, one of these robes worn by a Japanese bride at her wedding", answer2: "a kimono", question3: "The 5th generation of this iPod included a built-in video camera, FM radio & a pedometer", answer3: "iPod Nano", question4: "A specialty of New Orleans, a muffuletta is one of these", answer4: "a sandwich", question5: "In Judaism, it's a scroll with verses from Deuteronomy inserted in a small case & attached to a doorpost", answer5: "a mezuzah"},

      {id: 16, category: "Literature", question1: "In this Steinbeck novel, Lennie has nightmarish visions of his dead aunt Clara & of a gigantic rabbit", answer1: "Of Mice and Men", question2: "Nicodemus Frapp is a narrow-minded evangelist in \"Tono-Bungay\", a 1909 novel by this author of \"The Time Machine\"", answer2: "H.G. Wells", question3: "This Tolstoy tome centers on the 1812 invasion of Russia & the ensuing Russian resistance", answer3: "War & Peace", question4: "\"The Millers Tale\" is one of the naughtiest of these famous Chaucer stories", answer4: "The Canterbury Tales", question5: "This author said that he was acting in a play with his kids when he came up with the idea for \"A Tale of Two Cities\"", answer5: "Charles Dickens"},

      {id: 17, category: "Mixed Drinks", question1: "DEMON ALE", answer1: "Lemonade", question2: "A DECEIT", answer2: "iced tea", question3: "ERE TO ROB", answer3: "root beer", question4: "I CAN COP CUP", answer4: "cappuccino", question5: "WARN ME RETAIL", answer5: "mineral water"},

      {id: 18, category: "Movie Quotes", question1: "1939: \"Elementary, my dear Watson\"", answer1: "The Adventures of Sherlock Holmes", question2: "1989: \"I feel the need - the need for speed!\"", answer2: "Top Gun", question3: "1998: \"Good morning! And in case I don't see you, good afternoon, good evening, and good night!\"", answer3: "The Truman Show", question4: "In a 1994 action film this actress said, \"Oh, sure, it's just like driving a really big Pinto\"", answer4: "Sandra Buloock (in \"Speed\")", question5: "1979:\"I love the smell of napalm in the morning...smells like...victory\"", answer5: "Apocalypse Now"},

      {id: 19, category: "Mythology", question1: "His mother Thetis made the mistake of bathing him in the River Styx by holding him by the heel, thus making his heel vulnerable", answer1: "Achilles", question2: "Sound the alarm! It's the term for a nymph who lures sailors & ships onto the rocks", answer2: "a siren", question3: "The son of Cronus & Rhea, he's the chief god of Greek mythology", answer3: "Zeus", question4: "One account had her opening a jar, not a box, but she still shuts it before hope escapes", answer4: "Pandora", question5: "This Greek messenger was also the conductor of souls to the underworld", answer5: "Hermes", },

      {id: 20, category: "Potent Potables", question1: "The brand called Mike's Hard makes cider & punch, but its logo shows this is its flagship drink", answer1: "Lemonade", question2: "A chelada is a mix of this alcoholic beverage & clamato--we know, but just try it", answer2: "beer", question3: "As Nick Charles says in \"The Thin Man\", it's all about the rhythm in the shaking--you shake a Manhattan to fox trot time but you use waltz time to shake a dry one of these gin drinks", answer3: "a martini", question4: "In a play-on-words from a book title, it's the liquor that precedes mockingbird in the name of a cocktail", answer4: "tequila", question5: "To make a brantini, stir together brandy, gin & a dash of the dry type of this", answer5: "vermouth"},

      {id: 21, category: "Science Puns", question1: "Do bees build these from scratch or does the scratch come later", answer1: "hives", question2: "When a woman in labor yells out \"Can't!\", \"Don't!\" or \"Won't!\", she's having these", answer2: "contractions", question3: "When you are under THIS, a manometer will measure it", answer3: "pressure", question4: "Wyatt Earp gave these creatures the O.K. to build a reef in Tombstone's lake", answer4: "coral", question5: "At lunch whales commit murder on a massive scale when they're \"going in for\" this", answer5: "the krill"},

      {id: 22, category: "Speaking in code", question1: "It's what is asked for here in Morse code \"*** --- ***\"", answer1: "SOS", question2: "In 1942 the Marines recruited 29 men from this Native American tribe to develop a code, one the Japanese never broke", answer2: "Navajo", question3: "urbandictionary.com on this 3-letter \"code\": \"Never drink the last beer, unless you have... specific permission that it is OK\", guys", answer3: "the \"bro\" code", question4: "Military code name for the plant-killing Vietnam War chemical that was linked to 3 kinds of cancer in 1993", answer4: "Agent Orange", question5: "If your wife got sick, it was cool to re-wed, but you had to take care of your sick wife until she passed, said his 1700s B.C. code", answer5: "Hammurabi"},

      {id: 23, category: "Sports Legends", question1: "In 1904 he became the first pitcher in the American League to throw a perfect game; now an award is named for him", answer1: "Cy Young", question2: "In 1998 he was named MVP of the NBA, MVP of the All-Star Game & MVP of the NBA finals", answer2: "Michael Jordan", question3: "This late Green Bay Packers coach has the highest winning percentage in NFL history --- .740", answer3: "Vince Lombardi", question4: "In 1986 at age 46, this \"Golden Bear\" became the oldest man to win the Masters golf tournament", answer4: "Jack Nicklaus", question5: "In 1976 this track star who won 4 gold medals at the 1936 Olympics was awarded the Presidential Medal of Freedom", answer5: "Jesse Owens"},

      {id: 24, category: "TV Characters", question1: "A shoe salesman who lives on Jeopardy Lane, he escapes the rigors of married life by going to The Jiggly Room", answer1: "Al Bundy", question2: "Kyle, Kenny & Stan grace the screen of this animated series", answer2: "South Park", question3: "Dorothy Zbornak, Rose Nylund, and Blanche Devereaux are title characters in this TV sitcom", answer3: "The Golden Girls", question4: "In the 80s William Shatner was back in uniform as this title police sergeant", answer4: "T.J. Hooker", question5: "On \"The Beverly Hillbilles\" this cantankerous character's real name was Daisy Moses", answer5: "Granny (Moses)"},

      {id: 25, category: "The Human Body", question1: "In the Middle Ages, this word referred not only to the finger joints but to the knee as well", answer1: "knuckles", question2: "World Book describes this organ as a \"grayish-pink, jelly-like ball, with many ridges and grooves\"", answer2: "brain", question3: "Take a breath & name this chief muscle used in normal shallow breathing", answer3: "Diaphragm", question4: "The integumentary system is another term for this, the body's largest organ", answer4: "the skin", question5: "Funny, but the name of this bone is Latin for \"upper arm\"", answer5: "humerus"},

      {id: 26, category: "The birds & the bees", question1: "Only female bees possess these poison-injecting organs", answer1: "stingers", question2: "These small yellow finches were once used by coal miners to detect deadly gases", answer2: "Canaries", question3: "It's the only continent without bees", answer3: "Antarctica", question4: "A home for some bees, it can also mean any place swarming with activity", answer4: "hive", question5: "Ectopistes migratorius is the scientific name of this now extinct variety of pigeon", answer5: "passenger pigeon"},

      {id: 27, category: "U.S. Geography", question1: "The snowy dome of this tallest volcano in the lower 48 states is often shrouded in clouds", answer1: "Mount Rainier", question2: "El Paso, Texas was named because it was a major ford, or pass, across this river", answer2: "the Rio Grande", question3: "This river's delta covers 13,000 square miles, about 1/4 of Louisiana's area", answer3: "the Mississippi", question4: "This state's highest point is Puu Wekiu, a cinder cone atop Mauna Kea", answer4: "Hawaii", question5: "Sounds morbid, but it's the lowest point in California & in all of the U.S.", answer5: "Death Valley"},

      {id: 28, category: "Unusual Pets", question1: "There may be more of these animals kept as pets in the U.S. than living in the wild in Asia", answer1: "tigers", question2: "Proto-surrealist poet Gerard de Nerval reportedly walked one of these crustaceans on a leash through Paris", answer2: "a lobster", question3: "To feed your gecko, PETCO offers a \"Case O'\" these noisy insects", answer3: "crickets", question4: "Alice Roosevelt appeared in public with one of these around her neck--the reptile, not the scarf", answer4: "a boa (constrictor)", question5: "The most popular coloration for this polecat relative is fitch, or buff with black feet", answer5: "a ferret"},

      {id: 29, category: "Video Game History", question1: "It was joystick to the world in 1977 when this company released its 2600 system", answer1: "Atari", question2: "In December 2002 Will Wright moved these virtual people \"online\"", answer2: "The Sims", question3: "id Software says hardcore PC games went mainstream in 1994 when it unleashed this fatal-sounding game", answer3: "Doom", question4: "OK chums, Deathwing the Dragon has caused a \"cataclysm\" on Azeroth in a 2010 expansion of this massive game", answer4: "World of Warcraft", question5: "In 1984 this 76er & Larry Bird went \"one-on-one\" for the Commodore 64", answer5: "Dr. J"},

      {id: 30, category: "the roaring 20s", question1: "In 1925 Chicago gangster John Torrio passed his empire to this man", answer1: "Al Capone", question2: "In 1927 it took Charles Lindbergh 33-1/2 hours to fly from Long Island to this metropolis; today, it takes around 8 hours, and people don't mob you for getting there successfully", answer2: "Paris", question3: "This magazine published its first issue in 1923 with former Speaker of the House Joe Cannon on the cover", answer3: "Time", question4: "This dance named for a city became the rage after it was featured in the 1923 Broadway musical \"Runnin' Wild\"", answer4: "the Charleston", question5: "During the 1927 baseball season, Babe Ruth hit this many home runs, a record that lasted until 1961", answer5: "60"},

      {id: 31, category: "\"f\" words", question1: "It's also called the crazy bone, which sounds \"humerus\" to us", answer1: "Funny bone", question2: "In basketball, they lead to free throws", answer2: "fouls", question3: "Mr. Gifford, or his hot dog", answer3: "Frank", question4: "A boxer weighing no more than 126 pounds", answer4: "a featherweight", question5: "Part which makes a lightbulb light up", answer5: "a filament"},

      {id: 32, category: "The Arts", question1: "Arthur Rackham's illustrations of fairies adorn the 1906 book titled this character \"in Kensington Gardens\"", answer1: "Peter Pan", question2: "The Pentelic type of this form of limestone was a favorite material of classical Greek sculptors", answer2: "marble", question3: "In August 1988 the Getty Museum announced one of its prized pieces, the head of Achilles, was this", answer3: "a fake", question4: "Art Kleinman's \"Attitude\" is done with oil paint, wax, & this type of drawing stick made from partially burned wood", answer4: "charcoal", question5: "Nearly 10 feet long, \"Lavender Mist\" from 1950 is one of his drip paintings", answer5: "Jackson Pollock"},

      {id: 33, category: "Teens in History", question1: "She was only about 17 when she began leading French armies against the English in 1429", answer1: "Joan of Arc", question2: "While visiting the Potomac Indians in 1613, she was captured by the English & taken to Jamestown", answer2: "Pocahontas", question3: "This Florentine's earliest surviving sculpture is a relief done when he was about 16", answer3: "Michelangelo", question4: "In 1922 this Egyptian boy king's burial chamber was opened for the 1st time in over 30 centuries", answer4: "King Tut", question5: "Apprenticed to a British shipowner as a teen in the 1740s, he became one of the great explorers of the Pacific", answer5: "Captain Cook"},

      {id: 34, category: "Country Music", question1: "After \"Achy Breaky Heart\", his debut CD \"Some Gave All\" hit No.1 on the country & pop charts", answer1: "Billy Ray Cyrus", question2: "His 1991 music video \"The Thunder Rolls\" created controversy because of its violence", answer2: "Garth Brooks", question3: "In October 1991 this singer quit \"Killin' Time\" long enough to marry Lisa Hartman", answer3: "Clint Black", question4: "Randy Traywick is the real name of this man who was a singer & a short order cook at the Nashville Palace", answer4: "Randy Travis", question5: "Supermodel Kate Moss played the lead in this \"Man In Black\"'s video \"Delia's Gone\"", answer5: "Johnny Cash"},

      {id: 35, category: "National Treasures", question: "This California structure whose official color is international orange is one of the 7 Wonders of the Modern World", answer: "The Golden Gate Bridge"},

      {id: 36, category: "My School Motto", question: "Title hero whose boarding school’s motto is \"Draco Dormiens Nunquam Titillandus\", - \"Never Tickle A Sleeping Dragon\"", answer: "Harry Potter"},

      {id: 37, category: "What's in a Name", question: "For a 1912 play they were dubbed Blick, Flick, Glick, Snick, Plick, Whick & Quee; 25 years later, they got new names", answer: "The Seven Dwarves"},

      {id: 38, category: "Iconic Reality Television", question: "On learning what his series would be called, the star of this reality show said, \"That sounds like a Chinese food place!\"", answer: "Duck Dynasty"},

      {id: 39, category: "Potent Potables", question: "A gin & tonic, for example, or the tall, straight-sided glass in which it's served", answer: "a highball"},

      {id: 40, category: "Salem & The Witch Trials", question: "This man who refused to stand trial was pressed to death 3 days before his wife Martha Corey was hanged", answer: "Giles Corey"},

      {id: 41, category: "1980s rock", question: "In 1985 this group had its first No. 1 with the song \"I Want to Know What Love Is\"", answer: "Foreigner"},

    ]
}
export default Backend;