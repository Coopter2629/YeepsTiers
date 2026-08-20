/* =====================================================================
   PLAYER DATA
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to add, remove, or update
   players. The Rankings page (Ranks.html) reads directly from this
   file — nothing else needs to change.

   HOW TO ADD A PLAYER
   --------------------
   Copy one of the blocks below, give it a unique "id", and fill in:

     name      - player's display name
     avatar    - image url for their profile picture
     title     - shown under their name (e.g. an overall title/rank)
     score     - overall numeric score, used for "Overall" sorting
     rank      - image url for their rank badge icon
     team      - optional, leave as "" if not on a team
     categories - one entry per weapon/PvP category. For each:
         cat  - must match a category name exactly (see the CATEGORY
                LIST below) so it shows up on the right tab
         pos  - "Tier 1" through "Tier 5" (lower number = better),
                or "Retired Tier: X" for a retired tier,
                or "" if the player is unranked in that category
         img  - image url for the tier badge shown on their card

   CATEGORY LIST (must match "cat" spelling exactly):
     Bat PvP, Dagger PvP, Freeze Glove PvP, Mace PvP,
     Shield + Weapon PvP, Fire Axe PvP, Scythe PvP, Baseball PvP,
     Other PvP

   This file currently has placeholder/sample players so the page has
   something to show — replace them with your real roster.
   ===================================================================== */

export const players = [
  {
    id: 1,
    name: "Voffi",
    avatar: "https://yeeplist.page.gd/images/PvP_Rank.jpeg",
    title: "War Yeep",
    score: 245,
    rank: "https://yeeplist.page.gd/images/War.png",
    team: "",
    categories: [
      { cat: "Bat PvP",             pos: "Tier 1", img: "https://yeeplist.page.gd/images/Bat_Tier4.png" },
      { cat: "Dagger PvP",          pos: "Tier 2", img: "https://yeeplist.page.gd/images/Bat_Tier4.png" },
      { cat: "Freeze Glove PvP",    pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Mace PvP",            pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Shield + Weapon PvP", pos: "Tier 3", img: "https://yeeplist.page.gd/images/Tier3.png" },
      { cat: "Fire Axe PvP",        pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Scythe PvP",          pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Baseball PvP",        pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Other PvP",           pos: "Retired Tier: 4", img: "https://yeeplist.page.gd/images/Tier4.png" }
    ]
  },
  {
    id: 2,
    name: "Kestrel",
    avatar: "https://yeeplist.page.gd/images/PvP_Rank.jpeg",
    title: "Elite Yeep",
    score: 198,
    rank: "https://yeeplist.page.gd/images/Elite.png",
    team: "",
    categories: [
      { cat: "Bat PvP",             pos: "Tier 2", img: "https://yeeplist.page.gd/images/Bat_Tier4.png" },
      { cat: "Dagger PvP",          pos: "Tier 1", img: "https://yeeplist.page.gd/images/Bat_Tier4.png" },
      { cat: "Freeze Glove PvP",    pos: "Tier 3", img: "https://yeeplist.page.gd/images/Freeze_Glove.png" },
      { cat: "Mace PvP",            pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Shield + Weapon PvP", pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Fire Axe PvP",        pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Scythe PvP",          pos: "Tier 2", img: "https://yeeplist.page.gd/images/Horror.jpg" },
      { cat: "Baseball PvP",        pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Other PvP",           pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" }
    ]
  },
  {
    id: 3,
    name: "Marrow",
    avatar: "https://yeeplist.page.gd/images/PvP_Rank.jpeg",
    title: "Master Yeep",
    score: 132,
    rank: "https://yeeplist.page.gd/images/Master.png",
    team: "",
    categories: [
      { cat: "Bat PvP",             pos: "Tier 3", img: "https://yeeplist.page.gd/images/Bat_Tier4.png" },
      { cat: "Dagger PvP",          pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Freeze Glove PvP",    pos: "Tier 1", img: "https://yeeplist.page.gd/images/Freeze_Glove.png" },
      { cat: "Mace PvP",            pos: "Tier 2", img: "https://yeeplist.page.gd/images/SwarmSlayer.jpg" },
      { cat: "Shield + Weapon PvP", pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Fire Axe PvP",        pos: "Tier 4", img: "https://yeeplist.page.gd/images/Desert.png" },
      { cat: "Scythe PvP",          pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Baseball PvP",        pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Other PvP",           pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" }
    ]
  },
  {
    id: 4,
    name: "Snapdragon",
    avatar: "https://yeeplist.page.gd/images/PvP_Rank.jpeg",
    title: "Battle Yeep",
    score: 87,
    rank: "https://yeeplist.page.gd/images/Battle.png",
    team: "",
    categories: [
      { cat: "Bat PvP",             pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Dagger PvP",          pos: "Tier 3", img: "https://yeeplist.page.gd/images/Bat_Tier4.png" },
      { cat: "Freeze Glove PvP",    pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Mace PvP",            pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Shield + Weapon PvP", pos: "Tier 2", img: "https://yeeplist.page.gd/images/Tier3.png" },
      { cat: "Fire Axe PvP",        pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Scythe PvP",          pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Baseball PvP",        pos: "Tier 1", img: "https://yeeplist.page.gd/images/Bat_Tier4.png" },
      { cat: "Other PvP",           pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" }
    ]
  },
  {
    id: 5,
    name: "Hollowpoint",
    avatar: "https://yeeplist.page.gd/images/PvP_Rank.jpeg",
    title: "Street Yeep",
    score: 41,
    rank: "https://yeeplist.page.gd/images/Street.png",
    team: "",
    categories: [
      { cat: "Bat PvP",             pos: "Tier 4", img: "https://yeeplist.page.gd/images/Bat_Tier4.png" },
      { cat: "Dagger PvP",          pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Freeze Glove PvP",    pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Mace PvP",            pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Shield + Weapon PvP", pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Fire Axe PvP",        pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Scythe PvP",          pos: "Tier 3", img: "https://yeeplist.page.gd/images/Horror.jpg" },
      { cat: "Baseball PvP",        pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Other PvP",           pos: "Tier 5", img: "https://yeeplist.page.gd/images/Tier4.png" }
    ]
  }
];
export const players = [
  {
    id: 1,
    name: "GubbyYeeps",
    avatar: "https://yeeplist.page.gd/images/PvP_Rank.jpeg",
    title: "Jew Yeep",
    score: 245,
    rank: "https://yeeplist.page.gd/images/War.png",
    team: "",
    categories: [
      { cat: "Bat PvP",             pos: "Tier 1", img: "https://yeeplist.page.gd/images/Bat_Tier4.png" },
      { cat: "Dagger PvP",          pos: "Tier 2", img: "https://yeeplist.page.gd/images/Bat_Tier4.png" },
      { cat: "Freeze Glove PvP",    pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Mace PvP",            pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Shield + Weapon PvP", pos: "Tier 3", img: "https://yeeplist.page.gd/images/Tier3.png" },
      { cat: "Fire Axe PvP",        pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Scythe PvP",          pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Baseball PvP",        pos: "",       img: "https://yeeplist.page.gd/images/TierU.png" },
      { cat: "Other PvP",           pos: "Retired Tier: 4", img: "https://yeeplist.page.gd/images/Tier4.png" }
    ]
  },
