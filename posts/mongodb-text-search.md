---
title: 'MongoDB Text Search'
date: '2022-10-08'
src: '/images/blog/japan.jpg'
alt: 'MongoDB Text Search'
top: false
recent: false
category: 'database'
---
MongoDB has gained immense popularity among technical
<!-- end -->
MongoDB has gained immense popularity among technical companies owing to its flexibility and easy usage. The internet has ample big data and complexities. A NoSQL document-oriented database like MongoDB efficiently handles and sorts all unstructured and complicated data. MongoDB version 2.4 introduced text indexes to search inside string content.

## What Is Text Search in MongoDB?

Text search is a MongoDB technique used to find a piece of text from the string fields. This query operation helps in finding a specific word from the string. One can perform a text search utilizing the text index and $text operator.

The text search employs stemming techniques while hunting for words. It drops stemming stop words such as a, an, the, and others. MongoDB supports over 15 languages and allows users to look for specific texts efficiently.

## What Is a Text Index?

A text index in MongoDB is used to find the specified text in a string content. It is either in the form of a string or an array of string elements. To perform a text search query, one must ensure that the collection contains only one text index covering multiple fields. You can use the createIndex() method to create a text index. 

Syntax:

`db.collectionName.createIndex( { field: “text” } )`

## What Is a $text Operator? 

Using a $text operator, one can search a text index. The operator enables text search operations on the collection with a text index. It tokenizes every search string with whitespace, treating most punctuations as delimiters except for – and \”. The operator then performs logical OR operations on the tokens. Using the $meta query operator, you can sort the resultant documents.  

Syntax:
```
$text:
{

     $search: <string>,

     $language: <string>,

     $caseSensitive: <boolean>,

     $diacriticSensitive: <boolean>

}
```

## How to Enable Text Search? 
When the feature was initially introduced on an experimental basis, it had to be enabled, but from version 2.6, it is enabled by default. Use the following steps to search texts in MongoDB. 

### Creating a Collection

Begin by creating a collection. Add a few documents to the collection. The following example considers a document under post collection. It contains post text and its tags.
```
db.posts.insert({

   "post_text": "learn mongodb with simplilearn",

   "tags": ["mongodb", "simplilearn"]

}

{

"post_text" : "mongodb detailed tutorials",

"tags" : [ "mongodb", "tutorial" ]

})

WriteResult({ "nInserted" : 1 })
```

### Creating a Text Index

Now create a text index on the post_text field to search inside the posts' text.

```
db.posts.createIndex({post_text:"text"})

{

"createdCollectionAutomatically" : true,

"numIndexesBefore" : 1,

"numIndexesAfter" : 2,

"ok" : 1

}
```

### How to Use a Text Index?

Once you have created the text index, search for all the posts having the word Simplilearn in their text.
```
db.posts.find({$text:{$search:"simplilearn"}}).pretty()

{

"_id" : ObjectId("5dd7ce28f1dd4583e7103fe0"),

"post_text" : "learn mongodb with simplilearn",

"tags" : [

"mongodb",

"simplilearn"

]

}
```
This command returns the following result with the word Simplilearn in the post text.
```
{

"_id" : ObjectId("53493d14d852429c10000002"),

"post_text" : "learn mongodb with simplilearn",

"tags" : [ "mongodb", "simplilearn" ]

}
```

### How to Delete a Text Index?

For deleting a text index, use the following query to find the name of the index:
```
db.posts.getIndexes()

[

{

"v" : 2,

"key" : {

"_id" : 1

},

"name" : "_id_",

"ns" : "mydb.posts"

},

{

"v" : 2,

"key" : {

"fts" : "text",

"ftsx" : 1

},

"name" : "post_text_text",

"ns" : "mydb.posts",

"weights" : {

"post_text" : 1

},

"default_language" : "english",

"language_override" : "language",

"textIndexVersion" : 3

}

]

>
```

On obtaining the name of the index, run the command given below to delete it. 

Note: “post_text_text” in the following command refers to the name of the index.
```
db.posts.dropIndex("post_text_text")

{ "nIndexesWas" : 2, "ok" : 1 }
```