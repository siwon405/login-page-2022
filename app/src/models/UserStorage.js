
class UserStorage {

    static #users = {
        id: ["woorimIT", "노드개발", "siwon"],
        psword: ["0000", "0000", "001001"],
        name: ["우리밋", "노드개발", "siwon"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;