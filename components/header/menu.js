const navitems = [
    {
        slug: "web",
        title: "Web Development",
        dropdowns: [
            {
                slug: "frontend",
                title: "Frontend Development",
            },
            {
                slug: "backend",
                title: "Backend Development",
            }
        ]
    },
    {
        slug: "mobile",
        title: "Mobile Development",
    },
    {
        slug: "devops",
        title: "DevOps",
    },
    {
        slug: "cloud",
        title: "Cloud Computing",
    },
    {
        slug: "database",
        title: "Database",
    }
];

export function getCategories(){
    const categories = [];
    for(let i = 0; i < navitems.length;i++){
        if(navitems[i].hasOwnProperty('dropdowns')){
            categories.push(...navitems[i].dropdowns)
        }else{
            categories.push(navitems[i])
        }
    }

    return categories;
}

export default navitems;