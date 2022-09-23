# URL shortener

## Description

An URL shortener is a website that reduces the length of your URL (Uniform Resource Locator). The idea is to minimize the web page address into something that's easier to remember and track.

## Installation

First download the source code to your computer. Then move into the root project folder and run:

```node
npm install
```
After "npm install" finishes installing dependencies, then run:

```node
npm start
```
This command starts the project localy on http://localhost:3000/

## Usage

The image below shows the design of the site. Site consists of two main parts. The first part is the link input field where the user inputs a URL that needs to be shortened. The second part is the URL links list that the user has previously shortened.

![Website design](https://firebasestorage.googleapis.com/v0/b/url-shortener-f8328.appspot.com/o/phase1.PNG?alt=media&token=205f30b8-3b9d-447c-b676-45914bb9d5a3)

To shorten a URL link, the user must copy the link into the input field and click on the shorten button. This is shown in the image below.

![Website design](https://firebasestorage.googleapis.com/v0/b/url-shortener-f8328.appspot.com/o/phase2.PNG?alt=media&token=5e874ba6-66b9-42b5-b4ce-d5dd7f57d920)

After the user has clicked on the "Shorten" button, a card appears with the generated shorten link. The user can copy the link or click on the link.

![Website design](https://firebasestorage.googleapis.com/v0/b/url-shortener-f8328.appspot.com/o/phase3.PNG?alt=media&token=71ef7f13-d780-4f90-a2a9-7f28026e2f43)