# Steps to add a new album

1. Log in to Google Photos, create a new album (lowercase) and add your desired photos (the filenames are not important).
2. Still in Google Photos, choose an album cover this is used on the rtg-photography website (the background image are just random ones).
3. In `gatsby-config.js` add the new album to the `albumsTitles` array in the `gatsby-source-google-photos` plugin.
4. Run `yarn token` to get a new token - If you get a EPIPE issue, the tokens may have changed. Check on Google Console.
5. Run `yarn build` to build out the static files
6. Run `yarn serve` to confirm the new album is showing (optional)
7. Create the PR with these changes and merge to master (main)

TODO - Write a script to compare `/static` folder on AWS vs. in the local `/public` directory.
