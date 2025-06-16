const users = [{
    name: 'yujiro',
    age: 75
}, {
    name: 'bobzie',
    age: '26'
}]

const names = users.map((user) => {
    console.log(user.name)
})