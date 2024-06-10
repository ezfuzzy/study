let members=[
    'heize',
    'soran',
    'dolce',
    'fuzzy',
];

console.log(members);

let members2=[
    ...members,
];

console.log(members2);

let members3=[
    members,
];

console.log(members3);
console.log(members === members2);
console.log(members === members3);
console.log('------------------------');
console.log(members.join());
console.log(members.join('-'));

let nums=[
    1,
    9,
    7,
    11,
    5,
    3,
];
console.log(nums);
nums.sort((a, b) => {
    return a>b ? 1:-1;
})
console.log(nums);
console.log('------------------------');

console.log(members.map((x) => x));
console.log(members.map((x) => {
    if (x ===  'fuzzy') {
        return `my name is : ${x}`;
    } else {
        return x;
    }
}));

// xxx.reduce() : 이전의 계산된 값을 callback하여 다음 계산에 사용하는 함수
console.log(nums.reduce((p, n) => p+n , 0));
console.log('------------------------');

let fuzzy = {
    name: 'mj',
    like: 'cofffee',
    hobby: function(){
        return 'go display.';
    }
};

console.log(fuzzy);

const nameKey = 'name';
const nameValue = 'minjun';

const likeKey = 'like';
const likeValue = 'coffee';

const fuzzy2 = {
    [nameKey]: nameValue,
    [likeKey]: likeValue,
    hobby: function(){
        return `${this.name} go to display.`;
    }
}
console.log(fuzzy2.hobby());
