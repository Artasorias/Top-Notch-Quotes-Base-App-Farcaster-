// Farcaster SDK - loaded dynamically
let sdk = null;
(async () => {
    try {
        const module = await import('https://esm.sh/@farcaster/frame-sdk');
        sdk = module.sdk;
        sdk.actions.ready();
    } catch (e) {
        console.log('Running in local mode (Farcaster SDK not available)');
    }
})();

// Famous book quotes collection
const quotes = [
    // Original quotes
    {
        text: "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
        author: "Antoine de Saint-Exupéry",
        book: "The Little Prince"
    },
    {
        text: "So we beat on, boats against the current, borne back ceaselessly into the past.",
        author: "F. Scott Fitzgerald",
        book: "The Great Gatsby"
    },
    {
        text: "It does not do to dwell on dreams and forget to live.",
        author: "J.K. Rowling",
        book: "Harry Potter and the Sorcerer's Stone"
    },
    {
        text: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        author: "J.K. Rowling",
        book: "Harry Potter and the Prisoner of Azkaban"
    },
    {
        text: "It matters not what someone is born, but what they grow to be.",
        author: "J.K. Rowling",
        book: "Harry Potter and the Goblet of Fire"
    },
    
    // J.R.R. Tolkien
    {
        text: "All we have to decide is what to do with the time that is given us.",
        author: "J.R.R. Tolkien",
        book: "The Fellowship of the Ring"
    },
    {
        text: "Not all those who wander are lost.",
        author: "J.R.R. Tolkien",
        book: "The Fellowship of the Ring"
    },
    {
        text: "There is some good in this world, and it's worth fighting for.",
        author: "J.R.R. Tolkien",
        book: "The Two Towers"
    },
    {
        text: "Even the smallest person can change the course of the future.",
        author: "J.R.R. Tolkien",
        book: "The Fellowship of the Ring"
    },
    {
        text: "The world is indeed full of peril, and in it there are many dark places; but still there is much that is fair.",
        author: "J.R.R. Tolkien",
        book: "The Fellowship of the Ring"
    },
    {
        text: "Faithless is he that says farewell when the road darkens.",
        author: "J.R.R. Tolkien",
        book: "The Fellowship of the Ring"
    },
    {
        text: "I will not say: do not weep; for not all tears are an evil.",
        author: "J.R.R. Tolkien",
        book: "The Return of the King"
    },
    
    // Gandalf
    {
        text: "A wizard is never late, nor is he early, he arrives precisely when he means to.",
        author: "Gandalf",
        book: "The Fellowship of the Ring"
    },
    {
        text: "Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be too eager to deal out death in judgement.",
        author: "Gandalf",
        book: "The Fellowship of the Ring"
    },
    {
        text: "You shall not pass!",
        author: "Gandalf",
        book: "The Fellowship of the Ring"
    },
    {
        text: "End? No, the journey doesn't end here. Death is just another path, one that we all must take.",
        author: "Gandalf",
        book: "The Return of the King"
    },
    {
        text: "He that breaks a thing to find out what it is has left the path of wisdom.",
        author: "Gandalf",
        book: "The Fellowship of the Ring"
    },
    {
        text: "It is not despair, for despair is only for those who see the end beyond all doubt. We do not.",
        author: "Gandalf",
        book: "The Fellowship of the Ring"
    },
    {
        text: "For even the very wise cannot see all ends.",
        author: "Gandalf",
        book: "The Fellowship of the Ring"
    },
    {
        text: "Well, here at last, dear friends, on the shores of the Sea comes the end of our fellowship in Middle-earth. Go in peace!",
        author: "Gandalf",
        book: "The Return of the King"
    },
    {
        text: "I am a servant of the Secret Fire, wielder of the flame of Anor. The dark fire will not avail you, flame of Udûn. Go back to the Shadow!",
        author: "Gandalf",
        book: "The Fellowship of the Ring"
    },
    {
        text: "Fly, you fools!",
        author: "Gandalf",
        book: "The Fellowship of the Ring"
    },
    {
        text: "Fool of a Took! This is a serious journey, not a hobbit walking-party. Throw yourself in next time, and then you will be no further nuisance.",
        author: "Gandalf",
        book: "The Fellowship of the Ring"
    },
    {
        text: "Courage will now be your best defence against the storm that is at hand—that and such hope as I bring.",
        author: "Gandalf",
        book: "The Return of the King"
    },
    {
        text: "Go back to the abyss! Fall into nothingness that awaits you and your master!",
        author: "Gandalf",
        book: "The Fellowship of the Ring"
    },
    {
        text: "Saruman, only one hand at a time can wield the One, and you know that well, so do not trouble to say we!",
        author: "Gandalf",
        book: "The Fellowship of the Ring"
    },
    {
        text: "If we fail, we fall. If we succeed - then we will face the next task.",
        author: "Gandalf",
        book: "The Two Towers"
    },
    {
        text: "He did not mean for a lot of things to happen... but they did.",
        author: "Frodo Baggins",
        book: "The Two Towers"
    },
    
    // Albert Einstein
    {
        text: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        author: "Albert Einstein",
        book: "The Saturday Evening Post"
    },
    {
        text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein",
        book: "Letter to his son Eduard"
    },
    {
        text: "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
        author: "Albert Einstein",
        book: "LIFE Magazine"
    },
    {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
        book: "Attributed"
    },
    {
        text: "Try not to become a man of success, but rather try to become a man of value.",
        author: "Albert Einstein",
        book: "LIFE Magazine"
    },
    {
        text: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        author: "Albert Einstein",
        book: "Attributed"
    },
    {
        text: "If you can't explain it to a six year old, you don't understand it yourself.",
        author: "Albert Einstein",
        book: "Attributed"
    },
    {
        text: "If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.",
        author: "Albert Einstein",
        book: "Attributed"
    },
    {
        text: "Logic will get you from A to Z; imagination will get you everywhere.",
        author: "Albert Einstein",
        book: "Attributed"
    },
    {
        text: "Anyone who has never made a mistake has never tried anything new.",
        author: "Albert Einstein",
        book: "Attributed"
    },
    {
        text: "I speak to everyone in the same way, whether he is the garbage man or the president of the university.",
        author: "Albert Einstein",
        book: "Attributed"
    },
    {
        text: "Never memorize something that you can look up.",
        author: "Albert Einstein",
        book: "Attributed"
    },
    {
        text: "When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That's relativity.",
        author: "Albert Einstein",
        book: "Attributed"
    },
    {
        text: "A clever person solves a problem. A wise person avoids it.",
        author: "Albert Einstein",
        book: "Attributed"
    },
    {
        text: "Any fool can know. The point is to understand.",
        author: "Albert Einstein",
        book: "Attributed"
    },
    {
        text: "Science without religion is lame, religion without science is blind.",
        author: "Albert Einstein",
        book: "Science, Philosophy and Religion"
    },
    {
        text: "Reality is merely an illusion, albeit a very persistent one.",
        author: "Albert Einstein",
        book: "Attributed"
    },
    {
        text: "If we knew what it was we were doing, it would not be called research, would it?",
        author: "Albert Einstein",
        book: "Attributed"
    },
    {
        text: "I have no special talents. I am only passionately curious.",
        author: "Albert Einstein",
        book: "Letter to Carl Seelig"
    },
    {
        text: "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
        author: "Albert Einstein",
        book: "Attributed"
    },
    {
        text: "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.",
        author: "Albert Einstein",
        book: "The World As I See It"
    },
    {
        text: "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.",
        author: "Albert Einstein",
        book: "Interview"
    },
    {
        text: "If I were not a physicist, I would probably be a musician. I often think in music. I live my daydreams in music.",
        author: "Albert Einstein",
        book: "Interview"
    },
    {
        text: "You never fail until you stop trying.",
        author: "Albert Einstein",
        book: "Attributed"
    },
    {
        text: "Great spirits have always encountered violent opposition from mediocre minds.",
        author: "Albert Einstein",
        book: "Letter to Morris Raphael Cohen"
    },
    {
        text: "The measure of intelligence is the ability to change.",
        author: "Albert Einstein",
        book: "Attributed"
    },
    {
        text: "It is not that I'm so smart. But I stay with the questions much longer.",
        author: "Albert Einstein",
        book: "Attributed"
    },
    {
        text: "Gravitation is not responsible for people falling in love.",
        author: "Albert Einstein",
        book: "Attributed"
    },
    
    // Leonardo da Vinci
    {
        text: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "Learning never exhausts the mind.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "The noblest pleasure is the joy of understanding.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "Art is never finished, only abandoned.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "Painting is poetry that is seen rather than felt, and poetry is painting that is felt rather than seen.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "A painter should begin every canvas with a wash of black, because all things in nature are dark except where exposed by the light.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "Once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "Study without desire spoils the memory, and it retains nothing that it takes in.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "Nothing strengthens authority so much as silence.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "The painter has the Universe in his mind and hands.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "I love those who can smile in trouble, who can gather strength from distress, and grow brave by reflection.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "One can have no smaller or greater mastery than mastery of oneself.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "Nothing can be loved or hated unless it is first understood.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "The smallest feline is a masterpiece.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "As a well spent day brings happy sleep, so life well used brings happy death.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "If you are alone you belong entirely to yourself. If you are accompanied by even one companion you belong only half to yourself.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "The knowledge of all things is possible.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "The greatest deception men suffer is from their own opinions.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "There are three classes of people: those who see, those who see when they are shown, and those who do not see.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "Study the science of art. Study the art of science. Develop your senses - especially learn how to see. Realize that everything connects to everything else.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "It is easier to resist at the beginning than at the end.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "The deeper the feeling, the greater the pain.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "As you cannot do what you want, want what you can do.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "I thought I was learning to live; I was only learning to die.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "He who cannot establish dominion over himself will have no dominion over others.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    
    // Arthur Conan Doyle / Sherlock Holmes
    {
        text: "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
        author: "Arthur Conan Doyle",
        book: "The Sign of Four"
    },
    {
        text: "The world is full of obvious things which nobody by any chance ever observes.",
        author: "Arthur Conan Doyle",
        book: "The Hound of the Baskervilles"
    },
    {
        text: "There is nothing more deceptive than an obvious fact.",
        author: "Arthur Conan Doyle",
        book: "The Boscombe Valley Mystery"
    },
    {
        text: "Education never ends, Watson. It is a series of lessons, with the greatest for the last.",
        author: "Arthur Conan Doyle",
        book: "His Last Bow"
    },
    {
        text: "It is a great thing to start life with a small number of really good books which are your very own.",
        author: "Arthur Conan Doyle",
        book: "Sherlock Holmes"
    },
    {
        text: "It has long been an axiom of mine that the little things are infinitely the most important.",
        author: "Arthur Conan Doyle",
        book: "The Memoirs of Sherlock Holmes"
    },
    {
        text: "You see, but you do not observe.",
        author: "Arthur Conan Doyle",
        book: "A Scandal in Bohemia"
    },
    {
        text: "It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.",
        author: "Arthur Conan Doyle",
        book: "Sherlock Holmes"
    },
    {
        text: "Mediocrity knows nothing higher than itself; but talent instantly recognizes genius.",
        author: "Arthur Conan Doyle",
        book: "The Valley of Fear"
    },
    {
        text: "You have a grand gift for silence, Watson. It makes you quite invaluable as a companion.",
        author: "Arthur Conan Doyle",
        book: "The Complete Sherlock Holmes"
    },
    {
        text: "The love of books is among the choicest gifts of the gods.",
        author: "Arthur Conan Doyle",
        book: "Sherlock Holmes"
    },
    {
        text: "Watson. Come at once if convenient. If inconvenient, come all the same.",
        author: "Arthur Conan Doyle",
        book: "Adventure of the Creeping Man"
    },
    {
        text: "What you do in this world is a matter of no consequence. The question is what can you make people believe you have done.",
        author: "Arthur Conan Doyle",
        book: "A Study in Scarlet"
    },
    {
        text: "Excellent! I cried. Elementary, said he.",
        author: "Arthur Conan Doyle",
        book: "The Complete Sherlock Holmes"
    },
    {
        text: "It may be that you are not yourself luminous, but that you are a conductor of light. Some people without possessing genius have a remarkable power of stimulating it.",
        author: "Arthur Conan Doyle",
        book: "Sherlock Holmes"
    },
    {
        text: "I am a brain, Watson. The rest of me is a mere appendix.",
        author: "Arthur Conan Doyle",
        book: "The Adventure of the Mazarin Stone"
    },
    {
        text: "To a great mind, nothing is little.",
        author: "Arthur Conan Doyle",
        book: "A Study in Scarlet"
    },
    {
        text: "The game is afoot.",
        author: "Arthur Conan Doyle",
        book: "Adventure of the Abbey Grange"
    },
    {
        text: "I am an omnivorous reader with a strangely retentive memory for trifles.",
        author: "Arthur Conan Doyle",
        book: "The Adventure of the Lion's Mane"
    },
    {
        text: "Life is infinitely stranger than anything which the mind of man could invent.",
        author: "Arthur Conan Doyle",
        book: "A Case of Identity"
    },
    {
        text: "There are always some lunatics about. It would be a dull world without them.",
        author: "Arthur Conan Doyle",
        book: "The Red-Headed League"
    },
    {
        text: "The dog did nothing in the night-time. That was the curious incident.",
        author: "Arthur Conan Doyle",
        book: "Silver Blaze"
    },
    
    // Douglas Adams
    {
        text: "Don't Panic.",
        author: "Douglas Adams",
        book: "The Hitchhiker's Guide to the Galaxy"
    },
    {
        text: "The answer to the ultimate question of life, the universe and everything is 42.",
        author: "Douglas Adams",
        book: "The Hitchhiker's Guide to the Galaxy"
    },
    {
        text: "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
        author: "Douglas Adams",
        book: "The Long Dark Tea-Time of the Soul"
    },
    {
        text: "Time is an illusion. Lunchtime doubly so.",
        author: "Douglas Adams",
        book: "The Hitchhiker's Guide to the Galaxy"
    },
    {
        text: "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.",
        author: "Douglas Adams",
        book: "Mostly Harmless"
    },
    {
        text: "I love deadlines. I love the whooshing noise they make as they go by.",
        author: "Douglas Adams",
        book: "The Salmon of Doubt"
    },
    {
        text: "In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.",
        author: "Douglas Adams",
        book: "The Restaurant at the End of the Universe"
    },
    {
        text: "I refuse to answer that question on the grounds that I don't know the answer.",
        author: "Douglas Adams",
        book: "The Hitchhiker's Guide to the Galaxy"
    },
    {
        text: "There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable.",
        author: "Douglas Adams",
        book: "The Restaurant at the End of the Universe"
    },
    {
        text: "The fact that we live at the bottom of a deep gravity well, on the surface of a gas covered planet going around a nuclear fireball 90 million miles away and think this to be normal is obviously some indication of how skewed our perspective tends to be.",
        author: "Douglas Adams",
        book: "The Salmon of Doubt"
    },
    {
        text: "The knack of flying lies in learning how to throw yourself at the ground and miss.",
        author: "Douglas Adams",
        book: "Life, the Universe and Everything"
    },
    {
        text: "Would it save you a lot of time if I just gave up and went mad now?",
        author: "Douglas Adams",
        book: "The Hitchhiker's Guide to the Galaxy"
    },
    {
        text: "A learning experience is one of those things that says, 'You know that thing you just did? Don't do that.'",
        author: "Douglas Adams",
        book: "The Salmon of Doubt"
    },
    {
        text: "Let's think the unthinkable, let's do the undoable. Let us prepare to grapple with the ineffable itself, and see if we may not eff it after all.",
        author: "Douglas Adams",
        book: "Dirk Gently's Holistic Detective Agency"
    },
    {
        text: "Isn't it enough to see that a garden is beautiful without having to believe that there are fairies at the bottom of it too?",
        author: "Douglas Adams",
        book: "The Hitchhiker's Guide to the Galaxy"
    },
    {
        text: "The ships hung in the sky in much the same way that bricks don't.",
        author: "Douglas Adams",
        book: "The Hitchhiker's Guide to the Galaxy"
    },
    {
        text: "Anyone who is capable of getting themselves made President should on no account be allowed to do the job.",
        author: "Douglas Adams",
        book: "The Restaurant at the End of the Universe"
    },
    {
        text: "He felt that his whole life was some kind of dream and he sometimes wondered whose it was and whether they were enjoying it.",
        author: "Douglas Adams",
        book: "The Hitchhiker's Guide to the Galaxy"
    },
    {
        text: "Nothing travels faster than the speed of light, with the possible exception of bad news, which obeys its own special laws.",
        author: "Douglas Adams",
        book: "Mostly Harmless"
    },
    {
        text: "I'd far rather be happy than right any day.",
        author: "Douglas Adams",
        book: "The Hitchhiker's Guide to the Galaxy"
    },
    {
        text: "Space is big. You just won't believe how vastly, hugely, mind-bogglingly big it is.",
        author: "Douglas Adams",
        book: "The Hitchhiker's Guide to the Galaxy"
    },
    {
        text: "If there's anything more important than my ego around, I want it caught and shot now.",
        author: "Douglas Adams",
        book: "The Hitchhiker's Guide to the Galaxy"
    },
    {
        text: "You live and learn. At any rate, you live.",
        author: "Douglas Adams",
        book: "Mostly Harmless"
    },
    {
        text: "This must be Thursday. I never could get the hang of Thursdays.",
        author: "Douglas Adams",
        book: "The Hitchhiker's Guide to the Galaxy"
    },
    {
        text: "I'd take the awe of understanding over the awe of ignorance any day.",
        author: "Douglas Adams",
        book: "The Salmon of Doubt"
    },
    
    // Mustafa Kemal Atatürk
    {
        text: "Peace at home, peace in the world.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "The future is in the skies.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "Unless a nation's life faces peril, war is murder.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "Everything we see in the world is the creative work of women.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "My people are going to learn the principles of democracy, the dictates of truth and the teachings of science. Superstition must go.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "Heroes who shed their blood and lost their lives! You are now lying in the soil of a friendly country. Therefore rest in peace. There is no difference between the Johnnies and Mehmets to us where they lie side by side here in this country of ours.",
        author: "Mustafa Kemal Atatürk",
        book: "Gallipoli Memorial"
    },
    {
        text: "Teachers are the one and only people who save nations.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "Those who use religion for their own benefit are detestable. We are against such a situation and will not allow it.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "To see me does not necessarily mean to see my face. To understand my thoughts is to have seen me.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "Is it possible that if half of a mass is tied to earth with chains and the other half can soar into skies?",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "Sovereignty is not given, it is taken.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "Our true mentor in life is science.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "Mankind is a single body and each nation a part of that body. We must never say 'What does it matter to me if some part of the world is ailing?'",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "Science is the most reliable guide in life.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "Victory is for those who can say 'Victory is mine'. Success is for those who can begin saying 'I will succeed' and say 'I have succeeded' in the end.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "The biggest battle is the war against ignorance.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "If one day, my words are against science, choose science.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "Authority, without any condition and reservation, belongs to the nation.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "Every nation has the right to demand proper treatment and no country should violate the territory of any other country.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "There are two Mustafa Kemals. One the flesh-and-blood Mustafa Kemal who now stands before you and who will pass away. The other is you, all of you here who will go to the far corners of our land to spread the ideals.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "Turkey's true master is the peasant.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "Persons who know that they will not be able to rest along the way when they took a path, will never get tired.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "He is a weak ruler who needs religion to uphold his government; it is as if he would catch his people in a trap.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    
    // Satoshi Nakamoto
    {
        text: "If you don't believe it or don't get it, I don't have the time to try to convince you, sorry.",
        author: "Satoshi Nakamoto",
        book: "Bitcoin Forum"
    },
    {
        text: "The root problem with conventional currency is all the trust that's required to make it work.",
        author: "Satoshi Nakamoto",
        book: "P2P Foundation"
    },
    {
        text: "It might make sense just to get some in case it catches on.",
        author: "Satoshi Nakamoto",
        book: "Bitcoin Mailing List"
    },
    {
        text: "It's very attractive to the libertarian viewpoint if we can explain it properly. I'm better with code than with words though.",
        author: "Satoshi Nakamoto",
        book: "Bitcoin Forum"
    },
    {
        text: "We have proposed a system for electronic transactions without relying on trust.",
        author: "Satoshi Nakamoto",
        book: "Bitcoin Whitepaper"
    },
    {
        text: "The price of any commodity tends to gravitate toward the production cost. If the price is below cost, then production slows down. If the price is above cost, profit can be made by generating and selling more.",
        author: "Satoshi Nakamoto",
        book: "Bitcoin Forum"
    },
    {
        text: "Total circulation will be 21,000,000 coins. It'll be distributed to network nodes when they make blocks, with the amount cut in half every 4 years.",
        author: "Satoshi Nakamoto",
        book: "Bitcoin Forum"
    },
    {
        text: "If the supply of money increases at the same rate that the number of people using it increases, prices remain stable.",
        author: "Satoshi Nakamoto",
        book: "Bitcoin Forum"
    },
    {
        text: "The utility of the exchanges made possible by Bitcoin will far exceed the cost of electricity used. Therefore, not having Bitcoin would be the net waste.",
        author: "Satoshi Nakamoto",
        book: "Bitcoin Whitepaper"
    },
    {
        text: "The design supports a tremendous variety of possible transaction types that I designed years ago. Escrow transactions, bonded contracts, third party arbitration, multi-party signature.",
        author: "Satoshi Nakamoto",
        book: "Bitcoin Forum"
    },
    {
        text: "The longest chain not only serves as proof of the sequence of events witnessed, but proof that it came from the largest pool of CPU power.",
        author: "Satoshi Nakamoto",
        book: "Bitcoin Whitepaper"
    },
    {
        text: "As computers get faster and the total computing power applied to creating bitcoins increases, the difficulty increases proportionally to keep the total new production constant.",
        author: "Satoshi Nakamoto",
        book: "Bitcoin Forum"
    },
    
    // George R.R. Martin
    {
        text: "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
        author: "George R.R. Martin",
        book: "A Dance with Dragons"
    },
    {
        text: "When you play the game of thrones, you win or you die. There is no middle ground.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "The things we love destroy us every time, lad. Remember that.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "Fear cuts deeper than swords.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "A mind needs books as a sword needs a whetstone, if it is to keep its edge.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "Sleep is good, and books are better.",
        author: "George R.R. Martin",
        book: "A Clash of Kings"
    },
    {
        text: "Can a man still be brave if he's afraid? That is the only time a man can be brave.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "Some old wounds never truly heal, and bleed again at the slightest word.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "Winter is coming.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "When the snows fall and the white winds blow, the lone wolf dies but the pack survives.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "The man who passes the sentence should swing the sword. If you would take a man's life, you owe it to him to look into his eyes and hear his final words.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "Most men would rather deny a hard truth than face it.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "Death is so terribly final, while life is full of possibilities.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "What is honor compared to a woman's love? What is duty against the feel of a newborn son in your arms... Wind and words. We are only human, and the gods have fashioned us for love.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "People often claim to hunger for truth, but seldom like the taste when it's served up.",
        author: "George R.R. Martin",
        book: "A Clash of Kings"
    },
    {
        text: "Why is it that when one man builds a wall, the next man immediately needs to know what's on the other side?",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "I will hurt you for this. A day will come when you think yourself safe and happy, and suddenly your joy will turn to ashes in your mouth, and you'll know the debt is paid.",
        author: "George R.R. Martin",
        book: "A Clash of Kings"
    },
    {
        text: "Once you've accepted your flaws, no one can use them against you.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "And I have a tender spot in my heart for cripples and bastards and broken things.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "They can keep their heaven. When I die, I'd sooner go to Middle-earth.",
        author: "George R.R. Martin",
        book: "Interview"
    },
    {
        text: "If I look back I am lost.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "I have lived a thousand lives and I've loved a thousand loves. I've walked on distant worlds and seen the end of time. Because I read.",
        author: "George R.R. Martin",
        book: "Interview"
    },
    {
        text: "When you tear out a man's tongue, you are not proving him a liar, you're only telling the world that you fear what he might say.",
        author: "George R.R. Martin",
        book: "A Clash of Kings"
    },
    {
        text: "It is one thing to be clever and another to be wise.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "Nothing burns like the cold.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "My skin has turned to porcelain, to ivory, to steel.",
        author: "George R.R. Martin",
        book: "A Storm of Swords"
    },
    {
        text: "Every man must die, Jon Snow. But first he must live.",
        author: "George R.R. Martin",
        book: "A Storm of Swords"
    },
    
    // Andrzej Sapkowski / Geralt
    {
        text: "Evil is evil. Lesser, greater, middling, it's all the same. If I'm to choose between one evil and another, I'd rather not choose at all.",
        author: "Andrzej Sapkowski",
        book: "The Last Wish"
    },
    {
        text: "People like to invent monsters and monstrosities. Then they seem less monstrous themselves.",
        author: "Andrzej Sapkowski",
        book: "The Last Wish"
    },
    {
        text: "Something ends, something begins.",
        author: "Andrzej Sapkowski",
        book: "Something Ends, Something Begins"
    },
    {
        text: "Hatred and prejudice will never be eradicated. And witch hunts will never be about witches.",
        author: "Geralt of Rivia",
        book: "The Last Wish"
    },
    {
        text: "To be neutral does not mean to be indifferent or insensitive. You don't have to kill your feelings. It's enough to kill hatred within yourself.",
        author: "Andrzej Sapkowski",
        book: "Blood of Elves"
    },
    {
        text: "There is never a second opportunity to make a first impression.",
        author: "Andrzej Sapkowski",
        book: "Sword of Destiny"
    },
    {
        text: "You've mistaken the stars reflected on the surface of the lake at night for the heavens.",
        author: "Andrzej Sapkowski",
        book: "Blood of Elves"
    },
    {
        text: "I've understood that the sun shines differently when something changes. The sun shines differently, but it will continue to shine.",
        author: "Andrzej Sapkowski",
        book: "The Last Wish"
    },
    {
        text: "There's a grain of truth in every fairy tale.",
        author: "Andrzej Sapkowski",
        book: "The Last Wish"
    },
    {
        text: "Mistakes are also important to me. I don't cross them out of my life, or memory. And I never blame others for them.",
        author: "Andrzej Sapkowski",
        book: "Blood of Elves"
    },
    {
        text: "I know you're almost forty, look almost thirty, think you're just over twenty and act as though you're barely ten.",
        author: "Andrzej Sapkowski",
        book: "Blood of Elves"
    },
    {
        text: "All decent predictions rhyme.",
        author: "Andrzej Sapkowski",
        book: "The Last Wish"
    },
    {
        text: "What is truth? The negation of lies? Or the statement of a fact? And if the fact is a lie, what then is the truth?",
        author: "Andrzej Sapkowski",
        book: "Sword of Destiny"
    },
    {
        text: "Only death can finish the fight, everything else only interrupts the fighting.",
        author: "Andrzej Sapkowski",
        book: "The Witcher"
    },
    {
        text: "It's better to die than to live in the knowledge that you've done something that needs forgiveness.",
        author: "Andrzej Sapkowski",
        book: "Blood of Elves"
    },
    {
        text: "Only Evil and Greater Evil exist and beyond them, in the shadows, lurks True Evil.",
        author: "Andrzej Sapkowski",
        book: "The Last Wish"
    },
    {
        text: "When you know about something it stops being a nightmare. When you know how to fight something, it stops being so threatening.",
        author: "Andrzej Sapkowski",
        book: "Blood of Elves"
    },
    {
        text: "They weren't lying. They firmly believed it all. Which doesn't change the facts.",
        author: "Andrzej Sapkowski",
        book: "The Last Wish"
    },
    {
        text: "It is easy to kill with a bow. How easy it is to release the bowstring and think, it is not I, it is the arrow. But the arrow does not dream anything in the night.",
        author: "Andrzej Sapkowski",
        book: "Sword of Destiny"
    },
    {
        text: "They say silence is golden. Maybe it is, although I'm not sure it's worth that much. It has its price certainly; you have to pay for it.",
        author: "Andrzej Sapkowski",
        book: "The Last Wish"
    },
    {
        text: "Magic is Chaos, Art and Science. It is a curse, a blessing and progress. It all depends on who uses magic, how they use it, and to what purpose.",
        author: "Andrzej Sapkowski",
        book: "Blood of Elves"
    },
    {
        text: "That's the role of poetry. To say what others cannot utter.",
        author: "Andrzej Sapkowski",
        book: "Time of Contempt"
    },
    
    // Franz Kafka
    {
        text: "A book must be the axe for the frozen sea within us.",
        author: "Franz Kafka",
        book: "Letter to Oskar Pollak"
    },
    {
        text: "Don't bend; don't water it down; don't try to make it logical; don't edit your own soul according to the fashion. Rather, follow your most intense obsessions mercilessly.",
        author: "Franz Kafka",
        book: "Letters"
    },
    {
        text: "I am free and that is why I am lost.",
        author: "Franz Kafka",
        book: "The Trial"
    },
    {
        text: "Start with what is right rather than what is acceptable.",
        author: "Franz Kafka",
        book: "Diaries"
    },
    {
        text: "I am a cage, in search of a bird.",
        author: "Franz Kafka",
        book: "Letters"
    },
    {
        text: "Many a book is like a key to unknown chambers within the castle of one's own self.",
        author: "Franz Kafka",
        book: "Letters"
    },
    {
        text: "Youth is happy because it has the capacity to see beauty. Anyone who keeps the ability to see beauty never grows old.",
        author: "Franz Kafka",
        book: "Letters"
    },
    {
        text: "I cannot make you understand. I cannot make anyone understand what is happening inside me. I cannot even explain it to myself.",
        author: "Franz Kafka",
        book: "The Metamorphosis"
    },
    {
        text: "I write differently from what I speak, I speak differently from what I think, I think differently from the way I ought to think, and so it all proceeds into deepest darkness.",
        author: "Franz Kafka",
        book: "Letters"
    },
    {
        text: "The meaning of life is that it stops.",
        author: "Franz Kafka",
        book: "Diaries"
    },
    {
        text: "All language is but a poor translation.",
        author: "Franz Kafka",
        book: "Letters"
    },
    {
        text: "A non-writing writer is a monster courting insanity.",
        author: "Franz Kafka",
        book: "Letter to Max Brod"
    },
    {
        text: "You do not need to leave your room. Remain sitting at your table and listen. The world will freely offer itself to you to be unmasked.",
        author: "Franz Kafka",
        book: "The Zürau Aphorisms"
    },
    {
        text: "You are the knife I turn inside myself; that is love. That, my dear, is love.",
        author: "Franz Kafka",
        book: "Letters to Milena"
    },
    {
        text: "Slept, awoke, slept, awoke, miserable life.",
        author: "Franz Kafka",
        book: "Diaries"
    },
    {
        text: "By believing passionately in something that still does not exist, we create it. The nonexistent is whatever we have not sufficiently desired.",
        author: "Franz Kafka",
        book: "Letters"
    },
    {
        text: "It's only because of their stupidity that they're able to be so sure of themselves.",
        author: "Franz Kafka",
        book: "The Trial"
    },
    {
        text: "He is terribly afraid of dying because he hasn't yet lived.",
        author: "Franz Kafka",
        book: "Diaries"
    },
    {
        text: "Paths are made by walking.",
        author: "Franz Kafka",
        book: "The Trial"
    },
    {
        text: "Books are a narcotic.",
        author: "Franz Kafka",
        book: "Letters"
    },
    {
        text: "I miss you deeply, unfathomably, senselessly, terribly.",
        author: "Franz Kafka",
        book: "Letters to Milena"
    },
    {
        text: "I think we ought to read only the kind of books that wound and stab us.",
        author: "Franz Kafka",
        book: "Letter to Oskar Pollak"
    },
    {
        text: "I never wish to be easily defined. I'd rather float over other people's minds as something strictly fluid and non-perceivable.",
        author: "Franz Kafka",
        book: "Letters"
    },
    {
        text: "I usually solve problems by letting them devour me.",
        author: "Franz Kafka",
        book: "Letters"
    },
    {
        text: "Writing is utter solitude, the descent into the cold abyss of oneself.",
        author: "Franz Kafka",
        book: "Letters"
    },
    
    // Hari Seldon (Isaac Asimov)
    {
        text: "Violence is the last refuge of the incompetent.",
        author: "Hari Seldon",
        book: "Foundation"
    },
    {
        text: "The fall of Empire, gentlemen, is a massive thing, however, and not easily fought.",
        author: "Hari Seldon",
        book: "Foundation"
    },
    
    // Isaac Asimov
    {
        text: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
        author: "Isaac Asimov",
        book: "Isaac Asimov's Book of Science and Nature Quotations"
    },
    {
        text: "Never let your sense of morals prevent you from doing what is right.",
        author: "Isaac Asimov",
        book: "Foundation"
    },
    {
        text: "The most exciting phrase to hear in science is not 'Eureka!' but 'That's funny...'",
        author: "Isaac Asimov",
        book: "Attributed"
    },
    {
        text: "If knowledge can create problems, it is not through ignorance that we can solve them.",
        author: "Isaac Asimov",
        book: "Asimov's Guide to Science"
    },
    
    // Carl Sagan
    {
        text: "Somewhere, something incredible is waiting to be known.",
        author: "Carl Sagan",
        book: "Cosmos"
    },
    {
        text: "We are a way for the universe to know itself.",
        author: "Carl Sagan",
        book: "Cosmos"
    },
    {
        text: "For small creatures such as we the vastness is bearable only through love.",
        author: "Carl Sagan",
        book: "Contact"
    },
    {
        text: "The cosmos is within us. We are made of star-stuff.",
        author: "Carl Sagan",
        book: "Cosmos"
    },
    {
        text: "Extinction is the rule. Survival is the exception.",
        author: "Carl Sagan",
        book: "The Varieties of Scientific Experience"
    },
    {
        text: "Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.",
        author: "Carl Sagan",
        book: "Cosmos"
    },
    {
        text: "The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff.",
        author: "Carl Sagan",
        book: "Cosmos"
    },
    {
        text: "Science is not only compatible with spirituality; it is a profound source of spirituality.",
        author: "Carl Sagan",
        book: "The Demon-Haunted World"
    },
    {
        text: "One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.",
        author: "Carl Sagan",
        book: "Cosmos"
    },
    {
        text: "If you wish to make an apple pie from scratch, you must first invent the universe.",
        author: "Carl Sagan",
        book: "Cosmos"
    },
    {
        text: "For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring.",
        author: "Carl Sagan",
        book: "The Demon-Haunted World"
    },
    {
        text: "Extraordinary claims require extraordinary evidence.",
        author: "Carl Sagan",
        book: "Cosmos"
    },
    {
        text: "We are like butterflies who flutter for a day and think it is forever.",
        author: "Carl Sagan",
        book: "Cosmos"
    },
    {
        text: "Imagination will often carry us to worlds that never were, but without it we go nowhere.",
        author: "Carl Sagan",
        book: "Cosmos"
    },
    {
        text: "It pays to keep an open mind, but not so open your brains fall out.",
        author: "Carl Sagan",
        book: "The Demon-Haunted World"
    },
    {
        text: "The universe is a pretty big place. If it's just us, seems like an awful waste of space.",
        author: "Carl Sagan",
        book: "Contact"
    },
    {
        text: "We can judge our progress by the courage of our questions and the depth of our answers, our willingness to embrace what is true rather than what feels good.",
        author: "Carl Sagan",
        book: "The Demon-Haunted World"
    },
    {
        text: "You're an interesting species. An interesting mix. You're capable of such beautiful dreams, and such horrible nightmares.",
        author: "Carl Sagan",
        book: "Contact"
    },
    {
        text: "Books permit us to voyage through time, to tap the wisdom of our ancestors.",
        author: "Carl Sagan",
        book: "Cosmos"
    },
    {
        text: "I don't want to believe. I want to know.",
        author: "Carl Sagan",
        book: "Interview"
    },
    {
        text: "But the fact that some geniuses were laughed at does not imply that all who are laughed at are geniuses. They laughed at Columbus, they laughed at Fulton, they laughed at the Wright brothers. But they also laughed at Bozo the Clown.",
        author: "Carl Sagan",
        book: "Broca's Brain"
    },
    {
        text: "Frederick Douglass taught that literacy is the path from slavery to freedom. There are many kinds of slavery and many kinds of freedom, but reading is still the path.",
        author: "Carl Sagan",
        book: "The Demon-Haunted World"
    },
    
    // Nikola Tesla
    {
        text: "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.",
        author: "Nikola Tesla",
        book: "Attributed"
    },
    {
        text: "The present is theirs; the future, for which I really worked, is mine.",
        author: "Nikola Tesla",
        book: "Interview"
    },
    {
        text: "I don't care that they stole my idea. I care that they don't have any of their own.",
        author: "Nikola Tesla",
        book: "Attributed"
    },
    {
        text: "Be alone, that is the secret of invention; be alone, that is when ideas are born.",
        author: "Nikola Tesla",
        book: "Interview"
    },
    
    // Arthur C. Clarke
    {
        text: "Any sufficiently advanced technology is indistinguishable from magic.",
        author: "Arthur C. Clarke",
        book: "Profiles of the Future"
    },
    {
        text: "Two possibilities exist: either we are alone in the Universe or we are not. Both are equally terrifying.",
        author: "Arthur C. Clarke",
        book: "Attributed"
    },
    {
        text: "The only way to discover the limits of the possible is to go beyond them into the impossible.",
        author: "Arthur C. Clarke",
        book: "Profiles of the Future"
    },
    {
        text: "I'm sure the universe is full of intelligent life. It's just been too intelligent to come here.",
        author: "Arthur C. Clarke",
        book: "Interview"
    },
    
    // Frank Herbert
    {
        text: "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration.",
        author: "Frank Herbert",
        book: "Dune"
    },
    {
        text: "The mystery of life isn't a problem to solve, but a reality to experience.",
        author: "Frank Herbert",
        book: "Dune"
    },
    {
        text: "Without change something sleeps inside us, and seldom awakens. The sleeper must awaken.",
        author: "Frank Herbert",
        book: "Dune"
    },
    {
        text: "The people who can destroy a thing, they control it.",
        author: "Frank Herbert",
        book: "Dune"
    },
    {
        text: "There is no escape—we pay for the violence of our ancestors.",
        author: "Frank Herbert",
        book: "Dune"
    },
    
    // Honoré de Balzac
    {
        text: "Behind every great fortune lies a great crime.",
        author: "Honoré de Balzac",
        book: "Le Père Goriot"
    },
    {
        text: "The more one judges, the less one loves.",
        author: "Honoré de Balzac",
        book: "Physiologie du mariage"
    },
    {
        text: "Solitude is fine, but you need someone to tell you that solitude is fine.",
        author: "Honoré de Balzac",
        book: "Lost Illusions"
    },
    {
        text: "Reading brings us unknown friends.",
        author: "Honoré de Balzac",
        book: "Lost Illusions"
    },
    {
        text: "All happiness depends on courage and work.",
        author: "Honoré de Balzac",
        book: "Père Goriot"
    },
    {
        text: "Laws are spider webs through which the big flies pass and the little ones get caught.",
        author: "Honoré de Balzac",
        book: "Lost Illusions"
    },
    {
        text: "It is always assumed by the empty-headed, who chatter about themselves for want of something better, that people who do not discuss their affairs openly must have something to hide.",
        author: "Honoré de Balzac",
        book: "Père Goriot"
    },
    {
        text: "Some day you will find out that there is far more happiness in another's happiness than in your own.",
        author: "Honoré de Balzac",
        book: "Père Goriot"
    },
    {
        text: "Every moment of happiness requires a great amount of ignorance.",
        author: "Honoré de Balzac",
        book: "Père Goriot"
    },
    {
        text: "Our greatest fears lie in anticipation.",
        author: "Honoré de Balzac",
        book: "Père Goriot"
    },
    {
        text: "Marriage must fight constantly against a monster which devours everything: routine.",
        author: "Honoré de Balzac",
        book: "Physiologie du mariage"
    },
    {
        text: "For a woman knows the face of the man she loves like a sailor knows the open sea.",
        author: "Honoré de Balzac",
        book: "Père Goriot"
    },
    {
        text: "The heart of a mother is a deep abyss at the bottom of which you will always find forgiveness.",
        author: "Honoré de Balzac",
        book: "Père Goriot"
    },
    {
        text: "There is no such thing as a great talent without great willpower.",
        author: "Honoré de Balzac",
        book: "Lost Illusions"
    },
    {
        text: "I am not deep, but I am very wide.",
        author: "Honoré de Balzac",
        book: "Lost Illusions"
    },
    {
        text: "I'm a great poet. I don't put my poems on paper: they consist of actions and feelings.",
        author: "Honoré de Balzac",
        book: "Père Goriot"
    },
    {
        text: "Equality may perhaps be a right, but no power on earth can ever turn it into a fact.",
        author: "Honoré de Balzac",
        book: "Lost Illusions"
    },
    {
        text: "Nothing so fortifies a friendship as a belief on the part of one friend that he is superior to the other.",
        author: "Honoré de Balzac",
        book: "Père Goriot"
    },
    {
        text: "Who is to decide which is the grimmer sight: withered hearts, or empty skulls?",
        author: "Honoré de Balzac",
        book: "Père Goriot"
    },
    {
        text: "A letter is a soul, so faithful an echo of the speaking voice that to the sensitive it is among the richest treasures of love.",
        author: "Honoré de Balzac",
        book: "Père Goriot"
    },
    {
        text: "An unfulfilled vocation drains the color from a man's entire existence.",
        author: "Honoré de Balzac",
        book: "Lost Illusions"
    },
    {
        text: "True love is eternal, infinite and always like itself. It's always equal and pure.",
        author: "Honoré de Balzac",
        book: "Père Goriot"
    },
    {
        text: "Passion is born deaf and dumb.",
        author: "Honoré de Balzac",
        book: "Père Goriot"
    },
    {
        text: "Power is not revealed by striking hard or often, but by striking true.",
        author: "Honoré de Balzac",
        book: "Lost Illusions"
    },
    {
        text: "Our worst misfortunes never happen, and most miseries lie in anticipation.",
        author: "Honoré de Balzac",
        book: "Père Goriot"
    },
    
    // Liu Cixin
    {
        text: "The universe is a dark forest. Every civilization is an armed hunter stalking through the trees.",
        author: "Liu Cixin",
        book: "The Dark Forest"
    },
    {
        text: "Weakness and ignorance are not barriers to survival, but arrogance is.",
        author: "Liu Cixin",
        book: "The Three-Body Problem"
    },
    {
        text: "In the long river of time, everything is just a fleeting moment.",
        author: "Liu Cixin",
        book: "The Three-Body Problem"
    },
    {
        text: "To effectively contain a civilization's development and disarm it across such a long span of time, there is only one way: kill its science.",
        author: "Liu Cixin",
        book: "The Three-Body Problem"
    },
    
    // John Verdon
    {
        text: "The worst pain in our lives comes from the mistakes we refuse to acknowledge.",
        author: "John Verdon",
        book: "Think of a Number"
    },
    {
        text: "The person I think I am, and the person other people think I am, may be very different from who I actually am.",
        author: "John Verdon",
        book: "Think of a Number"
    },
    
    // George Lucas / Star Wars
    {
        text: "Do or do not. There is no try.",
        author: "George Lucas",
        book: "Star Wars: The Empire Strikes Back"
    },
    {
        text: "Your focus determines your reality.",
        author: "George Lucas",
        book: "Star Wars: The Phantom Menace"
    },
    {
        text: "The Force will be with you. Always.",
        author: "George Lucas",
        book: "Star Wars: A New Hope"
    },
    {
        text: "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
        author: "George Lucas",
        book: "Star Wars: The Phantom Menace"
    },
    {
        text: "The ability to speak does not make you intelligent.",
        author: "George Lucas",
        book: "Star Wars: The Phantom Menace"
    },
    {
        text: "So this is how liberty dies. With thunderous applause.",
        author: "George Lucas",
        book: "Star Wars: Revenge of the Sith"
    },
    {
        text: "May the Force be with you.",
        author: "George Lucas",
        book: "Star Wars: A New Hope"
    },
    {
        text: "Train yourself to let go of the things you fear to lose.",
        author: "George Lucas",
        book: "Star Wars: Revenge of the Sith"
    },
    {
        text: "Once you start down the dark path, forever will it dominate your destiny, consume you it will.",
        author: "George Lucas",
        book: "Star Wars: The Empire Strikes Back"
    },
    {
        text: "Luminous beings are we, not this crude matter.",
        author: "George Lucas",
        book: "Star Wars: The Empire Strikes Back"
    },
    {
        text: "Dreams are extremely important. You can't do it unless you imagine it.",
        author: "George Lucas",
        book: "Interview"
    },
    {
        text: "Never tell me the odds!",
        author: "George Lucas",
        book: "Star Wars: The Empire Strikes Back"
    },
    {
        text: "Someday you're going to have to learn to separate what seems to be important from what really is important.",
        author: "George Lucas",
        book: "Star Wars: A New Hope"
    },
    {
        text: "In a dark place we find ourselves, and a little more knowledge lights our way.",
        author: "George Lucas",
        book: "Star Wars: Revenge of the Sith"
    },
    {
        text: "A special effect without a story is a pretty boring thing.",
        author: "George Lucas",
        book: "Interview"
    },
    {
        text: "Mentors have a way of seeing more of our faults than we would like. It's the only way we grow.",
        author: "George Lucas",
        book: "Star Wars: Attack of the Clones"
    },
    {
        text: "Be mindful of the future. But not at the expense of the moment.",
        author: "George Lucas",
        book: "Star Wars: The Phantom Menace"
    },
    {
        text: "I love you. I know.",
        author: "George Lucas",
        book: "Star Wars: The Empire Strikes Back"
    },
    {
        text: "The suffering of one man is the suffering of all. Distances are irrelevant to injustice.",
        author: "George Lucas",
        book: "Star Wars"
    },
    {
        text: "They were at the wrong place at the wrong time. Naturally they became heroes.",
        author: "George Lucas",
        book: "Star Wars: A New Hope"
    },
    
    // Classic quotes
    {
        text: "Whatever our souls are made of, his and mine are the same.",
        author: "Emily Brontë",
        book: "Wuthering Heights"
    },
    {
        text: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        author: "Jane Austen",
        book: "Pride and Prejudice"
    },
    {
        text: "Beware; for I am fearless, and therefore powerful.",
        author: "Mary Shelley",
        book: "Frankenstein"
    },
    {
        text: "The world breaks everyone, and afterward, many are strong at the broken places.",
        author: "Ernest Hemingway",
        book: "A Farewell to Arms"
    },
    {
        text: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
        book: "The Soul of Man Under Socialism"
    },
    {
        text: "I am no bird; and no net ensnares me.",
        author: "Charlotte Brontë",
        book: "Jane Eyre"
    }
];

// State
let currentQuote = null;
let favorites = JSON.parse(localStorage.getItem('topNotchFavorites') || '[]');
const bgClasses = ['bg-1', 'bg-2', 'bg-3', 'bg-4', 'bg-5'];

// DOM Elements
const quoteCard = document.getElementById('quoteCard');
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const quoteBook = document.getElementById('quoteBook');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const shareBtn = document.getElementById('shareBtn');
const copyBtn = document.getElementById('copyBtn');
const favoriteBtn = document.getElementById('favoriteBtn');
const shareCanvas = document.getElementById('shareCanvas');

// Get random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Check if quote is favorited
function isFavorited(quote) {
    return favorites.some(f => f.text === quote.text && f.author === quote.author);
}

// Update favorite button state
function updateFavoriteButton() {
    if (currentQuote && isFavorited(currentQuote)) {
        favoriteBtn.classList.add('active');
    } else {
        favoriteBtn.classList.remove('active');
    }
}

// Display quote
function displayQuote(quote) {
    currentQuote = quote;
    
    // Add loading state
    quoteCard.classList.add('loading');
    
    // Remove old bg class and add new one
    bgClasses.forEach(cls => quoteCard.classList.remove(cls));
    const randomBg = bgClasses[Math.floor(Math.random() * bgClasses.length)];
    quoteCard.classList.add(randomBg);
    
    // Animate quote change
    setTimeout(() => {
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = `— ${quote.author}`;
        quoteBook.textContent = quote.book;
        quoteCard.classList.remove('loading');
        updateFavoriteButton();
    }, 150);
}

// Generate share image
function generateShareImage() {
    if (!currentQuote) return null;
    
    const canvas = shareCanvas;
    const ctx = canvas.getContext('2d');
    
    canvas.width = 600;
    canvas.height = 400;
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 600, 400);
    gradient.addColorStop(0, '#0f0c29');
    gradient.addColorStop(0.5, '#302b63');
    gradient.addColorStop(1, '#24243e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 600, 400);
    
    // Add decorative elements
    ctx.fillStyle = 'rgba(255, 215, 0, 0.1)';
    ctx.beginPath();
    ctx.arc(50, 50, 100, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = 'rgba(168, 85, 247, 0.1)';
    ctx.beginPath();
    ctx.arc(550, 350, 120, 0, Math.PI * 2);
    ctx.fill();
    
    // Quote marks
    ctx.font = '80px Georgia';
    ctx.fillStyle = 'rgba(255, 215, 0, 0.3)';
    ctx.fillText('"', 40, 100);
    ctx.fillText('"', 520, 350);
    
    // Quote text
    ctx.font = 'italic 22px Segoe UI, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    
    // Word wrap
    const words = currentQuote.text.split(' ');
    let lines = [];
    let currentLine = '';
    const maxWidth = 480;
    
    words.forEach(word => {
        const testLine = currentLine + word + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && currentLine !== '') {
            lines.push(currentLine.trim());
            currentLine = word + ' ';
        } else {
            currentLine = testLine;
        }
    });
    lines.push(currentLine.trim());
    
    const lineHeight = 32;
    const startY = 180 - (lines.length * lineHeight) / 2;
    
    lines.forEach((line, i) => {
        ctx.fillText(line, 300, startY + i * lineHeight);
    });
    
    // Author
    ctx.font = 'bold 18px Segoe UI, sans-serif';
    ctx.fillStyle = '#ffd700';
    ctx.fillText(`— ${currentQuote.author}`, 300, 320);
    
    // Book
    ctx.font = '14px Segoe UI, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillText(currentQuote.book, 300, 345);
    
    
    return canvas.toDataURL('image/png');
}

// Share quote
async function shareQuote() {
    if (!currentQuote) {
        displayQuote(getRandomQuote());
        return;
    }
    
    const shareText = `"${currentQuote.text}"\n\n— ${currentQuote.author}, ${currentQuote.book}`;
    const miniAppUrl = 'https://top-notch-quotes-base-app-farcaster.vercel.app';
    const imageDataUrl = generateShareImage();
    
    try {
        // Try Farcaster compose cast
        if (sdk && sdk.actions) {
            await sdk.actions.composeCast({
                text: shareText,
                embeds: [miniAppUrl]
            });
        } else {
            throw new Error('SDK not available');
        }
    } catch (error) {
        // Fallback to native share with image
        try {
            const response = await fetch(imageDataUrl);
            const blob = await response.blob();
            const file = new File([blob], 'quote.png', { type: 'image/png' });
            
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    title: 'Top Notch Quote',
                    text: shareText + '\n\n' + miniAppUrl,
                    files: [file]
                });
            } else if (navigator.share) {
                await navigator.share({
                    title: 'Top Notch Quote',
                    text: shareText + '\n\n' + miniAppUrl
                });
            } else {
                copyToClipboard(shareText + '\n\n' + miniAppUrl);
            }
        } catch (e) {
            copyToClipboard(shareText + '\n\n' + miniAppUrl);
        }
    }
}

