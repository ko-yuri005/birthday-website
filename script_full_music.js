/* =========================================================
   OPEN WEBSITE
   ========================================================= */

const openButton = document.getElementById("openButton");
const envelopeSection = document.getElementById("envelopeSection");
const envelope = document.getElementById("envelope");

if (openButton) {
    openButton.addEventListener("click", function () {

        createConfetti();

        if (envelopeSection) {

            envelopeSection.classList.add("show");

            setTimeout(() => {

                envelopeSection.scrollIntoView({
                    behavior: "smooth"
                });

            }, 500);

        }

    });
}


/* =========================================================
   OPEN ENVELOPE
   ========================================================= */

if (envelope) {

    envelope.addEventListener("click", function () {

        envelope.classList.toggle("open");

    });

}


/* =========================================================
   CONFETTI
   ========================================================= */

function createConfetti() {

    const colors = [
        "#ff9fbd",
        "#b8a4ff",
        "#8fd8ff",
        "#ffd36e",
        "#ffb58a"
    ];

    for (let i = 0; i < 50; i++) {

        const piece = document.createElement("div");

        piece.style.position = "fixed";
        piece.style.width = "8px";
        piece.style.height = "8px";

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top = "-10px";

        piece.style.borderRadius = "50%";

        piece.style.zIndex = "9999";

        piece.style.pointerEvents = "none";

        document.body.appendChild(piece);

        setTimeout(() => {

            piece.style.transition =
                "transform 2s ease, opacity 2s ease";

            piece.style.transform =
                `translateY(${window.innerHeight + 100}px)
                 rotate(${Math.random() * 720}deg)`;

            piece.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            piece.remove();

        }, 2200);

    }

}


/* =========================================================
   TREATMENT INTERACTIONS
   ========================================================= */

const treatments =
    document.querySelectorAll(".treatment");

treatments.forEach(function (treatment) {

    treatment.addEventListener("click", function () {

        const alreadyActive =
            treatment.classList.contains("active");

        treatments.forEach(function (item) {

            item.classList.remove("active");

            const oldMessage =
                item.querySelector(".treatment-message");

            if (oldMessage) {
                oldMessage.remove();
            }

        });

        if (!alreadyActive) {

            treatment.classList.add("active");

            const message =
                document.createElement("p");

            message.classList.add(
                "treatment-message"
            );

            message.innerText =
                treatment.dataset.message;

            const content =
                treatment.querySelector("div:nth-child(2)");

            if (content) {
                content.appendChild(message);
            }

        }

    });

});


/* =========================================================
   MUSIC PLAYER
   =========================================================
   
   IMPORTANT:
   This version uses LOCAL MP3 files.
   
   YouTube has been completely removed.
   
   ========================================================= */


/* =========================================================
   MP3 FOLDER NAMES
   ========================================================= */

const musicFolders = {

    quiet:
        "For quiet mornings",

    heart:
        "when heart gets a little louder",

    main:
        "Maybe don't read too much into these",

    feelings:
        "For the end of the night",

    chaos:
        "Okay enough feelings. PLAY SOMETHING LOUD",

    night:
        "Dark, dreamy, starry, and cinematic"

};


/* =========================================================
   MP3 PATH BUILDER
   ========================================================= */

/*
   We encode each folder/file name so spaces, emoji,
   Chinese characters, brackets, apostrophes, etc.
   work correctly in the browser.
*/

function createSongPath(folder, filename) {

    return encodeURI(`./${folder}/${filename}.mp3`);

}


/* =========================================================
   SONG DATABASE
   ========================================================= */

