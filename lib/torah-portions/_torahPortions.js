import { getCurrentDate } from '@/utils/_date';

export const portions = [
  {
    title: "B'reisheet",
    hebcalTitle: 'Bereshit',
    slug: 'breisheet',
    key: 0,
    date: '2022-10-22',
    hdate: '27 Tishrei 5783',
    book: 'Genesis',
    hebrew: ' בראשית',
    leyning: {
      torah: 'Genesis 1:1-6:8',
      haftarah: 'Isaiah 42:5-43:10',
      gospel: 'John 1:1-17',
      haftarah_sephardic: 'Isaiah 42:5-21',
      maftir: 'Genesis 6:5-6:8'
    }
  },
  {
    title: 'Noach',
    hebcalTitle: 'Noach',
    slug: 'noach',
    key: 1,
    date: '2022-10-29',
    hdate: '4 Cheshvan 5783',
    book: 'Genesis',
    hebrew: ' נח',
    leyning: {
      torah: 'Genesis 6:9-11:32',
      haftarah: 'Isaiah 54:1-55:5',
      gospel: 'Luke 17:20-27',
      haftarah_sephardic: 'Isaiah 54:1-10',
      maftir: 'Genesis 11:29-11:32'
    }
  },
  {
    title: 'Lech-Lecha',
    hebcalTitle: 'Lech-Lecha',
    slug: 'lech-lecha',
    key: 2,
    date: '2022-11-05',
    hdate: '11 Cheshvan 5783',
    book: 'Genesis',
    hebrew: ' לך־לך',
    leyning: {
      torah: 'Genesis 12:1-17:27',
      haftarah: 'Isaiah 40:27-41:16',
      gospel: 'John 8:51-58',
      maftir: 'Genesis 17:24-17:27'
    }
  },
  {
    title: 'Vayera',
    hebcalTitle: 'Vayera',
    slug: 'vayera',
    key: 3,
    date: '2022-11-12',
    hdate: '18 Cheshvan 5783',
    book: 'Genesis',
    hebrew: ' וירא',
    leyning: {
      torah: 'Genesis 18:1-22:24',
      haftarah: 'II Kings 4:1-37',
      gospel: 'Luke 17:28-37',
      haftarah_sephardic: 'II Kings 4:1-23',
      maftir: 'Genesis 22:20-22:24'
    }
  },
  {
    title: 'Chayei Sarah',
    hebcalTitle: 'Chayei Sara',
    slug: 'chayei-sarah',
    key: 4,
    date: '2022-11-19',
    hdate: '25 Cheshvan 5783',
    book: 'Genesis',
    hebrew: ' חיי שרה',
    leyning: {
      torah: 'Genesis 23:1-25:18',
      haftarah: 'I Kings 1:1-31',
      gospel: 'John 4:3-14',
      maftir: 'Genesis 25:16-25:18'
    }
  },
  {
    title: 'Toldot',
    hebcalTitle: 'Toldot',
    slug: 'toldot',
    key: 5,
    date: '2022-11-26',
    hdate: '2 Kislev 5783',
    book: 'Genesis',
    hebrew: ' תולדות',
    leyning: {
      torah: 'Genesis 25:19-28:9',
      haftarah: 'Malachi 1:1-2:7',
      gospel: 'Matthew 10:21-38',
      maftir: 'Genesis 28:7-28:9'
    }
  },
  {
    title: 'Vayetze',
    hebcalTitle: 'Vayetzei',
    slug: 'vayetze',
    key: 6,
    date: '2022-12-03',
    hdate: '9 Kislev 5783',
    book: 'Genesis',
    hebrew: ' ויצא',
    leyning: {
      torah: 'Genesis 28:10-32:3',
      haftarah: 'Hosea 12:13-14:10',
      gospel: 'John 1:41-51',
      haftarah_sephardic: 'Hosea 11:7-12:12',
      maftir: 'Genesis 32:1-32:3'
    }
  },
  {
    title: 'Vayishlach',
    hebcalTitle: 'Vayishlach',
    slug: 'vayishlach',
    key: 7,
    date: '2022-12-10',
    hdate: '16 Kislev 5783',
    book: 'Genesis',
    hebrew: ' וישלח',
    leyning: {
      torah: 'Genesis 32:4-36:43',
      haftarah: 'Obadiah 1:1-21',
      gospel: 'Matthew 2:13-23',
      maftir: 'Genesis 36:40-36:43'
    }
  },
  {
    title: 'Vayeshev',
    hebcalTitle: 'Vayeshev',
    slug: 'vayeshev',
    key: 8,
    date: '2022-12-17',
    hdate: '23 Kislev 5783',
    book: 'Genesis',
    hebrew: ' וישב',
    leyning: {
      torah: 'Genesis 37:1-40:23',
      haftarah: 'Amos 2:6-3:8',
      gospel: 'Matthew 1:18-25',
      maftir: 'Genesis 40:20-40:23'
    }
  },
  {
    title: 'Miketz',
    hebcalTitle: 'Miketz',
    slug: 'miketz',
    key: 9,
    date: '2022-12-24',
    hdate: '30 Kislev 5783',
    book: 'Genesis',
    special: 'shabbat-hanukkah-1',
    hebrew: ' מקץ',
    leyning: {
      torah: 'Genesis 41:1-44:17',
      haftarah: 'I Kings 3:15-4:1 ',
      gospel: 'Luke 24:13-29 ',
      maftir: 'Genesis 44:14-44:17'
    }
  },
  {
    title: 'Vayigash',
    hebcalTitle: 'Vayigash',
    slug: 'vayigash',
    key: 10,
    date: '2022-12-31',
    hdate: '7 Tevet 5783',
    book: 'Genesis',
    hebrew: ' ויגש',
    leyning: {
      torah: 'Genesis 44:18-47:27',
      haftarah: 'Ezekiel 37:15-28',
      gospel: 'Luke 24:30-48',
      maftir: 'Genesis 47:25-47:27'
    }
  },
  {
    title: 'Vayechi',
    hebcalTitle: 'Vayechi',
    slug: 'vayechi',
    key: 11,
    date: '2023-01-07',
    hdate: '14 Tevet 5783',
    book: 'Genesis',
    hebrew: ' ויחי',
    leyning: {
      torah: 'Genesis 47:28-50:26',
      haftarah: 'I Kings 2:1-12',
      gospel: 'John 13:1-19',
      maftir: 'Genesis 50:23-50:26'
    }
  },
  {
    title: 'Shemot',
    hebcalTitle: 'Shemot',
    slug: 'shemot',
    key: 12,
    date: '2023-01-14',
    hdate: '21 Tevet 5783',
    book: 'Exodus',
    hebrew: ' שמות',
    leyning: {
      torah: 'Exodus 1:1-6:1',
      haftarah: 'Isaiah 27:6-28:13, 29:22-23',
      gospel: 'Matthew 2:1-12',
      haftarah_sephardic: 'Jeremiah 1:1-2:3',
      maftir: 'Exodus 5:22-6:1'
    }
  },
  {
    title: 'Vaera',
    hebcalTitle: 'Vaera',
    slug: 'vaera',
    key: 13,
    date: '2023-01-21',
    hdate: '28 Tevet 5783',
    book: 'Exodus',
    hebrew: ' וארא',
    leyning: {
      torah: 'Exodus 6:2-9:35',
      haftarah: 'Ezekiel 28:25-29:21',
      gospel: 'Luke 11:14-22',
      maftir: 'Exodus 9:33-9:35'
    }
  },
  {
    title: 'Bo',
    hebcalTitle: 'Bo',
    slug: 'bo',
    key: 14,
    date: '2023-01-28',
    hdate: "6 Sh'vat 5783",
    book: 'Exodus',
    hebrew: ' בא',
    leyning: {
      torah: 'Exodus 10:1-13:16',
      haftarah: 'Jeremiah 46:13-28',
      gospel: 'John 19:31-37',
      maftir: 'Exodus 13:14-13:16'
    }
  },
  {
    title: 'Beshalach',
    hebcalTitle: 'Beshalach',
    slug: 'beshalach',
    key: 15,
    date: '2023-02-04',
    hdate: "13 Sh'vat 5783",
    book: 'Exodus',
    hebrew: ' בשלח',
    leyning: {
      torah: 'Exodus 13:17-17:16',
      haftarah: 'Judges 4:4-5:31',
      gospel: 'Matthew 14:22-33',
      haftarah_sephardic: 'Judges 5:1-31',
      maftir: 'Exodus 17:14-17:16'
    }
  },
  {
    title: 'Yitro',
    hebcalTitle: 'Yitro',
    slug: 'yitro',
    key: 16,
    date: '2023-02-11',
    hdate: "20 Sh'vat 5783",
    book: 'Exodus',
    hebrew: ' יתרו',
    leyning: {
      torah: 'Exodus 18:1-20:23',
      haftarah: 'Isaiah 6:1-7:6, 9:5-6',
      gospel: 'Matthew 19:16-26',
      haftarah_sephardic: 'Isaiah 6:1-13',
      maftir: 'Exodus 20:19-20:23'
    }
  },
  {
    title: 'Mishpatim',
    hebcalTitle: 'Mishpatim',
    slug: 'mishpatim',
    key: 17,
    date: '2023-02-18',
    hdate: "27 Sh'vat 5783",
    book: 'Exodus',
    special: 'shabbat-shekalim',
    hebrew: ' משפטים',
    leyning: {
      torah: 'Exodus 21:1-24:18',
      haftarah: 'Jeremiah 34:8-22, 33:25-26',
      gospel: 'Matthew 26:20-30',
      maftir: 'Exodus 24:12-24:18'
    }
  },
  {
    title: 'Terumah',
    hebcalTitle: 'Terumah',
    slug: 'terumah',
    key: 18,
    date: '2023-02-25',
    hdate: '4 Adar 5783',
    book: 'Exodus',
    hebrew: ' תרומה',
    leyning: {
      torah: 'Exodus 25:1-27:19',
      haftarah: 'I Kings 5:26-6:13',
      gospel: 'Matthew 12:35-44',
      maftir: 'Exodus 27:17-27:19'
    }
  },
  {
    title: 'Tetzaveh',
    hebcalTitle: 'Tetzaveh',
    slug: 'tetzaveh',
    key: 19,
    date: '2023-03-04',
    hdate: '11 Adar 5783',
    book: 'Exodus',
    special: 'shabbat-zachor',
    hebrew: ' תצוה',
    leyning: {
      torah: 'Exodus 27:20-30:10',
      haftarah: 'Ezekiel 43:10-27',
      gospel: 'Matthew 5:13-20',
      maftir: 'Exodus 30:8-30:10'
    }
  },
  {
    title: 'Ki Tisa',
    hebcalTitle: 'Ki Tisa',
    slug: 'ki-tisa',
    key: 20,
    date: '2023-03-11',
    hdate: '18 Adar 5783',
    book: 'Exodus',
    special: 'shabbat-parah',
    hebrew: ' כי תשא',
    leyning: {
      torah: 'Exodus 30:11-34:35',
      haftarah: '1 Kings 18:1-39',
      gospel: 'Mark 9:1-10',
      haftarah_sephardic: 'I Kings 18:20-39',
      maftir: 'Exodus 34:29-34:35'
    }
  },
  {
    title: "Vayak'hel",
    hebcalTitle: 'Vayakhel',
    slug: 'vayakhel',
    key: 21,
    date: '',
    hdate: '',
    book: 'Exodus',
    hebrew: ' ויקהל',
    leyning: {
      torah: 'Exodus 35:1-38:20',
      haftarah: '1 Kings 7:40-50',
      gospel: 'Matthew 12:1-13',
      maftir: 'Exodus 12:1-12:20 '
    }
  },
  {
    title: 'Pekudei',
    hebcalTitle: 'Pekudei',
    slug: 'pekudei',
    key: 22,
    date: '',
    hdate: '',
    book: 'Exodus',
    hebrew: ' פקודי',
    leyning: {
      torah: 'Exodus 38:21-40:38',
      haftarah: '1 Kings 7:51-8:21',
      gospel: 'Luke 16:1-13',
      maftir: 'Exodus 12:1-12:20 '
    }
  },
  {
    title: "Vayak'hel-Pekudei",
    hebcalTitle: 'Vayakhel-Pekudei',
    slug: 'vayakhel-pekudei',
    key: 23,
    date: '2023-03-18',
    hdate: '25 Adar 5783',
    book: 'Exodus',
    special: 'shabbat-hachodesh',
    hebrew: ' ויקהל־פקודי',
    leyning: {
      torah: 'Exodus 35:1-40:38',
      haftarah: '1 Kings 7:40-50',
      gospel: 'John 13:1-19; Luke 16:1-13',
      maftir: 'Exodus 40:33-40:38'
    }
  },
  {
    title: 'Vayikra',
    hebcalTitle: 'Vayikra',
    slug: 'vayikra',
    key: 24,
    date: '2023-03-25',
    hdate: '3 Nisan 5783',
    book: 'Leviticus',
    hebrew: ' ויקרא',
    leyning: {
      torah: 'Leviticus 1:1-5:26',
      haftarah: 'Isaiah 43:21-44:23',
      gospel: 'Matthew 5:23-30',
      maftir: 'Leviticus 5:24-5:26'
    }
  },
  {
    title: 'Tzav',
    hebcalTitle: 'Tzav',
    slug: 'tzav',
    key: 25,
    date: '2023-04-01',
    hdate: '10 Nisan 5783',
    book: 'Leviticus',
    special: 'shabbat-hagadol',
    hebrew: ' צו',
    leyning: {
      torah: 'Leviticus 6:1-8:36',
      haftarah: 'Jeremiah 7:21-8:3, 9:22-23',
      gospel: 'Matthew 9:13-25',
      maftir: 'Leviticus 8:33-8:36'
    }
  },
  {
    title: "Sh'mini",
    hebcalTitle: 'Shmini',
    slug: 'shemini',
    key: 26,
    date: '2023-04-15',
    hdate: '24 Nisan 5783',
    book: 'Leviticus',
    hebrew: ' שמיני',
    leyning: {
      torah: 'Leviticus 9:1-11:47',
      haftarah: 'II Samuel 6:1-7:17',
      gospel: 'Matthew 3:11-17',
      haftarah_sephardic: 'II Samuel 6:1-19',
      maftir: 'Leviticus 11:45-11:47'
    }
  },
  {
    title: 'Tazria',
    hebcalTitle: 'Tazria',
    slug: 'tazria',
    key: 27,
    date: '',
    hdate: '',
    book: 'Leviticus',
    hebrew: ' תזריע',
    leyning: {
      torah: 'Leviticus 12:1-13:59',
      haftarah: '2 Kings 4:42-5:19',
      gospel: 'Luke 2:22-33',
      maftir: 'Leviticus 13:57-13:59'
    }
  },
  {
    title: 'Metzora',
    hebcalTitle: 'Metzora',
    slug: 'metzora',
    key: 28,
    date: '',
    hdate: '',
    book: 'Leviticus',
    hebrew: ' מצרע',
    leyning: {
      torah: 'Leviticus 14:1-15:33',
      haftarah: '2 Kings 7:3-20',
      gospel: 'Mark 1:35-45',
      maftir: 'Leviticus 15:31-15:33'
    }
  },
  {
    title: 'Tazria-Metzora',
    hebcalTitle: 'Tazria-Metzora',
    slug: 'tazria-metzora',
    key: 29,
    date: '2023-04-22',
    hdate: '1 Iyyar 5783',
    book: 'Leviticus',
    special: 'rosh-chodesh',
    hebrew: ' תזריע־מצרע',
    leyning: {
      torah: 'Leviticus 12:1-15:33',
      haftarah: '2 Kings 7:3-20',
      gospel: 'Luke 2:22-35; Mark 1:35-45',
      maftir: 'Leviticus 15:31-15:33'
    }
  },
  {
    title: 'Acharei Mot',
    hebcalTitle: 'Achrei Mot',
    slug: 'acharei-mot',
    key: 30,
    date: '',
    hdate: '',
    book: 'Leviticus',
    hebrew: ' אחרי מות',
    leyning: {
      torah: 'Leviticus 16:1-18:30',
      haftarah: 'Ezekiel 22:1-19',
      gospel: 'Matthew 15:10-20; Mark 12:28-34',
      maftir: 'Leviticus 20:25-20:27'
    }
  },
  {
    title: 'Kedoshim',
    hebcalTitle: 'Kedoshim',
    slug: 'kedoshim',
    key: 31,
    date: '',
    hdate: '',
    book: 'Leviticus',
    hebrew: ' קדשים',
    leyning: {
      torah: 'Leviticus 19:1-20:27',
      haftarah: 'Amos 9:7-15',
      gospel: 'Mark 12:28-34',
      maftir: 'Leviticus 20:25-20:27'
    }
  },
  {
    title: 'Acharei Mot-Kedoshim',
    hebcalTitle: 'Achrei Mot-Kedoshim',
    slug: 'acharei-mot-kedoshim',
    key: 32,
    date: '2023-04-29',
    hdate: '8 Iyyar 5783',
    book: 'Leviticus',
    hebrew: ' אחרי מות־קדשים',
    leyning: {
      torah: 'Leviticus 16:1-20:27',
      haftarah: 'Amos 9:7-15',
      haftarahPossible: 'Ezekiel 22:1-19',
      gospel: 'Matthew 15:10-20',
      maftir: 'Leviticus 20:25-20:27'
    }
  },
  {
    title: 'Emor',
    hebcalTitle: 'Emor',
    slug: 'emor',
    key: 33,
    date: '2023-05-06',
    hdate: '15 Iyyar 5783',
    book: 'Leviticus',
    hebrew: ' אמור',
    leyning: {
      torah: 'Leviticus 21:1-24:23',
      haftarah: 'Ezekiel 44:15-31',
      gospel: 'Matthew 26:59-66',
      maftir: 'Leviticus 24:21-24:23'
    }
  },
  {
    title: 'Behar',
    hebcalTitle: 'Behar',
    slug: 'behar',
    key: 34,
    date: '',
    hdate: '',
    book: 'Leviticus',
    hebrew: ' בהר',
    leyning: {
      torah: 'Leviticus 25:1-26:2',
      haftarah: 'Jeremiah 32:6-27',
      gospel: 'Luke 4:14-22',
      maftir: 'Leviticus 27:32-27:34'
    }
  },
  {
    title: 'Bechukotai',
    hebcalTitle: 'Bechukotai',
    slug: 'bechukotai',
    key: 35,
    date: '',
    hdate: '',
    book: 'Leviticus',
    hebrew: ' בחקתי',
    leyning: {
      torah: 'Leviticus 26:3-27:34',
      haftarah: 'Jeremiah 16:19-17:14',
      gospel: 'Matthew 16:20-28',
      maftir: 'Leviticus 27:32-27:34'
    }
  },
  {
    title: 'Behar-Bechukotai',
    hebcalTitle: 'Behar-Bechukotai',
    slug: 'behar-bechukotai',
    key: 36,
    date: '2023-05-13',
    hdate: '22 Iyyar 5783',
    book: 'Leviticus',
    hebrew: ' בהר־בחקתי',
    leyning: {
      torah: 'Leviticus 25:1-27:34',
      haftarah: 'Jeremiah 16:19-17:14',
      gospel: 'Luke 4:14-22; Matthew 16:20-28',
      maftir: 'Leviticus 27:32-27:34'
    }
  },
  {
    title: 'Bamidbar',
    hebcalTitle: 'Bamidbar',
    slug: 'bamidbar',
    key: 37,
    date: '2023-05-20',
    hdate: '29 Iyyar 5783',
    book: 'Numbers',
    special: 'machar-chodesh',
    hebrew: ' במדבר',
    leyning: {
      torah: 'Numbers 1:1-4:20',
      haftarah: 'Hosea 2:1-22',
      gospel: 'Matthew 4:1-17',
      maftir: 'Numbers 4:17-4:20'
    }
  },
  {
    title: 'Nasso',
    hebcalTitle: 'Nasso',
    slug: 'nasso',
    key: 38,
    date: '2023-06-03',
    hdate: '14 Sivan 5783',
    book: 'Numbers',
    hebrew: ' נשא',
    leyning: {
      torah: 'Numbers 4:21-7:89',
      haftarah: 'Judges 13:2-25',
      gospel: 'Luke 1:11-20',
      maftir: 'Numbers 7:87-7:89'
    }
  },
  {
    title: "Beha'alotcha",
    hebcalTitle: "Beha'alotcha",
    slug: 'behaalotcha',
    key: 39,
    date: '2023-06-10',
    hdate: '21 Sivan 5783',
    book: 'Numbers',
    hebrew: ' בהעלתך',
    leyning: {
      torah: 'Numbers 8:1-12:16',
      haftarah: 'Zechariah 2:14-4:7',
      gospel: 'Matthew 14:14-21',
      maftir: 'Numbers 12:14-12:16'
    }
  },
  {
    title: 'Shelach',
    hebcalTitle: "Sh'lach",
    slug: 'shelach',
    key: 40,
    date: '2023-06-17',
    hdate: '28 Sivan 5783',
    book: 'Numbers',
    hebrew: ' שלח־לך',
    leyning: {
      torah: 'Numbers 13:1-15:41',
      haftarah: 'Joshua 2:1-24',
      gospel: 'Matthew 10:1-14',
      maftir: 'Numbers 15:37-15:41'
    }
  },
  {
    title: 'Korach',
    hebcalTitle: 'Korach',
    slug: 'korach',
    key: 41,
    date: '2023-06-24',
    hdate: '5 Tamuz 5783',
    book: 'Numbers',
    hebrew: ' קורח',
    leyning: {
      torah: 'Numbers 16:1-18:32',
      haftarah: 'I Samuel 11:14-12:22',
      gospel: 'Matthew 26:13-24',
      maftir: 'Numbers 18:30-18:32'
    }
  },
  {
    title: 'Chukat',
    hebcalTitle: 'Chukat',
    slug: 'chukat',
    key: 42,
    date: '',
    hdate: '',
    book: 'Numbers',
    hebrew: ' חקת',
    leyning: {
      torah: 'Numbers 19:1-22:1',
      haftarah: 'Judges 11:1-33',
      gospel: 'John 2:1-12',
      maftir: 'Numbers 25:7-25:9'
    }
  },
  {
    title: 'Balak',
    hebcalTitle: 'Balak',
    slug: 'balak',
    key: 43,
    date: '',
    hdate: '',
    book: 'Numbers',
    hebrew: ' בלק',
    leyning: {
      torah: 'Numbers 22:2-25:9',
      haftarah: 'Micah 5:6-6:8*',
      gospel: 'Matthew 21:1-11',
      maftir: 'Numbers 25:7-25:9'
    }
  },
  {
    title: 'Chukat-Balak',
    hebcalTitle: 'Chukat-Balak',
    slug: 'chukat-balak',
    key: 44,
    date: '2023-07-01',
    hdate: '12 Tamuz 5783',
    book: 'Numbers',
    hebrew: ' חקת־בלק',
    leyning: {
      torah: 'Numbers 19:1-25:9',
      haftarah: 'Micah 5:6-6:8',
      gospel: 'John 19:38-42; Matthew 21:1-11',
      maftir: 'Numbers 25:7-25:9'
    }
  },
  {
    title: 'Pinchas',
    hebcalTitle: 'Pinchas',
    slug: 'pinchas',
    key: 45,
    date: '2023-07-08',
    hdate: '19 Tamuz 5783',
    book: 'Numbers',
    special: 'pinchas-tammuz',
    hebrew: ' פינחס',
    leyning: {
      torah: 'Numbers 25:10-30:1',
      haftarah: 'Jeremiah 1:1-2:3',

      gospel: 'John 2:13-22',
      maftir: 'Numbers 29:35-30:1'
    }
  },
  {
    title: 'Mattot',
    hebcalTitle: 'Matot',
    slug: 'mattot',
    key: 46,
    date: '',
    hdate: '',
    book: 'Numbers',
    hebrew: ' מטות',
    leyning: {
      torah: 'Numbers 30:2-32:42',
      haftarah: 'Jeremiah 1:1-2:3',
      gospel: 'Luke 13:1-10',
      maftir: 'Numbers 36:11-36:13'
    }
  },
  {
    title: 'Massei',
    hebcalTitle: 'Masei',
    slug: 'massei',
    key: 47,
    date: '',
    hdate: '',
    book: 'Numbers',
    hebrew: ' מסעי',
    leyning: {
      torah: 'Numbers 33:1-36:13',
      haftarah: 'Jeremiah 2:4-28, 3:4, 4:1-2',
      gospel: 'Mark 11:12-25',
      maftir: 'Numbers 36:11-36:13'
    }
  },
  {
    title: 'Mattot-Massei',
    hebcalTitle: 'Matot-Masei',
    slug: 'mattot-massei',
    key: 48,
    date: '2023-07-15',
    hdate: '26 Tamuz 5783',
    book: 'Numbers',
    hebrew: ' מטות־מסעי',
    leyning: {
      torah: 'Numbers 30:2-36:13',
      haftarah: 'Jeremiah 2:4-28, 3:4',
      gospel: 'Luke 13:1-9; Mark 11:12-23',
      maftir: 'Numbers 36:11-36:13'
    }
  },
  {
    title: 'Devarim',
    hebcalTitle: 'Devarim',
    slug: 'devarim',
    key: 49,
    date: '2023-07-22',
    hdate: '4 Av 5783',
    book: 'Deuteronomy',
    special: 'shabbat-chazon',
    hebrew: ' דברים',
    leyning: {
      torah: 'Deuteronomy 1:1-3:22',
      haftarah: 'Isaiah 1:1-27',
      gospel: 'Matthew 24:1-22',
      maftir: 'Deuteronomy 3:20-3:22'
    }
  },
  {
    title: "Va'etchanan",
    hebcalTitle: 'Vaetchanan',
    slug: 'vaetchanan',
    key: 50,
    date: '2023-07-29',
    hdate: '11 Av 5783',
    book: 'Deuteronomy',
    special: 'shabbat-nachamu',
    hebrew: ' ואתחנן',
    leyning: {
      torah: 'Deuteronomy 3:23-7:11',
      haftarah: 'Isaiah 40:1-26',
      gospel: 'Luke 3:2-15',
      maftir: 'Deuteronomy 7:9-7:11'
    }
  },
  {
    title: 'Ekev',
    hebcalTitle: 'Eikev',
    slug: 'ekev',
    key: 51,
    date: '2023-08-05',
    hdate: '18 Av 5783',
    book: 'Deuteronomy',
    hebrew: ' עקב',
    leyning: {
      torah: 'Deuteronomy 7:12-11:25',
      haftarah: 'Isaiah 49:14-51:3',
      gospel: 'Matthew 16:13-20',
      maftir: 'Deuteronomy 11:22-11:25'
    }
  },
  {
    title: "Re'eh",
    hebcalTitle: "Re'eh",
    slug: 'reeh',
    key: 52,
    date: '2023-08-12',
    hdate: '25 Av 5783',
    book: 'Deuteronomy',
    hebrew: ' ראה',
    leyning: {
      torah: 'Deuteronomy 11:26-16:17',
      haftarah: 'Isaiah 54:11-55:5',
      gospel: 'John 6:35-51',
      maftir: 'Deuteronomy 16:13-16:17'
    }
  },
  {
    title: 'Shoftim',
    hebcalTitle: 'Shoftim',
    slug: 'shoftim',
    key: 53,
    date: '2023-08-19',
    hdate: '2 Elul 5783',
    book: 'Deuteronomy',
    hebrew: ' שופטים',
    leyning: {
      torah: 'Deuteronomy 16:18-21:9',
      haftarah: 'Isaiah 51:12-52:12',
      gospel: 'John 14:9-20',
      maftir: 'Deuteronomy 21:7-21:9'
    }
  },
  {
    title: 'Ki Tetze',
    hebcalTitle: 'Ki Teitzei',
    slug: 'ki-tetze',
    key: 54,
    date: '2023-08-26',
    hdate: '9 Elul 5783',
    book: 'Deuteronomy',
    hebrew: ' כי־תצא',
    leyning: {
      torah: 'Deuteronomy 21:10-25:19',
      haftarah: 'Isaiah 54:1-10',
      gospel: 'Matthew 24:29-42',
      maftir: 'Deuteronomy 25:17-25:19'
    }
  },
  {
    title: 'Ki Tavo',
    hebcalTitle: 'Ki Tavo',
    slug: 'ki-tavo',
    key: 55,
    date: '2023-09-02',
    hdate: '16 Elul 5783',
    book: 'Deuteronomy',
    hebrew: ' כי־תבוא',
    leyning: {
      torah: 'Deuteronomy 26:1-29:8',
      haftarah: 'Isaiah 60:1-22',
      gospel: 'Matthew 4:13-24',
      maftir: 'Deuteronomy 29:6-29:8'
    }
  },
  {
    title: 'Nitzavim',
    hebcalTitle: 'Nitzavim',
    slug: 'nitzavim',
    key: 56,
    date: '',
    hdate: '',
    book: 'Deuteronomy',
    hebrew: ' נצבים',
    leyning: {
      torah: 'Deuteronomy 29:9-30:20',
      haftarah: 'Isaiah 61:10-63:9',
      gospel: 'John 12:41-50',
      maftir: 'Deuteronomy 31:28-31:30'
    }
  },
  {
    title: 'Vayelech',
    hebcalTitle: 'Vayeilech',
    slug: 'vayelech',
    key: 57,
    date: '',
    hdate: '',
    book: 'Deuteronomy',
    hebrew: ' וילך',
    leyning: {
      torah: 'Deuteronomy 31:1-31:30',
      haftarah: 'Isaiah 55:6-56:8',
      gospel: 'Matthew 21:9-17',
      maftir: 'Deuteronomy 31:28-31:30'
    }
  },
  {
    title: 'Nitzavim-Vayelech',
    hebcalTitle: 'Nitzavim-Vayeilech',
    slug: 'nitzavim-vayelech',
    key: 58,
    date: '2023-09-09',
    hdate: '23 Elul 5783',
    book: 'Deuteronomy',
    hebrew: ' נצבים־וילך',
    leyning: {
      torah: 'Deuteronomy 29:9-31:30',
      haftarah: 'Isaiah 61:10-63:9',
      gospel: 'Luke 24:1-12/Luke 24:13-43',
      maftir: 'Deuteronomy 31:28-31:30'
    }
  },
  {
    title: "Ha'Azinu",
    hebcalTitle: "Ha'Azinu",
    slug: 'haazinu',
    key: 59,
    date: '2023-09-23',
    hdate: '8 Tishrei 5784',
    book: 'Deuteronomy',
    special: 'shabbat-shuvah',
    hebrew: ' האזינו',
    leyning: {
      torah: 'Deuteronomy 32:1-52',
      haftarah: '2 Samuel 22:1-51',
      gospel: 'John 6:26-35',
      haftarah_sephardic: 'Hosea 14:2-10; Micah 7:18-20',
      maftir: 'Deuteronomy 32:48-32:52'
    }
  },
  {
    title: "Vezot Ha'Bracha",
    hebcalTitle: 'Vezot Habracha',
    slug: 'vezot-habracha',
    key: 60,
    date: '2022-10-18',
    hdate: '23 Tishrei 5783',
    book: 'Deuteronomy',
    hebrew: 'וְזֹאת הַבְּרָכָה',
    leyning: {
      torah: 'Deuteronomy 33:1-34:12',
      haftarah: 'Joshua 1:1-18',
      gospel: 'Acts 1:1-14',
      maftir: 'Numbers 29:35-30:1'
    }
  }
];