// Copy to clipboard fallback
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Visual feedback
        shareBtn.textContent = 'Copied!';
        setTimeout(() => {
            shareBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="18" cy="5" r="3"/>
                    <circle cx="6" cy="12" r="3"/>
                    <circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
                Share
            `;
        }, 1500);
    });
}

// Toggle favorite
function toggleFavorite() {
    if (!currentQuote) return;
    
    const index = favorites.findIndex(f => f.text === currentQuote.text && f.author === currentQuote.author);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(currentQuote);
    }
    
    localStorage.setItem('topNotchFavorites', JSON.stringify(favorites));
    updateFavoriteButton();
    
    // Haptic feedback if available
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

// Event Listeners
newQuoteBtn.addEventListener('click', () => {
    displayQuote(getRandomQuote());
});

newQuoteBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    displayQuote(getRandomQuote());
}, { passive: false });

shareBtn.addEventListener('click', shareQuote);

copyBtn.addEventListener('click', copyImageToClipboard);

favoriteBtn.addEventListener('click', toggleFavorite);

// Copy quote image to clipboard
async function copyImageToClipboard() {
    if (!currentQuote) {
        displayQuote(getRandomQuote());
        return;
    }
    
    // Generate image on canvas
    generateShareImage();
    
    // Try multiple clipboard methods
    let copied = false;
    
    // Method 1: Using canvas.toBlob with ClipboardItem
    if (navigator.clipboard && typeof ClipboardItem !== 'undefined') {
        try {
            const blob = await new Promise(resolve => shareCanvas.toBlob(resolve, 'image/png'));
            await navigator.clipboard.write([
                new ClipboardItem({ 'image/png': blob })
            ]);
            copied = true;
        } catch (err) {
            console.log('Method 1 failed:', err);
        }
    }
    
    // Method 2: Try with fetch from dataURL
    if (!copied && navigator.clipboard && typeof ClipboardItem !== 'undefined') {
        try {
            const dataUrl = shareCanvas.toDataURL('image/png');
            const response = await fetch(dataUrl);
            const blob = await response.blob();
            await navigator.clipboard.write([
                new ClipboardItem({ 'image/png': blob })
            ]);
            copied = true;
        } catch (err) {
            console.log('Method 2 failed:', err);
        }
    }
    
    if (copied) {
        showCopyFeedback('copied');
    } else {
        // Fallback: download image
        const imageDataUrl = shareCanvas.toDataURL('image/png');
        downloadImage(imageDataUrl);
        showCopyFeedback('downloaded');
    }
}

// Download image fallback - show modal for mobile
function downloadImage(imageDataUrl) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.getElementById('closeModal');
    
    modalImage.src = imageDataUrl;
    modal.classList.add('show');
    
    closeBtn.onclick = () => {
        modal.classList.remove('show');
    };
    
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    };
}

// Show visual feedback
function showCopyFeedback(type) {
    copyBtn.classList.add(type === 'copied' ? 'copied' : 'downloaded');
    
    // Haptic feedback
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    setTimeout(() => {
        copyBtn.classList.remove('copied', 'downloaded');
    }, 1500);
}

// Swipe gesture for new quote
let touchStartX = 0;
let touchEndX = 0;

quoteCard.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

quoteCard.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        displayQuote(getRandomQuote());
    }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        displayQuote(getRandomQuote());
    } else if (e.code === 'KeyS') {
        shareQuote();
    } else if (e.code === 'KeyF') {
        toggleFavorite();
    }
});

// Initial load
displayQuote(getRandomQuote());