const musicLibrary = {


    /* =====================================================
       QUIET
       ===================================================== */

    quiet: [

        {
            title: "Blossom",
            artist: "Matthew Ifield",
            file: "Blossom - b_t & Matthew Ifield (Official Audio)"
        },

        {
            title: "Dooron Dooron Unplugged",
            artist: "Paresh Pahuja",
            file: "Dooron Dooron (Official Video) - Unplugged Paresh Pahuja Shiv Tandan T-Series"
        },

        {
            title: "Baby Now That I Found You",
            artist: "Ella Bright",
            file: "Ella Bright - Baby Now That I Found You (Lyrics)"
        },


        {
            title: "Aahista",
            artist: "Arijit Singh & Jonita Gandhi",
            file: "Aahista - Lyrical _ Laila Majnu _ Arijit Singh & Jonita Gandhi _ Avinash T & Tripti D _ Imtiaz Ali [m54o2IRV7e8]"
        },

        {
            title: "Dil na Jaaneya",
            artist: "Akasa, Lauv, Rochak Kohli",
            file: "Dil Na Jaaneya - Lyrical Good Newwz Akshay, Kareena, Diljit Kiara Rochak feat. Lauv Akasa"
        },




        {
            title: "Enna Sona",
            artist: "Arijit Singh",
            file: "Enna Sona - Official Music Video OK Jaanu Arijit Singh Shraddha Kapoor Aditya Roy Kapoor"
        },

        {
            title: "Raaziyan",
            artist: "Garvit - Priyansh",
            file: "Garvit - Priyansh - Raaziyan (Official Lyric Video) [xNN8B3KqDAM]"
        },

        {
            title: "Kaafi Hai Na",
            artist: "Musafir Cafe",
            file: "Kaafi Hai Na (Full Video) Musafir Cafe Vikrant Massey,Vedika,Mahima Garvit-Priyansh,Jonita"
        },

        {
            title: "Khayaal",
            artist: "Abhijeet Srivastava",
            file: "Khayaal - Abhijeet Srivastava Prateeksha Srivastava (Lyric Video)"
        },

        {
            title: "Aaoge Jab Tum",
            artist: "Rashid Khan",
            file: "Lyrical Aaoge Jab Tum Jab We Met Kareena Kapoor, Shahid Kapoor Ustad Rashid Khan"
        },

        {
            title: "Ready For Love",
            artist: "Matthew Ifield",
            file: "Matthew Ifield - Ready For Love (Lyrics) [o11dWTi2snc]"
        },

        {
            title: "Khat",
            artist: "Navjot Ahuja",
            file: "Navjot Ahuja - Khat (Official Audio)"
        },

        {
            title: "Paragraphs",
            artist: "Luke Chiang",
            file: "Paragraphs [FPNmQmpqpI8]"
        },

        {
            title: "Kannukulla Reprise",
            artist: "Sai Abhyankkar",
            file: "Sai Abhyankkar Adesh Krishna - Kannukulla (Reprise)"
        },

        {
            title: "Slipping Through My Fingers",
            artist: "ABBA",
            file: "Slipping Through My Fingers - Mamma Mia (Lyrics)"
        },

        {
            title: "Sun Saawariya",
            artist: "Accha Insaan",
            file: "sun saawariya Official Visualiser Accha Insaan, AtharvaMusic, Yaani Karnawat"
        },

        {
            title: "Tere Paas Main",
            artist: "A.R. Rahman",
            file: "Tere Paas Main Main Vaapas Aaunga diljitdosanjh, ARRahman,Imtiaz Ali,Irshad,Vedang,Sharvari,Deepali"
        },

        {
            title: "The Simple Things",
            artist: "Michael Carreon",
            file: "The Simple Things [Fb1-Diyzvtw]"
        },

        {
            title: "Theher Ja",
            artist: "Garvit-Priyansh",
            file: "Theher Ja - (Full Audio) - Garvit-Priyansh _ Aniket Shukla _ New Hindi Song _ T-Series [rS7VRu61-4A]"
        },

        {
            title: "The Star Stealer",
            artist: "yihuik 苡慧",
            file: "偷星星的人 _ The Star Stealer - yihuik苡慧（《偷偷藏不住Hidden Love》電視劇片尾曲）【動態歌詞】 [hAIqzpIrh6E]"
        }

    ],


    /* =====================================================
       HEART
       ===================================================== */

    heart: [

        {
            title: "Ishq Mubarak",
            artist: "Arijit Singh",
            file: "Arijit Singh ISHQ MUBARAK Full Song WIth Lyrics Tum Bin 2"
        },

        {
            title: "Deedaar Tera Milne Ke Baad",
            artist: "Arijit Singh, Harshdeep Kaur",
            file: "Arijit Singh, Harshdeep Kaur, JAM8 - Deedaar Tera Milne Ke Baad - Trending Version"
        },

        {
            title: "Saware",
            artist: "Arijit Singh",
            file: "Saware Full AUDIO Song - Arijit Singh Phantom T-Series"
        },

        {
            title: "Darasal",
            artist: "Atif Aslam",
            file: "Atif Aslam Darasal Full Video Song Raabta Sushant Singh Rajput Kriti Sanon Pritam"
        },

        {
            title: "Chand Mera Dil",
            artist: "Shreya Ghoshal",
            file: "Chand Mera Dil - Shreya Ghoshal _ Ananya, Lakshya _ Sachin-Jigar, Shreya Ghoshal, Amitabh B. [E33lpgXcBAg]"
        },


        {
            title: "Qayde Se",
            artist: "Arijit Singh, Pritam Amitabh, Bhattacharya",
            file: "Qayde Se (Lyrical Video) Arijit Singh Pritam Amitabh Bhattacharya Metro…In Dino Anurag Basu"
        },




        {
            title: "Dekh Lena",
            artist: "Arijit Singh, Tulsi Kumar",
            file: "DEKH LENA Full Video Song Tum Bin 2 Arijit Singh Tulsi Kumar Neha Sharma, Aditya Aashim"
        },

        {
            title: "Dekho Hazaro Dafa",
            artist: "Arijit Singh, Palak Muchhal",
            file: "Dekha Hazaro Dafaa _ Rustom _ Akshay Kumar & Ileana D'cruz _ Arijit Singh , Palak M_ Jeet Gannguli [ImnYPjOd1Tw]"
        },

        {
            title: "Haareya",
            artist: "Arijit Singh",
            file: "Haareya Song Meri Pyaari Bindu Ayushmann, Parineeti Arijit Singh Sachin-Jigar, Priya Saraiya"
        },

        {
            title: "Humnava Mere",
            artist: "Jubin Nautiyal",
            file: "Humnava Mere Lyrical Video Jubin Nautiyal Manoj Muntashir Rocky - Shiv Bhushan Kumar"
        },

        {
            title: "Javeda Zindagi",
            artist: "Kshitij, Shilpa Rao",
            file: "Javeda Zindagi Tose Naina Lage _ Anwar _ Kshitij _ Shilpa Rao Songs _ Nauheed Cyrusi [P-rV6fTSSaI]"
        },

        {
            title: "Ki Honda Pyaar",
            artist: "Arijit Singh",
            file: "Ki Honda Pyaar - Lyrical _ Jabariya Jodi _ Sidharth Malhotra, Parineeti Chopra _ ARIJIT SINGH [nE-X3Z9j2jE]"
        },

        {
            title: "Phir Na Milen Kabhi",
            artist: "Ankit Tiwari",
            file: "LYRICAL_ Phir Na Milen Kabhi _ MALANG _ Aditya R K, Disha P, Anil K, Kunal K _ Ankit Tiwari [Powg9XIWNpU]"
        },

        {
            title: "Tose Naina",
            artist: "Arijit Singh",
            file: "Lyrics_Tose Naina Full Song _ Arijit Singh _ Hanif Shaikh _ Micky Virus [0trVNbS8ftg]"
        },

        {
            title: "Main Hoon Saath Tere",
            artist: "Arijit Singh",
            file: "Main Hoon Saath Tere - Arijit Singh Shaadi Mein Zaroor Aana Rajkummar Rao,Kriti Kharbanda KAG-Jam8"
        },

        {
            title: "Main Rang Sharbaton Ka",
            artist: "Arijit Singh",
            file: "Main Rang Sharbaton Ka (Reprise) _ Arijit Singh _ Pritam _ Phata Poster Nikla Hero _Love songs Hindi [KFQeD1Ej9ys]"
        },

        {
            title: "Mast Magan",
            artist: "Arijit Singh",
            file: "Mast Magan Full Song with Lyrics 2 States Arijit Singh Arjun Kapoor, Alia Bhatt"
        },

        {
            title: "Saudebazi",
            artist: "Pritam, Javed Ali",
            file: "SAUDEBAZI (ENCORE) [1PBBn19fXeE]"
        },

        {
            title: "Sukoon Mila",
            artist: "Arijit Singh",
            file: "Sukoon Mila Full Video _ Mary Kom _ Priyanka Chopra & Darshan Gandas _ Arijit Singh _ HD [rRx88tN2LYo]"
        },

        {
            title: "Tay Hai",
            artist: "Ankit Tiwari",
            file: "Tay Hai - Full Video _ Rustom _ Akshay Kumar & Ileana D'cruz _ Ankit Tiwari [HzkJ7sYh39g]"
        },

        {
            title: "Tere Liye",
            artist: "Atif Aslam, Shreya Ghoshal",
            file: "Tere Liye - Atif Aslam Shreya Ghoshal (Lyrics) Lyrical Bam Hindi"
        },

        {
            title: "Teri Jhuki Nazar",
            artist: "Pritam, Shafqat Amanat Ali",
            file: "Teri Jhuki Nazar Official Lyrical Video - Murder 3 Pritam Shafqat Amanat Ali Bollywood Songs"
        },

        {
            title: "Teri Meri Kahaani",
            artist: "Arijit Singh, Palak Muchhal",
            file: "Teri Meri Kahaani - Arijit Singh Palak Muchhal Akshay Kumar Kareena Kapoor Gabbar Is Back"
        },

        {
            title: "Zaalima",
            artist: "Arijit Singh, Harshdeep Kaur",
            file: "Zaalima - Lyrical Raees Shah Rukh Khan Arijit Singh Harshdeep K JAM8-Pritam"
        }

    ],


    /* =====================================================
       MAIN
       ===================================================== */

    "main": [

        {
            title: "Achchi Lagti Ho",
            artist: "Udit Narayan",
            file: "Achchi Lagti Ho - Full Audio Kuch Naa Kaho Abhishek Bachchan Aishwarya Rai Trending Songs 2021"
        },

        {
            title: "Mine",
            artist: "Bazzi",
            file: "Bazzi - Mine Official Music Video"
        },

        {
            title: "Dive",
            artist: "Ed Sheeran",
            file: "Ed Sheeran - Dive Official Audio"
        },

        {
            title: "Can't Take My Eyes Off You",
            artist: "Frankie Valli",
            file: "Frankie Valli - Can t Take My Eyes Off You (Official Audio)"
        },

        {
            title: "Best Part",
            artist: "Daniel Caesar ft. H.E.R.",
            file: "H.E.R. - Best Part (Lyrics) Ft. Daniel Caesar"
        },

        {
            title: "Only You",
            artist: "Joseph Vincent",
            file: "Joseph Vincent - Only You (Official Video) (Original Song)"
        },

        {
            title: "If The World Was Ending",
            artist: "JP Saxe, Julia Michaels",
            file: "JP Saxe, Julia Michaels - If The World Was Ending (lyrics)"
        },

        {
            title: "Someone You Loved",
            artist: "Emma Heesters",
            file: "Lewis Capaldi - Someone You Loved (Emma Heesters Cover) [V2EqhrfBR5A]"
        },

        {
            title: "Love Someone",
            artist: "Lukas Graham",
            file: "Lukas Graham - Love Someone Official Music Video"
        },

        {
            title: "Like I'm Gonna Lose You",
            artist: "Meghan Trainor, John Legend",
            file: "Meghan Trainor - Like I m Gonna Lose You (Official Video) ft. John Legend"
        },

        {
            title: "So Easy (To Fall In Love)",
            artist: "Olivia Dean",
            file: "Olivia Dean - So Easy (To Fall In Love)"
        },

        {
            title: "Call Me",
            artist: "Rangga Jones",
            file: "Rangga Jones - Call Me (Official Lyric Video) [oMZkJe3Xn4c]"
        },

        {
            title: "By My Side",
            artist: "Saint Rene",
            file: "Saint Rene - By My Side (Original Song from XO, Kitty, Season 3)"
        },

        {
            title: "Until I Found You",
            artist: "Stephen Sanchez, Em Beihold",
            file: "Stephen Sanchez Em Beihold - Until I Found You (Em Beihold Version)"
        },

        {
            title: "Love Me Like That",
            artist: "Sam Kim",
            file: "샘김 (Sam Kim) - Love Me Like That (알고있지만, OST) Music Video"
        }

    ],


    /* =====================================================
       FEELINGS
       ===================================================== */

    feelings: [

        {
            title: "Darkhaast Acoustic",
            artist: "Prakriti Kakar, Mithoon",
            file: "Darkhaast Video Song __ Prakriti Kakar __ T-Series Acoustics [VuzsPkBMhIE]"
        },

        {
            title: "Jaise Mera Tu",
            artist: "Arijit Singh",
            file: "Jaise Mera Tu - Full Audio Song _ Sachin-Jigar _ Arijit Singh, Priya Saraiya _ Happy Ending [e2rK0QnKDmI]"
        },

        {
            title: "Ye Fitoor Mera",
            artist: "Arijit Singh",
            file: "Yeh Fitoor Mera - Full Song Fitoor Arijit Singh Aditya Roy Kapur, Katrina Kaif Amit Trivedi"
        },


         {
            title: "Little Bit More",
            artist: "Suriel Hess",
            file: "Suriel Hess - Little Bit More (Official Audio)"
        },



        {
            title: "Kinna Sona",
            artist: "Sunil Kamath, Mithoon",
            file: "Kinna Sona Full AUDIO Song - Sunil Kamath Bhaag Johnny Kunal Khemu T-Series"
        },

        {
            title: "Luteron Ka Lutera",
            artist: "Arijit Singh",
            file: "Luteron Ka Lutera Version _ Alia Bhatt & Varun Dhawan _ Arijit Singh _ Pritam _ Kalank _ Lyrical [OTDbMlZjmp8]"
        },

        {
            title: "Maula Maula",
            artist: "Kunal Ganjawala",
            file: "Lyrical Video Maula Maula Re Singham Ajay Devgan, Kajal Aggarwal BOLLYWOOD HINDI SONGS"
        },

        {
            title: "Mann Ki Lagan",
            artist: "Rahat Fateh Ali Khan",
            file: "Mann Ki Lagan Rahat Fateh Ali Khan Paap Shahi Amjad Islam Amjad Old Hindi Song"
        },

        {
            title: "Meherbaan Reprise",
            artist: "Shekhar Ravjiani",
            file: "Meherbaan Reprise - Shekhar Ravjiani Full Audio _ Bang Bang _ Hrithik Roshan & Katrina Kaif [rZJGxWPjDpY]"
        },

        {
            title: "Mere Naina Kafir Hogaye",
            artist: "Rahat Fateh Ali Khan",
            file: "Mere Naina Kafir Hogaye (Lyrical) _ Dolly Ki Doli _ Sonam K, Pulkit S _ Rahat Fateh Ali Khan [iZ1thjLfj_I]"
        },

        {
            title: "Meri Banogi Kya",
            artist: "Rito Riba",
            file: "Meri Banogi Kya (Reprise) [hDYnh1Kk7AA]"
        },

        {
            title: "O Yaara",
            artist: "Kaavish",
            file: "O Yaara _ Coke Studio Pakistan _ Season 15 _ Abdul Hannan x Kaavish [4DVDFXiZKCg]"
        },

        {
            title: "Oh Saaiyaan",
            artist: "Arijit Singh, Salim-Sulaiman",
            file: "Oh Saaiyaan - Lyrical The Power Vidyut J, Shruti H Arijit Singh, Raj P, Salim-Sulaiman, Kumaar"
        },

        {
            title: "Phir Le Aya Dil",
            artist: "Rekha Bhardwaj",
            file: "Phir Le Aya Dil - lyrical Video Rekha Bhardwaj Ranbir, Priyanka, Ileana D Cruz Pritam Barfi"
        },

        {
            title: "Rasiya Reprise",
            artist: "Arijit Singh",
            file: "Rasiya Reprise - Brahmāstra _ Amitabh B _ Ranbir _ Alia _ Pritam _ Arijit _ Amitabh [aDOs442shYU]"
        },

        {
            title: "Regardless",
            artist: "Asim Azhar",
            file: "REGARDLESS - Asim Azhar (Official Video)"
        },

        {
            title: "Saajna Unplugged",
            artist: "Falak Shabbir",
            file: "Saajna Unplugged I Me Aur Main Full Video Song Feat.Falak"
        },

        {
            title: "Sai Pallavi's Intro",
            artist: "G. V. Prakash Kumar",
            file: "Sai Pallavi's Intro (From _Amaran_) [sPHRoZFnEkU]"
        },

        {
            title: "Ishq Bulaava",
            artist: "Sanam Puri, Shipra Goyal",
            file: "Sanam Puri, Shipra Goyal - Ishq Bulaava - (Vocals) _ Lyrics [iRne8ag_Igk]"
        },

        {
            title: "Sar Aankhon Pe Mere",
            artist: "Arijit Singh",
            file: "Sar Aankhon Pe Mere _ Arijit Singh _ Sitaare Zameen Par _ Aamir Khan, Genelia _ SEL,Amitabh_ Lyrical [ljLDxJeeKug]"
        },

        {
            title: "Thodi Der",
            artist: "Shreya Ghoshal, Farhan Saeed",
            file: "Thodi Der -Full Video Half Girlfriend Arjun Kapoor Shraddha Kapoor Farhan S Shreya Ghoshal"
        },

        {
            title: "Tu Hi Mera",
            artist: "Shafqat Amanat Ali",
            file: "Tu Hi Mera - Full Video Emraan Hashmi, Esha Gupta Jannat 2 Shafqat Amanat Ali Pritam"
        },

        {
            title: "Tune Mujhe Pehchana Nahia",
            artist: "Shaan",
            file: "Tune Mujhe Pehchana Nahia Full Video - Raju Chacha_Ajay Devgan, Kajol_Shaan_Jatin Lalit [iIXJI_oCpM8]"
        }

    ],


    /* =====================================================
       CHAOS
       ===================================================== */

    chaos: [
        {
            title: "Marvin Gaye",
            artist: "Charlie Puth, Meghan Trainor",
            file: "Charlie Puth - Marvin Gaye ft. Meghan Trainor Official Video"
        },
        {
            title: "On The Floor",
            artist: "Jennifer Lopez, Pitbull",
            file: "Jennifer Lopez, Pitbull - On The Floor (Official Music Video)"
        },
        {
            title: "Beauty And A Beat",
            artist: "Justin Bieber, Nicki Minaj",
            file: "Justin Bieber - Beauty And A Beat (Official Music Video) ft. Nicki Minaj"
        },
        {
            title: "Flatline",
            artist: "Justin Bieber",
            file: "Justin Bieber - Flatline"
        },
        {
            title: "Sway",
            artist: "Michael Bublé",
            file: "Michael Bublé - Sway (Official Lyric Video)"
        },
        {
            title: "Señorita",
            artist: "Shawn Mendes, Camila Cabello",
            file: "Shawn Mendes, Camila Cabello - Señorita (Live From The AMAs _ 2019) [tcrTQUVkUe0]"
        },
        {
            title: "Sunburn",
            artist: "Brian Cheng",
            file: "SUNBURN (灼伤) - BRIAN CHENG《炽夏 Never-Ending Summer》Lyrics [CyW7DtO6YHI]"
        },
        {
            title: "Girls",
            artist: "The Kid LAROI",
            file: "The Kid LAROI - GIRLS (Official Video)"
        },
        {
            title: "Jumping Machine",
            artist: "LBI",
            file: "利比《跳楼机》(官方歌词MV)｜LBI - Jumping Machine (Official Lyric Video)"
        }
    ],


    /* =====================================================
       NIGHT
       ===================================================== */

    night: [

        {
            title: "Faasle",
            artist: "Aditya Rikhari",
            file: "Aditya Rikhari - FAASLE"
        },

        {
            title: "Already Free",
            artist: "ALEPH",
            file: "Already Free [_tr0Q042nVo]"
        },

        {
            title: "Happier Than Ever",
            artist: "ASTN",
            file: "billie eillish - happier than ever (ASTN cover) [ybdz-nTVHrk]"
        },

        {
            title: "Yellow",
            artist: "Coldplay",
            file: "Coldplay - Yellow (Official Video)"
        },

        {
            title: "Frozen Heart",
            artist: "8Bite, Dyrox",
            file: "Frozen Heart [dCgb2JEFCtM]"
        },

        {
            title: "In The Stars",
            artist: "Sami Rose",
            file: "in the stars - sped up version (Sami Rose) [ChBwzTAfYxw]"
        },

        {
            title: "Kasturi",
            artist: "Arijit Singh",
            file: "Kasturi _ Amar Prem Ki Prem Kahani _ Arijit Singh _ Prasad S _ Jio Cinema [gPfIxI0b5Xs]"
        },

        {
            title: "Lae Dooba",
            artist: "Sunidhi Chauhan",
            file: "Lae Dooba - Full Video Aiyaary Sidharth Malhotra, Rakul Preet Sunidhi Chauhan Rochak Kohli"
        },

        {
            title: "Brooklyn Baby",
            artist: "Lana Del Rey",
            file: "Lana Del Rey - Brooklyn Baby (Official Audio)"
        },

        {
            title: "Margaret",
            artist: "Lana Del Rey, Bleachers",
            file: "Lana Del Rey - Margaret (Audio) ft. Bleachers"
        },

        {
            title: "Young and Beautiful",
            artist: "Lana Del Rey",
            file: "Lana Del Rey - Young and Beautiful"
        },

        {
            title: "I Still Do",
            artist: "Mokita",
            file: "Mokita - I Still Do [D1G5x26CBfM]"
        },



        {
            title: "CO2",
            artist: "Prateek Kuhad",
            file: "Prateek Kuhad - Co2 (Official Audio)"
        },

        {
            title: "Out Of Reach",
            artist: "SER",
            file: "SER - Out Of Reach (Official Audio) [cmPvotPDEcM]"
        },

        {
            title: "Sitaare",
            artist: "Ekkis",
            file: "Sitaare Ikkis Agastya Nanda, Simar Bhatia, Dharmendra Deol, Jaideep A Arijit Singh, Amitabh B"
        },

        {
            title: "Labyrinth",
            artist: "Taylor Swift",
            file: "Taylor Swift - Labyrinth (Lyric Video)"
        },

        {
            title: "Self Aware",
            artist: "Temper City",
            file: "Temper City - Self Aware (Official Video)"
        },

        {
            title: "Used to This",
            artist: "Maybe",
            file: "Used to This [drZb1cKajEo]"
        },

        {
            title: "Dream and Travel",
            artist: "徐子未, 汪十八",
            file: "徐子未、崔十八 - 梦与环游『去实现最后的承诺，我们都拥抱过脆弱。』【动态歌词MV】 [pTJ8JaWV8KY]"
        },

        {
            title: "晚點 / Delay",
            artist: "張碧晨",
            file: "晚點 _ Delay (電視劇《難哄The First Frost》傷痕曲) - 張碧晨 Diamond Zhang『Wan dian - Diamond 』 [xu2686O6mlk]"
        },

        {
            title: "Your Name Engraved Herein",
            artist: "盧廣仲 Crowd Lu",
            file: "盧廣仲 Crowd Lu 【刻在我心底的名字 Your Name Engraved Herein】 Official Music Video （刻在你心底的名字電影主題曲） [m78lJuzftcc]"
        }

    ]

};