export const specials = [
  {
    title: 'Shabbat Chanukah',
    slug: 'shabbat-hanukkah-1',
    category: 'shabbat',
    leyning: {
      torah: 'Numbers 28:9-15',
      haftarah: 'Zechariah 2:14-4:7',
      gospel: 'Luke 24:13-29'
    },
    link: ''
  },
  {
    title: 'Shabbat  Chanukah 2',
    slug: 'shabbat-hanukkah-2',
    category: 'shabbat',
    leyning: {
      torah: '',
      haftarah: 'I Kings 7:40-50',
      gospel: ''
    },
    link: ''
  },
  {
    title: 'Shabbat Shekalim',
    slug: 'shabbat-shekalim',
    category: 'shabbat',
    leyning: {
      torah: 'Exodus 30:11-16',
      haftarah: '2 Kings 11:17-12:17',
      gospel: 'Matthew 17:22-27'
    },
    link: ''
  },
  {
    title: 'Shabbat Zachor',
    slug: 'shabbat-zachor',
    category: 'shabbat',
    leyning: {
      torah: 'Deuteronomy 25:17-19',
      haftarah: '1 Samuel 15:1-34',
      gospel: 'Mark 6:14-29'
    },
    link: ''
  },
  {
    title: 'Shabbat Parah',
    slug: 'shabbat-parah',
    category: 'shabbat',
    leyning: {
      torah: 'Numbers 19:1-22',
      haftarah: 'Ezekiel 36:16-38',
      gospel: 'John 11:47-56'
    },
    link: ''
  },
  {
    title: 'Shabbat HaChodesh',
    slug: 'shabbat-hachodesh',
    category: 'shabbat',
    leyning: {
      torah: 'Exodus 12:1-20',
      haftarah: 'Ezekiel 45:16-46:18',
      gospel: 'Luke 22:1-13'
    },
    link: ''
  },
  {
    title: 'Shabbat HaGadol',
    slug: 'shabbat-hagadol',
    category: 'shabbat',
    leyning: {
      torah: '',
      haftarah: 'Malachi 3:4-24',
      gospel: 'Matt 17:9-13'
    },
    link: ''
  },
  {
    title: 'Shabbat Shuvah',
    slug: 'shabbat-shuvah',
    category: 'shabbat',
    leyning: {
      torah: '',
      haftarah: 'Hosea 14:2-10; Micah 7:18-20; Joel 2:15-27',
      gospel: 'Matthew 18:21-35'
    },
    link: ''
  },
  {
    title: 'Shabbat Rosh Chodesh',
    slug: 'rosh-chodesh',
    category: 'shabbat',
    leyning: {
      torah: 'Numbers 28:9-15',
      haftarah: 'Isaiah 66:1-24',
      gospel: 'Mark 9:40-50'
    },
    link: ''
  },
  {
    title: 'Shabbat Machar Chodesh',
    slug: 'machar-chodesh',
    category: 'shabbat',
    leyning: {
      torah: '',
      haftarah: 'I Samuel 20:18-42',
      gospel: 'Matthew 24:29-36'
    },
    link: ''
  },
  {
    title: 'Shabbat Chazon',
    slug: 'shabbat-chazon',
    category: 'shabbat',
    leyning: {
      torah: '',
      haftarah: 'Isaiah 1:1-27',
      gospel: 'Matthew 24:1-22'
    },
    link: ''
  },
  {
    title: 'Shabbat Nachamu',
    slug: 'shabbat-nachamu',
    category: 'shabbat',
    leyning: {
      torah: '',
      haftarah: 'Isaiah 40:1-26',
      gospel: 'Luke 3:2-15'
    },
    link: ''
  },
  {
    title: 'Pinchas before Tammuz',
    slug: 'pinchas-tammuz',
    category: 'shabbat',
    leyning: {
      torah: '',
      haftarah: '1 Kings 18:46-19:21',
      gospel: ''
    },
    link: ''
  }
];

