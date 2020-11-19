const mongoose = require('mongoose');
const Vacancy = mongoose.model('Vacancy');

const loadVacancies = (req, res, next) => {
    Vacancy.find({})
        .exec()
        .then((vacancies) => {
            return res.json({vacancies})
        });
}

const postVacancy = (req, res, next) => {
    let Vacancy = new Vacancy();

    Vacancy.title = req.body.title;
    Vacancy.description = req.body.description;
    Vacancy.mainSkills = req.body.mainSkills;
    Vacancy.skills = req.body.skills;
    Vacancy.user = req.body.userId;

    Vacancy.save().then(() => {
        return res.json({vacancy: Vacancy});
    }).catch(next);
}

const putVacancy = (req, res, next) => {

}


const deleteVacancy = (req, res, next) => {
    Vacancy.findById(req.params.id).then((vacancy) => {
        if (!vacancy) {
            return res.sendStatus(401);
        }

        vacancy.remove().then(() => {
            return res.sendStatus(204);
        });
    }).catch(next)
}


module.exports = {
    loadVacancies,
    postVacancy,
    putVacancy,
    deleteVacancy
}