/* =========================================================
   PLAYER VARIABLES
   ========================================================= */

let audioPlayer = null;

let currentMood = "quiet";

let currentSongIndex = 0;

let currentSong = null;


/* =========================================================
   HTML ELEMENTS
   ========================================================= */

const songTitle =
    document.getElementById("currentSongTitle");

const songArtist =
    document.getElementById("currentSongArtist");

const songList =
    document.getElementById("songList");

const playPauseButton =
    document.getElementById("playPauseSong");

const previousButton =
    document.getElementById("previousSong");

const nextButton =
    document.getElementById("nextSong");

const moodButtons =
    document.querySelectorAll(".mood-button");

const currentTimeDisplay =
    document.getElementById("currentTime");

const totalDurationDisplay =
    document.getElementById("totalDuration");

const seekBar =
    document.getElementById("seekBar");

const seekBarFill =
    document.getElementById("seekBarFill");

const seekBarThumb =
    document.getElementById("seekBarThumb");

let isDraggingSeekbar = false;


/* =========================================================
   SEEKBAR HELPERS
   ========================================================= */

function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

function updateSeekbarUI(percent, currentSecs, totalSecs) {
    const clampedPercent = Math.min(100, Math.max(0, percent));
    if (seekBarFill) seekBarFill.style.width = `${clampedPercent}%`;
    if (seekBarThumb) seekBarThumb.style.left = `${clampedPercent}%`;
    if (seekBar && !isDraggingSeekbar) seekBar.value = clampedPercent;

    if (currentTimeDisplay && currentSecs !== undefined) {
        currentTimeDisplay.innerText = formatTime(currentSecs);
    }
    if (totalDurationDisplay && totalSecs !== undefined && !isNaN(totalSecs) && totalSecs > 0) {
        totalDurationDisplay.innerText = formatTime(totalSecs);
    }
}

