const link = (singlePage, req) => {
    singlePage.contents.splice(0, singlePage.contents.length);
    singlePage.contents.push(req.body);
    return JSON.stringify(singlePage, null, 4);
};

module.exports = {
    link
};
