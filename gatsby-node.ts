import * as path from 'path';
import buildPdf from './scripts/buildPdf/';

export const createPages = async ({ actions, graphql }: any) => {
  const { createPage } = actions;

  // create dynamic pages here

};

// adjust page path logic here
// below will:
// page at root level, do nothing
// page ends in `.page.tsx`, create page and adjust path to match without `.page`
// otherwise delete the page as it is likely a support file such as styling or an asset
export const onCreatePage = async ({ page, actions }: any) => {
  const { createPage, deletePage } = actions;
  
  const relativeComponentPath = path.relative(`${__dirname}/src/pages/`, page.component);

  const isRootLevelPage = /^[a-zA-Z.0-9]+$/.test(relativeComponentPath);
  const isPageEntry = /\.page\.tsx$/.test(page.component);
  
  if (isPageEntry) {
    // page entry - adjust path and create
    const newPath = page.path.replace(/\.page/g, '').replace(/index\//g, '');
    deletePage({ ...page, path: page.path });
    page.path = newPath;
    createPage(page);
  } else if (!isRootLevelPage) {
    // not a page entry or root level page, remove
    deletePage({ ...page, path: page.path });
  } else {
    // guess we don't need it?
    deletePage({ ...page, path: page.path });
  }
};

// https://github.com/gatsbyjs/gatsby/issues/11934#issuecomment-547253006
export const onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
}

export const onPostBuild = async () => {
  await buildPdf();
};
