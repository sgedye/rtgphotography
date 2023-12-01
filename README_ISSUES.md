# Troubleshooting

<https://github.com/msigwart/gatsby-source-google-calendar#troubleshooting>

## Plugin throws Error: invalid_grant ("source-google-photos: invalid_grant") error

- It is an issue authenticating with Google
- To fix remove the below three lines and run "yarn token" follow the prompts

If the plugin throw an invalid_grant error it means that the provided Google refresh token is invalid. While there may be a number of causes for this, here are some things you can try to resolve this issue:

- Ensure that the token is correct, i.e. your .env.* files don't include any accidental line breaks.
- Remove values for GOOGLE_ACCESS_TOKEN and GOOGLE_REFRESH_TOKEN and restart the authentication process.
- Revoke access to your Google Account for your app and restart the authentication process.
- If above doesn't help, set up a new OAuth2 client in the Google Console.

