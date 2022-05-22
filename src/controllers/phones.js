
exports.getList = (req, res) => {
    res.send([
        { model: 'Nokia 1100', year: '2001', id: 1 },
        { model: 'Nokia 2100', year: '2002', id: 2 },
        { model: 'Nokia 3100', year: '2003', id: 3 },
    ])
}
