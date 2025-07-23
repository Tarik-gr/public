
export type Holiday = {
    date: string;
    name: string;
    type: 'national' | 'religious';
}

export type HolidaysDataInterface = {
    year: number | null;
    country: string;
    last_updated: string;
    holidays: Holiday[];
}



export const HolidaysData: HolidaysDataInterface = {
    "year": 2025,
    "country": "MA",
    "last_updated": "2025-07-31T10:00:00Z",
    "holidays": [
        // jours nationaux
        {
            "date": "01-01",
            "name": "Nouvel An",
            "type": "national"
        },
        {
            "date": "01-11",
            "name": "Anniversaire de l'Indépendance",
            "type": "national"
        },
        {
            "date": "01-14",
            "name": "Nouvel An Amazigh",
            "type": "national"
        },
        {
            "date": "05-01",
            "name": "Fête du Travail",
            "type": "national"
        },
        {
            "date": "07-30",
            "name": "Fête du Trône",
            "type": "national"
        },
        {
            "date": "08-14",
            "name": "Commémoration de l'allégeance de l'Oued Eddahab",
            "type": "national"
        },
        {
            "date": "08-20",
            "name": "Anniversaire de la révolution, du roi et du peuple",
            "type": "national"
        },
        {
            "date": "08-21",
            "name": "Anniversaire du roi Mohammed VI",
            "type": "national"
        },
        {
            "date": "11-06",
            "name": "Anniversaire de la Marche Verte",
            "type": "national"
        },
        {
            "date": "11-18",
            "name": "Fête de l'Indépendance",
            "type": "national"
        },
        //JOURS RELIGIEUX
        // 2025
        {
            "date": "2025-03-31",
            "name": "Aid Al Fitr - Jour 1",
            "type": "religious"
        },
        {
            "date": "2025-04-01",
            "name": "Aid Al Fitr - Jour 2",
            "type": "religious"
        },
        {
            "date": "2025-06-07",
            "name": "Aid Al Adha - Jour 1",
            "type": "religious"
        },
        {
            "date": "2025-06-08",
            "name": "Aid Al Adha - Jour 2",
            "type": "religious"
        },
        {
            "date": "2025-07-30",
            "name": "1er Moharram",
            "type": "religious"
        },
        {
            "date": "2025-09-05",
            "name": "Aid Al Mawlid",
            "type": "religious"
        },

    ]
}