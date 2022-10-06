import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';

//const maxExcerptLength = 100;
const postsDirPath = path.join(process.cwd(),'posts');

export function getSortedPostsData(category){
    const fileNames = fs.readdirSync(postsDirPath);

    let allPostsData = fileNames.map( fileName => {
        const id = fileName.replace(/\.md$/,'');

        const fullPath = path.join(postsDirPath,fileName);
        const fileContents = fs.readFileSync(fullPath,'utf8');

        const matterResult = matter(fileContents,{excerpt_separator: '<!-- end -->'});

        return {
            id,
            ...matterResult.data,
            excerpt: matterResult.excerpt
        };
    });

    allPostsData = allPostsData.filter(postData => {
        if(category === 'top' || category === 'recent'){
            if(category === 'top'){
                return postData?.top;
            }else{
                return postData?.recent;
            }
        }else{
            return postData?.category === category;
        }
    })

    return allPostsData.sort(({date: a},{date: b}) => {
        if(a < b){
            return 1;
        }else if( a > b){
            return -1;
        }else{
            return 0;
        }
    })
}

export function getAllPaths() {
    const fileNames = fs.readdirSync(postsDirPath);

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/,'')
            }
        }
    })
}

export async function getPostData(id){
    const fileContent = fs.readFileSync(postsDirPath + `/${id}.md`, 'utf8');

    const matterResult = matter(fileContent);

    const processedContent = await remark().use(html).process(matterResult.content.split('<!-- end -->')[1]);
    const contentHTML = processedContent.toString();

    return {
        id,
        ...matterResult.data,
        contentHTML
    }
}