function resetSeekbarUI() {
    updateSeekbarUI(0, 0, 0);
    if (totalDurationDisplay) {
        totalDurationDisplay.innerText = "0:00";
    }
}


/* =========================================================
   SEEKBAR DRAG & SCRUB INTERACTION
   ========================================================= */

function handleSeekInput() {
    if (!audioPlayer || !audioPlayer.duration || isNaN(audioPlayer.duration) || audioPlayer.duration <= 0) return;
    const targetPercent = parseFloat(seekBar.value);
    const targetTime = (targetPercent / 100) * audioPlayer.duration;
    try {
        audioPlayer.currentTime = targetTime;
    } catch (err) {
        console.warn("Seek error:", err);
    }
    updateSeekbarUI(targetPercent, targetTime, audioPlayer.duration);
}

if (seekBar) {
    seekBar.addEventListener("mousedown", function () {
        isDraggingSeekbar = true;
    });

    seekBar.addEventListener("touchstart", function () {
        isDraggingSeekbar = true;
    }, { passive: true });

    seekBar.addEventListener("input", function () {
        isDraggingSeekbar = true;
        handleSeekInput();
    });

    seekBar.addEventListener("change", function () {
        handleSeekInput();
        isDraggingSeekbar = false;
    });

    window.addEventListener("mouseup", function () {
        if (isDraggingSeekbar) {
            isDraggingSeekbar = false;
        }
    });

    window.addEventListener("touchend", function () {
        if (isDraggingSeekbar) {
            isDraggingSeekbar = false;
        }
    });
}


