# IGNITING OUR APP

```bash
Before going in production must do bundling,chunking,code spliting,Image Optimization,Compress,minify,Caching
```

#### CRA,VITE,YARN,NEXTJS ALREADY IGNITED

## WHAT IS NPM?

`NPM IS NOT A NODE PACKAGE MANAGER.npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.`

## What is ~(tilde) and caret(^)?

`Caret will update package to minor package for example 2.8.3 install then caret will update 2.8.4 because it is minor updated version. Tilde will update package to it is major version for example to 2.8.4 to 3.0.0 so it is bad always use caret.`

## What is package-lock.json?

`Keep Track exact version you installed and Which Package using another package inside like Parcel using some dependencies that will list in package-lock.json`

## What is transitive dependency?

`A transitive dependency refers to some dependencies depends on another dependencies.`

```bash
npx parcel index.html for build
npx parcel build index.html for production

and remove main from package.json
```

## What is difference between npm and npx?

`npx means executing package and npm means installing package.NPM is a package manager used to install, delete, and update Javascript packages on your machine. NPX is a package executer, and it is used to execute javascript packages directly, without installing them.`

## Why we not importing React from CDN?

`1. Fetching from CDN is a costly operation. 2.Making network request.`

## How Parcel make React app fast and why React is fast?

1.Development build

2.Local Browser( Create a Port to run application)

3.HMR (HOT MODULE REPLACEMENT) => After Saving Refresh

4.File Watching Algorithm( Written in c++)

5.Faster Build- Caching

6.Image Optimization

7.Minification

8.Bundling

9.Compressing

10.Consistent Hashing

11.Code splitting

12.Support Older Browser

13.Tree Shaking (Remove Unused Javascript)

14.Error Handling

15.HTTPs

16.Diagnostic

## What is Browserslist?

`You have to tell what browser will support your app`

## Difference between a Library and Framework?

`A library is a collection of packages that perform specific operations whereas a framework contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework. The framework provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a library is used, the application calls the code from the library.`
