/**
 * GET /
 * Chat page.
 */
exports.index = (req, res) => {
  res.render('chat', {
    title: 'Chat'
  });
};
