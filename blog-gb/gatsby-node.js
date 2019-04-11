const path = require('path');

exports.onCreateNode = ({
    node,
    getNode,
    actions
}) => {
    const {
        createNodeField
    } = actions;

    if (node.internal.type === 'File') {
        const parsedFilePath = path.parse(node.absolutePath);
        const slug = `/${parsedFilePath.dir.split("---")[1]}/`;
        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
    } else if (
        node.internal.type === 'MarkdownRemark' &&
        typeof node.slug === "undefined"
    ) {
        const fileNode = getNode(node.parent);
        createNodeField({
            node,
            name: 'slug',
            value: fileNode.fields.slug
        });
    }
};

exports.createPages = ({
    graphql,
    actions
}) => {
    const {
        createPage
    } = actions
    return new Promise((resolve, reject) => {
        graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({
                node
            }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/blog-post.js`),
                    context: {
                        slug: node.fields.slug,
                    },
                })
            })
            resolve()
        })
    })
};