/* =========================================================
   CREATE AUDIO PLAYER
   ========================================================= */

function createAudioPlayer() {

    /*
       If an audio element already exists,
       use it.
    */

    audioPlayer =
        document.getElementById("mp3-audio");

    if (audioPlayer) {
        setupAudioEvents();
        return;
    }


    /*
       If the old YouTube container exists,
       we can reuse it.
    */

    const oldYoutubeContainer =
        document.getElementById("youtube-player");


    if (oldYoutubeContainer) {

        oldYoutubeContainer.innerHTML = "";

        oldYoutubeContainer.style.display = "none";

    }


    /*
       Create our audio element.
    */

    audioPlayer =
        document.createElement("audio");

    audioPlayer.id =
        "mp3-audio";

    audioPlayer.preload =
        "auto";

    /*
       We DON'T use the browser's default controls
       because your website already has custom
       play / next / previous buttons.
    */

    audioPlayer.controls = false;


    /*
       Put the audio element inside the player area
       if it exists.
    */

    if (oldYoutubeContainer) {

        oldYoutubeContainer.parentNode.insertBefore(
            audioPlayer,
            oldYoutubeContainer
        );

    }

    else {

        document.body.appendChild(
            audioPlayer
        );

    }


    setupAudioEvents();

}


/* =========================================================
   AUDIO EVENTS
   ========================================================= */