export const holidays = [
  {
    title: 'Hanukkah 1',
    hebcalTitle: 'Chanukah: 1 Candle',
    slug: 'hanukkah-1',
    date: '',
    hdate: '24 Kislev 5783',
    book: 'Genesis',
    category: 'holiday',
    hebrew: 'חנוכה: א׳ נר'
  },
  {
    title: 'Hanukkah 2',
    hebcalTitle: 'Chanukah: 2 Candles',
    slug: 'hanukkah-2',
    date: '',
    hdate: '25 Kislev 5783',
    book: 'Genesis',
    category: 'holiday',
    hebrew: 'חנוכה: ב׳ נרות',
    leyning: {
      torah: 'Numbers 7:1-17'
    }
  },
  {
    title: 'Hanukkah 3',
    hebcalTitle: 'Chanukah: 3 Candles',
    slug: 'hanukkah-3',
    date: '',
    hdate: '26 Kislev 5783',
    book: 'Genesis',
    category: 'holiday',
    hebrew: 'חנוכה: ג׳ נרות',
    leyning: {
      torah: 'Numbers 7:18-29'
    }
  },
  {
    title: 'Hanukkah 4',
    hebcalTitle: 'Chanukah: 4 Candles',
    slug: 'hanukkah-4',
    date: '2022-12-21',
    hdate: '27 Kislev 5783',
    book: 'Genesis',
    category: 'holiday',
    hebrew: 'חנוכה: ד׳ נרות',
    leyning: {
      torah: 'Numbers 7:24-35'
    }
  },
  {
    title: 'Hanukkah 5',
    hebcalTitle: 'Chanukah: 5 Candles',
    slug: 'hanukkah-5',
    date: '',
    hdate: '28 Kislev 5783',
    book: 'Genesis',
    category: 'holiday',
    hebrew: 'חנוכה: ה׳ נרות',
    leyning: {
      torah: 'Numbers 7:30-41'
    }
  },
  {
    title: 'Hanukkah 6',
    hebcalTitle: 'Chanukah: 6 Candles',
    slug: 'hanukkah-6',
    date: '',
    hdate: '29 Kislev 5783',
    book: 'Genesis',
    category: 'holiday',
    hebrew: 'חנוכה: ו׳ נרות',
    leyning: {
      torah: 'Numbers 7:36-47'
    }
  },
  {
    title: 'Hanukkah 7',
    hebcalTitle: 'Chanukah: 7 Candles',
    slug: 'hanukkah-7',
    date: '',
    hdate: '30 Kislev 5783',
    book: 'Genesis',
    category: 'holiday',
    hebrew: 'חנוכה: ז׳ נרות',
    leyning: {
      7: 'Numbers 28:9-28:15',
      haftarah: 'Zechariah 2:14-4:7',
      maftir: 'Numbers 7:42-7:47'
    }
  },

  {
    title: 'Hanukkah 8',
    hebcalTitle: 'Chanukah: 8 Candles',
    slug: 'hanukkah-8',
    date: '',
    hdate: '1 Tevet 5783',
    book: 'Genesis',
    category: 'holiday',
    hebrew: 'חנוכה: ח׳ נרות',
    leyning: {
      torah: 'Numbers 28:1-15, 7:48-53'
    }
  },

  {
    title: 'Pesach',
    hebcalTitle: 'Pesach',
    slug: 'pesach',
    date: '2023-04-06',
    hdate: '15 Nisan 5783',
    book: 'Leviticus',
    category: 'holiday',
    hebrew: 'פסח ',
    leyning: {
      torah: 'Exodus 12:21-51',
      haftarah: 'Joshua 3:5-7, 5:2-6:1, 6:27',
      gospel: 'John 19:31-20:1',
      maftir: 'Numbers 28:16-28:25'
    }
  },

  {
    title: 'Sheni Shel Pesach',
    hebcalTitle: 'Pesach II',
    slug: 'pesach-2',
    date: '2023-04-07',
    hdate: '16 Nisan 5783',
    book: 'Leviticus',
    category: 'holiday',
    hebrew: 'פסח ב׳',
    leyning: {
      torah: 'Leviticus 22:26-23:44',
      haftarah: 'II Kings 23:1-9, 23:21-25',
      gospel: 'Mark 16:1-8',
      maftir: 'Numbers 28:16-28:25'
    }
  },
  {
    title: "Chol HaMo'ed Pesach (3)",
    hebcalTitle: "Pesach III (CH''M)",
    slug: 'chol-hamoed-pesach',
    date: '',
    hdate: '17 Nisan 5783',
    book: 'Leviticus',
    category: 'holiday',
    hebrew: 'פסח ג׳ (חוה״מ)',
    leyning: {
      torah: 'Exodus 33:12-34:26',
      haftarah: 'Ezekiel 37:1-14',
      maftir: 'Numbers 28:19-28:25'
    }
  },
  {
    title: "Chol HaMo'ed Pesach (4)",
    hebcalTitle: "Pesach IV (CH''M)",
    slug: 'chol-hamoed-pesach',
    date: '',
    hdate: '18 Nisan 5783',
    book: 'Leviticus',
    category: 'holiday',
    hebrew: 'פסח ד׳ (חוה״מ)',
    leyning: {
      torah: 'Exodus 22:24-23:19; Numbers 28:19-25'
    }
  },
  {
    title: "Chol HaMo'ed Pesach (5)",
    hebcalTitle: "Pesach V (CH''M)",
    slug: 'chol-hamoed-pesach',
    date: '',
    hdate: '19 Nisan 5783',
    book: 'Leviticus',
    category: 'holiday',
    hebrew: 'פסח ה׳ (חוה״מ)',
    leyning: {
      torah: 'Exodus 34:1-26; Numbers 28:19-25'
    }
  },
  {
    title: "Chol HaMo'ed Pesach (6)",
    hebcalTitle: "Pesach VI (CH''M)",
    slug: 'chol-hamoed-pesach',
    date: '',
    hdate: '20 Nisan 5783',
    book: 'Leviticus',
    category: 'holiday',
    hebrew: 'פסח ו׳ (חוה״מ)',
    leyning: {
      torah: 'Numbers 9:1-14, 28:19-25'
    }
  },
  {
    title: "Shevi'i Shel Pesach",
    hebcalTitle: 'Pesach VII',
    slug: 'shevii-shel-pesach',
    date: '2023-04-12',
    hdate: '21 Nisan 5783',
    book: 'Leviticus',
    category: 'holiday',

    hebrew: 'פסח ז׳',
    leyning: {
      torah: 'Exodus 13:17-15:26',
      haftarah: 'II Samuel 22:1-51',
      gospel: 'John 20:1-14',
      maftir: 'Numbers 28:19-28:25'
    }
  },
  {
    title: 'Shemini Shel Pesach',
    hebcalTitle: 'Pesach VIII',
    slug: 'shemini-shel-pesach',
    date: '2023-04-13',
    hdate: '22 Nisan 5783',
    book: 'Leviticus',
    category: 'holiday',

    hebrew: 'פסח ח׳',
    leyning: {
      torah: 'Deuteronomy 15:19-16:17',
      haftarah: 'Isaiah 10:32-12:6',
      gospel: 'John 20:15-20',
      maftir: 'Numbers 28:19-28:25'
    }
  },
  {
    title: 'Shavuot',
    hebcalTitle: 'Shavuot',
    slug: 'shavuot',
    date: '2023-05-26',
    hdate: '6 Sivan 5783',
    book: 'Numbers',
    category: 'holiday',

    hebrew: 'שבועות ',
    leyning: {
      torah: 'Exodus 19:1-20:23',
      haftarah: 'Ezekiel 1:1-28, 3:12',
      gospel: 'Acst 2:1-21',
      maftir: 'Numbers 28:26-28:31'
    }
  },

  {
    title: "Sheni Shel Shavu'ot",
    hebcalTitle: 'Shavuot II',
    slug: 'sheni-shel-shavuot',
    date: '2023-05-27',
    hdate: '7 Sivan 5783',
    book: 'Leviticus',
    category: 'holiday',
    hebrew: 'שבועות ב׳',
    leyning: {
      torah: 'Deuteronomy 14:22-16:17',
      haftarah: 'Habakkuk 3:1-19',
      gospel: 'Acts 2:21-42',
      maftir: 'Numbers 28:26-28:31'
    }
  },

  {
    title: "Tish'a B'Av",
    hebcalTitle: "Tish'a B'Av",
    slug: 'tisha-bav',
    date: '',
    hdate: '9 Av 5783',
    book: 'Deuteronomy',
    category: 'holiday',
    hebrew: 'תשעה באב',
    leyning: {
      torah: 'Deuteronomy 4:25-40',
      haftarah: 'Jeremiah 8:13-9:23'
    }
  },
  {
    title: 'Rosh Hashanah',
    hebcalTitle: 'Rosh Hashana',
    slug: 'rosh-hashanah',
    date: '2023-09-16',
    hdate: '1 Tishrei 5784',
    book: 'Deuteronomy',
    category: 'holiday',

    hebrew: 'ראש השנה ',
    leyning: {
      torah: 'Genesis 21:1-34',
      haftarah: 'I Samuel 1:1-2:10',
      gospel: 'Matthew 24:29-36',
      maftir: 'Numbers 29:1-29:6'
    }
  },

  {
    title: 'Sheni Shel Rosh Hashanah',
    hebcalTitle: 'Rosh Hashana II',
    slug: 'rosh-hashana-2',
    date: '2023-09-17',
    hdate: '2 Tishrei 5784',
    book: 'Deuteronomy',
    category: 'holiday',
    hebrew: 'ראש השנה ב׳',
    leyning: {
      torah: 'Genesis 22:1-24',
      haftarah: 'Jeremiah 31:1-19',
      gospel: ' Luke 1:39-55',
      maftir: 'Numbers 29:1-29:6'
    }
  },

  {
    title: 'Yom Kippur',
    hebcalTitle: 'Yom Kippur',
    slug: 'yom-kippur',
    date: '2023-09-25',
    hdate: '10 Tishrei 5784',
    book: 'Deuteronomy',
    category: 'holiday',
    hebrew: 'יום כפור',
    leyning: {
      torah: 'Leviticus 16:1-34',
      haftarah: 'Isaiah 57:14-58:14',
      gospel: 'Matthew 12:38-45, Matthew 25:31-46',
      maftir: 'Numbers 29:7-29:11'
    }
  },
  {
    title: 'Sukkot',
    hebcalTitle: 'Sukkot',
    slug: 'sukkot',
    date: '2023-09-30',
    hdate: '15 Tishrei 5784',
    book: 'Deuteronomy',
    category: 'holiday',
    hebrew: 'סוכות ',
    leyning: {
      torah: 'Leviticus 22:26-23:44;',
      haftarah: 'Zechariah 14:1-21',
      gospel: 'Luke 2:1-20',
      maftir: 'Numbers 29:12-29:16'
    }
  },

  {
    title: 'Sheni Shel Sukkot',
    hebcalTitle: 'Sukkot II',
    slug: 'sukkot-2',
    date: '2023-10-01',
    hdate: '16 Tishrei 5784',
    book: 'Deuteronomy',
    category: 'holiday',
    hebrew: 'סוכות ב׳',
    leyning: {
      torah: 'Leviticus 22:26-23:44',
      haftarah: 'I Kings 8:2-21',
      gospel: 'John 7:1-10',
      maftir: 'Numbers 29:12-29:16'
    }
  },
  {
    title: 'Sukkot 3',
    hebcalTitle: "Sukkot III (CH''M)",
    slug: 'sukkot-3',
    date: '',
    hdate: '17 Tishrei 5784',
    book: 'Deuteronomy',
    category: 'holiday',
    hebrew: 'סוכות ג׳ (חוה״מ)',
    leyning: {
      torah: 'Numbers 29:17-25, 29:17-22',
      haftarah: 'Ezekiel 38:18-39:16',
      gospel: 'John 7:31-43'
    }
  },
  {
    title: 'Sukkot 4',
    hebcalTitle: "Sukkot IV (CH''M)",
    slug: 'sukkot-4',
    date: '',
    hdate: '18 Tishrei 5784',
    book: 'Deuteronomy',
    category: 'holiday',
    hebrew: 'סוכות ד׳ (חוה״מ)',
    leyning: {
      torah: 'Numbers 29:20-28, 29:20-25',
      haftarah: 'Ezekiel 38:18-39:16',
      gospel: 'John 7:31-43'
    }
  },
  {
    title: 'Sukkot 5',
    hebcalTitle: "Sukkot V (CH''M)",
    slug: 'sukkot-5',
    date: '',
    hdate: '19 Tishrei 5784',
    book: 'Deuteronomy',
    category: 'holiday',
    hebrew: 'סוכות ה׳ (חוה״מ)',
    leyning: {
      torah: 'Numbers 29:23-31, 29:23-28',
      haftarah: 'Ezekiel 38:18-39:16',
      gospel: 'John 7:31-43'
    }
  },
  {
    title: 'Sukkot 6',
    hebcalTitle: "Sukkot VI (CH''M)",
    slug: 'sukkot-6',
    date: '',
    hdate: '20 Tishrei 5784',
    book: 'Deuteronomy',
    category: 'holiday',
    hebrew: 'סוכות ו׳ (חוה״מ)',
    leyning: {
      torah: 'Numbers 29:26-34, 29:26-31',
      haftarah: 'Ezekiel 38:18-39:16',
      gospel: 'John 7:31-43'
    }
  },
  {
    title: 'Sukkot 7 (Hoshana Raba)',
    hebcalTitle: 'Sukkot VII (Hoshana Raba)',
    slug: 'sukkot-7',
    date: '',
    hdate: '21 Tishrei 5784',
    book: 'Deuteronomy',
    category: 'holiday',
    hebrew: 'סוכות ז׳ (הושענא רבה)',
    leyning: {
      torah: 'Numbers 29:26-34',
      haftarah: 'Ezekiel 38:18-39:16',
      gospel: 'John 7:31-43'
    },
    link: 'https://hebcal.com/h/sukkot-2023?us=js&um=api',
    memo: 'Feast of Booths'
  },
  {
    title: 'Shemini Atzeret',
    hebcalTitle: 'Shmini Atzeret',
    slug: 'shemini-atzeret',
    date: '2023-10-07',
    hdate: '22 Tishrei 5784',
    book: 'Deuteronomy',
    category: 'holiday',

    hebrew: 'שמיני עצרת',
    leyning: {
      torah: 'Deuteronomy 14:22-16:17',
      haftarah: 'I Kings 8:54-66',
      gospel: 'Luke 2:21-32',
      maftir: 'Numbers 29:35-30:1'
    }
  },
  {
    title: 'Simchat Torah',
    hebcalTitle: 'Simchat Torah',
    slug: 'simchat-torah',
    date: '2023-10-08',
    hdate: '23 Tishrei 5784',
    book: 'Deuteronomy',
    category: 'holiday',

    hebrew: 'שמחת תורה',
    leyning: {
      torah: 'Deuteronomy 33:1-34:12; Genesis 1:1-2:3; Numbers 29:35-30:1',
      haftarah: 'Joshua 1:1-18',
      maftir: 'Numbers 29:35-30:1'
    }
  }
];

export const getMerged = () =>
  [...portions, ...holidays]
    .filter((item) => item.date)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

export const currentPortion = getMerged().find(
  (item) => item.date >= getCurrentDate()
);

export const nextPortion = getMerged().find(
  (item) => item.date > currentPortion.date
);

export const currentPortionSlug = currentPortion.slug;
export const nextPortionSlug = nextPortion.slug;
export const currentPortionBook = currentPortion.book;
