# zquery

## About

Relational document-based database.
Includes indexes, filters, and sorting.

Data is auto-denormalized for you: relations between documents are copied data.

## Structure

- _ROOT_

    - /users _COLLECTION_
        - /29adsf1da _DOCUMENT_
            - name: Ken _FIELD_
            - age: 14 _FIELD_
            
            - /projects _SUB-COLLECTION_
                - /8a9d30bac _DOCUMENT-RELATION_ `/projects/8a9d30bac`
    
    - /projects _COLLECTION_
        - /8a9d30bac _DOCUMENT_
            - name: zquery _FIELD_
            - user: `/users/29adsf1da` _DOCUMENT-RELATION_

## Implementation

- Relations can either be entire documents or single fields
- Relations are denormalized data
    - You cannot have a relation to a collection
    - When the source changes, the relation will be automatically updated.
        - We need to keep track of the relations to a given source, inside of the source document
- When a document is queried, sub-collections are not returned. Only the document data and its relations to other documents are returned.
- You can query collections, and it will give you all of the documents underneath and their relations.
