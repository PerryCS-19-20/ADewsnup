/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


!!! xml
urlset(xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")

  //- Home page
  url
    loc= appUrl
    lastmod= now
    changefreq daily
    priority= 0.8

  ...

  //- Categories
  each category in categories
    url
      loc #{appUrl}/offers/#{category.key}
      lastmod= now
      changefreq daily
      priority= 0.7

  //- Products
  each product in products
    url
      loc #{appUrl}/#{product.uid}.html
      lastmod= product.date
      changefreq weekly
      priority= 0.5