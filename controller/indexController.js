class IndexController {

    homePage(req, res) {
        res.render('index');
    }

    aboutPage(req, res) {
        res.render('about');
    }
    
    shopPage(req, res) {
        res.render('shop');
    }

    contactPage(req, res) {
        res.render('contact');
    }
}

module.exports = new IndexController();