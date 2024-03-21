export const categories = {
    title: "Kategories", 
    name: "categories",
    type: "document",
    fields: [
        {
            title: "Kateogritittel",
            name: "categorytitle",
            type: "string"
        },
        {
            title: "Kategorilink",
            name: "categoryurl",
            type: "slug",
            options: {
                source: "categorytitle",
                slugify: input => input.toLowerCase().replace(/\s+/g, '-')
            }
        }
    ]
}