function setupAudioEvents() {

    if (!audioPlayer) {
        return;
    }

    const vinylDisc = document.getElementById("vinylDisc");
    const tonearmAssembly = document.querySelector(".tonearm-assembly");

    /*
       Song started playing.
    */

    audioPlayer.addEventListener(
        "play",
        function () {

            if (playPauseButton) {

                playPauseButton.innerText =
                    "❚❚";

            }

            if (vinylDisc) {
                vinylDisc.classList.add("playing");
            }

            if (tonearmAssembly) {
                tonearmAssembly.classList.add("playing");
            }

        }
    );


    /*
       Song paused.
    */

    audioPlayer.addEventListener(
        "pause",
        function () {

            if (playPauseButton) {

                playPauseButton.innerText =
                    "▶";

            }

            if (vinylDisc) {
                vinylDisc.classList.remove("playing");
            }

            if (tonearmAssembly) {
                tonearmAssembly.classList.remove("playing");
            }

        }
    );


    /*
       Song finished.
       Automatically play next song.
    */

    audioPlayer.addEventListener(
        "ended",
        function () {

            playNextSong();

        }
    );


    /*
       Audio loading error.
    */

    audioPlayer.addEventListener(
        "error",
        function () {

            console.error(
                "❌ MP3 FAILED:",
                audioPlayer.src
            );

            console.error(
                "Song:",
                currentSong
            );

            if (playPauseButton) {

                playPauseButton.innerText =
                    "▶";

            }

            if (vinylDisc) {
                vinylDisc.classList.remove("playing");
            }

            if (tonearmAssembly) {
                tonearmAssembly.classList.remove("playing");
            }

        }
    );


    /*
       Update seekbar progress automatically as song plays.
    */

    audioPlayer.addEventListener(
        "timeupdate",
        function () {
            if (!isDraggingSeekbar && audioPlayer.duration && !isNaN(audioPlayer.duration) && audioPlayer.duration > 0) {
                const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
                updateSeekbarUI(progressPercent, audioPlayer.currentTime, audioPlayer.duration);
            }
        }
    );


    /*
       Update total duration display when audio metadata is ready.
    */

    audioPlayer.addEventListener(
        "loadedmetadata",
        function () {
            if (audioPlayer.duration && !isNaN(audioPlayer.duration)) {
                if (totalDurationDisplay) {
                    totalDurationDisplay.innerText = formatTime(audioPlayer.duration);
                }
            }
        }
    );

    audioPlayer.addEventListener(
        "durationchange",
        function () {
            if (audioPlayer.duration && !isNaN(audioPlayer.duration)) {
                if (totalDurationDisplay) {
                    totalDurationDisplay.innerText = formatTime(audioPlayer.duration);
                }
            }
        }
    );

}


/* =========================================================
   LOAD SONG
   ========================================================= */

