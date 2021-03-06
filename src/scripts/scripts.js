$(document).ready(function () {

  handlebars.configure({
    autoescape: true,
    web: {
      async: false
    }
  });

  $.ajax({
    url: "./mockapi/getAllArticles.json",
    success: function(data, status) {
      nunjucks.render('./partials/article.html', data, function (err, res) {
        $('.js-articles').append(res);
      });
    }
  });

});