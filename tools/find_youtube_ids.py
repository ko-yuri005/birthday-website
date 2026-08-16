import json
import re
import time
from pathlib import Path

import yt_dlp


# ============================================
# SONGS
# ============================================

songs = [

    ("Kaafi Hai Na", "Musafir Cafe"),
    ("Khayaal", "Abhijeet Srivastava"),
    ("The Simple Things", "Michael Carreon"),
    ("Doonron Doonron Unplugged", "Paresh Pahuja"),
    ("Love Someone", "Lukas Graham"),
    ("Until I Found You", "Stephen Sanchez"),
    ("Best Part", "Daniel Caesar H.E.R."),
    ("Dive", "Ed Sheeran"),
    ("Paragraphs", "Luke Chiang"),
    ("I Still Do", "Mokita"),
    ("Used to This", "Maybe"),
    ("Out Of Reach", "Someone Else's Rain"),
    ("1989", "Nightly"),
    ("Only You", "Joseph Vincent"),
    ("Blossom", "Matthew Ifield"),
    ("Ready For Love", "Matthew Ifield"),

    ("Phir Na Milen Kabhi", "Amit Trivedi"),
    ("Sukoon Mila", "Arijit Singh"),
    ("Tose Naina", "Arijit Singh"),
    ("Mast Magan", "Arijit Singh Chinmayi"),
    ("Tay Hai", "Ankit Tiwari"),
    ("Dekho Hazaro Dafa", "Arijit Singh"),
    ("Teri Jhuki Nazar", "Pritam"),
    ("Ishq Mubarak", "Arijit Singh"),
    ("Saajna Unplugged", "Falak Shabbir"),
    ("Mann Ki Lagan", "Rahat Fateh Ali Khan"),
    ("Kinna Sona", "Sunil Kamath Mithoon"),
    ("If The World Was Ending", "JP Saxe Julia Michaels"),
    ("Like I'm Gonna Lose You", "Meghan Trainor John Legend"),
    ("Tu Thodi Der Aur Theher Ja", "Shreya Ghoshal Farhan Saeed"),
    ("Maula Maula", "Kunal Ganjawala"),
    ("Aaoge Jab Tum", "Rashid Khan"),
    ("Darasal", "Atif Aslam"),
    ("Humnava Mere", "Jubin Nautiyal"),
    ("Tere Liye", "Atif Aslam Shreya Ghoshal"),
    ("Haareya", "Arijit Singh"),
    ("O Yaara", "Kaavish"),
    ("Tere Paas Mein", "AR Rahman"),
    ("Tu Mera Koi Na Hoke Bhi Kuch Laage", "Arijit Singh"),
    ("Main Hoon Saath Tere", "Arijit Singh"),
    ("Lae Dooba", "Sunidhi Chauhan"),
    ("Mere Naina Kafir Hogaye", "Rahat Fateh Ali Khan"),

    ("Let's Fall in Love for the Night", "FINNEAS"),
    ("Lose Somebody", "Kygo OneRepublic"),
    ("Faasle", "Aditya Rikhari"),
    ("Young and Beautiful", "Lana Del Rey"),
    ("Love and War", "Yellow Claw"),
    ("Achchi Lagti Ho", "Udit Narayan"),
    ("Until I Found You Em Beihold", "Stephen Sanchez"),
    ("Can't Take My Eyes Off You", "Frankie Valli"),
    ("Sway", "Michael Buble"),
    ("Mine", "Bazzi"),
    ("Marvin Gaye", "Charlie Puth Meghan Trainor"),
    ("Baby Now That I Found You", "Ella Bright"),
    ("Labyrinth", "Taylor Swift"),
    ("So Easy To Fall In Love", "Olivia Dean"),
    ("By My Side", "Saint Rene"),
    ("Regardless", "Asim Azhar"),
    ("Love Me Like That", "Sam Kim"),
    ("Sunburn", "Brian Cheng"),
    ("Flatline", "Justin Bieber"),

    ("Tu Hi Mera", "Pritam Shafqat Amanat Ali"),
    ("Rasiya Reprise", "Brahmastra"),
    ("Dekh Lena", "Arijit Singh Tulsi Kumar"),
    ("Meri Banogi Kya Reprise", "Rito Riba"),
    ("Someone You Loved", "Emma Heesters"),
    ("Enna Sona", "Arijit Singh"),
    ("Kasturi", "Arijit Singh"),
    ("Ishq Bulava", "Sanam Puri"),
    ("Meherbaan Unplugged", "Vishal Shekhar"),
    ("CO2", "Prateek Kuhad"),
    ("Chand Mera Dil", "Shreya Ghoshal"),
    ("Main Rang Sharbaton Ka Reprise", "Arijit Singh"),
    ("Oh Saaiyaan", "Arijit Singh"),
    ("Darkhaast Acoustic", "Prakriti Kakar Mithoon"),
    ("Jaaniye", "Monu Music"),
    ("Theher Ja", "Garvit Priyansh"),
    ("Raaziyan", "Garvit Priyansh"),
    ("Do Pall", "Coachsahb Asa Singh Mastana"),
    ("Ki Honda Pyaar", "Arijit Singh"),
    ("Zaalima", "Arijit Singh"),
    ("Saudebazi", "Pritam Javed Ali"),
    ("Brooklyn Baby", "Lana Del Rey"),
    ("KannuKulla Reprise", "KannuKulla"),

    ("On The Floor", "Jennifer Lopez"),
    ("Beauty and a Beat", "Justin Bieber Nicki Minaj"),
    ("Senorita", "Shawn Mendes Camila Cabello"),
    ("Girls", "The Kid LAROI"),
    ("Jumping Machine", "Chinese song"),
    ("Self Aware", "Temper City"),
    ("Love and War G Funk Remix", "Yellow Claw"),
    ("Frozen Heart", "8Bite Dyrox"),
    ("Dream and Travel", "徐子未 汪十八"),
    ("Margaret", "Lana Del Rey Bleachers"),
    ("Sitaare", "Ekkis"),
    ("Sai Pallavi Intro", "G V Prakash"),

    ("Sham O Subah Tu Meri", "Gabbar Is Back"),
    ("Deedaar Tera Milne Ke Baad", "Arijit Singh Harshdeep Kaur"),
    ("Already Free", "ALEPH"),
    ("Slipping Through My Fingers", "ABBA"),
    ("Happier Than Ever", "ASTN"),
    ("終点", "难哄")
]


