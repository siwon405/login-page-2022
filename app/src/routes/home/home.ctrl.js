
const output = {
    hello: (req, res) => {
    res.render("home/index");
},

    login: (req, res) => {
    res.render("home/login");
},
};

const users = {
    id: ["woorimIT", "노드개발", "siwon"],
    psword: ["0000", "0000", "001001"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
        psword = req.body.psword;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "아이디와 비밀번호를 확인후 로그인 해주세요",
        });
    },
};


module.exports = {
    output,
    process,
};