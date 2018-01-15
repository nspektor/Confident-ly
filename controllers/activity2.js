/**
 * GET /
 * Activities page.
 */
exports.index = (req, res) => {
  res.render('activity2', {
    title: 'Day 2 Activity'
  });
};