# ============================================
# YOUTUBE SEARCH
# ============================================

ydl_opts = {
    "quiet": True,
    "no_warnings": True,
    "extract_flat": True
}


def find_video(title, artist):

    query = f"{title} {artist}"

    print(f"Searching: {query}")

    try:

        with yt_dlp.YoutubeDL(ydl_opts) as ydl:

            result = ydl.extract_info(
                f"ytsearch1:{query}",
                download=False
            )

            if not result:
                return None

            entries = result.get("entries", [])

            if not entries:
                return None

            video = entries[0]

            return {
                "title": title,
                "artist": artist,
                "youtubeId": video.get("id"),
                "youtubeTitle": video.get("title")
            }

    except Exception as e:

        print("ERROR:", e)

        return None


# ============================================
# GENERATE DATA
# ============================================

results = []

for index, (title, artist) in enumerate(songs, start=1):

    print(
        f"\n[{index}/{len(songs)}]"
    )

    result = find_video(
        title,
        artist
    )

    if result:

        print(
            "FOUND:",
            result["youtubeTitle"],
            "→",
            result["youtubeId"]
        )

        results.append(result)

    else:

        print("NOT FOUND")

        results.append({
            "title": title,
            "artist": artist,
            "youtubeId": None,
            "youtubeTitle": None
        })

    time.sleep(1)


# ============================================
# SAVE JSON
# ============================================

output = Path(
    "youtube_song_ids.json"
)

output.write_text(
    json.dumps(
        results,
        ensure_ascii=False,
        indent=4
    ),
    encoding="utf-8"
)


print("\n================================")
print("DONE!")
print("Saved:", output)
print("================================")