/**
 * GET /
 * Activities page.
 */
exports.index = (req, res) => {
  res.render('activities', {
    title: 'Activities'
  });
};
