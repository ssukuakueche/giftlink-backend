import { Router } from "express";

const searchRouter = new Router();

searchRouter.get('/search', async (req, res)=> {
    const filters = {};

    if (req.query.category && req.query.category != '')
        filters['category'] = req.query.category;
    if (req.query.condition && req.query.condition != '')
        filters['condition'] = req.query.condition;
    if (req.query.age_years && req.query.age_years)
        filters['age_years'] = req.query.age_years;

    const gifts = await getGiftsByFilters(filters);
    res.json(gifts);

})

export { 
    searchRouter
}