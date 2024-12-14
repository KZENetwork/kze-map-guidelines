// 日本語の検索機能
// https://qiita.com/moonWalf/items/c236763965e85210c47e
// https://github.com/allfunc/docker-mdbook/blob/main/mdbook-demo/assets/elasticlunr.js
/**
 * @see https://github.com/allfunc/docker-mdbook
 */
window.elasticlunr.Index.load = (index) => {
  const FzF = window.fzf.Fzf;
  const storeDocs = index.documentStore.docs;
  const indexArr = Object.keys(storeDocs);
  const ofzf = new FzF(indexArr, {
    selector: (item) => {
      const res = storeDocs[item];
      res.text = `${res.title}${res.breadcrumbs}${res.body}`;
      return res.text;
    },
  });
  return {
    search: (searchterm) => {
      const entries = ofzf.find(searchterm);
      return entries.map((data) => {
        const { item, score } = data;
        return {
          doc: storeDocs[item],
          ref: item,
          score,
        };
      });
    },
  };
};
