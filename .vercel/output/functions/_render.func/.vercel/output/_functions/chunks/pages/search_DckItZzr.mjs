/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_DloCKEJH.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { a as getCollection, $ as $$Layout } from './404_Nvh4TdFn.mjs';
import { $ as $$ArticleCard } from './__RRfRDLV5.mjs';
import { $ as $$SearchForm } from './index_BLW9Fk7e.mjs';

const $$Astro = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("query");
  const allBlogArticles = await getCollection("blog");
  const searchResults = allBlogArticles.filter((article) => {
    const titleMatch = article.data.title.toLowerCase().includes(query.toLowerCase());
    const bodyMatch = article.body.toLowerCase().includes(query.toLowerCase());
    const slugMatch = article.slug.toLowerCase().includes(query.toLowerCase());
    return titleMatch || bodyMatch || slugMatch;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Search Results" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/articles" class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white">
← Back to All Articles
</a> ${renderComponent($$result2, "SearchForm", $$SearchForm, { "query": query })} <br> <h1 class="text-2xl pb-3 mt-6">Results for <strong>${query}</strong></h1> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${searchResults.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> ` })}`;
}, "/Users/alessandro-giuzio/Dropbox/Mac/Desktop/astro-traversy/src/pages/articles/search.astro", void 0);

const $$file = "/Users/alessandro-giuzio/Dropbox/Mac/Desktop/astro-traversy/src/pages/articles/search.astro";
const $$url = "/articles/search";

export { $$Search as default, $$file as file, $$url as url };