function loadSong(index, autoPlay = false) {

    const playlist =
        musicLibrary[currentMood];


    if (!playlist || playlist.length === 0) {

        console.warn(
            "No songs found for mood:",
            currentMood
        );

        return;

    }


    /*
       Protect against invalid indexes.
    */

    if (
        index < 0 ||
        index >= playlist.length
    ) {

        index = 0;

    }


    currentSongIndex =
        index;


    currentSong =
        playlist[currentSongIndex];


    console.log(
        "Loading song:",
        currentSong.title
    );

    /* Update track dots */
    const dots = document.querySelectorAll(".player-dots .dot");
    if (dots.length > 0) {
        dots.forEach((dot, idx) => {
            if (idx === (currentSongIndex % dots.length)) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }


    /*
       Update song title.
    */

    if (songTitle) {

        songTitle.innerText =
            currentSong.title;

    }


    /*
       Update artist.
    */

    if (songArtist) {

        songArtist.innerText =
            currentSong.artist;

    }


    /*
       Highlight selected song.
    */

    document
        .querySelectorAll(".song-item")
        .forEach(function (item) {

            item.classList.remove("active");

        });


    const selected =
        document.querySelector(
            `.song-item[data-index="${index}"]`
        );


    if (selected) {

        selected.classList.add("active");

    }


    /*
       Make sure audio player exists.
    */

    if (!audioPlayer) {

        createAudioPlayer();

    }


    if (!audioPlayer) {
        return;
    }


    /*
       Build the local MP3 path.
    */

    const folder =
        musicFolders[currentMood];


    const audioPath =
        createSongPath(
            folder,
            currentSong.file
        );


    console.log(
        "MP3:",
        audioPath
    );


    /*
       Stop previous song.
    */

    audioPlayer.pause();


    /*
       Set new MP3.
    */

    audioPlayer.src =
        audioPath;


    /*
       Reset position.
    */

    audioPlayer.currentTime = 0;
    resetSeekbarUI();


    /*
       Reset play button.
    */

    if (playPauseButton) {

        playPauseButton.innerText =
            "▶";

    }


    /*
       Start immediately if requested.
    */

    if (autoPlay) {

        const playPromise =
            audioPlayer.play();


        if (
            playPromise !== undefined
        ) {

            playPromise.catch(
                function (error) {

                    console.log(
                        "Playback waiting for user interaction:",
                        error
                    );

                }
            );

        }

    }

}


/* =========================================================
   PLAY / PAUSE
   ========================================================= */

if (playPauseButton) {

    playPauseButton.addEventListener(
        "click",
        function () {

            if (!audioPlayer) {

                createAudioPlayer();

            }


            if (!audioPlayer) {
                return;
            }


            /*
               If no song has been loaded yet,
               load the first song.
            */

            if (!currentSong) {

                loadSong(
                    currentSongIndex,
                    true
                );

                return;

            }


            /*
               Play / pause.
            */

            if (audioPlayer.paused) {

                const playPromise =
                    audioPlayer.play();


                if (
                    playPromise !== undefined
                ) {

                    playPromise.catch(
                        function (error) {

                            console.error(
                                "Could not play audio:",
                                error
                            );

                        }
                    );

                }

            }

            else {

                audioPlayer.pause();

            }

        }
    );

}


/* =========================================================
   NEXT SONG
   ========================================================= */

function playNextSong() {

    const playlist =
        musicLibrary[currentMood];


    if (!playlist || playlist.length === 0) {
        return;
    }


    currentSongIndex++;


    if (
        currentSongIndex >=
        playlist.length
    ) {

        currentSongIndex = 0;

    }


    /*
       Automatically continue playing.
    */

    loadSong(
        currentSongIndex,
        true
    );

}


/* =========================================================
   NEXT BUTTON
   ========================================================= */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        function () {

            playNextSong();

        }
    );

}


/* =========================================================
   PREVIOUS BUTTON
   ========================================================= */

if (previousButton) {

    previousButton.addEventListener(
        "click",
        function () {

            const playlist =
                musicLibrary[currentMood];


            if (
                !playlist ||
                playlist.length === 0
            ) {

                return;

            }


            /*
               If song has already played for more
               than 3 seconds, pressing previous
               restarts the current song.
            */

            if (
                audioPlayer &&
                audioPlayer.currentTime > 3
            ) {

                audioPlayer.currentTime = 0;

                return;

            }


            currentSongIndex--;


            if (currentSongIndex < 0) {

                currentSongIndex =
                    playlist.length - 1;

            }


            loadSong(
                currentSongIndex,
                true
            );

        }
    );

}


/* =========================================================
   RENDER SONGS
   ========================================================= */

function renderSongs() {

    if (!songList) {

        console.error(
            "songList element not found"
        );

        return;

    }


    songList.innerHTML = "";


    const playlist =
        musicLibrary[currentMood];


    if (!playlist || playlist.length === 0) {

        songList.innerHTML = `
            <p class="no-songs">
                No songs found for this mood.
            </p>
        `;

        return;

    }


    playlist.forEach(
        function (song, index) {

            const item =
                document.createElement("div");


            item.className =
                "song-item";


            item.dataset.index =
                index;


            item.innerHTML = `

                <div class="song-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <div class="song-details">

                    <strong>
                        ${song.title}
                    </strong>

                    <span>
                        ${song.artist}
                    </span>

                </div>

                <div class="song-play">
                    ▶
                </div>

            `;


            /*
               Clicking a song immediately
               starts playing it.
            */

            item.addEventListener(
                "click",
                function () {

                    loadSong(
                        index,
                        true
                    );

                }
            );


            songList.appendChild(
                item
            );

        }
    );

}


/* =========================================================
   MOOD BUTTONS
   ========================================================= */

moodButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                /*
                   Remove active from all.
                */

                moodButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                /*
                   Activate clicked mood.
                */

                button.classList.add(
                    "active"
                );


                /*
                   Get mood.
                */

                currentMood =
                    button.dataset.mood;


                console.log(
                    "Mood changed to:",
                    currentMood
                );


                /*
                   Reset index.
                */

                currentSongIndex = 0;


                /*
                   Render new playlist.
                */

                renderSongs();


                /*
                   Load first song.
                   We DON'T autoplay here because
                   browsers may block autoplay after
                   some interactions.
                */

                loadSong(
                    0,
                    false
                );

            }
        );

    }
);


/* =========================================================
   INITIALIZE PLAYER
   ========================================================= */

createAudioPlayer();


/*
   Render initial playlist.
*/

renderSongs();


/*
   Load first song but DON'T start automatically.
*/

loadSong(
    0,
    false
);


/* =========================================================
   HAZARD WARNING OVERLAY
   ========================================================= */

