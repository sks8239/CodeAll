export interface IndividualRankData {
    [key: string]: {
        score: number;
        rankChange : number;
        rank: string;
        averageScore: number;
        school: string;
    };
}
export interface SchoolRankData{
    [key: string] : {
        score : number;
        rankChange : number;
        averageScore : number;
        userNumber : number;
    };
}
export const schoolRank:SchoolRankData={
    '서울대' : {
        score : 4500,
        rankChange : 0,
        averageScore : 70,
        userNumber : 68
    },
    '연세대' : {
        score : 4000,
        rankChange : 1,
        averageScore : 60,
        userNumber : 65
    },
    '고려대' : {
        score : 3800,
        rankChange : -1,
        averageScore : 55,
        userNumber : 65
    },
    '중앙대' : {
        score : 3500,
        rankChange : 0,
        averageScore : 55,
        userNumber : 65
    },
    '경희대' : {
        score : 3400,
        rankChange : 0,
        averageScore : 55,
        userNumber : 65
    },
    '외대' : {
        score : 3350,
        rankChange : 0,
        averageScore : 55,
        userNumber : 65
    },
    '시립대' : {
        score : 3300,
        rankChange : 0,
        averageScore : 55,
        userNumber : 65
    },
    '건국대' : {
        score : 3250,
        rankChange : 0,
        averageScore : 55,
        userNumber : 65
    },
    '동국대' : {
        score : 3230,
        rankChange : 0,
        averageScore : 55,
        userNumber : 65
    },
    '홍익대' : {
        score : 3220,
        rankChange : 0,
        averageScore : 55,
        userNumber : 65
    },
    '국민대' : {
        score : 3210,
        rankChange : 0,
        averageScore : 55,
        userNumber : 65
    },
    '숭실대' : {
        score : 3200,
        rankChange : 0,
        averageScore : 55,
        userNumber : 65
    },
    '세종대' : {
        score : 3190,
        rankChange : 0,
        averageScore : 55,
        userNumber : 65
    },
    '단국대' : {
        score : 3170,
        rankChange : 0,
        averageScore : 55,
        userNumber : 65
    },
    '삼육대' : {
        score : 3150,
        rankChange : 0,
        averageScore : 55,
        userNumber : 65
    },
    '서강대' : {
        score : 3140,
        rankChange : 0,
        averageScore : 55,
        userNumber : 65
    },
    '한성대' : {
        score : 3130,
        rankChange : 0,
        averageScore : 55,
        userNumber : 65
    },
}

export const individualRank:IndividualRankData={
    'user1' : {
        'score' : 255,
        'rankChange' : 1,
        'rank' : 'DIAMOND',
        'averageScore' : 50,
        'school' : '서울대'
    },
    'user2' : {
        'score' : 230,
        'rankChange' : -1,
        'rank' : 'PLATINUM',
        'averageScore' : 50,
        'school' : '연세대'
    },
    'user3' : {
        'score' : 200,
        'rankChange' : 0,
        'rank' : 'GOLD',
        'averageScore' : 50,
        'school' : '고려대'
    },
    'user4' : {
        'score' : 150,
        'rankChange' : 0,
        'rank' : 'SILVER',
        'averageScore' : 50,
        'school' : '카이스트'
    },
    'user5' : {
        'score' : 250,
        'rankChange' : 0,
        'rank' : 'DIAMOND',
        'averageScore' : 50,
        'school' : '서울대'
    },
    'user6' : {
        'score' : 230,
        'rankChange' : 1,
        'rank' : 'PLATINUM',
        'averageScore' : 50,
        'school' : '연세대'
    },
    'user7' : {
        'score' : 200,
        'rankChange' : 1,
        'rank' : 'GOLD',
        'averageScore' : 50,
        'school' : '고려대'
    },
    'user8' : {
        'score' : 150,
        'rankChange' : -2,
        'rank' : 'SILVER',
        'averageScore' : 50,
        'school' : '카이스트'
    },
    'user9' : {
        'score' : 250,
        'rankChange' : 0,
        'rank' : 'DIAMOND',
        'averageScore' : 50,
        'school' : '서울대'
    },
    'user10' : {
        'score' : 230,
        'rankChange' : 1,
        'rank' : 'PLATINUM',
        'averageScore' : 50,
        'school' : '연세대'
    },
    'user11' : {
        'score' : 200,
        'rankChange' : -1,
        'rank' : 'GOLD',
        'averageScore' : 50,
        'school' : '고려대'
    },
    'user12' : {
        'score' : 150,
        'rankChange' : 0,
        'rank' : 'SILVER',
        'averageScore' : 50,
        'school' : '카이스트'
    },

}