function setupHazardOverlay() {
    const hazardProceedBtn = document.getElementById("hazardProceedBtn");
    const hazardOverlay = document.getElementById("hazardOverlay");
    const hazardLoadingBox = document.getElementById("hazardLoadingBox");
    const hazardProgressFill = document.getElementById("hazardProgressFill");
    const hazardAudio = document.getElementById("hazardAudio");

    let activeHazardSound = null;

    if (hazardProceedBtn && hazardOverlay) {
        hazardProceedBtn.addEventListener("click", function () {
            // Disable button immediately to prevent multiple clicks
            hazardProceedBtn.style.pointerEvents = "none";

            // Trigger hazard sound immediately on click
            try {
                if (hazardAudio) {
                    hazardAudio.load();
                    hazardAudio.currentTime = 0;
                    hazardAudio.volume = 0.8;
                    hazardAudio.loop = true;
                    activeHazardSound = hazardAudio;

                    const playPromise = hazardAudio.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(err => {
                            console.warn("DOM audio element play error, using fallback Audio:", err);
                            const fallbackAudio = new Audio("hazard.ogg");
                            fallbackAudio.volume = 0.8;
                            fallbackAudio.loop = true;
                            fallbackAudio.play().catch(e => console.error("Fallback hazard audio error:", e));
                            activeHazardSound = fallbackAudio;
                        });
                    }
                } else {
                    const fallbackAudio = new Audio("hazard.ogg");
                    fallbackAudio.volume = 0.8;
                    fallbackAudio.loop = true;
                    fallbackAudio.play().catch(e => console.error("Fallback hazard audio error:", e));
                    activeHazardSound = fallbackAudio;
                }
            } catch (e) {
                console.error("Error starting hazard audio:", e);
            }

            if (hazardLoadingBox && hazardProgressFill) {
                hazardProceedBtn.style.display = "none";
                hazardLoadingBox.style.display = "block";

                // Animate progress fill over 3.5s
                setTimeout(() => {
                    hazardProgressFill.style.width = "100%";
                }, 50);

                // Smoothly fade out hazard overlay after loading phase
                setTimeout(() => {
                    hazardOverlay.classList.add("dismissed");
                    document.body.classList.remove("hazard-locked");

                    // Stop hazard sound when entering main site
                    if (activeHazardSound) {
                        try {
                            activeHazardSound.pause();
                            activeHazardSound.currentTime = 0;
                        } catch (err) { }
                    }
                }, 3600);
            } else {
                hazardOverlay.classList.add("dismissed");
                document.body.classList.remove("hazard-locked");

                if (activeHazardSound) {
                    try {
                        activeHazardSound.pause();
                        activeHazardSound.currentTime = 0;
                    } catch (err) { }
                }
            }
        });
    }
}

setupHazardOverlay();


/* =========================================================
   CURSOR PARTICLE TRAIL EFFECT
   ========================================================= */

function setupCursorParticles() {
    // Disable on touch-only devices
    if (window.matchMedia("(hover: none)").matches || 'ontouchstart' in window) {
        return;
    }

    const container = document.getElementById("particle-container");
    if (!container) return;

    const emojis = ["✨", "💖", "🌸", "⭐", "♡", "🎀"];
    let lastSpawnTime = 0;
    const spawnInterval = 65; // ms throttle

    document.addEventListener("mousemove", function (e) {
        const now = Date.now();
        if (now - lastSpawnTime < spawnInterval) {
            return;
        }
        lastSpawnTime = now;

        const particle = document.createElement("span");
        particle.className = "cursor-particle";

        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        particle.innerText = emoji;

        // Position strictly around cursor using viewport coordinates
        const offsetX = (Math.random() - 0.5) * 16;
        const offsetY = (Math.random() - 0.5) * 16;

        particle.style.left = `${e.clientX + offsetX}px`;
        particle.style.top = `${e.clientY + offsetY}px`;

        const size = Math.floor(Math.random() * 8) + 14;
        particle.style.fontSize = `${size}px`;

        container.appendChild(particle);

        // Remove element after animation finishes
        setTimeout(() => {
            if (particle && particle.parentNode) {
                particle.remove();
            }
        }, 1000);
    });
}

setupCursorParticles();


/* =========================================================
   STARFIELD CANVAS ANIMATION SYSTEM
   ========================================================= */

function createStarfield(canvasId, starCount = 65) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let stars = [];

    function resize() {
        if (!canvas.parentElement) return;
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width || window.innerWidth;
        canvas.height = rect.height || window.innerHeight;
        initStars();
    }

    function initStars() {
        stars = [];
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.8,
                alpha: Math.random() * 0.8 + 0.2,
                speed: Math.random() * 0.02 + 0.006,
                driftX: (Math.random() - 0.5) * 0.15,
                driftY: -Math.random() * 0.25 - 0.05,
                color: Math.random() > 0.4 ? "#ffffff" : (Math.random() > 0.5 ? "#00f0ff" : "#ff85a1")
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            star.alpha += star.speed;
            if (star.alpha > 1 || star.alpha < 0.2) {
                star.speed = -star.speed;
            }
            star.x += star.driftX;
            star.y += star.driftY;

            if (star.y < 0) star.y = canvas.height;
            if (star.x < 0) star.x = canvas.width;
            if (star.x > canvas.width) star.x = 0;

            ctx.save();
            ctx.globalAlpha = Math.max(0, Math.min(1, star.alpha));
            ctx.fillStyle = star.color;
            ctx.shadowBlur = star.size * 3.5;
            ctx.shadowColor = star.color;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        });

        requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    resize();
    draw();
}

function initAllStarfields() {
    createStarfield("heroParticlesCanvas", 45);
    createStarfield("gardenStarfieldCanvas", 75);
    createStarfield("rxStarfieldCanvas", 70);
}


/* =========================================================
   GARDEN WISHES INTERACTION
   ========================================================= */

function setupGardenWishes() {
    const flowerItems = document.querySelectorAll(".garden-flower-item");
    const wishDisplay = document.getElementById("gardenWishDisplay");

    if (flowerItems.length > 0 && wishDisplay) {
        flowerItems.forEach(item => {
            item.addEventListener("click", function () {
                const wishText = this.getAttribute("data-wish") || "A special wish for you! ✨";
                wishDisplay.innerHTML = `✨ ${wishText} ✨`;
                wishDisplay.style.borderColor = "rgba(0, 240, 255, 0.8)";
                wishDisplay.style.boxShadow = "0 0 20px rgba(0, 240, 255, 0.4)";
            });
        });
    }
}

initAllStarfields();
setupGardenWishes();

console.log(
    "MP3 Music Player initialized."
);